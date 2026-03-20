'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import ProjectSection from '@/components/ProjectSection';
import FAQSection from '@/components/FAQSection';

import { useContact } from '@/context/ContactContext';

export default function AppPlatformsPage() {
  const { openContact } = useContact();

  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Section 1: Header */}
        <section className="px-6 md:px-12 mb-32">
          <h1 className="text-[10vw] md:text-[8vw] font-thin uppercase leading-none tracking-tighter mb-16">
            App<br />Platforms
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div className="relative aspect-video bg-zinc-900 border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black uppercase tracking-widest text-xs">
                {/* Image Placeholder */}
              </div>
            </div>

            <div className="lg:pl-15 lg:pt-37">
              <p className="text-xl md:text-2xl font-base leading-tight opacity-90 max-w-xl">
                We develop high-performance mobile applications and cross-platform experiences 
                that put your business directly in your customers' pockets. 
                From native iOS and Android to modern hybrid solutions, we build for engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Specialization & CTA */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10 bg-zinc-950/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-base leading-tight mb-16 tracking-tight">
              Our agency, Redstone, specializes in mobile product engineering,
              creating native and cross-platform apps and providing seamless digital experiences.
              We build mobile platforms tailored to your user engagement goals to effectively
              leverage mobile-first trends, enhance brand loyalty,
              and drive growth. Our goal is to ensure your
              app becomes a powerful tool for your users.
            </h2>

            <div className="flex justify-center">
              <button
                onClick={openContact}
                className="group flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                LAUNCH YOUR APP
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

        {/* Section 3: Why Mobile Priority? */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10">
          <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-tight mb-20 max-w-3xl leading-none">
            WHY DOES YOUR BUSINESS NEED A MOBILE PRIORITY?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Step 01 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                01
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Ubiquitous Presence
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Be where your customers are. A dedicated mobile platform ensures your brand is accessible anytime, anywhere, with just a single tap.
              </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                02
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Native Performance
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                We leverage hardware-level capabilities and OS-specific optimizations to deliver lightning-fast, butter-smooth experiences that hybrid web apps can't match.
              </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                03
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Push Engagement
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Drive retention and re-engagement through intelligent push notifications and real-time updates that keep your users coming back to your platform.
              </p>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                04
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Offline Capability
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Provide value even without an internet connection. Our apps are built to handle offline states gracefully, syncing data seamlessly when connectivity returns.
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
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-none">
                iOS &<br />Android
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                We develop high-quality applications for both major mobile operating systems, ensuring broad market reach and platform-specific excellence.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                UX Optimization
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                Our mobile designers focus on ergonomics and thumb-friendly interactions, creating intuitive interfaces that feel natural and effortless to use.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12c.3 0 .7.1 1 .3l7.3 4.3c1 .6 1 2.1 0 2.8l-7.3 4.3c-.6.4-1.4.4-2 0l-7.3-4.3c-1-.7-1-2.2 0-2.8L11 12.3c.3-.2.7-.3 1-.3z" />
                  <path d="M12 12c.3 0 .7-.1 1-.3l7.3-4.3c1-.6 1-2.1 0-2.8l-7.3-4.3c-.6-.4-1.4-.4-2 0l-7.3 4.3c-1 .7-1 2.2 0 2.8L11 11.7c.3.2.7.3 1 .3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                API Integration
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                We build seamless connections between your mobile app and backend services, ensuring real-time data synchronization and feature parity.
              </p>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col border-l border-r border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 14 4-4" />
                  <path d="m3.34 19 1.4-1.4" />
                  <path d="m19.07 4.93-1.41 1.41" />
                  <rect width="10" height="10" x="12" y="2" rx="2" />
                  <path d="m21 21-1-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Performance
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                We optimize every frame and network request, providing the snappy, responsive feel that mobile users have come to expect as a standard for quality.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Projects */}
        <ProjectSection
          projectTitle="VIBE DASH"
          projectSubtitle="MOBILE APP"
          description="A high-performance iOS and Android application for local community engagement. Features real-time geo-tracking, social integration, and offline-first data sync."
          image="/client1.png"
          tag="MOBILE APP"
        />

        {/* Section 6: FAQs */}
        <FAQSection
          onContactClick={openContact}
          faqs={[
            { q: "Do you build native or cross-platform apps?", a: "We build both. We'll help you choose the best approach (Swift/Kotlin or Flutter/React Native) based on your goals." },
            { q: "Will the app be available on both major stores?", a: "Yes, we handle the entire submission and approval process for both the Apple App Store and Google Play Store." },
            { q: "How do you handle app updates and maintenance?", a: "We provide ongoing support to ensure your app remains compatible with the latest OS versions and device hardware." },
            { q: "Can the app function without an internet connection?", a: "Yes, we specialize in building offline-first applications that sync data seamlessly once connectivity is restored." }
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
