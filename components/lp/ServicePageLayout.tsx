import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import FaqAccordion from './FaqAccordion'; // We will create a generic one

export type ScopeItem = {
  feature: string;
  included: boolean;
  details?: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type CaseStudy = {
  challenge: string;
  solution: string;
  results: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

interface ServicePageLayoutProps {
  h1: string;
  directAnswer: React.ReactNode;
  primaryKeyword: string;
  heroCtaText?: string;
  
  // Sections
  whoIsThisFor: React.ReactNode;
  scopeItems: ScopeItem[];
  processSteps: ProcessStep[];
  caseStudy: CaseStudy;
  faqs: FaqItem[];
  
  // Custom Content Blocks (H2/H3 paragraphs to hit word counts)
  topContent?: React.ReactNode;
  midContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  
  // Schemas
  serviceSchema: string;
  faqSchema: string;
}

export default function ServicePageLayout({
  h1,
  directAnswer,
  primaryKeyword,
  heroCtaText = "Book a Partnership Call",
  whoIsThisFor,
  scopeItems,
  processSteps,
  caseStudy,
  faqs,
  topContent,
  midContent,
  bottomContent,
  serviceSchema,
  faqSchema
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden pt-24">
      {/* Schemas */}
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />}
      </head>

      {/* Hero Section */}
      <section className="bg-[#040817] text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">{h1}</h1>
          <div className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
            {directAnswer}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FFC72C] to-[#F59E0B] text-slate-950 font-black text-lg hover:scale-105 transition-transform w-full sm:w-auto">
              {heroCtaText} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-sm transition-all w-full sm:w-auto border border-white/10">
              Request White-Label Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Top Content (Word Count Buffer) */}
      {topContent && (
        <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          {topContent}
        </section>
      )}

      {/* Who is this for */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black mb-6 text-center">Who This Service Is For</h2>
          <div className="prose prose-lg prose-slate mx-auto">
            {whoIsThisFor}
          </div>
        </div>
      </section>

      {/* Scope Table */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black mb-10 text-center">Standard Delivery Scope</h2>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-6 font-bold text-slate-900">Feature / Deliverable</th>
                <th className="py-4 px-6 font-bold text-slate-900 text-center">Included</th>
                <th className="py-4 px-6 font-bold text-slate-900">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {scopeItems.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-semibold text-slate-800">{item.feature}</td>
                  <td className="py-4 px-6 text-center">
                    {item.included ? <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto" /> : <span className="text-slate-300">-</span>}
                  </td>
                  <td className="py-4 px-6 text-slate-600 text-sm">{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Midpoint CTA */}
        <div className="mt-12 text-center">
           <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-colors">
              Send Us Your Requirements
            </Link>
        </div>
      </section>

      {/* Mid Content */}
      {midContent && (
        <section className="py-16 md:py-24 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          {midContent}
        </section>
      )}

      {/* Process */}
      <section className="py-16 md:py-24 bg-[#040817] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black mb-12 text-center text-white">Our White-Label Delivery Process</h2>
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 flex items-center justify-center font-bold text-xl shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black mb-10 text-center">Real Agency Results</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">The Challenge</h3>
              <p className="text-slate-700">{caseStudy.challenge}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Our Execution</h3>
              <p className="text-slate-700">{caseStudy.solution}</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">The Impact</h3>
              <p className="text-emerald-900 font-medium">{caseStudy.results}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom Content */}
      {bottomContent && (
        <section className="py-16 md:py-24 bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate">
          {bottomContent}
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 md:py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black mb-10 text-center">Frequently Asked Questions</h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-[#040817] text-white text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-6">Ready to Scale Delivery Without Growing Payroll?</h2>
          <p className="text-xl text-slate-300 mb-10">Partner with your invisible digital marketing team in India today.</p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-gradient-to-r from-[#FFC72C] to-[#F59E0B] text-slate-950 font-black text-xl shadow-[0_10px_30px_rgba(255,199,44,0.3)] hover:scale-105 transition-transform w-full sm:w-auto">
            Book a Partnership Call
          </Link>
        </div>
      </section>

    </div>
  );
}
