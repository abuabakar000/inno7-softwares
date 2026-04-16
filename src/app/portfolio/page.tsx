'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';

const categories = [
  "CREATIVE", "ONLINE STORE", "FOOD DELIVERY", "WEB SOLUTION", "MARKETING / CORPORATE",
  "LANDING PAGE", "REAL ESTATE", "DENTISTRY", "MANUFACTURERS", "BRANDING", "ENTERTAINMENT / LEISURE"
];

const technologies = [
  {
    name: "React.js", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12c0 1.25-.33 2.45-.94 3.52-.16.29-.53.38-.82.22s-.38-.53-.22-.82c.51-.9.78-1.9.78-2.92s-.27-2.02-.78-2.92c-.16-.29-.07-.66.22-.82s.66-.07.82.22c.61 1.07.94 2.27.94 3.52zM12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.7 6 6-2.69 6-6 6zm10.22-9.48c.22.29.13.66-.16.88-.29.22-.66.13-.88-.16-.9-1.2-2.18-2.11-3.64-2.6-.32-.1-.5-.45-.4-.77.1-.32.45-.5.77-.4 1.76.6 3.32 1.7 4.31 3.05zM3.78 15.48c-.22-.29-.13-.66.16-.88.29-.22.66-.13.88.16.9 1.2 2.18 2.11 3.64 2.6.32.1.5.45.4.77-.1.32-.45.5-.77.4-1.76-.6-3.32-1.7-4.31-3.05zM20.22 15.48c-.22.29-.6.38-.88.16-.29-.22-.38-.6-.16-.88.9-1.2 1.48-2.65 1.63-4.18.03-.34.33-.58.67-.55.34.03.58.33.55.67-.18 1.83-.87 3.58-1.99 5.02s.18 2.65.18 2.65-.18 2.65-.18 2.65z" />
        <circle cx="12" cy="12" r="2.05" />
      </svg>
    )
  },
  {
    name: "Next.js", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.75 18l-4.5-5.5V18h-1.5V6h1.5l4.5 5.5V6h1.5v12h-1.5z" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.518 15.039 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.282 14.963 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.55 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.177-1.194-2.55-2.576-5.512-2.576z" />
      </svg>
    )
  },
  {
    name: "Framer Motion", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12V0h12l12 12H12l12 12H12L0 12z" />
      </svg>
    )
  },
  {
    name: "Node.js", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l-9.6 5.5v11L12 24l9.6-5.5v-11L12 2zm1.6 18l-1.6.9-1.6-.9v-3.7l1.6-.9 1.6.9V20zm0-7.3l-1.6.9-1.6-.9V9l1.6-.9 1.6.9v3.7z" />
      </svg>
    )
  },
  {
    name: "Express.js", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0zm17 17l-1-1h-2v1h1v1h-3v-1h1v-1h-2l-1 1v1H8v-5h2v1h1v-1h3v1h1v-1h2v5z" />
      </svg>
    )
  },
  {
    name: "MongoDB", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c-1.28 0-2.5 3.58-2.5 8 0 4.42 2.5 10.5 2.5 10.5s2.5-6.08 2.5-10.5c0-4.42-1.22-8-2.5-8z" />
      </svg>
    )
  },
  {
    name: "JWT (Auth)", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .002L1.156 3.018v5.82a13.344 13.344 0 0 0 4.887 10.23L12 24l5.957-4.932a13.344 13.344 0 0 0 4.887-10.23v-5.82L12 .002z" />
      </svg>
    )
  },
  {
    name: "REST APIs", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2 0V4.07c3.95.49 7 3.85 7 7.93s-3.05 7.44-7 7.93z" />
      </svg>
    )
  },
  {
    name: "AI Chatbots", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM9 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7 15s1 2 5 2 5-2 5-2H7z" />
      </svg>
    )
  },
  {
    name: "AI Integration", icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0l2.5 9.5H24l-7.5 5.5L19 24l-7-5.5L5 24l2.5-9L0 9.5h9.5L12 0z" />
      </svg>
    )
  }
];

const projects = [
  {
    title: "THE GOOD BURGER",
    category: "Restaurant",
    tags: ["React", "UI/UX Design", "Framer Motion"],
    images: ["/images/optimized/burg/pic1.webp", "/images/optimized/burg/pic2.webp", "/images/optimized/burg/pic3.webp", "/images/optimized/burg/pic4.webp", "/images/optimized/burg/pic5.webp", "/images/optimized/burg/pic6.webp"],
    aspectRatio: "aspect-[4/5]",
    filterCategory: "CREATIVE",
    href: "https://the-good-burger.vercel.app/"
  },
  {
    title: "CLEANZO",
    category: "Cleaning Service",
    tags: ["UX/UI Design", "Front end", "Brand Identity"],
    images: ["/images/optimized/cleanzo/thumbnail.webp", "/images/optimized/cleanzo/pic2.webp", "/images/optimized/cleanzo/pic3.webp", "/images/optimized/cleanzo/pic4.webp", "/images/optimized/cleanzo/pic5.webp", "/images/optimized/cleanzo/pic6.webp"],
    aspectRatio: "aspect-[3/4]",
    className: "mt-0 md:mt-16",
    filterCategory: "LANDING PAGE",
    href: "https://cleanzo.vercel.app/"
  },
  {
    title: "SAASFORGE",
    category: "Saas Development",
    tags: ["Secure Auth", "Online Payments", "SaaS Solutions"],
    images: ["/images/optimized/saasforge/pic1.webp", "/images/optimized/saasforge/pic2.webp", "/images/optimized/saasforge/pic3.webp", "/images/optimized/saasforge/pic4.webp", "/images/optimized/saasforge/pic5.webp"],
    aspectRatio: "aspect-[4/5]",
    className: "mt-0 md:-mt-12",
    filterCategory: "WEB SOLUTION",
    href: "http://saas-forge-frontend.vercel.app/"
  },
  {
    title: "RESUME AI",
    category: "AI Resume Generator",
    tags: ["Frontend", "AI Integration", "PDF Generation"],
    images: ["/images/optimized/resume-ai/pic1.webp", "/images/optimized/resume-ai/pic2.webp", "/images/optimized/resume-ai/pic3.webp", "/images/optimized/resume-ai/pic4.webp", "/images/optimized/resume-ai/pic5.webp", "/images/optimized/resume-ai/pic6.webp"],
    aspectRatio: "aspect-[4/5]",
    filterCategory: "WEB SOLUTION",
    href: "https://resume-ai-web-delta.vercel.app/"
  },
  {
    title: "MINT CARE DENTISTRY",
    category: "Dentistry Website",
    tags: ["24/7 Chatbot", "Branding", "Full Stack Development"],
    images: ["/images/optimized/mint-care-dentistry/pic1.webp", "/images/optimized/mint-care-dentistry/pic2.webp", "/images/optimized/mint-care-dentistry/pic3.webp", "/images/optimized/mint-care-dentistry/pic4.webp", "/images/optimized/mint-care-dentistry/pic5.webp", "/images/optimized/mint-care-dentistry/pic6.webp"],
    aspectRatio: "aspect-[3/4]",
    className: "mt-0 md:mt-16",
    filterCategory: "DENTISTRY",
    href: "https://mint-care-dentistry.vercel.app/"
  },
  {
    title: "PORTFOLIO SITES",
    category: "Branding",
    tags: ["Portfolio Design", "Framer Motion", "Landing Page"],
    images: ["/images/optimized/portfolio-sites/pic1.webp", "/images/optimized/portfolio-sites/pic2.webp", "/images/optimized/portfolio-sites/pic3.webp", "/images/optimized/portfolio-sites/pic4.webp", "/images/optimized/portfolio-sites/pic5.webp", "/images/optimized/portfolio-sites/pic6.webp"],
    aspectRatio: "aspect-[4/5]",
    className: "mt-0 md:-mt-12",
    filterCategory: "BRANDING",
    href: "http://ak-portfolio-site.vercel.app/"
  },
  {
    title: "DEVCOLLAB",
    category: "SaaS",
    tags: ["Collaboration Tool", "Real-time Chat", "Project Management"],
    images: ["/images/optimized/dev-collab/pic1.webp", "/images/optimized/dev-collab/pic2.webp", "/images/optimized/dev-collab/pic3.webp", "/images/optimized/dev-collab/pic4.webp", "/images/optimized/dev-collab/pic5.webp"],
    aspectRatio: "aspect-[4/5]",
    filterCategory: "WEB SOLUTION",
    href: "https://dev-collab-frontend-alpha.vercel.app/"
  },
  {
    title: "MR DRAINER",
    category: "Plumbring service",
    tags: ["Branding", "Contact Flow", "Local SEO"],
    images: ["/images/optimized/plumber/pic1.webp", "/images/optimized/plumber/pic2.webp", "/images/optimized/plumber/pic3.webp", "/images/optimized/plumber/pic4.webp", "/images/optimized/plumber/pic5.webp", "/images/optimized/plumber/pic6.webp"],
    aspectRatio: "aspect-[3/4]",
    className: "mt-0 md:mt-16",
    filterCategory: "WEB SOLUTION",
    href: "https://mr-drainer.vercel.app/"
  }
];

export default function PortfolioPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />

      <main className="relative pt-48 pb-24 px-6 md:px-12">
        {/* WE ARE PROUD Header */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 mb-16 md:mb-24 overflow-hidden">
          <h2 className="text-[10vw] md:text-[8vw] font-thin uppercase leading-none tracking-tight whitespace-nowrap opacity-90">
            WE ARE
          </h2>
          <div className="relative w-[30vw] h-[18vw] md:w-[15vw] md:h-[8vw] overflow-hidden shadow-2xl bg-zinc-900 border border-white/5 shrink-0">
            <Image
              src="/proud.svg"
              alt="Inex Labs Logo"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-[10vw] md:text-[8vw] font-thin uppercase leading-none tracking-tight whitespace-nowrap opacity-90">
            PROUD
          </h2>
        </div>

        <div className="relative w-full overflow-hidden mb-24 py-8 select-none">
          {/* Side Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Scrolling Left */}
          <div className="flex mb-6">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 md:gap-6 whitespace-nowrap px-4"
            >
              {[...categories.slice(0, 6), ...categories.slice(0, 6)].map((cat, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 md:px-10 md:py-4 rounded-full text-[13px] md:text-[15px] font-bold uppercase tracking-[0.15em] bg-transparent text-white border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                >
                  {cat}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 md:gap-6 whitespace-nowrap px-4"
            >
              {[...categories.slice(6), ...categories.slice(6)].map((cat, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 md:px-10 md:py-4 rounded-full text-[13px] md:text-[15px] font-bold uppercase tracking-[0.15em] bg-transparent text-white border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                >
                  {cat}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 min-h-[600px]">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              {...project}
            />
          ))}
        </div>

        {/* TECHNOLOGIES Section (Bento Grid) */}
        <section className="mt-48 group/main" onMouseMove={handleMouseMove}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <h2 className="text-[10vw] md:text-[8vw] font-thin uppercase tracking-tight opacity-90 leading-none">
              TECHNOLOGIES
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 min-h-[600px]">
            {technologies.map((tech, idx) => {
              // Create Bento sizes: big for first few, regular for others
              // Adjusted for 11 items for maximum balance
              const isLarge = idx === 0 || idx === 3 || idx === 6 || idx === 10;
              const isWide = idx === 2 || idx === 7 || idx === 10;
              const isMobileFull = idx === 1 || idx === 4 || idx === 5 || idx === 8 || idx === 9 || idx === 10;

              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden p-8 md:p-12 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl transition-all duration-700 hover:border-white/30 flex flex-col justify-between ${isLarge ? "lg:row-span-2" : ""
                    } ${isWide ? "lg:col-span-2" : ""} ${isMobileFull ? "col-span-2 md:col-span-1" : ""}`}
                >
                  {/* Spotlight Effect overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover/main:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`,
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full gap-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center opacity-100 transition-all transform group-hover:scale-110 group-hover:rotate-6 duration-700 text-white">
                      {tech.icon}
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-xl md:text-2xl font-light uppercase tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
                        {tech.name}
                      </h3>
                      <div className="h-[1px] w-0 group-hover:w-full bg-white/40 transition-all duration-700 mt-4" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* LET'S MOVE THE WORLD TOGETHER Section */}
      <CTASection />

      <Footer />
    </div>
  );
}
