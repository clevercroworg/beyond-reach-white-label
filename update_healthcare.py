import re

with open("app/Industries/healthcare-digital-marketing-expertise/page.tsx", "r") as f:
    content = f.read()

# Replace H1
content = re.sub(
    r'<span className="sm:whitespace-nowrap">Expert US Healthcare</span> <span className="block mt-2 bg-gradient-to-r from-\[\#FFC72C\] via-amber-300 to-\[\#F59E0B\] bg-clip-text text-transparent">Digital Marketing Agency</span>',
    r'<span className="sm:whitespace-nowrap">Beyond Reach Health Care</span> <span className="block mt-2 bg-gradient-to-r from-[#FFC72C] via-amber-300 to-[#F59E0B] bg-clip-text text-transparent">Digital Marketing</span>',
    content
)

# Update Contact Info in a new section right after Hero (or inside Hero)
# Actually, the user says "Header & Contact Info" - maybe add it above the breadcrumbs or in a dedicated section.
# Let's add a new section for "About & Expertise" after the form section
new_about_section = """
      {/* About & Expertise */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black mb-6">About Beyond Reach Health Care Digital Marketing</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Performance Marketing | Analytics | Conversion Rate Optimization | Advanced Attribution
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Contact Information</h3>
                <ul className="space-y-3 text-slate-700">
                  <li><strong>Point of Contact:</strong> Krishna Kalyanpura, co-founder & Lead Strategist</li>
                  <li><strong>Phone:</strong> +91 7892075905</li>
                  <li><strong>Email:</strong> krishna.digital.ads@gmail.com</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-black mb-6">Our Core Expertise</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Beyond Reach Health Care Digital Marketing is a premier performance marketing agency built on 18+ years of professional experience, with 15+ years of dedicated expertise specializing in high-performance digital marketing within the competitive US healthcare market. We specialize in strategizing, scaling, and managing complex paid acquisition channels, transforming them into predictable revenue engines for enterprise brands.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Having successfully managed over 50 client accounts across diverse healthcare and institutional verticals, our leadership has overseen monthly PPC budgets ranging from $2,000 to well over $200,000 per account. We operate with a highly skilled offshore execution team of 16+ digital marketing professionals based in India, seamlessly bridging cross-border workflows, optimizing resource allocation, and consistently meeting strict US deadlines to deliver maximum return on every advertising dollar spent.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black mb-8 text-center">Our Healthcare & Institutional Specialization</h2>
            <p className="text-lg text-slate-700 text-center max-w-4xl mx-auto mb-10">
              We go beyond front-end metrics, implementing secure conversion tracking infrastructure to connect initial ad clicks directly to back-end CRM and admissions revenue.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Multi-Channel Paid Acquisition", desc: "Advanced management across Google Ads (Search, Display, Video), Microsoft Ads, and Meta Ads (Custom/Lookalike Audiences, Dynamic Creative Optimization)." },
                { title: "High-Impact Display Advertising", desc: "Targeted display ad campaigns utilizing side-rail ads, banner placements, and high-impact on-page ad units across content networks to maximize brand visibility." },
                { title: "Advanced Tracking & Attribution", desc: "Deep expertise in Google Analytics 4 (GA4), Google Tag Manager (GTM), Meta Conversions API (CAPI), Server-Side Tracking, and offline CRM integration." },
                { title: "Conversion Rate Optimization (CRO)", desc: "Rigorous A/B testing frameworks for ad creatives, landing page copy, and user experience flows. We have a proven history of elevating conversion rates from 1.5X to 3.8X." },
                { title: "Global Operations & QA", desc: "Rigorous QA standards, standardized reporting frameworks, and ongoing training for our mid-level and junior marketers to ensure exceptional campaign delivery and high client retention." },
                { title: "Executive Analytics", desc: "Custom Looker Studio dashboards, cohort analysis, and transparent C-suite performance reporting bridging marketing data with sales/business development goals." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
"""

# Insert the new section after the hero section (which ends with </section>)
content = re.sub(
    r'(</section>)(\s*<section className="bg-slate-50 border-y border-slate-200")',
    r'\1\n' + new_about_section + r'\n\2',
    content,
    count=1
)

# Update "The Beyond Reach Advantage" at the bottom (replacing the final CTA text if possible)
# The final section was just a button. I'll add the Advantage text right above the CTA button.
new_advantage = """
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">The Beyond Reach Advantage</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-10">
            At Beyond Reach Health Care Digital Marketing, we bridge the gap between marketing, sales, and admissions. Driven by a dedicated leadership team that fosters a culture of continuous learning and operational excellence, we merge front-end media campaigns with back-end CRM systems to provide total transparency into your pipeline. Whether scaling a national healthcare brand, launching a new regional treatment facility, or securing B2B institutional partnerships, we deliver the strategy, the execution, and the measurable results your organization needs to scale.
          </p>
        </div>
      </section>
"""
content = re.sub(
    r'(<section className="flex flex-col justify-center bg-white py-16 text-slate-900 border-t border-slate-100">)',
    new_advantage + r'\n      \1',
    content
)

with open("app/Industries/healthcare-digital-marketing-expertise/page.tsx", "w") as f:
    f.write(content)

