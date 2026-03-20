'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import ProjectSection from '@/components/ProjectSection';
import FAQSection from '@/components/FAQSection';

import { useContact } from '@/context/ContactContext';

export default function AIIntegrationPage() {
  const { openContact } = useContact();

  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Section 1: Header */}
        <section className="px-6 md:px-12 mb-32">
          <h1 className="text-[10vw] md:text-[8vw] font-thin uppercase leading-none tracking-tighter mb-16">
            AI<br />Integration
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div className="relative aspect-video bg-zinc-900 border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black uppercase tracking-widest text-xs">
                {/* Image Placeholder */}
              </div>
            </div>

            <div className="lg:pl-15 lg:pt-37">
              <p className="text-xl md:text-2xl font-base leading-tight opacity-90 max-w-xl">
                We empower your business with cutting-edge Artificial Intelligence 
                integrated directly into your core workflows. From Large Language Models 
                to predictive analytics, we turn data into your most valuable asset.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Specialization & CTA */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10 bg-zinc-950/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-base leading-tight mb-16 tracking-tight">
              Our agency, Redstone, specializes in cognitive engineering,
              creating intelligent systems and providing AI-driven business transformations.
              We build AI solutions tailored to your operational goals to effectively
              automate processes, enhance decision-making,
              and drive innovation. Our goal is to ensure your
              enterprise becomes an intelligent leader in its field.
            </h2>

            <div className="flex justify-center">
              <button
                onClick={openContact}
                className="group flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                UNLEASH AI POWER
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

        {/* Section 3: Why AI Integration? */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10">
          <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-tight mb-20 max-w-3xl leading-none">
            THE COMPETITIVE EDGE OF ARTIFICIAL INTELLIGENCE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Step 01 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                01
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Process Automation
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Identify and automate repetitive cognitive tasks, freeing up your human capital for creative problem-solving and high-level strategy.
              </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                02
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Predictive Analytics
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Move from reactive to proactive. Leverage machine learning models to forecast trends, customer behavior, and potential operational bottlenecks.
              </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                03
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Natural Language
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Implement state-of-the-art LLMs to understand and generate human-like text, powering advanced search, content generation, and customer support.
              </p>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                04
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Data Monetization
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Unlock the hidden value in your unstructured data. AI helps you extract insights and build new revenue streams from Information you already possess.
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
                  <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 15V9" />
                  <path d="M15 15h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-none">
                LLM<br />Finetuning
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                We specialize in adapting large-scale base models to your specific domain, ensuring high accuracy and brand-consistent language output.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Process Automation
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                We build intelligent agents that handle complex document processing, automated categorization, and intelligent routing across your enterprise.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-9-9c4.97 0 9 4.03 9 9Z" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Data Insights
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                Discover deep patterns in your data using specialized neural networks and machine learning models built for high-dimensional discovery.
              </p>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col border-l border-r border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Intelligent Agents
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                We deploy advanced conversational AI and support agents that provide personalized, high-context assistance to your users and staff.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Projects */}
        <ProjectSection
          projectTitle="NEURAL SYNC"
          projectSubtitle="AI AUTOMATION"
          description="Integrating advanced LLMs into customer support workflows. Reduced response times by 80% through intelligent ticket routing and automated high-quality drafting, allowing teams to handle 5x more volume with better precision."
          image="/client2.png"
          tag="ARTIFICIAL INTELLIGENCE"
        />

        {/* Section 6: FAQs */}
        <FAQSection
          onContactClick={openContact}
          faqs={[
            { q: "What kind of AI models do you integrate?", a: "We work with state-of-the-art LLMs (like GPT-4 and Claude), computer vision models, and custom predictive analytics systems." },
            { q: "How do you ensure data privacy when using AI?", a: "We implement secure, private VPC environments and data anonymization layers to ensure your sensitive business data never leaks." },
            { q: "Can AI help automate our customer support?", a: "Yes, we build intelligent agents that can handle up to 80% of routine inquiries with human-level accuracy and brand-consistent voice." },
            { q: "Do you provide finetuning for custom data?", a: "Absolutely. We specialize in adapting base models to your specific domain knowledge and proprietary datasets for maximum relevance." }
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
                  onClick={openContact}
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
