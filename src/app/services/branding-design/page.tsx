'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';
import ProjectSection from '@/components/ProjectSection';
import FAQSection from '@/components/FAQSection';

import { useContact } from '@/context/ContactContext';

export default function BrandingDesignPage() {
  const { openContact } = useContact();

  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Section 1: Branding and Design Header */}
        <section className="px-6 md:px-12 mb-32">
          <h1 className="text-[10vw] md:text-[8vw] font-thin uppercase leading-none tracking-tighter mb-16">
            Branding and <br />design
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
            <div className="relative aspect-video bg-zinc-900 border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black uppercase tracking-widest text-xs">
                {/* Image Placeholder */}
              </div>
              {/* Image will go here later */}
            </div>

            <div className="lg:pl-15 lg:pt-37">
              <p className="text-xl md:text-2xl font-base leading-tight opacity-90 max-w-xl">
                We study the site, find all the problem areas and determine how to eliminate them.
                We analyze competitors in search results and their strategies.
                We conduct an audit of the available traffic to the site in terms of sources
                and effectiveness in search engines.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Specialization & CTA */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10 bg-zinc-950/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-base leading-tight mb-16 tracking-tight">
              Our agency, Redstone, specializes in brand design development,
              creating brand styles, and providing full-service branding.
              We create projects tailored to your goals to effectively
              compete in the market, enhance your company image,
              and attract new customers. Our goal is to ensure that the
              outcome becomes a powerful catalyst for scaling
              and further business growth.
            </h2>

            <div className="flex justify-center">
              <button
                onClick={openContact}
                className="group flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                DISCUSS THE PROJECT
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

        {/* Section 3: Why Brand Identity? */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10">
          <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-tight mb-20 max-w-3xl leading-none">
            WHY DO COMPANIES NEED BRAND IDENTITY?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Step 01 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                01
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Brand Discovery and Research
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                In this initial phase, the design team conducts in-depth research to understand the client's brand, its values, target audience, and market positioning. They analyze competitors and industry trends to gather insights and inspiration.
              </p>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                02
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Brand Identity Design
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                This process involves creating the visual elements that represent the brand's identity. The design team works on crafting the logo, color palette, typography, and other visual assets. The goal is to establish a cohesive and memorable brand identity that reflects the brand's personality and resonates with the target audience.
              </p>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                03
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Brand Collateral Creation
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Brand collateral refers to various materials that reinforce the brand's identity across different touchpoints. This process includes designing business cards, letterheads, brochures, packaging, and other promotional materials.
              </p>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col border-l border-white/10 pl-6 group">
              <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                04
                <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
              </span>
              <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                Brand Guidelines Development
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Brand guidelines serve as a comprehensive document that outlines how the brand should be presented consistently across all channels. This process involves creating guidelines for logo usage, color specifications, typography rules, image styles, and tone of voice.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Brand Capabilities Grid */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10 bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Column 1: Brand Research */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-none max-w-[150px]">
                Brand<br />Research
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                Discover an award-winning team in the USA. Our team of experts uses advanced technologies for software development, web development, branding, digital marketing, and e-commerce. We are inspired to work for the benefit of our clients.
              </p>
            </div>

            {/* Column 2: Brand Book */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                  <path d="M3 12h3" />
                  <path d="M18 12h3" />
                  <path d="M12 3v3" />
                  <path d="M12 18v3" />
                  <path d="m16.24 7.76 2.12-2.12" />
                  <path d="m5.64 18.36 2.12-2.12" />
                  <path d="m18.36 18.36-2.12-2.12" />
                  <path d="m7.76 5.64 2.12 2.12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Brand Book Development and Preparation
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                At this stage, we prepare the design of the brand book, which forms the individual identity of the company and the brand as a whole. Our design team carefully selects the color palette, typography, and other visual assets. This process requires an understanding of how a potential client perceives the brand.
              </p>
            </div>

            {/* Column 3: Additional Materials */}
            <div className="flex flex-col border-l border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7h-9" />
                  <path d="M14 10h-3" />
                  <path d="M18 10h-1" />
                  <path d="M20 14h-9" />
                  <path d="M11 17h3" />
                  <path d="M18 17h1" />
                  <path d="M5 22h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" />
                  <path d="M12 18h2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Creation of Additional Materials
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                Brand materials are an extension of the brand identity, yet they enhance brand recognition. These include business cards, brochures, letterheads, flyers, badges, packaging, promotional materials, and more. All of these are tailored to the brand book to create a cohesive and recognizable brand identity.
              </p>
            </div>

            {/* Column 4: Page Scroll */}
            <div className="flex flex-col border-l border-r border-white/10 pl-8 pr-12 py-12 group hover:bg-white/[0.02] transition-colors h-full">
              <div className="mb-16 text-white opacity-40 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="7" />
                  <path d="M12 6v4" />
                  <path d="m9 16 3 3 3-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight">
                Page Scroll Effect
              </h3>
              <p className="text-[15px] opacity-60 leading-relaxed font-medium mt-auto">
                Our projects shape not only the urban environment but also a lifestyle – bold, modern, and inspiring new achievements. We implement smooth, cinematic transitions that guide the user through the brand story with every scroll.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Projects */}
        <ProjectSection
          projectTitle="CYBER CORE"
          projectSubtitle="BRAND IDENTITY"
          description="Creation of a futuristic visual identity for a high-tech infrastructure provider. We focused on minimalism, high-contrast aesthetics, and modular design systems that work across digital and physical touchpoints."
          image="/portfolio_project_2_1773957793433.png"
          tag="VISUAL IDENTITY"
        />

        {/* Section 6: FAQs */}
        <FAQSection
          onContactClick={openContact}
          faqs={[
            { q: "What is included in a brand identity package?", a: "A full package includes your logo, typography system, color palette, and comprehensive visual guidelines." },
            { q: "Will I own the full copyrights to the designs?", a: "Absolutely. Once the project is finalized and delivered, you own 100% of the copyrights to all assets." },
            { q: "How many design concepts do you provide?", a: "We typically present 3 distinct visual directions, then refine the chosen one through structured feedback rounds." },
            { q: "How do you ensure the brand works across digital platforms?", a: "We test all visual elements across various screens and social platforms to ensure perfect readability and impact." }
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

            {/* Exotic Magnetic CTA */}
            <div className="mt-24 flex items-center justify-center">
              <MagneticButton>
                <button
                  onClick={() => openContact()}
                  className="group relative flex items-center bg-white rounded-full p-2 pl-12 pr-2 overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
                >
                  {/* Rolling Text Container */}
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

                  {/* Single Animated Arrow */}
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
