import type { Metadata } from "next";
import Link from "next/link";
// Removed unused Image and Rocket imports
import { MousePointerClick, Gauge, BarChart3, Megaphone, Infinity, LineChart, PieChart, PhoneCall, Tags, Briefcase, LayoutGrid, ChevronDown, Rocket, ShieldCheck, Zap, Target, MonitorPlay, Database, TrendingUp, Activity, Building2 } from "lucide-react";
import MarketImpactAccordion from "@/components/lp/MarketImpactAccordion";
import ClientSnapshotsAccordion from "@/components/lp/ClientSnapshotsAccordion";
// Force rebuild to fix Turbopack reference error

export const metadata: Metadata = {
  title: "Expert US Healthcare Digital Marketing & PPC Agency | BEYOND REACH",
  description:
    "We provide specialized performance marketing, PPC, and HIPAA-compliant tracking for US healthcare and rehab centers. Maximize ROI with our white-label agency team.",
  keywords: [
    "US healthcare digital marketing",
    "behavioral health PPC",
    "rehab marketing agency",
    "white-label PPC delivery partner",
    "HIPAA-compliant tracking",
    "medical conversion rate optimization",
  ],
};

export default function HealthcareDigitalMarketingExpertise() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section matching Meta Ads style */}
      <section className="relative overflow-hidden bg-[#040817] min-h-[100svh] pt-24 pb-12 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36 text-white flex items-start lg:items-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#040817] via-[#0A122E] via-40% to-[#0F1C4A] opacity-95"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-blue-500/20 to-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse"></div>
        
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 w-full">
          {/* THE GRID NOW WRAPS BOTH LEFT CONTENT AND RIGHT FORM */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-[420px]:gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-5 sm:space-y-6 lg:space-y-8 relative">
              <div>
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2.5 text-xs min-[420px]:text-sm sm:text-sm font-bold text-[#FFC72C] mb-4 sm:mb-6 tracking-wide">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <span className="text-white/30">/</span>
                  <span className="hover:text-white transition-colors cursor-default">Industries</span>
                  <span className="text-white/30">/</span>
                  <span className="text-white">Health Care</span>
                </div>

                <div className="grid grid-cols-[auto_auto] justify-start gap-x-2 gap-y-2 min-[420px]:gap-x-3 min-[420px]:gap-y-3 mb-3 sm:mb-4 max-w-xl">
                  <span className="inline-flex w-fit items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 min-[420px]:px-4 min-[420px]:py-2.5 rounded-full bg-white/[0.08] border border-white/10 text-[11px] min-[420px]:text-[13px] sm:text-sm lg:text-base font-bold text-white backdrop-blur-xl shadow-md hover:bg-white/[0.08] hover:border-white/30 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all duration-300 ease-out whitespace-nowrap cursor-default">
                    <MousePointerClick className="w-3.5 min-[420px]:w-4 sm:w-[18px] lg:w-5 h-3.5 min-[420px]:h-4 sm:h-[18px] lg:h-5 text-[#FFC72C] shrink-0" />
                    PPC management
                  </span>
                  <span className="inline-flex w-fit items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 min-[420px]:px-4 min-[420px]:py-2.5 rounded-full bg-white/[0.08] border border-white/10 text-[11px] min-[420px]:text-[13px] sm:text-sm lg:text-base font-bold text-white backdrop-blur-xl shadow-md hover:bg-white/[0.08] hover:border-white/30 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all duration-300 ease-out whitespace-nowrap cursor-default">
                    <Gauge className="w-3.5 min-[420px]:w-4 sm:w-[18px] lg:w-5 h-3.5 min-[420px]:h-4 sm:h-[18px] lg:h-5 text-[#FFC72C] shrink-0" />
                    Optimization
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 min-[420px]:px-4 min-[420px]:py-2.5 rounded-full bg-white/[0.08] border border-white/10 text-[11px] min-[420px]:text-[13px] sm:text-sm lg:text-base font-bold text-white backdrop-blur-xl shadow-md hover:bg-white/[0.08] hover:border-white/30 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all duration-300 ease-out whitespace-nowrap cursor-default">
                    <BarChart3 className="w-3.5 min-[420px]:w-4 sm:w-[18px] lg:w-5 h-3.5 min-[420px]:h-4 sm:h-[18px] lg:h-5 text-[#FFC72C] shrink-0" />
                    Google Analytics
                  </span>
                </div>

                <h1 className="text-[28px] min-[390px]:text-[32px] min-[420px]:text-[36px] sm:text-5xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight relative z-10">
                  <span className="sm:whitespace-nowrap">Beyond Reach Health Care</span> <span className="block mt-2 bg-gradient-to-r from-[#FFC72C] via-amber-300 to-[#F59E0B] bg-clip-text text-transparent">White-Label Digital Marketing</span>
                </h1>

                <p className="text-sm min-[420px]:text-base sm:text-lg text-slate-100 font-medium max-w-2xl mt-3 sm:mt-6 leading-relaxed relative z-10">
                  Scale patient admissions with 15+ years of specialized expertise in US healthcare digital marketing, white-label behavioral health PPC, and HIPAA-compliant tracking.
                </p>

                <div className="grid grid-cols-2 gap-2 min-[420px]:gap-3 sm:gap-3 pt-4 sm:pt-6">
                  <div className="flex items-center gap-2 min-[420px]:gap-2.5 sm:gap-2.5 px-3 min-[420px]:px-3.5 sm:px-3.5 py-2 min-[420px]:py-2.5 sm:py-2.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[3]" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-[11px] min-[420px]:text-[13px] sm:text-sm lg:text-base font-bold text-slate-200 leading-tight">18+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 min-[420px]:gap-2.5 sm:gap-2.5 px-3 min-[420px]:px-3.5 sm:px-3.5 py-2 min-[420px]:py-2.5 sm:py-2.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[3]" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-[11px] min-[420px]:text-[13px] sm:text-sm lg:text-base font-bold text-slate-200 leading-tight">$200k/Monthly Spend Handled</span>
                  </div>
                  <div className="flex items-center gap-2 min-[420px]:gap-2.5 sm:gap-2.5 px-3 min-[420px]:px-3.5 sm:px-3.5 py-2 min-[420px]:py-2.5 sm:py-2.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[3]" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-[11px] min-[420px]:text-[13px] sm:text-sm lg:text-base font-bold text-slate-200 leading-tight">Dedicated Healthcare Expertise</span>
                  </div>
                  <div className="flex items-center gap-2 min-[420px]:gap-2.5 sm:gap-2.5 px-3 min-[420px]:px-3.5 sm:px-3.5 py-2 min-[420px]:py-2.5 sm:py-2.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[3]" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                    </div>
                    <span className="text-[11px] min-[420px]:text-[13px] sm:text-sm lg:text-base font-bold text-slate-200 leading-tight">Consistently Achieving 3.8x ROAS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative rounded-[28px] bg-[#0B1535]/85 border border-white/15 p-5 min-[420px]:p-8 sm:p-8 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_rgba(99,102,241,0.15)]">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFC72C]/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl min-[420px]:text-2xl sm:text-2xl font-black text-white tracking-tight">
                  Let&apos;s Scale Your <span className="text-[#FFC72C]">Healthcare Campaigns</span>
                </h3>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 min-[420px]:py-4 rounded-xl bg-white/[0.05] border border-white/12 text-white placeholder-slate-400 text-sm min-[420px]:text-base font-medium focus:outline-none focus:border-[#FFC72C] focus:ring-1 focus:ring-[#FFC72C] transition shadow-inner"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-gradient-to-r from-[#FFC72C] via-amber-400 to-[#F59E0B] py-3.5 min-[420px]:py-4 px-6 text-sm min-[420px]:text-base font-black text-slate-950 flex items-center justify-center gap-2 hover:shadow-[0_10px_25px_rgba(255,199,44,0.35)] hover:scale-[1.02] transition duration-200"
                >
                  Let&apos;s connect
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-1.5 animate-bounce opacity-60 hover:opacity-100 transition-opacity cursor-pointer z-20">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white/80" />
        </div>
      </section>

      {/* Skill Marquee Slide Show */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
      <div className="w-full bg-white border-b border-gray-100 overflow-hidden flex items-center">
        <div className="relative flex w-full max-w-full overflow-hidden mask-edges">
          {/* Fading edges */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee items-center gap-6 sm:gap-14 py-4 sm:py-6 pl-6 sm:pl-14 hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 sm:gap-14 shrink-0">
                {/* Google Ads */}
                <div className="group flex items-center gap-2 sm:gap-4 transition-all duration-300">
                  <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 transition-all group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] shrink-0">
                    <MousePointerClick className="h-5 w-5 sm:h-7 sm:w-7 text-[#4285F4] transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-600 transition-colors group-hover:text-gray-950">Google Ads</span>
                </div>
                {/* Meta Ads */}
                <div className="group flex items-center gap-2 sm:gap-4 transition-all duration-300">
                  <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 transition-all group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] shrink-0">
                    <Tags className="h-5 w-5 sm:h-7 sm:w-7 text-[#0668E1] transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-600 transition-colors group-hover:text-gray-950">Meta Ads</span>
                </div>
                {/* Performance Marketing */}
                <div className="group flex items-center gap-2 sm:gap-4 transition-all duration-300">
                  <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 transition-all group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] shrink-0">
                    <LineChart className="h-5 w-5 sm:h-7 sm:w-7 text-emerald-500 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-600 transition-colors group-hover:text-gray-950">Performance Marketing</span>
                </div>
                {/* Analytics */}
                <div className="group flex items-center gap-2 sm:gap-4 transition-all duration-300">
                  <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 transition-all group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] shrink-0">
                    <BarChart3 className="h-5 w-5 sm:h-7 sm:w-7 text-amber-500 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-600 transition-colors group-hover:text-gray-950">Analytics</span>
                </div>
                {/* CRO */}
                <div className="group flex items-center gap-2 sm:gap-4 transition-all duration-300">
                  <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 transition-all group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] shrink-0">
                    <Infinity className="h-5 w-5 sm:h-7 sm:w-7 text-indigo-500 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-600 transition-colors group-hover:text-gray-950">CRO</span>
                </div>
                {/* Sales */}
                <div className="group flex items-center gap-2 sm:gap-4 transition-all duration-300">
                  <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 transition-all group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] shrink-0">
                    <Briefcase className="h-5 w-5 sm:h-7 sm:w-7 text-green-500 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-600 transition-colors group-hover:text-gray-950">Sales</span>
                </div>
                {/* Attribution */}
                <div className="group flex items-center gap-2 sm:gap-4 transition-all duration-300">
                  <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 transition-all group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] shrink-0">
                    <Gauge className="h-5 w-5 sm:h-7 sm:w-7 text-purple-500 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-600 transition-colors group-hover:text-gray-950">Attribution</span>
                </div>
                {/* GTM strategies */}
                <div className="group flex items-center gap-2 sm:gap-4 transition-all duration-300">
                  <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 transition-all group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] shrink-0">
                    <LayoutGrid className="h-5 w-5 sm:h-7 sm:w-7 text-rose-500 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-gray-600 transition-colors group-hover:text-gray-950">GTM strategies</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


              <section className="min-h-[100svh] flex flex-col justify-center bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 w-full">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Our Healthcare &amp; Institutional Specialization</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We go beyond front-end metrics, implementing secure conversion tracking infrastructure to connect initial ad clicks directly to back-end CRM and admissions revenue.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-6 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Multi-Channel Paid Acquisition</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Advanced management across Google Ads (Search, Display, Video), Microsoft Ads, and Meta Ads (Custom/Lookalike Audiences, Dynamic Creative Optimization).
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <MonitorPlay className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">High-Impact Display Advertising</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Targeted display ad campaigns utilizing side-rail ads, banner placements, and high-impact on-page ad units across content networks to maximize brand visibility.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Advanced Tracking &amp; Attribution</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Deep expertise in Google Analytics 4 (GA4), Google Tag Manager (GTM), Meta Conversions API (CAPI), Server-Side Tracking, and offline CRM integration.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Conversion Rate Optimization (CRO)</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Rigorous A/B testing frameworks for ad creatives, landing page copy, and user experience flows. We have a proven history of elevating conversion rates from 1.5X to 3.8X.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Global Operations &amp; QA</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Rigorous QA standards, standardized reporting frameworks, and ongoing training for our mid-level and junior marketers to ensure exceptional campaign delivery and high client retention.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <PieChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Executive Analytics</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Custom Looker Studio dashboards, cohort analysis, and transparent C-suite performance reporting bridging marketing data with sales/business development goals.
                </p>
              </div>
            </div>
          </div>
                </div>
      </section>

      <section className="relative overflow-hidden min-h-[100svh] flex flex-col justify-center bg-[#040817] py-24 text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#040817] via-[#0A122E] via-40% to-[#0F1C4A] opacity-95"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 w-full">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Proven Track Record &amp; Case Studies</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              We leverage deep industry expertise to deliver scalable growth across specialized healthcare sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Behavioral Health Card */}
            <div className="bg-white/[0.03] rounded-2xl p-8 md:p-10 border border-white/10 flex flex-col gap-6 hover:bg-white/[0.08] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm">
              <div className="h-14 w-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <Activity className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">US Behavioral Health &amp; Addiction Treatment</h3>
              <p className="text-slate-300 leading-relaxed text-[17px]">
                We possess deep, specialized expertise navigating complex regulatory compliance frameworks, industry-specific advertising policies, and advanced third-party platform verification standards. We seamlessly manage LegitScript certification, restricted ad policies, and HIPAA-compliant tracking for luxury mental health programs, residential treatment centers, and detox facilities across the United States.
              </p>
            </div>

            {/* B2B Pharmacy Card */}
            <div className="bg-white/[0.03] rounded-2xl p-8 md:p-10 border border-white/10 flex flex-col gap-6 hover:bg-white/[0.08] hover:border-white/30 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm">
              <div className="h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Building2 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">B2B Long-Term Care Pharmacy &amp; Institutional Growth</h3>
              <p className="text-slate-300 leading-relaxed text-[17px]">
                Beyond Reach excels in institutional B2B lead generation, targeting healthcare administrators, directors of nursing, and facility decision-makers. We position and promote specialized closed-door long-term care pharmacy solutions—including eMAR integration, single/multi-dose blister card packaging, and 24/7 clinical support—for skilled nursing facilities, assisted living residences, and healthcare organizations.
              </p>
            </div>
          </div>
        {/* Detailed Case Studies Section */}
                </div>
      </section>

      <section className="min-h-[100svh] flex flex-col justify-center bg-white py-24 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 w-full">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Market Impact &amp; Results</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A snapshot of how we&apos;ve scaled admissions and lowered CPAs across diverse healthcare markets.
            </p>
          </div>

          <div><MarketImpactAccordion /></div>
        </div>
      </section>

      <section className="relative overflow-hidden min-h-[100svh] flex flex-col justify-center bg-[#040817] py-24 text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#040817] via-[#0A122E] via-40% to-[#0F1C4A] opacity-95"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="pb-8">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-10 text-center">Detailed Client Snapshots</h3>
            <div><ClientSnapshotsAccordion /></div>
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">The Beyond Reach Advantage</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-10">
            At Beyond Reach Health Care Digital Marketing, we bridge the gap between marketing, sales, and admissions. Driven by a dedicated leadership team that fosters a culture of continuous learning and operational excellence, we merge front-end media campaigns with back-end CRM systems to provide total transparency into your pipeline. Whether scaling a national healthcare brand, launching a new regional treatment facility, or securing B2B institutional partnerships, we deliver the strategy, the execution, and the measurable results your organization needs to scale.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center bg-white py-16 text-slate-900 border-t border-slate-100">
        <div className="text-center max-w-3xl mx-auto px-4 w-full">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FFC72C] via-amber-400 to-[#F59E0B] text-slate-950 font-black text-lg shadow-[0_10px_25px_rgba(255,199,44,0.35)] hover:scale-[1.02] transition-transform"
          >
            Let&apos;s identify one project to test the workflow
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}