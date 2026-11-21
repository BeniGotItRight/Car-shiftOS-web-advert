"use client";

import Link from "next/link";

/** Row height is a CSS custom property (--cta-row-h, defined responsively
 * in globals.css: smaller on mobile, full size from sm: up) rather than a
 * fixed JS constant, so the button shrinks to fit narrow screens without
 * needing separate mobile/desktop markup — every height here just reads
 * the same variable, so it can never drift out of sync across breakpoints. */
const ROW_HEIGHT = "var(--cta-row-h)";

function DemoArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <line x1="4" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M13 6 L19 12 L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Simple bar-chart + upward tick, standing in for a live dashboard preview. */
function DashboardPreviewIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <line x1="5" y1="19" x2="5" y2="13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="19" y1="19" x2="19" y2="11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 9 L10 4 L15 7 L20 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Original front-view car glyph for the default marketplace row. */
function FrontCarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 32" className={className} fill="none" aria-hidden="true">
      <line x1="20" y1="4" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M5 26 L7 16 Q9 9 15 9 L25 9 Q31 9 33 16 L35 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 26 H37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="20" x2="17" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="20" x2="20" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="23" y1="20" x2="23" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="21" r="2" fill="currentColor" />
      <circle cx="30" cy="21" r="2" fill="currentColor" />
      <path d="M6 26 a3 3 0 0 0 6 0" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 26 a3 3 0 0 0 6 0" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Original side-profile car glyph for the "View Cars" reveal row. */
function SideCarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 17 L6 10 Q8 7 13 7 L23 7 Q27 7 29 10 L33 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 17 H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="11" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="27" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="31" cy="13" r="1.6" fill="currentColor" />
    </svg>
  );
}

/**
 * Dark-neumorphic CTA with a two-row vertical scroll track. The anchor has
 * a fixed height + overflow:hidden; the track inside is exactly double
 * that height and holds both rows stacked. On hover the track translates
 * up by exactly one row height, so the default row slides out the top and
 * the reveal row rolls up into view — the button itself never resizes,
 * so this can never cause layout shift.
 */
function CTATrack({
  defaultRow,
  revealRow,
}: {
  defaultRow: React.ReactNode;
  revealRow: React.ReactNode;
}) {
  return (
    <div className="hero-cta__track flex flex-col" style={{ height: `calc(${ROW_HEIGHT} * 2)` }}>
      <div
        className="flex items-center justify-center gap-1.5 whitespace-nowrap px-4 text-sm font-bold sm:gap-2 sm:px-8 sm:text-lg"
        style={{ height: ROW_HEIGHT }}
      >
        {defaultRow}
      </div>
      <div
        className="flex items-center justify-center gap-1.5 whitespace-nowrap px-4 text-sm font-bold sm:gap-2 sm:px-8 sm:text-lg"
        style={{ height: ROW_HEIGHT }}
      >
        {revealRow}
      </div>
    </div>
  );
}

export function HeroCTAButtons() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none">
        <Link
          href="/contact"
          className="hero-cta relative block w-full overflow-hidden rounded-2xl sm:w-[300px]"
          style={{ height: ROW_HEIGHT }}
        >
          <CTATrack
            defaultRow={
              <>
                <span className="text-white">Request a Demo</span>
                <DemoArrowIcon className="size-4 text-[#5850EC] sm:size-5" />
              </>
            }
            revealRow={
              <>
                <DashboardPreviewIcon className="size-4 text-[#5850EC] sm:size-5" />
                <span className="text-blue-400">Contact Us</span>
                <DemoArrowIcon className="size-3.5 text-blue-400 sm:size-4" />
              </>
            }
          />
        </Link>

        <a
          href="https://cars.carshiftos.co.ke"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta relative block w-full overflow-hidden rounded-2xl sm:w-[300px]"
          style={{ height: ROW_HEIGHT }}
        >
          <CTATrack
            defaultRow={
              <>
                <FrontCarIcon className="size-6 shrink-0 text-[#F59E0B] sm:size-7" />
                <span className="text-white">Browse the Marketplace</span>
              </>
            }
            revealRow={
              <>
                <SideCarIcon className="size-6 shrink-0 text-[#F59E0B] sm:size-7" />
                <span className="text-[#f3c977]">View Cars →</span>
              </>
            }
          />
        </a>
      </div>
    </div>
  );
}
