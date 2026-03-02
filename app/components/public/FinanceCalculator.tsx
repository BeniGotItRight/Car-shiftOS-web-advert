"use client";

import { useState, useEffect } from "react";
import { Calculator, Info, Landmark, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

interface FinanceCalculatorProps {
  price: number;
}

export function FinanceCalculator({ price }: FinanceCalculatorProps) {
  const [downPayment, setDownPayment] = useState(Math.round(price * 0.2));
  const [term, setTerm] = useState(48); // months
  const [interestRate, setInterestRate] = useState(13.5); // %
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    
    if (principal <= 0) {
      setMonthlyPayment(0);
      return;
    }

    if (interestRate === 0) {
      setMonthlyPayment(principal / term);
      return;
    }

    const payment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / 
      (Math.pow(1 + monthlyRate, term) - 1);
    
    setMonthlyPayment(Math.round(payment));
  }, [price, downPayment, term, interestRate]);

  const downPaymentPercent = Math.round((downPayment / price) * 100);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-black tracking-tight">Finance Calculator</h3>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none mt-1">Estimate Monthly Payment</p>
          </div>
        </div>
        <div className="text-right">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Vehicle Price</p>
            <p className="text-xl font-black tabular-nums">KES {price.toLocaleString()}</p>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Down Payment Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              Down Payment <span className="text-xs font-medium text-slate-400">({downPaymentPercent}%)</span>
            </label>
            <span className="text-lg font-black text-slate-900 tabular-nums">KES {downPayment.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min={0} 
            max={price} 
            step={10000}
            value={downPayment}
            onChange={(e) => setDownPayment(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Grid for Rate and Term */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Interest Rate */}
            <div className="space-y-4">
               <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-700">Interest Rate</label>
                  <span className="text-lg font-black text-slate-900 tabular-nums">{interestRate}%</span>
               </div>
               <input 
                 type="range" 
                 min={5} 
                 max={25} 
                 step={0.5}
                 value={interestRate}
                 onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                 className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none"
               />
            </div>

            {/* Loan Term */}
            <div className="space-y-4">
               <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-700">Term (Months)</label>
                  <span className="text-lg font-black text-slate-900 tabular-nums">{term}m</span>
               </div>
               <div className="flex gap-2">
                  {[12, 24, 36, 48, 60].map((t) => (
                    <button 
                      key={t}
                      onClick={() => setTerm(t)}
                      className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                        term === t 
                        ? "bg-slate-900 text-white border-slate-900" 
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
               </div>
            </div>
        </div>

        {/* Result Area */}
        <div className="mt-10 pt-8 border-t border-slate-100">
           <div className="bg-indigo-50 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
              <div className="relative z-10 text-center sm:text-left mb-4 sm:mb-0">
                 <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-1">Estimated Monthly Payment</p>
                 <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                   <span className="text-4xl font-black text-slate-950 tabular-nums">KES {monthlyPayment.toLocaleString()}</span>
                   <span className="text-slate-500 font-bold text-sm">/ month</span>
                 </div>
              </div>
              
              <div className="relative z-10">
                 <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-indigo-100">
                    <Landmark className="w-4 h-4 text-indigo-500" />
                    <span className="text-xs font-bold text-slate-700">Available via Partner Banks</span>
                 </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
           </div>
           <p className="mt-4 text-[10px] text-slate-400 font-medium leading-relaxed text-center sm:text-left">
              * This is an estimate for information purposes only. Final rates and terms are subject to credit approval and bank policies. Term length and down payment significantly impact your monthly commitment.
           </p>
        </div>
      </div>
    </div>
  );
}
