'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const serviceCategories = [
  {
    title: "WEBSITE DEVELOPMENT",
    href: "/services/website-development",
    subLinks: ["Next.js Development", "Node.js Backend", "React Applications"]
  },
  {
    title: "BRANDING AND DESIGN",
    href: "/services/branding-design",
    subLinks: ["Logo and Guidelines", "Landing Page Design", "Visual Identity"]
  },
  {
    title: "CRM SYSTEMS",
    href: "/services/crm-systems",
    subLinks: ["Real Estate CRMs", "Sales Automation", "Data Migration"]
  },
  {
    title: "SaaS SOLUTIONS",
    href: "/services/saas-solutions",
    subLinks: ["Product Strategy", "Subscription Billing", "Cloud Infrastructure"]
  },
  {
    title: "AI AGENTS / CHATBOT",
    href: "/services/ai-agents-chatbot",
    subLinks: ["LLM Customization", "AI Automation", "Chatbot Systems"]
  },
  {
    title: "APPLICATION DEVELOPMENT",
    href: "/services/app-platforms",
    subLinks: ["iOS Apps", "Android Apps", "Native Strategy"]
  },
  {
    title: "WEBSITE SUPPORT",
    href: "/services/website-support",
    subLinks: ["Maintenance", "Uptime Monitoring", "Performance Tuning"]
  },
  {
    title: "E-COMMERCE",
    href: "/services/ecommerce-stores",
    subLinks: ["Shopify Plus", "Headless Commerce", "Custom Checkout"]
  },
  {
    title: "SEO OPTIMIZATION",
    href: "/services/seo-optimization",
    subLinks: ["Keyword Strategy", "Technical SEO", "Content Planning"]
  }
];

export default function MegaMenu({ isOpen }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, pointerEvents: 'none' }}
      animate={{
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : -20,
        pointerEvents: isOpen ? 'auto' : 'none'
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-3xl border-b border-white/5 shadow-2xl overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row gap-16">
        {/* Left: Section Label */}
        <div className="md:w-1/6">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-black tracking-[0.3em] text-red-600 uppercase">Capabilities</span>
            <h2 className="text-xl font-thin tracking-tighter text-white uppercase">OUR SERVICES</h2>
          </div>
        </div>

        {/* Middle: Cinematic Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
          {serviceCategories.map((cat, idx) => (
            <div key={cat.title} className="group cursor-pointer">
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-bold text-white/40 tracking-widest">{`0${idx + 1}`}</span>
                <Link href={cat.href} className="block">
                  <h3 className="text-sm md:text-base font-thin tracking-tighter text-white/90 group-hover:text-white transition-all duration-500 leading-tight pr-4">
                    {cat.title}
                  </h3>
                  <div className="h-px w-0 group-hover:w-full bg-white/40 transition-all duration-700 mt-2" />
                </Link>
                <p className="text-[10px] text-white/60 font-medium uppercase tracking-wider">{cat.subLinks[0]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: New Project Visual */}
        <div className="hidden lg:flex flex-col gap-4 w-1/4 shrink-0 bg-[#121212] p-8 rounded-2xl border border-white/5 shadow-2xl">
          <h2 className="text-xl font-base tracking-tighter text-white uppercase leading-none">
            NEW PROJECT
          </h2>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden group border border-white/5">
            <Image
              src="/portfolio_project_1_1773957776150.png" // Placeholder, user will update later
              alt="New Project"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 transition-all"
              sizes="(max-width: 1200px) 0vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
