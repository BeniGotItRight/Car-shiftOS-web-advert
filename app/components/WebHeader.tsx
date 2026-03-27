"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function WebHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Check if we are on the home page hero section
  const isHomePage = pathname === "/";
  // The threshold when the header switches from transparent to solid/glass
  const scrollThreshold = 50;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > scrollThreshold);
  });

  // Calculate classes based on scroll state and current page
  // On home page, start transparent with white text, then switch to glass with black text
  // On other pages, always be glass with black text
  const isTransparent = isHomePage && !isScrolled;
  
  const headerClass = twMerge(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
    isTransparent 
      ? "bg-transparent py-8" 
      : "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl py-4"
  );

  const textClass = twMerge(
    "transition-colors duration-500",
    "text-white"
  );

  const mutedTextClass = twMerge(
    "transition-colors duration-500",
    isTransparent ? "text-white/70 hover:text-white" : "text-slate-400 hover:text-white"
  );

  return (
    <header className={headerClass}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
        <Link href="/" className="inline-flex items-center transition-transform active:scale-95">
          <img 
            src="/assets/carshiftos-logo.png" 
            alt="Car ShiftOS" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>
        
        <div 
          className="hidden md:flex flex-wrap items-center gap-2 sm:gap-4 relative z-10"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={twMerge("relative px-5 py-2.5 text-base font-medium tracking-wide rounded-full transition-all duration-300")}
                onMouseEnter={() => setHoveredLink(link.name)}
              >
                <span className={isActive ? textClass : mutedTextClass}>
                  {link.name}
                </span>

                {/* Hover Background animated using LayoutId */}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="header-hover"
                    className={twMerge(
                      "absolute inset-0 -z-10 rounded-full",
                      "bg-white/5"
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                
                {/* Active Underline Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="header-active-underline"
                    className={twMerge(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-6 rounded-t-full",
                      "bg-white"
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden relative z-[60]">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={twMerge("p-2 rounded-xl bg-white/5 border border-white/10 transition-all active:scale-95", textClass)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-[49] bg-slate-950/40 backdrop-blur-sm"
              />
              
              {/* Sidebar Tray */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 200 }}
                className="fixed top-0 right-0 z-50 w-[85%] max-w-sm h-full bg-slate-900/90 backdrop-blur-2xl flex flex-col p-8 pt-32 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] border-l border-white/10"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]" />
                
                <div className="flex flex-col gap-6 relative z-10">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={twMerge(
                            "text-3xl sm:text-4xl font-black tracking-tighter transition-all py-2 block",
                            isActive ? "text-blue-500" : "text-white/80 hover:text-white"
                          )}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-auto relative z-10 pb-12 border-t border-white/10 pt-12">
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500 mb-4">
                    ShiftOS Platform
                  </p>
                  <div className="flex flex-col gap-4">
                     <Link href="mailto:carshiftos@gmail.com" className="text-xl font-medium text-white decoration-blue-500/30 underline underline-offset-8">
                       carshiftos@gmail.com
                     </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
