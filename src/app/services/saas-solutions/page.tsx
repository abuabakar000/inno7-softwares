'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import ProjectSection from '@/components/ProjectSection';
import FAQSection from '@/components/FAQSection';
import { useContact } from '@/context/ContactContext';

export default function SaaSSolutionsPage() {
  const { openContact } = useContact();

  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Section 1: Header */}
        <section className="px-6 md:px-12 mb-32">
          <h1 className="text-[10vw] md:text-[8vw] font-thin uppercase leading-none tracking-tighter mb-16">
            SaaS<br />Solutions
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div className="relative aspect-video bg-zinc-900 border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black uppercase tracking-widest text-xs">
                {/* Image Placeholder */}
              </div>
            </div>

            <div className="lg:pl-15 lg:pt-37">
              <p className="text-xl md:text-2xl font-base leading-tight opacity-90 max-w-xl">
                We architect and build scalable Software-as-a-Service platforms that solve complex 
                business challenges. From multi-tenant infrastructure to flexible subscription 
                management, we provide the technical foundation for your digital product.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Specialization & CTA */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10 bg-zinc-950/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-base leading-tight mb-16 tracking-tight">
              Our agency, Redstone, specializes in SaaS product engineering,
              creating multi-tenant platforms and providing scalable digital solutions.
              We build architectures tailored to your growth strategy to effectively
              serve your global user base, enhance operational efficiency,
              and drive recurring revenue. Our goal is to ensure your
              SaaS becomes a powerful industry leader.
            </h2>

            <div className="flex justify-center">
              <button
                onClick={() => openContact()}
                className="group flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                SCALE YOUR VISION
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

        {/* Section 3: Why Build a SaaS? */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10">
          <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-tight mb-20 max-w-3xl leading-none">
            THE POWER OF A SCALABLE SAAS MODEL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Step 01 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                01
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Multi-tenant Architecture
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Serve thousands of customers from a single code base with isolated data environments, ensuring maximum resource efficiency and simplified maintenance.
              </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                02
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Subscription Engines
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Implement flexible pricing tiers, automated billing, and usage-based models that adapt to your customers' needs and maximize your LTV.
              </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                03
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Global Scalability
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Our SaaS platforms are designed for high availability and low latency across the globe, leveraging edge computing and robust cloud infrastructure.
              </p>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                04
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                API-First Approach
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Enable your customers and partners to build on top of your platform with comprehensive API ecosystems and developer tools.
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-none">
                Product<br />Strategy
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                We help you define your MVP, map the product roadmap, and identify the core value propositions that will drive SaaS growth.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Architecture Design
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                Our architects design multi-tenant systems with robust security, high performance, and seamless data isolation for every customer.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Subscription Models
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                We implement complex billing logic and automated subscription management that scales with your user base and pricing experiments.
              </p>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col border-l border-r border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                API Ecosystems
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                Extend your reach by building secure, well-documented REST or GraphQL APIs that allow for third-party integrations and developer innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Projects */}
        <ProjectSection
          projectTitle="REVENUE SKY"
          projectSubtitle="FINTECH PLATFORM"
          description="A multi-tenant billing engine for subscription-based businesses. Scalable architecture handling millions of transactions with real-time reporting and fraud detection."
          image="/client4.png"
          tag="FINTECH"
        />

        {/* Section 6: FAQs */}
        <FAQSection
          onContactClick={() => openContact()}
          faqs={[
            { q: "How do you handle multi-tenant data security?", a: "We implement robust data isolation layers at both the application and database levels to ensure customer privacy." },
            { q: "Can the platform scale to millions of users?", a: "Yes, our SaaS architectures are built on top of auto-scaling cloud infrastructure designed for global growth." },
            { q: "Do you support custom subscription models?", a: "We can implement anything from simple tiers to complex usage-based billing and enterprise contract management." },
            { q: "Can we integrate third-party APIs into the SaaS?", a: "Absolutely. We build API-first platforms that are designed for seamless integration with external services." }
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
