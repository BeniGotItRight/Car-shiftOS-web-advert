"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Globe } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Platform Deployment",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:carshiftos@gmail.com?subject=${encodeURIComponent(formData.subject)} - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 md:pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter">
            Deploy the <span className="text-blue-500">Best Car Yard System</span> in Kenya.
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
            Ready to dominate the Kenyan automotive market? Contact the ShiftOS team today to scale your dealership with high-fidelity security assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-start gap-6 group hover:border-blue-500/20 transition-all"
            >
              <div className="size-12 sm:size-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
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
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-start gap-6 group hover:border-blue-500/20 transition-all"
            >
              <div className="size-12 sm:size-14 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
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
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl flex flex-col sm:flex-row items-start gap-6 group hover:border-blue-500/20 transition-all"
            >
              <div className="size-12 sm:size-14 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
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
            className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-slate-900/20 border border-white/5 backdrop-blur-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-slate-700 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-slate-700 font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white font-medium appearance-none"
                >
                  <option>Platform Deployment</option>
                  <option>Custom Feature Request</option>
                  <option>Partnership Inquiry</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your dealership..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-slate-700 font-medium resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full group relative flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all overflow-hidden active:scale-[0.98]"
              >
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
