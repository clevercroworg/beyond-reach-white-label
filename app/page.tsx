"use client";

import React, { useState } from "react";
import "./lp.css";

// LP Components
import HeroSection from "@/components/lp/HeroSection";
import LogoMarquee from "@/components/lp/LogoMarquee";
import PerformanceExperts from "@/components/lp/PerformanceExperts";
import SuccessStories from "@/components/lp/SuccessStories";
import PricingSection from "@/components/lp/PricingSection";
import FaqSection from "@/components/lp/FaqSection";
import ClientReviews from "@/components/lp/ClientReviews";
import CallbackModal from "@/components/lp/CallbackModal";

// Data
import { metaAdsData } from "@/data/meta-ads-data";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="landing-page-container">
      <div className="site-shell">
        <main id="top">
          <HeroSection data={metaAdsData.hero} />
          <LogoMarquee />
          <PricingSection data={metaAdsData.pricing} />
          <PerformanceExperts />
          <SuccessStories 
            data={metaAdsData.caseStudies} 
            title="Success Stories by Platform"
            subtitle="Proven performance across Meta, Facebook, and Instagram."
            filterBy="platform"
          />
          <FaqSection data={metaAdsData.faqs} />
          <ClientReviews />
        </main>
      </div>

      <CallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
