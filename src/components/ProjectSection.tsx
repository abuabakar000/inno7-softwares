'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectSectionProps {
  projectTitle: string;
  projectSubtitle?: string;
  description: string;
  image: string;
  tag: string;
}

export default function ProjectSection({
  projectTitle,
  projectSubtitle,
  description,
  image,
  tag
}: ProjectSectionProps) {
  return (
    <section className="px-6 md:px-12 py-32 border-t border-white/10 bg-black overflow-hidden">
      <h2 className="text-[10vw] md:text-[5vw] font-thin uppercase leading-none tracking-tighter mb-20 text-white">
        OUR PROJECTS
      </h2>

      <div className="relative w-full bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden p-8 md:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          {/* Left Side: Info */}
          <div className="flex flex-col h-full justify-between py-4">
            <div>
              <div className="flex items-baseline gap-4 mb-8">
                <h3 className="text-4xl md:text-5xl font-light uppercase tracking-tighter text-white">
                  {projectTitle}
                </h3>

              </div>

              <p className="text-md md:text-lg text-zinc-400 font-base max-w-xl mb-12">
                {description}
              </p>
            </div>

            <div className="mt-auto">
              <button className="group flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                PROJECT REVIEW
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side: Mockup */}
          <div className="relative group">
            <div className="relative aspect-[16/11] bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={image}
                alt={projectTitle}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Tag Badge */}

            </div>

            {/* Subtle glow behind mockup */}
            <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
