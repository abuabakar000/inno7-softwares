'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import ProjectSection from '@/components/ProjectSection';
import FAQSection from '@/components/FAQSection';

import { useContact } from '@/context/ContactContext';

export default function CRMSystemsPage() {
  const { openContact } = useContact();

  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Section 1: Header */}
        <section className="px-6 md:px-12 mb-32">
          <h1 className="text-[10vw] md:text-[8vw] font-thin uppercase leading-none tracking-tighter mb-16">
            CRM<br />Systems
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div className="relative aspect-video bg-zinc-900 border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black uppercase tracking-widest text-xs">
                {/* Image Placeholder */}
              </div>
            </div>

            <div className="lg:pl-15 lg:pt-37">
              <p className="text-xl md:text-2xl font-base leading-tight opacity-90 max-w-xl">
                We design and implement custom CRM solutions that streamline your sales, 
                marketing, and support operations. Our data-driven platforms empower 
                your team with actionable insights and automated workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Specialization & CTA */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10 bg-zinc-950/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-base leading-tight mb-16 tracking-tight">
              Our agency, Redstone, specializes in custom CRM development,
              creating integrated management platforms and providing data-driven solutions.
              We build tools tailored to your business logic to effectively
              manage your customer relationships, enhance team productivity,
              and drive revenue. Our goal is to ensure your
              operations become a powerful engine for scaling.
            </h2>

            <div className="flex justify-center">
              <button
                onClick={openContact}
                className="group flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                OPTIMIZE YOUR FLOW
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Why Custom CRM? */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10">
          <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-tight mb-20 max-w-3xl leading-none">
            WHY DOES YOUR BUSINESS NEED A CUSTOM CRM?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Step 01 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                01
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Centralized Data
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Break down information silos by bringing all your customer data into a single, unified platform that serves as your single source of truth.
              </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                02
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Automated Workflows
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Eliminate manual tasks with custom automation that handles lead routing, email follow-ups, and data entry, allowing your team to focus on high-value activities.
              </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                03
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Advanced Analytics
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Gain deep insights into your business performance with custom dashboards and reporting tools that highlight trends and opportunities.
              </p>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                04
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Seamless Integrations
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Connect your CRM with the tools you already use, ensuring smooth data flow across your entire tech stack—from ERPs to marketing platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Capabilities Grid */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Column 1 */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-none">
                Data<br />Integration
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                We build specialized data pipelines that connect all your business units, ensuring a 360-degree view of every customer interaction.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Pipeline Management
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                Optimize your sales funnel with custom pipeline visualizations and tracking tools that help your team close deals faster and more effectively.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Reporting and BI
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                Turn your data into decisions with powerful Business Intelligence tools integrated directly into your custom CRM environment.
              </p>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col border-l border-r border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Workflow Automation
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                We automate repetitive processes, from lead generation and scoring to contract renewals and customer support ticketing.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Projects */}
        <ProjectSection
          projectTitle="NUXT FLOW"
          projectSubtitle="SaaS CRM"
          description="A custom-built CRM system for real-estate management. Automated lead tracking, intelligent reminders, and deep analytics integration to optimize sales performance."
          image="/client3.png"
          tag="ENTERPRISE"
        />

        {/* Section 6: FAQs */}
        <FAQSection
          onContactClick={openContact}
          faqs={[
            { q: "Can you migrate data from our existing CRM?", a: "Yes, we handle complex data migrations from legacy systems, ensuring data integrity and zero downtime." },
            { q: "Do you provide training for our sales team?", a: "Absolutely. We provide comprehensive onboarding sessions and documentation to ensure your team is productive from day one." },
            { q: "Is the CRM custom-built or platform-based?", a: "We build both fully custom CRMs and highly-specialized integrations on top of platforms like Salesforce and HubSpot." },
            { q: "Can the CRM integrate with our marketing tools?", a: "Yes, we specialize in building seamless connections between your CRM and marketing automation platforms." }
          ]}
        />

        {/* Section 7: Let's Move Together */}
        <section className="py-40 px-6 md:px-12 bg-black flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <h2 className="text-[10vw] md:text-[8vw] font-thin leading-none tracking-tight uppercase">
                  LET&apos;S MOVE
                </h2>
                <div className="relative w-[15vw] h-[8vw] md:w-[10vw] md:h-[6vw] overflow-hidden shadow-2xl">
                  <video
                    src="/hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h2 className="text-[10vw] md:text-[8vw] font-thin leading-none tracking-tight uppercase">
                THE WORLD TOGETHER
              </h2>
            </div>

            <div className="mt-24 flex items-center justify-center">
              <MagneticButton>
                <button
                  onClick={() => openContact()}
                  className="group relative flex items-center bg-white rounded-full p-2 pl-12 pr-2 overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
                >
                  <div className="relative h-6 overflow-hidden mr-6">
                    <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                      <span className="text-black text-lg font-bold uppercase tracking-[0.2em] h-6 flex items-center text-sm md:text-lg">
                        Become a client
                      </span>
                      <span className="text-black text-lg font-bold uppercase tracking-[0.2em] h-6 flex items-center text-sm md:text-lg">
                        Let&apos;s start
                      </span>
                    </div>
                  </div>

                  <div className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center overflow-hidden">
                    <div className="transition-transform duration-500 ease-out group-hover:translate-x-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>
                </button>
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
