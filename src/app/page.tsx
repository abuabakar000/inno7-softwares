"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import MagneticButton from "@/components/MagneticButton";
import Footer from "@/components/Footer";
import { useContact } from "@/context/ContactContext";

interface Service {
  title: string;
  subServices: string[];
  image1: string;
  image2: string;
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
        className="relative z-10 flex items-center justify-between py-6 cursor-pointer group hover:opacity-80 transition-all px-4"
      >
        <h3 className="text-[15px] md:text-base font-medium tracking-tight text-white group-hover:translate-x-2 transition-transform">
          {question}
        </h3>
        <div className={`transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
      <div className={`relative z-10 px-4 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-40 pb-8" : "max-h-0"}`}>
        <p className="text-[15px] md:text-base text-zinc-400/80 leading-relaxed max-w-2xl">
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative border-b border-white/10 transition-all duration-500 overflow-hidden ${isOpen ? "bg-white/[0.03] py-6 md:py-10" : "hover:bg-white/[0.01]"
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
        className="relative z-10 flex items-center justify-between py-6 md:py-8 cursor-pointer px-4 transition-all"
      >
        <div className="flex items-center gap-4 md:gap-8">
          <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:w-8 md:h-8"
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
          <h3 className={`font-light tracking-tight transition-all duration-300 uppercase ${isOpen ? "text-xl md:text-2xl text-white" : "text-xl md:text-4xl text-white/40"}`}>
            {service.title}
          </h3>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-xl md:text-2xl font-light opacity-60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2 md:gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                animate={isOpen ? {
                  height: [16, 24, 16],
                  opacity: [0.2, 0.5, 0.2],
                } : {
                  height: 16,
                  opacity: 0.1,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
                className="w-[1px] bg-white shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <div
        className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 px-4 transition-all duration-700 ease-in-out ${isOpen ? "max-h-[1500px] opacity-100 pb-12" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        {/* Mobile View Inspiration Stack */}
        <div className="flex flex-col gap-8 md:hidden">
          {/* Main Image */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={service.image1}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Repeated Title */}
          <h4 className="text-2xl font-medium tracking-tight text-white uppercase">
            {service.title}
          </h4>

          {/* Sub-services Grid */}
          <div className="grid grid-cols-1 gap-y-5">
            {service.subServices.map((sub) => (
              <div key={sub} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full border border-white/40 mt-2 shrink-0" />
                <span className="text-lg font-light text-white/70">
                  {sub}
                </span>
              </div>
            ))}
          </div>

          <Link href={service.link || "#"} className="mt-4">
            <button className="bg-white text-black w-full py-5 rounded-full text-xs font-black uppercase tracking-widest">
              View Service Details
            </button>
          </Link>
        </div>

        {/* Desktop View (Maintain current structure or refine slightly) */}
        <div className="hidden md:flex flex-col justify-between h-full py-4">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {service.subServices.slice(0, 4).map((sub) => (
              <div key={sub} className="flex items-center gap-4 group/sub cursor-pointer">
                <div className="w-2 h-2 rounded-full border border-white/40 group-hover/sub:bg-white transition-colors" />
                <span className="text-xl opacity-60 group-hover/sub:opacity-100 transition-opacity">
                  {sub}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-16 flex items-center gap-4">
            <Link href={service.link || "#"}>
              <MagneticButton>
                <button className="bg-white text-black px-12 py-6 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all uppercase tracking-widest cursor-pointer">
                  View Full Service
                </button>
              </MagneticButton>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex relative justify-end h-[450px]">
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group/image">
            <Image
              src={service.image1}
              alt="Mockup"
              fill
              className="object-cover opacity-90 transition-transform duration-700 group-hover/image:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
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
      image: "/testimonial-mockup.png",
      quote: "REDSTONE delivered an exceptional website representing the client's business and services. The site was user-friendly, visually appealing, and well-planned. The team's responsibility and cooperation in meeting all requirements with precision were remarkable...",
      author: "Olena Dubkova",
      role: "Marketing Specialist, UAM Power",
      stat: "400+",
      statSub: "Satisfied Clients"
    },
    {
      image: "/testimonial-mockup-2.png",
      quote: "Sitte Agency transformed our digital presence with a stunning, high-performance platform. Their attention to detail and creative direction was exactly what we needed.",
      author: "James Wilson",
      role: "Founder, Peak AI",
      stat: "150%+",
      statSub: "Revenue Growth"
    },
    {
      image: "/testimonial-mockup-3.png",
      quote: "The mobile-first approach and lightning-fast performance has significantly increased our conversion rates. A truly world-class team.",
      author: "Sarah Chen",
      role: "Product Lead, Zenith",
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
  const aiTextOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);


  const services: Service[] = [
    {
      title: "Website development",
      subServices: [
        "Angular Website Development",
        "Node.js Website Development",
        "Vue.js Website Development",
        "Laravel Website Development",
        "React Website Development",
        "WordPress Website Development",
      ],
      image1: "/client1.png",
      image2: "/client2.png",
      link: "/services/website-development",
    },
    {
      title: "Branding and design",
      subServices: [
        "Logo Design",
        "Brand Identity",
        "Visual Guidelines",
        "Typography",
        "Color Palette",
        "Marketing Materials",
      ],
      image1: "/client2.png",
      image2: "/client3.png",
      link: "/services/branding-design",
    },
    {
      title: "CRM systems",
      subServices: [
        "Custom CRM",
        "Salesforce Integration",
        "HubSpot Setup",
        "Data Migration",
        "Automated Workflows",
        "Analytics Dashboard",
      ],
      image1: "/client3.png",
      image2: "/client4.png",
      link: "/services/crm-systems",
    },
    {
      title: "SaaS solutions",
      subServices: [
        "Product Strategy",
        "Architecture Design",
        "Multi-tenancy",
        "Subscription Models",
        "API Development",
        "Scalability",
      ],
      image1: "/client4.png",
      image2: "/client1.png",
      link: "/services/saas-solutions",
    },
    {
      title: "App platforms",
      subServices: [
        "iOS Development",
        "Android Development",
        "Cross-platform (Flutter/RN)",
        "Quality Assurance",
        "App Store Optimization",
        "Maintenance",
      ],
      image1: "/client1.png",
      image2: "/client3.png",
      link: "/services/app-platforms",
    },
    {
      title: "AI integration",
      subServices: [
        "LLM Customization",
        "Predictive Analytics",
        "Chatbot Development",
        "Automation",
        "Data Processing",
        "Machine Learning",
      ],
      image1: "/client2.png",
      image2: "/client4.png",
      link: "/services/ai-integration",
    },
    {
      title: "E-commerce stores",
      subServices: [
        "Shopify Setup",
        "WooCommerce",
        "Custom Checkout",
        "Payment Gateways",
        "Inventory Management",
        "Store SEO",
      ],
      image1: "/client3.png",
      image2: "/client2.png",
      link: "/services/ecommerce-stores",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative flex flex-col justify-center min-h-screen pt-20 px-0 md:px-12 overflow-hidden">
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
                  className="px-1 object-cover"
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
            <p className="text-[12px] opacity-80 font-medium tracking-tight whitespace-nowrap">Trusted by 150+ clients</p>
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
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl bg-zinc-900">
              <video
                src="/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center gap-3 px-6 pb-12">
              <button
                onClick={openContact}
                className="bg-white text-black px-10 py-6 rounded-full text-xs font-bold uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-xl whitespace-nowrap"
              >
                DISCUSS THE PROJECT
              </button>
              <button
                onClick={openContact}
                className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl shrink-0"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Responsive Visibility */}
        <div className="mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 pb-12 transition-all px-6 md:px-0">
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
              <p className="text-sm opacity-60 font-medium tracking-wide">Trusted by clients</p>
            </div>
          </div>

          {/* Description - Hiding on smaller screens per user request */}
          <div className="max-w-md md:text-right hidden md:block">
            <p className="text-lg md:text-xl font-medium leading-tight opacity-80">
              We develop online stores, CRM systems, SaaS solutions, and app platforms – integrating AI into processes and business solutions.
            </p>
          </div>
        </div>
      </main>

      {/* Portfolio Section */}
      <section className="py-24 px-6 md:px-12 bg-black border-t border-white/10">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 mb-16 md:mb-24 overflow-hidden">
          <h2 className="text-[10vw] md:text-[8vw] font-thin uppercase leading-none tracking-tighter whitespace-nowrap">
            WE ARE
          </h2>
          <div className="relative w-[30vw] h-[18vw] md:w-[15vw] md:h-[8vw] overflow-hidden shadow-2xl rotate-[-2deg] bg-zinc-900 border border-white/10 shrink-0">
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-[10vw] md:text-[8vw] font-thin uppercase leading-none tracking-tighter whitespace-nowrap">
            PROUD
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Project 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col group"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900 mb-6">
              <Image
                src="/portfolio_project_1_1773957776150.png"
                alt="EUDUCO Project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="flex justify-between items-start border-t border-white/10 pt-4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">EUDUCO</h3>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Distribution company</p>
                <div className="flex flex-col text-[8px] uppercase tracking-widest text-zinc-500 font-bold opacity-60">
                  <span>UX/UI Design</span>
                  <span>Front end</span>
                  <span>Back end</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col group mt-0 md:mt-16"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-6">
              <Image
                src="/portfolio_project_2_1773957793433.png"
                alt="WISH FLOWERS Project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="flex justify-between items-start border-t border-white/10 pt-4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">WISH FLOWERS</h3>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Flower delivery</p>
                <div className="flex flex-col text-[8px] uppercase tracking-widest text-zinc-500 font-bold opacity-60">
                  <span>UX/UI Design</span>
                  <span>Front end</span>
                  <span>Back end</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col group mt-0 md:-mt-12"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-6">
              <Image
                src="/portfolio_project_3_1773957812597.png"
                alt="BASE1 Project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="flex justify-between items-start border-t border-white/10 pt-4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter">BASE1</h3>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Website</p>
                <div className="flex flex-col text-[8px] uppercase tracking-widest text-zinc-500 font-bold opacity-60">
                  <span>UX/UI Design</span>
                  <span>Front end</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 4 (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col group"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900/50 mb-6 border border-white/5 flex items-center justify-center">
              <span className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">Image Coming Soon</span>
            </div>
            <div className="flex justify-between items-start border-t border-white/10 pt-4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-zinc-600">Project Alpha</h3>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Coming Soon</p>
                <div className="flex flex-col text-[8px] uppercase tracking-widest text-zinc-500 font-bold opacity-40">
                  <span>Development</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 5 (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col group mt-0 md:mt-16"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900/50 mb-6 border border-white/5 flex items-center justify-center">
              <span className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">Image Coming Soon</span>
            </div>
            <div className="flex justify-between items-start border-t border-white/10 pt-4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-zinc-600">Project Beta</h3>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Coming Soon</p>
                <div className="flex flex-col text-[8px] uppercase tracking-widest text-zinc-500 font-bold opacity-40">
                  <span>Branding</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 6 (Placeholder) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col group mt-0 md:-mt-12"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900/50 mb-6 border border-white/5 flex items-center justify-center">
              <span className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">Image Coming Soon</span>
            </div>
            <div className="flex justify-between items-start border-t border-white/10 pt-4">
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-zinc-600">Project Gamma</h3>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Coming Soon</p>
                <div className="flex flex-col text-[8px] uppercase tracking-widest text-zinc-500 font-bold opacity-40">
                  <span>UI/UX</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-black border-t border-white/10">
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
        className="relative min-h-screen bg-black overflow-hidden flex flex-col lg:flex-row items-center"
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
              className="object-cover opacity-80 lg:opacity-60 grayscale lg:brightness-[0.7]"
              priority
            />
          </motion.div>
          {/* Gradients to blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-black/40 lg:bg-transparent z-10" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent to-black z-10" />
        </div>

        {/* Content Right */}
        <div className="w-full lg:w-1/2 lg:ml-auto px-6 md:px-12 lg:px-20 z-20 py-24 lg:py-0">
          <motion.div
            style={{ opacity: aiTextOpacity }}
            className="max-w-lg mt-auto lg:mt-0"
          >
            <div className="mb-12">
              <h3 className="text-white text-[10vw] md:text-[8vw] font-thin uppercase tracking-tight mb-6 leading-none">
                AI Tools:
              </h3>
              <p className="text-zinc-500 text-[6.5vw] md:text-3xl font-light tracking-tight leading-tight space-y-1">
                Content Writing.<br />
                Image Generation.<br />
                Optimization.
              </p>
            </div>

            <h4 className="text-white text-[9vw] md:text-3xl font-thin tracking-tight mb-12 leading-[0.9] uppercase">
              More Solutions for the<br />
              Uniqueness of Your Business
            </h4>

            <div className="flex items-center gap-4">
              <button
                onClick={openContact}
                className="bg-white text-black px-10 py-6 rounded-full text-xs font-bold uppercase tracking-tight hover:scale-105 active:scale-95 transition-all shadow-xl whitespace-nowrap"
              >
                DISCUSS THE PROJECT
              </button>
              <button
                onClick={openContact}
                className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl shrink-0"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial & Stats Section moved from before AI Section */}
      <section className="py-16 px-6 md:px-12 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-16">
            {/* Left: Mockup Card */}
            <div className="w-full lg:w-[48%] relative group">
              <div className="relative aspect-[1.4/1] overflow-hidden shadow-2xl transition-all duration-700 border border-white/5 mx-auto max-w-lg lg:max-w-none bg-zinc-900/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIndex}
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={testimonials[testimonialIndex].image}
                      alt="Client Project Mockup"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/40 to-transparent" />
              </div>
            </div>

            {/* Right: Testimonial & Stat */}
            <div className="w-full lg:w-[52%] lg:pl-16 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="text-red-600 text-[100px] font-serif leading-none h-[40px] overflow-visible mb-0 flex items-start">
                    <span className="-translate-y-6">“</span>
                  </div>
                  <p className="text-sm font-light text-zinc-100 leading-relaxed tracking-tight mb-6 max-w-sm">
                    {testimonials[testimonialIndex].quote}
                  </p>
                  <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.01em]">
                    <span className="text-white">{testimonials[testimonialIndex].author}</span>
                    <span className="text-zinc-700">|</span>
                    <span className="text-zinc-500 font-sm">{testimonials[testimonialIndex].role}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-14">
                <h3 className="text-4xl md:text-6xl tracking-tighter text-white mb-2 font-thin">
                  100%
                </h3>
                <p className="text-[10px] md:text-xs font-bold uppercase text-zinc-600/80 tracking-widest">
                  Satisfied Clients
                </p>
              </div>
            </div>
          </div>

          {/* Bottom: Progress Loader */}
          <div className="pt-8 relative">
            <div className="flex items-center justify-center gap-4 max-w-sm mx-auto">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className="flex-1 h-[2px] bg-zinc-800 cursor-pointer overflow-hidden relative group"
                >
                  {testimonialIndex === idx && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute inset-0 bg-red-600 origin-left"
                    />
                  )}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-12 bg-black flex flex-col lg:flex-row gap-20">
        {/* Left: Sidebar */}
        <div className="hidden lg:block lg:w-1/3">
          <div className="bg-zinc-900/40  p-12 flex flex-col justify-between min-h-[450px] border border-white/5 shadow-2xl">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 relative">
                <span className="text-black text-3xl font-black italic tracking-tighter">R</span>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-600 rounded-full mt-2 ml-2" />
              </div>
              <h2 className="text-4xl font-light tracking-tight text-white mb-4">
                Let&apos;s talk
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={openContact}
                className="bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
              >
                Book a call
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group/faq">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: FAQ Tiles */}
        <div className="lg:w-2/3 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-thin uppercase tracking-tight mb-16 opacity-90 leading-tight">
            Frequently Asked<br />Questions And Answers
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

      <section className="py-40 px-6 md:px-12 bg-black flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <h2 className="text-[10vw] md:text-[7vw] font-thin leading-[0.9] tracking-tight uppercase">
                LET&apos;S MOVE
              </h2>
              <div className="relative w-[15vw] h-[8vw] md:w-[10vw] md:h-[6vw] overflow-hidden  shadow-2xl">
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
            <h2 className="text-[10vw] md:text-[7vw] font-thin leading-[0.9] tracking-tight uppercase">
              THE WORLD TOGETHER
            </h2>
          </div>

          {/* Exotic Magnetic CTA */}
          <div className="mt-24 flex items-center justify-center">
            <MagneticButton>
              <button className="group relative flex items-center bg-white rounded-full p-2 pl-12 pr-2 overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
                {/* Rolling Text Container */}
                <div className="relative h-6 overflow-hidden mr-6">
                  <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                    <span className="text-black text-lg font-bold uppercase tracking-[0.2em] h-6 flex items-center">
                      Become a client
                    </span>
                    <span className="text-black text-lg font-bold uppercase tracking-[0.2em] h-6 flex items-center">
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
            </MagneticButton>          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
