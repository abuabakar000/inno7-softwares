"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import AgencyButton from "@/components/AgencyButton";
import Footer from "@/components/Footer";
import { useContact } from "@/context/ContactContext";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { 
  Users, Monitor, Activity, Cpu, Rocket, Eye, Layout, 
  Smartphone, Lock, Database, Settings, Code2, Shield, Globe 
} from 'lucide-react';
import { SERVICES_DATA } from "@/data/services";

const ICON_MAP: Record<string, any> = {
  Users, Monitor, Activity, Cpu, Rocket, Eye, Layout, 
  Smartphone, Lock, Database, Settings, Code2, Shield, Globe 
};

interface Service {
  slug: string;
  title: string;
  subServices: string[];
  link?: string;
}


function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-t border-white/10 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`,
        }}
      />

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 flex items-center justify-between py-4 md:py-6 cursor-pointer group hover:opacity-80 transition-all px-2 md:px-4"
      >
        <h3 className="text-sm sm:text-[15px] md:text-base font-medium tracking-tight text-white group-hover:translate-x-2 transition-transform">
          {question}
        </h3>
        <div className={`transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 w-4 h-4 md:w-5 md:h-5">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
      <div className={`relative z-10 px-2 md:px-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-40 pb-5 md:pb-8" : "max-h-0"}`}>
        <p className="text-xs sm:text-[14px] md:text-base text-zinc-400 leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
}

function ServiceTile({
  service,
  index,
  isOpen,
  onClick
}: {
  service: Service;
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const data = SERVICES_DATA[service.slug];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative border-b border-white/10 transition-colors duration-700 overflow-hidden ${isOpen ? "bg-white/[0.03]" : "hover:bg-white/[0.01]"
        }`}
    >
      {/* Background Glow Effect */}
      {!isOpen && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent)`,
          }}
        />
      )}

      {/* Header */}
      <div
        onClick={onClick}
        className="relative z-10 flex items-center justify-between py-4 md:py-8 cursor-pointer px-2 md:px-4"
      >
        <div className="flex items-center gap-3 md:gap-8">
          <div className={`w-6 h-6 md:w-10 md:h-10 flex items-center justify-center transition-transform duration-500 ${isOpen ? "rotate-180 text-white" : "text-zinc-500 group-hover:text-white"}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-8 md:h-8"
            >
              {isOpen ? (
                <polyline points="6 9 12 15 18 9" />
              ) : (
                <>
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </>
              )}
            </svg>
          </div>
          <h3 className={`font-light tracking-tight transition-all duration-300 uppercase ${isOpen ? "text-[16px] sm:text-xl md:text-3xl lg:text-5xl text-white" : "text-[16px] sm:text-xl md:text-4xl text-zinc-400 group-hover:text-white"}`}>
            {service.title}
          </h3>
        </div>

        <div className="flex items-center gap-3 md:gap-8">
          <span className={`text-base md:text-2xl font-light transition-colors ${isOpen ? "text-white" : "text-zinc-500"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5 md:gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                animate={isOpen ? {
                  scaleY: [1, 2, 1],
                  opacity: [0.1, 0.4, 0.1],
                } : {
                  scaleY: 1,
                  opacity: 0.1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: 'bottom' }}
                className="w-[1px] h-2.5 md:h-4 bg-white shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 px-2 md:px-4 pb-6 md:pb-8 pt-2">
              {/* Left: Service Details & Tech Grid */}
              <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 py-2">
                <div className="flex flex-col gap-4 md:gap-6">
                  <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2">Core Technologies</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 sm:gap-y-6">
                    {service.subServices.map((sub) => (
                      <div key={sub} className="flex items-center gap-2 md:gap-3 group/sub cursor-pointer">
                        <div className="w-1.5 h-1.5 rounded-full border border-white/20 group-hover/sub:bg-white transition-all duration-300" />
                        <span className="text-xs md:text-base text-zinc-300 font-light group-hover/sub:text-white transition-colors">
                          {sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 md:pt-8">
                  <AgencyButton text="VIEW SERVICE DETAILS" href={service.link} />
                </div>
              </div>

              {/* Right: Digital Blueprint Dashboard (Bento Style) */}
              <div className="lg:col-span-7 h-full">
                <div className="flex sm:grid sm:grid-cols-2 gap-3 md:gap-4 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                  {data?.capabilities.map((cap, i) => {
                    const Icon = ICON_MAP[cap.icon] || Rocket;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                        className="relative min-w-[78vw] sm:min-w-0 snap-start group/cap p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between overflow-hidden sm:aspect-auto min-h-[130px] md:min-h-[160px] sm:min-h-0"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover/cap:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-center gap-3 md:gap-4 mb-4">
                            <div className="w-7 h-7 md:w-10 md:h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-white/40 group-hover/cap:text-white group-hover/cap:scale-110 transition-all duration-500 border border-white/5 shrink-0">
                              <Icon strokeWidth={1} size={16} className="md:w-5 md:h-5" />
                            </div>
                            <h5 className="text-[12px] sm:text-[14px] md:text-lg font-medium uppercase tracking-tight text-white/90 leading-tight">{cap.title}</h5>
                          </div>

                          <p className="text-[11px] sm:text-[12px] md:text-sm text-zinc-400 leading-relaxed font-light group-hover/cap:text-zinc-300 transition-colors">
                            {cap.description}
                          </p>
                        </div>

                        <div className="absolute top-4 right-4 text-[10px] font-mono text-white/5 select-none">
                          0{i + 1}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const { openContact } = useContact();

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      image: "/client2.png",
      quote: "What stood out the most was their decision-making and attention to detail. They don't just build — they think. That made a huge difference in the final product.",
      author: "Mirza Asif Baig",
      role: "CEO and Investor Saffran Groups",
      stat: "400+",
      statSub: "Satisfied Clients"
    },
    {
      image: "/client3.png",
      quote: "They operate at a level that clearly exceeds standard expectations. The quality, speed, and insight they bring make them an incredibly valuable partner.",
      author: "Saffran Labs",
      role: "CTO at Saffran Labs",
      stat: "150%+",
      statSub: "Revenue Growth"
    },
    {
      image: "/client4.png",
      quote: "The level of talent and professionalism they bring is exceptional. They integrate seamlessly into workflows and consistently deliver high-quality results. Easily one of the best teams we've worked with.",
      author: "Aleem Minhas",
      role: "Director at Otoz.ai",
      stat: "4.9/5",
      statSub: "User Rating"
    }
  ];

  // Scroll animations for AI Section
  const aiSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aiSectionRef,
    offset: ["start end", "end start"],
  });

  const aiImageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const aiImageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);
  const aiTextOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);


  const services: Service[] = [
    {
      slug: "website-development",
      title: "Website development",
      subServices: [
        "Angular Website Development",
        "Node.js Website Development",
        "Vue.js Website Development",
        "Laravel Website Development",
        "React Website Development",
        "WordPress Website Development",
      ],
      link: "/services/website-development",
    },
    {
      slug: "branding-design",
      title: "Branding and design",
      subServices: [
        "Logo Design",
        "Brand Identity",
        "Visual Guidelines",
        "Typography",
        "Color Palette",
        "Marketing Materials",
      ],
      link: "/services/branding-design",
    },
    {
      slug: "crm-systems",
      title: "CRM systems",
      subServices: [
        "Custom CRM",
        "Salesforce Integration",
        "HubSpot Setup",
        "Data Migration",
        "Automated Workflows",
        "Analytics Dashboard",
      ],
      link: "/services/crm-systems",
    },
    {
      slug: "saas-solutions",
      title: "SaaS solutions",
      subServices: [
        "Product Strategy",
        "Architecture Design",
        "Multi-tenancy",
        "Subscription Models",
        "API Development",
        "Scalability",
      ],
      link: "/services/saas-solutions",
    },
    {
      slug: "ai-agents-chatbot",
      title: "AI Agents / Chatbot",
      subServices: [
        "LLM Customization",
        "AI Automation",
        "Chatbot Systems",
        "Agent Deployment",
        "Voice AI",
        "Business Logic",
      ],
      link: "/services/ai-agents-chatbot",
    },
    {
      slug: "ai-integration",
      title: "AI Integration",
      subServices: [
        "Knowledge Audit",
        "RAG Engineering",
        "LLM Orchestration",
        "Private Deployment",
        "Fine-tuning",
        "Workflow Automation",
      ],
      link: "/services/ai-integration",
    },
    {
      slug: "website-support",
      title: "Website support",
      subServices: [
        "Security Monitoring",
        "Performance Tuning",
        "Uptime Management",
        "Core Updates",
        "Backup Systems",
        "Platform Hardening",
      ],
      link: "/services/website-support",
    },
    {
      slug: "ecommerce-stores",
      title: "E-commerce stores",
      subServices: [
        "Shopify Setup",
        "WooCommerce",
        "Custom Checkout",
        "Payment Gateways",
        "Inventory Management",
        "Store SEO",
      ],
      link: "/services/ecommerce-stores",
    },
    {
      slug: "seo-optimization",
      title: "SEO optimization",
      subServices: [
        "Technical SEO",
        "Semantic Keyword Research",
        "Authority Building",
        "Content Strategy",
        "Local SEO",
        "Analytics Tracking",
      ],
      link: "/services/seo-optimization",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative flex flex-col justify-center min-h-[90vh] md:min-h-screen pt-20 px-0 md:px-12 overflow-hidden">
        {/* Mobile-Only Social Proof at Top (Inspiration Aligned) */}
        <div className="flex md:hidden items-center gap-5 px-6 mb-10">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden relative"
              >
                <Image
                  src={`/client${i}.png`}
                  alt={`Client ${i}`}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-0.5 text-red-600">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-[12px] text-zinc-400 font-medium tracking-tight whitespace-nowrap">Trusted by clients</p>
          </div>
        </div>

        <div className="flex flex-col">
          {/* Main Typography Area */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16 lg:gap-24 px-6 md:px-0">
            <h1 className="text-[12vw] md:text-[13vw] font-thin leading-[0.85] tracking-[-0.04em] uppercase whitespace-nowrap">
              SAAS. APP.
            </h1>
            <div className="hidden md:block relative w-[22vw] h-[13vw] lg:w-[18vw] lg:h-[10vw] overflow-hidden shadow-2xl border border-white/5 mt-2 md:mt-4 lg:mt-6">
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
          <h1 className="text-[12vw] md:text-[13vw] font-thin leading-[0.85] tracking-[-0.04em] uppercase px-6 md:px-0 mb-8">
            WEB SOLUTION
          </h1>

          {/* Mobile-Only Video and CTAs */}
          <div className="md:hidden space-y-12">
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl bg-zinc-900 border-t border-b border-white/5">
              <video
                src="/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-3 px-6 pb-4 w-full">
              <AgencyButton text="DISCUSS THE PROJECT" onClick={openContact} className="w-full" />
            </div>
          </div>
        </div>

        {/* Bottom Section - Responsive Visibility */}
        <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 pb-12 transition-all px-6 md:px-0">
          {/* Social Proof (Desktop only now) */}
          <div className="hidden md:flex flex-col gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden relative"
                >
                  <Image
                    src={`/client${i}.png`}
                    alt={`Client ${i}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-0.5 text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s}>★</span>
                ))}
              </div>
              <p className="text-sm text-zinc-400 font-medium tracking-wide">Trusted by clients</p>
            </div>
          </div>

          {/* Description - Hiding on smaller screens per user request */}
          <div className="max-w-md md:text-right hidden md:block">
            <p className="text-lg md:text-xl font-medium leading-tight text-zinc-400">
              We develop online stores, CRM systems, SaaS solutions, and app platforms – integrating AI into processes and business solutions.
            </p>
          </div>
        </div>
      </main>

      {/* Portfolio Section */}
      <section className="py-16 px-4 md:px-12 bg-black border-t border-white/10">
        <div className="flex flex-nowrap items-center gap-x-2 sm:gap-x-3 md:gap-8 mb-16 md:mb-24 overflow-hidden">
          <h2 className="text-[8.5vw] md:text-[8vw] font-thin uppercase leading-none tracking-tight whitespace-nowrap opacity-90">
            WE ARE
          </h2>
          <div className="relative w-[18vw] h-[11vw] md:w-[15vw] md:h-[8vw] rounded-none overflow-hidden shadow-2xl bg-zinc-900 border border-white/10 shrink-0">
            <Image
              src="/proud.svg"
              alt="Inex Labs Logo"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 768px) 18vw, 15vw"
            />
          </div>
          <h2 className="text-[8.5vw] md:text-[8vw] font-thin uppercase leading-none tracking-tight whitespace-nowrap opacity-90">
            PROUD
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 md:gap-8">
          <ProjectCard
            title="THE GOOD BURGER"
            category="Restaurant"
            tags={["React", "UI/UX Design", "Framer Motion"]}
            images={["/images/optimized/burg/pic1.webp", "/images/optimized/burg/pic2.webp", "/images/optimized/burg/pic3.webp", "/images/optimized/burg/pic4.webp", "/images/optimized/burg/pic5.webp", "/images/optimized/burg/pic6.webp"]}
            aspectRatio="aspect-[4/5]"
            href="https://the-good-burger.vercel.app/"
          />

          <ProjectCard
            title="CLEANZO"
            category="Cleaning Service"
            tags={["UX/UI Design", "Front end", "Brand Identity"]}
            images={["/images/optimized/cleanzo/thumbnail.webp", "/images/optimized/cleanzo/pic2.webp", "/images/optimized/cleanzo/pic3.webp", "/images/optimized/cleanzo/pic4.webp", "/images/optimized/cleanzo/pic5.webp", "/images/optimized/cleanzo/pic6.webp"]}
            aspectRatio="aspect-[3/4]"
            className="mt-0 md:mt-16"
            href="https://cleanzo.vercel.app/"
          />

          <ProjectCard
            title="SAASFORGE"
            category="SaaS Development"
            tags={["Secure Auth", "Online Payments", "SaaS Solutions"]}
            images={["/images/optimized/saasforge/pic1.webp", "/images/optimized/saasforge/pic2.webp", "/images/optimized/saasforge/pic3.webp", "/images/optimized/saasforge/pic4.webp", "/images/optimized/saasforge/pic5.webp"]}
            aspectRatio="aspect-[4/5]"
            className="mt-0 md:-mt-12"
            href="http://saas-forge-frontend.vercel.app/"
          />

          <ProjectCard
            title="RESUME AI"
            category="AI Resume Generator"
            tags={["Frontend", "AI Integration", "PDF Generation"]}
            images={["/images/optimized/resume-ai/pic1.webp", "/images/optimized/resume-ai/pic2.webp", "/images/optimized/resume-ai/pic3.webp", "/images/optimized/resume-ai/pic4.webp", "/images/optimized/resume-ai/pic5.webp", "/images/optimized/resume-ai/pic6.webp"]}
            aspectRatio="aspect-[4/5]"
            href="https://resume-ai-web-delta.vercel.app/"
          />

          <ProjectCard
            title="MINT CARE DENTISTRY"
            category="Dentistry Website"
            tags={["24/7 Chatbot", "Branding", "Full Stack Development"]}
            images={["/images/optimized/mint-care-dentistry/pic1.webp", "/images/optimized/mint-care-dentistry/pic2.webp", "/images/optimized/mint-care-dentistry/pic3.webp", "/images/optimized/mint-care-dentistry/pic4.webp", "/images/optimized/mint-care-dentistry/pic5.webp", "/images/optimized/mint-care-dentistry/pic6.webp"]}
            aspectRatio="aspect-[3/4]"
            className="mt-0 md:mt-16"
            href="https://mint-care-dentistry.vercel.app/"
          />

          <ProjectCard
            title="PORTFOLIO SITES"
            category="Branding"
            tags={["Portfolio Design", "Framer Motion", "Landing Page"]}
            images={["/images/optimized/portfolio-sites/pic1.webp", "/images/optimized/portfolio-sites/pic2.webp", "/images/optimized/portfolio-sites/pic3.webp", "/images/optimized/portfolio-sites/pic4.webp", "/images/optimized/portfolio-sites/pic5.webp", "/images/optimized/portfolio-sites/pic6.webp"]}
            aspectRatio="aspect-[4/5]"
            className="mt-0 md:-mt-12"
            href="http://ak-portfolio-site.vercel.app/"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-32 px-4 md:px-12 bg-black border-t border-white/10">
        <h2 className="text-[10vw] md:text-[8vw] font-thin uppercase tracking-tight mb-10 md:mb-20 opacity-90 leading-none">
          SERVICES
        </h2>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceTile
              key={service.title}
              service={service}
              index={index}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </section>


      <section
        ref={aiSectionRef}
        className="relative min-h-fit lg:min-h-screen py-12 sm:py-20 lg:py-0 bg-black overflow-hidden flex flex-col lg:flex-row items-center"
      >
        {/* Background/Left Visual */}
        <div className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:w-1/2 overflow-hidden h-full">
          <motion.div
            style={{ y: aiImageY, scale: aiImageScale }}
            className="absolute inset-0 w-full h-full scale-110"
          >
            <Image
              src="/ai-vision.png"
              alt="AI Perspective"
              fill
              className="object-cover opacity-25 sm:opacity-40 lg:opacity-60 grayscale brightness-[0.25] sm:brightness-[0.4] lg:brightness-[0.7]"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          {/* Gradients to blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
          <div className="absolute inset-0 bg-black/60 lg:bg-transparent z-10" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent to-black z-10" />
        </div>

        {/* Content Right */}
        <div className="w-full lg:w-1/2 lg:ml-auto px-6 md:px-12 lg:px-20 z-20 py-8 lg:py-16">
          <motion.div
            style={{ opacity: aiTextOpacity }}
            className="w-full lg:max-w-2xl"
          >
            <div className="flex flex-col gap-8 md:gap-12">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-400">INTELLIGENT ECOSYSTEMS</span>
                </div>
                <h3 className="text-white text-[11vw] sm:text-[8vw] lg:text-[7vw] font-thin uppercase tracking-tight leading-none opacity-95">
                  AI Tools
                </h3>
              </div>

              <div className="space-y-6 md:space-y-10">
                <h4 className="text-white text-xl sm:text-2xl lg:text-3xl font-light leading-[1.3] tracking-tight uppercase">
                  Precision-engineered <span className="text-white font-medium">software solutions</span> and disruptive <span className="text-white font-medium">AI-integrated ecosystems</span>.
                </h4>

                <p className="text-zinc-400 text-sm sm:text-base lg:text-lg font-light leading-relaxed tracking-normal max-w-xl">
                  Meticulously tailored to the absolute uniqueness and vision of your business. We build intelligent architectures that automate complexity, accelerate performance, and scale with your growth, ensuring a future-proof competitive advantage.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2 md:pt-4">
                <AgencyButton text="DISCUSS THE PROJECT" onClick={openContact} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial & Stats Section moved from before AI Section */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-black overflow-hidden relative border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            {/* Left: Project Preview Card */}
            <div className="w-full lg:w-[38%] relative group">
              <div className="relative aspect-[16/9] lg:aspect-[1.3/1] overflow-hidden shadow-2xl bg-zinc-900 border border-white/10 rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={testimonials[testimonialIndex].image}
                      alt="Project Preview"
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                      sizes="(max-width: 1024px) 100vw, 38vw"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right: Testimonial Card */}
            <div className="w-full lg:w-[62%] flex flex-col justify-between py-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Minimalist Quote Mark */}
                  <div className="absolute -top-6 -left-3 md:-top-10 md:-left-6 text-zinc-900 text-[80px] md:text-[130px] font-serif leading-none select-none -z-10 opacity-20">
                    “
                  </div>

                  <p className="text-[15px] sm:text-[18px] md:text-xl font-light text-zinc-300 leading-relaxed tracking-tight mb-5 max-w-2xl relative z-10">
                    {testimonials[testimonialIndex].quote}
                  </p>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-white">
                      {testimonials[testimonialIndex].author}
                    </span>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
                      {testimonials[testimonialIndex].role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* High-Impact Stats */}
              <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between lg:items-end gap-8">
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-tighter text-white leading-none mb-1.5">
                    {testimonials[testimonialIndex].stat}
                  </h3>
                  <p className="text-[9px] md:text-xs font-bold uppercase text-zinc-500 tracking-[0.3em]">
                    {testimonials[testimonialIndex].statSub}
                  </p>
                </div>

                {/* Pagination Indicators - Minimalist Style */}
                <div className="flex gap-3 pb-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTestimonialIndex(idx)}
                      className="group flex flex-col gap-1.5"
                    >
                      <div className={`h-[1px] transition-all duration-500 ${testimonialIndex === idx ? 'w-8 md:w-10 bg-white' : 'w-4 md:w-5 bg-white/20 group-hover:bg-white/40'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-32 px-4 md:px-12 bg-black flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="hidden lg:block lg:w-1/3 group">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-white/2 rounded-[2rem] -z-10 group-hover:bg-white/5 transition-colors duration-700" />

            <div className="bg-white/[0.03] backdrop-blur-3xl p-12 flex flex-col justify-between min-h-[450px] border border-white/10 rounded-[2rem] shadow-2xl transition-all duration-700 group-hover:border-white/20">
              <div>
                <div className="relative mb-12">
                  <div className="absolute -inset-4 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-700" />

                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 shadow-xl transition-transform duration-700 group-hover:scale-110 overflow-hidden p-3">
                    <Image
                      src="/logo-faq.png"
                      alt="FAQ Logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                      style={{ width: 'auto', height: 'auto' }}
                      sizes="64px"
                    />
                  </div>
                </div>

                <h2 className="text-5xl md:text-6xl font-thin tracking-tighter text-white/90 leading-[0.9] uppercase mb-6 group-hover:text-white transition-colors duration-700">
                  LET&apos;S<br />TALK
                </h2>
                <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 transition-all duration-700" />
              </div>

              <div className="flex items-center gap-3">
                <AgencyButton text="BOOK A CALL" onClick={openContact} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: FAQ Tiles */}
        <div className="lg:w-2/3 flex flex-col">
          <h2 className="text-[10vw] md:text-[8vw] font-thin uppercase tracking-tight mb-10 md:mb-16 opacity-90 leading-none">
            FAQ
          </h2>

          <div className="flex flex-col">
            {[
              { q: "What is the price for development?", a: "Pricing varies based on project complexity, features, and timeline. Contact us for a custom quote." },
              { q: "What terms do we offer?", a: "We offer flexible terms including fixed-price projects and dedicated team models." },
              { q: "What we are offering for website promotion?", a: "We provide SEO, PPC, and content strategy to boost your online presence." },
              { q: "How long does a typical project take?", a: "Timelines depend on scope, but most projects take between 4 to 12 weeks." },
              { q: "Do you provide ongoing support?", a: "Yes, we offer several maintenance and support packages to keep your platform running smoothly." },
              { q: "Can you help with branding and design?", a: "Absolutely. Our design team can help create a cohesive brand identity and stunning UI/UX." }
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </div>
  );
}
