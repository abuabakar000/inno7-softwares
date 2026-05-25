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
        <p className="text-xs sm:text-[14px] md:text-base text-zinc-400/80 leading-relaxed max-w-2xl">
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
    <section className="py-16 md:py-32 px-4 md:px-12 bg-black border-t border-white/10">
      <div className="flex flex-col">
        <h2 className="text-[10vw] md:text-[8vw] font-thin uppercase tracking-tight mb-10 md:mb-16 opacity-90 leading-none text-left">
          FAQs
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
