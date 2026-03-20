'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
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

interface FAQSectionProps {
  faqs: { q: string; a: string }[];
  onContactClick: () => void;
}

export default function FAQSection({ faqs, onContactClick }: FAQSectionProps) {
  return (
    <section className="py-32 px-6 md:px-12 bg-black flex flex-col lg:flex-row gap-20 border-t border-white/10">
      {/* Left: Sidebar */}
      <div className="lg:w-1/3">
        <div className="bg-zinc-900/40 p-12 flex flex-col justify-between min-h-[450px] border border-white/5 shadow-2xl">
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
              onClick={onContactClick}
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
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
