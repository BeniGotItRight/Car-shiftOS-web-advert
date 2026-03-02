"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Get in <span className="text-blue-500">Touch.</span>
          </h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Whether you're looking to scale your dealership or have questions about our architecture, our team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl flex items-start gap-6 group hover:border-blue-500/20 transition-all"
            >
              <div className="size-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="size-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">Direct Communication</h2>
                <p className="text-slate-500 font-light mb-4 text-sm uppercase tracking-widest">Email Enquiries</p>
                <a href="mailto:carshiftos@gmail.com" className="text-xl font-medium text-white hover:text-blue-400 transition-colors">
                  carshiftos@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl flex items-start gap-6 group hover:border-blue-500/20 transition-all"
            >
              <div className="size-14 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Globe className="size-6 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">Global Presence</h2>
                <p className="text-slate-500 font-light mb-4 text-sm uppercase tracking-widest">Based in Nairobi</p>
                <p className="text-xl font-medium text-white">
                  Industrial Area, Enterprise Road
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl flex items-start gap-6 group hover:border-blue-500/20 transition-all"
            >
              <div className="size-14 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="size-6 text-purple-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">Phone Line</h2>
                <p className="text-slate-500 font-light mb-4 text-sm uppercase tracking-widest">Support Hours: 24/7</p>
                <p className="text-xl font-medium text-white">
                  0732009268
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-[3rem] bg-slate-900/20 border border-white/5 backdrop-blur-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-slate-700 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-slate-700 font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                <select className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white font-medium appearance-none">
                  <option>Platform Deployment</option>
                  <option>Custom Feature Request</option>
                  <option>Partnership Inquiry</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your dealership..."
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-slate-700 font-medium resize-none"
                />
              </div>

              <button className="w-full group relative flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all overflow-hidden active:scale-[0.98]">
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-tight">
                  Send Message <Send className="size-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              
              <p className="text-[10px] text-center text-slate-600 uppercase tracking-[0.2em] font-bold mt-4">
                Note: All platform deployments require signed legal agreements and physical documentation for compliance.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
