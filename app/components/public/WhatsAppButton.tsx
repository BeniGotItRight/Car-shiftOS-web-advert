"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * WhatsAppButton
 * A premium floating action button that opens a WhatsApp chat.
 * Dynamically adjusts its message based on the current page.
 */
export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const pathname = usePathname();
  
  // Configuration
  const WHATSAPP_NUMBER = "0732009268"; 
  const COMPANY_NAME = "Car ShiftOS";

  useEffect(() => {
    // Show tooltip after a short delay to grab attention
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const getWhatsAppUrl = () => {
    const message = `Hi ${COMPANY_NAME}! I'm interested in the ShiftOS system.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="relative bg-white rounded-2xl shadow-2xl p-4 border border-emerald-100 max-w-[200px]"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 size-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200"
            >
              <X className="size-3" />
            </button>
            <p className="text-xs font-bold text-slate-800 leading-relaxed">
              Need help? Chat with our <span className="text-emerald-600">Concierge</span> on WhatsApp!
            </p>
            <div className="absolute right-4 -bottom-2 w-4 h-4 bg-white border-r border-b border-emerald-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group flex items-center justify-center size-14 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 hover:bg-emerald-600 transition-colors"
        onMouseEnter={() => setShowTooltip(false)}
      >
        <MessageCircle className="size-7 fill-white/20" />
        
        {/* Pulsing notification ring */}
        <div className="absolute inset-0 rounded-full border-4 border-emerald-500 animate-ping opacity-20 pointer-events-none" />
        
        {/* Label on hover */}
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Chat With Us
        </span>
      </motion.a>
    </div>
  );
}
