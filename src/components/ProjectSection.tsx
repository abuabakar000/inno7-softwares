'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AgencyButton from '@/components/AgencyButton';

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
    <section className="px-6 md:px-12 pt-20 pb-40 md:py-40 border-t border-white/10 bg-black overflow-hidden group">
      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_1fr] gap-6 lg:gap-y-12 lg:gap-x-24 items-start">
          {/* 1. Heading (Leading on Mobile and Desktop) */}
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-thin uppercase leading-[0.9] tracking-tighter text-white mb-4 lg:mb-5 transition-transform duration-700 group-hover:translate-x-2">
              {projectTitle}
            </h3>
          </div>

          {/* 2. Image Showcase (Second on Mobile, Second Column on Desktop) */}
          <div className="relative overflow-hidden group/image perspective-1000 order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="relative aspect-[16/10] bg-[#0a0a0a] rounded-sm overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src={image}
                alt={projectTitle}
                fill
                className="object-cover opacity-70 scale-100 group-hover/image:scale-110 group-hover/image:opacity-100 transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1)"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/5 opacity-60 pointer-events-none" />
              
              {/* Bottom detail indicator */}
              <div className="absolute bottom-10 left-10 overflow-hidden">
                <div className="flex items-center gap-3 translate-y-full group-hover/image:translate-y-0 transition-transform duration-700 delay-100">
                  <div className="w-8 h-[1px] bg-white/40" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Details</span>
                </div>
              </div>
            </div>

            {/* Ambient decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-1000" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-1000" />
          </div>

          {/* 3. Description & CTA (Third on Mobile, Below Heading on Desktop) */}
          <div className="flex flex-col h-full justify-start order-3 lg:col-start-1 lg:row-start-2">
            <div className="mb-12">
              <p className="text-lg md:text-xl text-white/60 font-light max-w-xl leading-relaxed">
                {description}
              </p>
            </div>

            <div className="mt-8">
              <AgencyButton text="PROJECT REVIEW" href="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
