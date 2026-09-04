"use client";

import React, { useState } from 'react';

const data = [
  {
    title: "Enterprise Behavioral Health Portfolio (US Market)",
    challenge: "Scale admissions and lower CPAs across a massive portfolio of major US-based rehabilitation facilities while adhering to strict LegitScript and HIPAA guidelines.",
    results: "Drove 3.8X growth in patient admissions and conversion output through advanced audience segmentation and aggressive bid optimization."
  },
  {
    title: "Enterprise Healthcare Acquisition (Dallas, TX)",
    challenge: "Scale residential addiction and luxury mental health admissions while maintaining strict CPA thresholds.",
    results: "Managed $200k+ monthly budget; Yielded $1.15M/month in trackable revenue with a 5.8x ROAS."
  },
  {
    title: "Regional Healthcare (FL &amp; Mid-Atlantic)",
    challenge: "Eliminate wasted ad spend and accelerate inbound patient acquisition in hyper-competitive regional markets.",
    results: "Drove a 40% increase in qualified inbound helpline calls within 90 days and achieved a 3.5x ROAS."
  },
  {
    title: "Holistic Treatment (CA, AZ &amp; UT)",
    challenge: "Improve funnel integrity and lower acquisition costs for high-CPC search auctions.",
    results: "Improved landing page conversion rates by 28% and decreased overall CPL by 24%."
  },
];

export default function MarketImpactAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {data.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:border-slate-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none"
          >
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 pr-4">{item.title}</h3>
            <svg 
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="p-6 sm:p-8 pt-0 border-t border-slate-100">
              <div className="space-y-4 mt-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">The Challenge</span>
                  <p className="text-slate-700 text-sm">{item.challenge}</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">The Results</span>
                  <p className="text-emerald-900 font-medium text-sm">{item.results}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
