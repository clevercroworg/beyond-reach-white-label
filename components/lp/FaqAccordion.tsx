"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from './ServicePageLayout';

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:border-slate-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
          >
            <h3 className="text-lg font-bold text-slate-900 pr-4">{faq.question}</h3>
            <ChevronDown 
              className={`w-6 h-6 text-slate-400 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="p-6 pt-0 border-t border-slate-100">
              <p className="text-slate-600 leading-relaxed mt-4">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
