"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const CONSENT_KEY = "shiftos-cookie-consent";
const REOPEN_EVENT = "open-cookie-preferences";

type ConsentChoice = {
  analytics: boolean;
  marketing: boolean;
};

declare global {
  interface Window {
    dataLayer?: unknown[][];
  }
}

function pushConsent(command: "default" | "update", choice: ConsentChoice) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push([
    "consent",
    command,
    {
      analytics_storage: choice.analytics ? "granted" : "denied",
      ad_storage: choice.marketing ? "granted" : "denied",
      ad_user_data: choice.marketing ? "granted" : "denied",
      ad_personalization: choice.marketing ? "granted" : "denied",
    },
  ]);
}

function readStoredChoice(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.analytics === "boolean" && typeof parsed.marketing === "boolean") {
      return { analytics: parsed.analytics, marketing: parsed.marketing };
    }
    return null;
  } catch {
    return null;
  }
}

function storeChoice(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ ...choice, timestamp: Date.now() }));
  } catch {
    // Private browsing / storage disabled — consent still applies for this
    // session via pushConsent, it just won't be remembered next visit.
  }
}

function BittenCookieIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <mask id="cookie-bite-mask">
        <rect width="64" height="64" fill="white" />
        <circle cx="50" cy="14" r="15" fill="black" />
      </mask>
      <circle cx="31" cy="33" r="27" fill="#D2A679" mask="url(#cookie-bite-mask)" />
      <circle cx="20" cy="26" r="3" fill="#6B4423" />
      <circle cx="33" cy="19" r="2.3" fill="#6B4423" />
      <circle cx="43" cy="33" r="3" fill="#6B4423" />
      <circle cx="20" cy="42" r="2.6" fill="#6B4423" />
      <circle cx="35" cy="45" r="3" fill="#6B4423" />
      <circle cx="26" cy="34" r="2" fill="#6B4423" />
    </svg>
  );
}

function Toggle({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative shrink-0 w-11 h-6 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${checked ? "bg-blue-600" : "bg-slate-900"} ${disabled ? "opacity-70" : ""}`}
    >
      <span
        className={`absolute top-0.5 size-5 rounded-full bg-white flex items-center justify-center transition-transform ${
          checked ? "translate-x-[22px]" : "translate-x-0.5"
        }`}
      >
        {checked ? (
          <Check className="size-3 text-blue-600" strokeWidth={3} />
        ) : (
          <X className="size-3 text-slate-900" strokeWidth={3} />
        )}
      </span>
    </button>
  );
}

export function CookieConsentBanner() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentChoice>({ analytics: true, marketing: true });

  useEffect(() => {
    const stored = readStoredChoice();
    if (stored) {
      pushConsent("update", stored);
    } else {
      setOpen(true);
    }

    const reopen = () => {
      setDraft(readStoredChoice() ?? { analytics: true, marketing: true });
      setExpanded(true);
      setOpen(true);
    };
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  const choose = (choice: ConsentChoice) => {
    pushConsent("update", choice);
    storeChoice(choice);
    setOpen(false);
    setExpanded(false);
    setDetailsOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm z-[60]"
          role="dialog"
          aria-label="Cookie preferences"
        >
          <div className="rounded-3xl bg-white shadow-2xl shadow-black/30 p-7 text-center">
            {!expanded ? (
              <>
                <BittenCookieIcon className="size-12 mx-auto mb-3" />
                <h2 className="text-xl font-bold text-slate-900 mb-3">Can we use cookies?</h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  We use cookies for site analytics and to measure how our ads perform. You can change your choice anytime from the footer.
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <button
                    type="button"
                    onClick={() => choose({ analytics: true, marketing: true })}
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Yes
                    <Check className="size-4" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    onClick={() => choose({ analytics: false, marketing: false })}
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    No
                    <X className="size-4" strokeWidth={3} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
                >
                  Customise
                  <ArrowRight className="size-3.5" />
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-slate-900 mb-5">Customise your preferences</h2>
                <div className="space-y-4 mb-5 text-left">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-slate-900">Necessary</span>
                      <Toggle checked disabled />
                    </div>
                    <AnimatePresence>
                      {detailsOpen && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-xs text-slate-500 leading-relaxed mt-2 overflow-hidden"
                        >
                          Required to use certain features of the site, like remembering that you accepted this policy.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-slate-900">Analytics &amp; performance</span>
                      <Toggle
                        checked={draft.analytics}
                        onChange={() => setDraft((d) => ({ ...d, analytics: !d.analytics }))}
                      />
                    </div>
                    <AnimatePresence>
                      {detailsOpen && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-xs text-slate-500 leading-relaxed mt-2 overflow-hidden"
                        >
                          Lets us see which pages people visit and how the site is used, so we can improve it.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-slate-900">Marketing</span>
                      <Toggle
                        checked={draft.marketing}
                        onChange={() => setDraft((d) => ({ ...d, marketing: !d.marketing }))}
                      />
                    </div>
                    <AnimatePresence>
                      {detailsOpen && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-xs text-slate-500 leading-relaxed mt-2 overflow-hidden"
                        >
                          Used to measure ad performance and personalise the ads you see elsewhere.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => choose(draft)}
                  className="w-full flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Save preferences
                  <Check className="size-4" strokeWidth={3} />
                </button>

                <button
                  type="button"
                  onClick={() => setDetailsOpen((d) => !d)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
                >
                  {detailsOpen ? "Hide details" : "Expand details"}
                  {detailsOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(REOPEN_EVENT));
}
