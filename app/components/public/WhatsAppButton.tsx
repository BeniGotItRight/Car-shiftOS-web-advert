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
    <div className="fixed bottom-8 right-8 z-[70] flex flex-col items-end gap-4">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.2)] p-4 border border-emerald-500/20 max-w-[220px]"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 size-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-slate-700 transition-colors"
            >
              <X className="size-3" />
            </button>
            <p className="text-sm font-bold text-white leading-relaxed">
              Ready to <span className="text-emerald-400 italic">shift</span> your business? Chat with our Concierge.
            </p>
            <div className="absolute right-6 -bottom-2 w-4 h-4 bg-slate-900 rotate-45 border-r border-b border-emerald-500/20" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="relative group flex items-center gap-3"
      >
        <div className="absolute inset-0 bg-emerald-500 blur-[20px] opacity-40 group-hover:opacity-60 transition-opacity rounded-full" />
        
        <div className="relative flex items-center justify-center size-16 rounded-full bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-500">
          <MessageCircle className="size-8 fill-white/10" />
          
          {/* Pulsing notification ring */}
          <div className="absolute inset-0 rounded-full border-4 border-emerald-400 animate-ping opacity-30 pointer-events-none" />
        </div>

        {/* Premium Label - always visible on desktop, stylish */}
        <div className="hidden md:flex flex-col items-end">
          <span className="bg-slate-950/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] border border-white/5 shadow-2xl group-hover:border-emerald-500/50 transition-all">
            Let's <span className="text-emerald-500">Chat</span>
          </span>
        </div>
      </motion.a>
    </div>
  );
}
