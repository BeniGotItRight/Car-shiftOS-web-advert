"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const DISMISS_KEY = "shiftos-sticky-bar-dismissed";

export function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    setDismissed(false);

    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, "1");
  };

  if (dismissed) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-[52px] bg-[#0a0f1e]/95 backdrop-blur-md border-b border-blue-900 flex items-center justify-between gap-4 px-4 sm:px-6 transition-transform duration-300 ease-out ${
        visible ? "translate-y-[74px] md:translate-y-[80px]" : "-translate-y-full"
      }`}
    >
      <p className="text-white text-xs sm:text-sm font-medium truncate">
        Ready to shift your car yard into high gear?
      </p>
      <div className="flex items-center gap-2 shrink-0">
        <Link
          href="/contact"
          className="px-3 sm:px-4 py-1.5 rounded-lg bg-blue-500 text-white text-xs sm:text-sm font-bold hover:bg-blue-400 transition-colors"
        >
          Get Started
        </Link>
        <Link
          href="/contact"
          className="hidden sm:inline-flex px-4 py-1.5 rounded-lg border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
        >
          Request Demo
        </Link>
        <button
          onClick={handleDismiss}
          aria-label="Dismiss"
          className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
