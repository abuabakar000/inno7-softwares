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

          <div className="mt-4">
            <AgencyButton text="View Service Details" href={service.link} className="w-full justify-between" />
          </div>
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
            <AgencyButton text="View Full Service" href={service.link} />
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

            <div className="flex items-center gap-3 px-6 pb-12 w-full">
              <AgencyButton text="DISCUSS THE PROJECT" onClick={openContact} className="w-full" />
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
          <ProjectCard
            title="EUDUCO"
            category="Distribution company"
            tags={["UX/UI Design", "Front end", "Back end"]}
            image="/portfolio_project_1_1773957776150.png"
            aspectRatio="aspect-[16/11]"
          />

          <ProjectCard
            title="WISH FLOWERS"
            category="Flower delivery"
            tags={["UX/UI Design", "Front end", "Back end"]}
            image="/portfolio_project_2_1773957793433.png"
            aspectRatio="aspect-[3/4]"
            className="mt-0 md:mt-16"
          />

          <ProjectCard
            title="BASE1"
            category="Website"
            tags={["UX/UI Design", "Front end"]}
            image="/portfolio_project_3_1773957812597.png"
            aspectRatio="aspect-[4/5]"
            className="mt-0 md:-mt-12"
          />

          <ProjectCard
            title="Project Alpha"
            category="Coming Soon"
            tags={["Development"]}
            aspectRatio="aspect-[16/10]"
            isPlaceholder
          />

          <ProjectCard
            title="Project Beta"
            category="Coming Soon"
            tags={["Branding"]}
            aspectRatio="aspect-[3/4]"
            className="mt-0 md:mt-16"
            isPlaceholder
          />

          <ProjectCard
            title="Project Gamma"
            category="Coming Soon"
            tags={["UI/UX"]}
            aspectRatio="aspect-[4/5]"
            className="mt-0 md:-mt-12"
            isPlaceholder
          />
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
            <div className="mb-4">
              <h3 className="text-white text-[9vw] md:text-[7.5vw] font-thin uppercase tracking-tight  leading-none">
                AI Tools
              </h3>
            </div>

            <h4 className="text-white text-[7vw] md:text-2xl font-normal tracking-tight mb-12 leading-[1.2] uppercase max-w-2xl">
              Precision-engineered software solutions and disruptive AI-integrated ecosystems meticulously tailored to the absolute uniqueness and vision of your business.
            </h4>

            <div className="flex items-center gap-4">
              <AgencyButton text="DISCUSS THE PROJECT" onClick={openContact} />
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
        <div className="hidden lg:block lg:w-1/3 group">
          <div className="relative h-full">
            {/* Ambient Glow Mask */}
            <div className="absolute inset-0 bg-white/2 rounded-[2rem] -z-10 group-hover:bg-white/5 transition-colors duration-700" />
            
            <div className="bg-white/[0.03] backdrop-blur-3xl p-12 flex flex-col justify-between min-h-[450px] border border-white/10 rounded-[2rem] shadow-2xl transition-all duration-700 group-hover:border-white/20">
              <div>
                <div className="relative mb-12">
                  {/* Subtle Logo Shine */}
                  <div className="absolute -inset-4 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-700" />
                  
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 shadow-xl transition-transform duration-700 group-hover:scale-110">
                    <span className="text-black text-2xl font-black italic tracking-tighter">R</span>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-600 rounded-full mt-2 ml-2" />
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

      <CTASection />

      <Footer />
    </div>
  );
}
