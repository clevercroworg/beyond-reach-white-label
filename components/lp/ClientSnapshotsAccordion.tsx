"use client";

import React, { useState } from 'react';

const data = [
  {
    client: "Greenhouse Treatment Center",
    location: "Dallas, Texas",
    specialty: "Residential addiction &amp; luxury mental health",
    strategies: "High-volume Search/Display/PMax (Smart Bidding), GA4/GTM/CAPI, cohort analysis &amp; CRO.",
    results: "38+ admissions/mo; $5,200 CPA; $1.15M/mo in trackable revenue (5.8&times; ROAS)."
  },
  {
    client: "Stepping Stone Center for Recovery",
    location: "Florida",
    specialty: "Detox and residential outpatient care",
    strategies: "Local/regional PPC, Quality Score optimization, keyword match types, landing page CRO.",
    results: "Profitable 3.5x ROAS on core search campaigns."
  },
  {
    client: "Southeast Addiction Center",
    location: "Southeast US",
    specialty: "Facility admissions &amp; inbound patient acquisition",
    strategies: "Multi-layered Meta retargeting, GA4/GTM event mapping, source-level call attribution &amp; DNI.",
    results: "40% increase in qualified inbound helpline calls within 90 days."
  },
  {
    client: "Aton Center",
    location: "San Diego, California",
    specialty: "Trauma-informed &amp; holistic residential treatment",
    strategies: "PMax with value-based Smart Bidding, landing page trust signals A/B testing, full-funnel tracking.",
    results: "28% conversion rate improvement; 24% decrease in CPL."
  },
  {
    client: "Sabino Recovery",
    location: "Tucson, Arizona",
    specialty: "Trauma-informed &amp; holistic residential treatment",
    strategies: "PMax, Smart Bidding, full-funnel tracking, robust negative keyword and audience exclusion tactics.",
    results: "Contributed to the 28% conversion rate improvement and 24% CPL reduction."
  },
  {
    client: "Acqua Recovery",
    location: "Midway, Utah",
    specialty: "Luxury, mountain-view residential recovery",
    strategies: "Portfolio Bid Management, post-click user journey audits, CRM milestone linkage.",
    results: "Eliminated 30% of wasted ad spend by restructuring queries and refining geographic targeting."
  },
  {
    client: "Tranquility Woods",
    location: "Pasadena, Maryland",
    specialty: "Dual-diagnosis and addiction treatment",
    strategies: "Mid-Atlantic high-intent search, full-funnel tracking, bid optimization for high-converting dayparts.",
    results: "Reduced bounce rates through improved page load speeds and responsiveness."
  },
  {
    client: "Institutional B2B Pharmacy",
    location: "Greater Boston",
    specialty: "B2B Institutional Pharmacy Solutions",
    strategies: "Full-funnel digital media targeting healthcare administrators &amp; directors of nursing.",
    results: "Expanded market share and institutional reach; aligned initiatives with facility onboarding goals."
  },
  {
    client: "Enterprise Portfolio",
    location: "US Market",
    specialty: "Behavioral health and addiction treatment",
    strategies: "Managed 8 enterprise accounts via 16+ offshore team. LegitScript/HIPAA compliance across platforms.",
    results: "Strategized $200k+ monthly spend; drove 3.8X growth in patient admissions."
  },
];

export default function ClientSnapshotsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {data.map((item, index) => (
        <div 
          key={index} 
          className="bg-white/[0.03] rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
          >
            <div>
              <h4 className="text-lg font-bold text-white">{item.client}</h4>
              <p className="text-sm text-slate-400 mt-1">{item.specialty}</p>
            </div>
            <svg 
              className={`w-6 h-6 text-white/50 transition-transform duration-300 shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="p-6 pt-0 border-t border-white/10 mt-2">
              <div className="text-sm space-y-4 pt-4">
                <p><span className="font-semibold text-slate-300">Location:</span> {item.location}</p>
                <p><span className="font-semibold text-slate-300">Strategies:</span> {item.strategies}</p>
                
                <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <span className="font-bold text-emerald-400 block mb-1">Results</span>
                  <p className="text-slate-200 font-medium">{item.results}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
