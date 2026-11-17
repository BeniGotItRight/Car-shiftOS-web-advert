"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, ChevronDown, ChevronUp } from "lucide-react";

const CONSENT_KEY = "shiftos-cookie-consent";
const REOPEN_EVENT = "open-cookie-preferences";

type ConsentChoice = {
  analytics: boolean;
  advertising: boolean;
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
      ad_storage: choice.advertising ? "granted" : "denied",
      ad_user_data: choice.advertising ? "granted" : "denied",
      ad_personalization: choice.advertising ? "granted" : "denied",
    },
  ]);
}

function readStoredChoice(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.analytics === "boolean" && typeof parsed.advertising === "boolean") {
      return { analytics: parsed.analytics, advertising: parsed.advertising };
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

export function CookieConsentBanner() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [draft, setDraft] = useState<ConsentChoice>({ analytics: true, advertising: true });

  useEffect(() => {
    const stored = readStoredChoice();
    if (stored) {
      pushConsent("update", stored);
    } else {
      setOpen(true);
    }

    const reopen = () => {
      setDraft(readStoredChoice() ?? { analytics: true, advertising: true });
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
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-[60]"
          role="dialog"
          aria-label="Cookie preferences"
        >
          <div className="rounded-3xl border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="size-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Cookie className="size-4.5 text-blue-400" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white mb-1">We use cookies</h2>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  We use cookies for site analytics and advertising measurement. Choose what you&apos;re comfortable with — you can change this anytime from the footer.
                </p>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 mb-4 pt-1">
                    <label className="flex items-center justify-between gap-4 cursor-pointer">
                      <span className="text-xs text-slate-300">
                        <span className="font-semibold text-white block">Analytics</span>
                        Helps us see which pages people use.
                      </span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={draft.analytics}
                        onClick={() => setDraft((d) => ({ ...d, analytics: !d.analytics }))}
                        className={`relative shrink-0 w-10 h-6 rounded-full transition-colors ${
                          draft.analytics ? "bg-blue-500" : "bg-white/10"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 size-5 rounded-full bg-white transition-transform ${
                            draft.analytics ? "translate-x-[18px]" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    </label>
                    <label className="flex items-center justify-between gap-4 cursor-pointer">
                      <span className="text-xs text-slate-300">
                        <span className="font-semibold text-white block">Advertising</span>
                        Used to measure and personalise ads.
                      </span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={draft.advertising}
                        onClick={() => setDraft((d) => ({ ...d, advertising: !d.advertising }))}
                        className={`relative shrink-0 w-10 h-6 rounded-full transition-colors ${
                          draft.advertising ? "bg-blue-500" : "bg-white/10"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 size-5 rounded-full bg-white transition-transform ${
                            draft.advertising ? "translate-x-[18px]" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-wrap items-center gap-2">
              {expanded ? (
                <button
                  type="button"
                  onClick={() => choose(draft)}
                  className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Save preferences
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => choose({ analytics: true, advertising: true })}
                    className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    Accept all
                  </button>
                  <button
                    type="button"
                    onClick={() => choose({ analytics: false, advertising: false })}
                    className="flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    Reject all
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                className="flex items-center gap-1 px-2 py-2.5 text-[11px] font-medium text-slate-400 hover:text-white transition-colors"
              >
                {expanded ? "Simple" : "Customize"}
                {expanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(REOPEN_EVENT));
}
