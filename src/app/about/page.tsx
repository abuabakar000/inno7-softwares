"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PenTool, Monitor, Code2, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import AgencyButton from "@/components/AgencyButton";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [activeProjectStep, setActiveProjectStep] = useState(0);
  const processRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const handleProcessScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const index = Math.round(scrollLeft / (width * 0.8));
    setActiveProcessStep(Math.min(3, Math.max(0, index)));
  };

  const handleProjectScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const index = Math.round(scrollLeft / (width * 0.8)); 
    setActiveProjectStep(Math.min(2, Math.max(0, index)));
  };

  // Function to simulate contact modal open
  const openContact = () => {
    // In a real app, this would trigger the global contact context
    console.log("Opening contact modal...");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section (Replicated from Homepage) */}
      <main className="relative flex flex-col justify-center min-h-screen pt-20 px-0 md:px-12 overflow-hidden">

        <div className="flex flex-col">
          {/* Main Typography Area */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16 lg:gap-24 px-6 md:px-0">
            <h1 className="text-[12vw] md:text-[13vw] font-thin leading-[0.85] tracking-[-0.04em] uppercase whitespace-nowrap">
              BUILT
            </h1>
            <div className="hidden md:block relative w-[22vw] h-[13vw] lg:w-[18vw] lg:h-[10vw] overflow-hidden shadow-2xl border border-white/5 mt-2 md:mt-4 lg:mt-6 skew-x-[-2deg] hover:skew-x-0 transition-transform duration-700">
              <video
                src="/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-white/5 border border-white/10" />
            </div>
          </div>
          <h1 className="text-[12vw] md:text-[13vw] font-thin leading-[0.85] tracking-[-0.04em] uppercase px-6 md:px-0 mb-8">
            DIFFERENT.
          </h1>

          {/* Subtext and Mobile Layout */}
          <div className="md:hidden space-y-12">
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl bg-zinc-900 border border-white/5">
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
        </div>

        {/* Bottom Section - Adjusted Typography & Magnetic CTA */}
        <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 pb-12 transition-all px-6 md:px-0">
          <div className="max-w-xl">
            <p className="text-lg md:text-xl font-medium leading-tight text-zinc-400">
              We fuse AI with web to create unfair digital advantage, delivering systems built to think and win.
            </p>
          </div>
        </div>
      </main>

      {/* Solutions Section */}
      <section className="py-16 md:py-32 px-4 md:px-12 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Centered Heading - Final Mobile Calibration */}
          <div className="text-left mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-thin uppercase tracking-tight leading-[1.1] mb-6 md:mb-10 opacity-90 max-w-4xl">
              WEB SOLUTION DEVELOPMENT <br className="hidden md:block" /> FOR YOUR BUSINESS
            </h2>
          </div>
 
          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-24 md:gap-y-24 mb-16 px-0">
            {/* AUDIT */}
            <div className="flex flex-col gap-4 md:gap-6 group">
              <div className="relative h-[140px] sm:h-[180px] md:h-[220px] w-full overflow-hidden transition-all duration-700 select-none pointer-events-none">
                <Image 
                  src="/icon-advt-1.svg" 
                  alt="Audit Illustration" 
                  fill
                  className="object-contain object-left md:object-center"
                />
              </div>
              <div className="space-y-2 md:space-y-3 text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-tight">AUDIT</h3>
                <p className="text-xs sm:text-sm md:text-base font-light text-zinc-400 leading-relaxed max-w-md">
                  Cohesive digital audits that enrich every aspect of your business logic.
                </p>
              </div>
            </div>
 
            {/* DEVELOPMENT */}
            <div className="flex flex-col gap-4 md:gap-6 group">
              <div className="relative h-[140px] sm:h-[180px] md:h-[220px] w-full overflow-hidden transition-all duration-700 select-none pointer-events-none">
                <Image 
                  src="/icon-advt-2.svg" 
                  alt="Development Illustration" 
                  fill
                  className="object-contain object-left md:object-center"
                />
              </div>
              <div className="space-y-2 md:space-y-3 text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-tight">DEVELOPMENT</h3>
                <p className="text-xs sm:text-sm md:text-base font-light text-zinc-400 leading-relaxed max-w-md">
                  Maximum functionality and enjoyment in every line of code we ship.
                </p>
              </div>
            </div>
 
            {/* DESIGN */}
            <div className="flex flex-col gap-4 md:gap-6 group">
              <div className="relative h-[140px] sm:h-[180px] md:h-[220px] w-full overflow-hidden transition-all duration-700 select-none pointer-events-none">
                <Image 
                  src="/icon-advt-3.svg" 
                  alt="Design Illustration" 
                  fill
                  className="object-contain object-left md:object-center"
                />
              </div>
              <div className="space-y-2 md:space-y-3 text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-tight">DESIGN</h3>
                <p className="text-xs sm:text-sm md:text-base font-light text-zinc-400 leading-relaxed max-w-md">
                  Stunning interfaces tailored to your brand identity and user engagement.
                </p>
              </div>
            </div>
 
            {/* SUPPORT */}
            <div className="flex flex-col gap-4 md:gap-6 group">
              <div className="relative h-[140px] sm:h-[180px] md:h-[220px] w-full overflow-hidden transition-all duration-700 select-none pointer-events-none">
                <Image 
                  src="/icon-advt-4.svg" 
                  alt="Support Illustration" 
                  fill
                  className="object-contain object-left md:object-center"
                />
              </div>
              <div className="space-y-2 md:space-y-3 text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-tight">SUPPORT</h3>
                <p className="text-xs sm:text-sm md:text-base font-light text-zinc-400 leading-relaxed max-w-md">
                  Ongoing maintenance to keep your digital solutions performing flawlessly.
                </p>
              </div>
            </div>
          </div>
 
          {/* Centered Become a Client Button */}
          <div className="flex justify-start md:justify-center mt-12 px-0">
            <AgencyButton text="SHOW MORE PROJECTS" href="/portfolio" />
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section className="py-16 md:py-32 px-4 md:px-12 bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 md:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-thin uppercase tracking-tight leading-none opacity-90 text-white">
              MORE PROJECTS
            </h2>
            
            <div className="hidden md:flex">
              <AgencyButton text="SHOW MORE PROJECTS" href="/portfolio" />
            </div>
          </div>
 
          {/* Project Slider/Grid - Dynamic and responsive to scroll */}
          <div 
            ref={projectRef}
            onScroll={handleProjectScroll}
            className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-8 pb-4 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar group/slider"
          >
            <div className="min-w-[80vw] md:min-w-0 snap-center">
              <ProjectCard 
                title="THE GOOD BURGER"
                category="Restaurant"
                tags={["React", "UI/UX Design", "Framer Motion"]}
                aspectRatio="aspect-square"
                image="/images/optimized/burg/pic1.webp"
                sizes="(max-width: 768px) 80vw, 33vw"
                href="https://the-good-burger.vercel.app/"
              />
            </div>
            <div className="min-w-[80vw] md:min-w-0 snap-center">
              <ProjectCard 
                title="CLEANZO"
                category="Cleaning Service"
                tags={["UX/UI Design", "Front end", "Brand Identity"]}
                aspectRatio="aspect-square"
                image="/images/optimized/cleanzo/thumbnail.webp"
                sizes="(max-width: 768px) 80vw, 33vw"
                href="https://cleanzo.vercel.app/"
              />
            </div>
            <div className="min-w-[80vw] md:min-w-0 snap-center">
              <ProjectCard 
                title="SAASFORGE"
                category="Saas Development"
                tags={["Secure Auth", "Online Payments", "SaaS Solutions"]}
                aspectRatio="aspect-square"
                image="/images/optimized/saasforge/pic1.webp"
                sizes="(max-width: 768px) 80vw, 33vw"
                href="http://saas-forge-frontend.vercel.app/"
              />
            </div>
          </div>
 
          {/* Project Pagination Indicators (Mobile Only) */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  activeProjectStep === i ? 'bg-white w-6' : 'bg-white/20 w-1.5'
                }`} 
              />
            ))}
          </div>
 
          {/* Mobile CTA - Visible only on small screens */}
          <div className="flex md:hidden justify-start mt-12 px-0">
            <AgencyButton text="SHOW MORE PROJECTS" href="/portfolio" />
          </div>
        </div>
      </section>

      {/* Solution Implementation Process Section - White Background */}
      <section className="py-16 md:py-32 px-4 md:px-12 bg-white border-y border-zinc-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading - Balanced for White BG */}
          <div className="text-left mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-thin uppercase tracking-tight leading-[1.1] text-black mb-6 md:mb-10">
              SOLUTION IMPLEMENTATION PROCESS. <br className="hidden md:block" /> DEPLOYMENT WITHOUT CHAOS
            </h2>
          </div>
 
          {/* Process Pillars Container - Grid on all screens (1-col mobile, 2-col tablet, 4-col desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-8 z-10 relative">
            
            {/* PHASE 1: STRATEGY */}
            <div className="flex flex-col items-start w-full p-6 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center shadow-md shrink-0 transition-transform duration-500 group-hover:scale-105">
                  <PenTool className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-black">STRATEGY</h3>
              </div>
              <ul className="w-full space-y-2.5">
                {[
                  { num: "01", text: "Briefing" },
                  { num: "02", text: "Analytics" },
                  { num: "03", text: "Goals" },
                  { num: "04", text: "Specification" },
                  { num: "05", text: "Approval" }
                ].map((item) => (
                  <li key={item.num} className="flex items-center gap-3 bg-white border border-zinc-100 rounded-full py-2 px-3.5 hover:bg-zinc-50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-[#3affab] text-black text-[9px] font-black flex items-center justify-center shrink-0">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
 
            {/* PHASE 2: DESIGN */}
            <div className="flex flex-col items-start w-full p-6 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center shadow-md shrink-0 transition-transform duration-500 group-hover:scale-105">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-black">DESIGN</h3>
              </div>
              <ul className="w-full space-y-2.5">
                {[
                  { num: "01", text: "Research" },
                  { num: "02", text: "Idea Preparation" },
                  { num: "03", text: "Wireframes" },
                  { num: "04", text: "UI Concept" },
                  { num: "05", text: "Responsiveness" }
                ].map((item) => (
                  <li key={item.num} className="flex items-center gap-3 bg-white border border-zinc-100 rounded-full py-2 px-3.5 hover:bg-zinc-50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-[#3affab] text-black text-[9px] font-black flex items-center justify-center shrink-0">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
 
            {/* PHASE 3: DEVELOPMENT */}
            <div className="flex flex-col items-start w-full p-6 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center shadow-md shrink-0 transition-transform duration-500 group-hover:scale-105">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-black">DEVELOP</h3>
              </div>
              <ul className="w-full space-y-2.5">
                {[
                  { num: "01", text: "Architecture" },
                  { num: "02", text: "Front-end" },
                  { num: "03", text: "Back-end" },
                  { num: "04", text: "Integrations" },
                  { num: "05", text: "Testing" }
                ].map((item) => (
                  <li key={item.num} className="flex items-center gap-3 bg-white border border-zinc-100 rounded-full py-2 px-3.5 hover:bg-zinc-50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-[#3affab] text-black text-[9px] font-black flex items-center justify-center shrink-0">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
 
            {/* PHASE 4: LAUNCH */}
            <div className="flex flex-col items-start w-full p-6 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-zinc-950 flex items-center justify-center shadow-md shrink-0 transition-transform duration-500 group-hover:scale-105">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-black">LAUNCH</h3>
              </div>
              <ul className="w-full space-y-2.5">
                {[
                  { num: "01", text: "Monitoring" },
                  { num: "02", text: "Optimization" },
                  { num: "03", text: "Releases" },
                  { num: "04", text: "Patches" },
                  { num: "05", text: "Support" }
                ].map((item) => (
                  <li key={item.num} className="flex items-center gap-3 bg-white border border-zinc-100 rounded-full py-2 px-3.5 hover:bg-zinc-50 transition-colors">
                    <span className="w-5 h-5 rounded-full bg-[#3affab] text-black text-[9px] font-black flex items-center justify-center shrink-0">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
