import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AgencyButton from '@/components/AgencyButton';

interface ProjectSectionProps {
  projectTitle: string;
  projectSubtitle?: string;
  description: string;
  image: string;
  tag: string;
  href?: string;
}

export default function ProjectSection({
  projectTitle,
  projectSubtitle,
  description,
  image,
  tag,
  href
}: ProjectSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="px-6 md:px-12 pt-20 pb-40 md:py-40 border-t border-white/10 bg-black overflow-hidden">
      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_1fr] gap-6 lg:gap-y-4 lg:gap-x-24 items-start">
          {/* 1. Heading (Leading on Mobile and Desktop) */}
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h2 className="text-4xl md:text-6xl font-thin uppercase leading-[0.9] tracking-tighter text-white/90 mb-4">
              Related Projects
            </h2>
          </div>

          {/* 2. Image Showcase (Second on Mobile, Second Column on Desktop) */}
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative group shadow-2xl">
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                <div 
                  className="relative aspect-[16/10] bg-[#0a0a0a] rounded-sm overflow-hidden border border-white/5"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onMouseMove={handleMouseMove}
                >
                  <Image
                    src={image}
                    alt={projectTitle}
                    fill
                    className="object-cover opacity-100 transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1)"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  />
                  
                  {/* Magnetic 'Link' Circle */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        className="pointer-events-none absolute z-50 flex items-center justify-center bg-white rounded-full w-24 h-24 mix-blend-normal shadow-xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          x: mousePos.x - 48,
                          y: mousePos.y - 48,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          type: "spring",
                          damping: 25,
                          stiffness: 250,
                          mass: 0.5,
                          opacity: { duration: 0.2 }
                        }}
                      >
                        <div className="flex items-center gap-2 text-black font-medium tracking-tight">
                          <span className="text-sm uppercase font-bold tracking-widest">Link</span>
                          <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </a>
            ) : (
              <div 
                className="relative aspect-[16/10] bg-[#0a0a0a] rounded-sm overflow-hidden border border-white/5"
              >
                <Image
                  src={image}
                  alt={projectTitle}
                  fill
                  className="object-cover opacity-100 transition-all duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1)"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
            )}

            {/* Ambient decorative elements */}
            <div className={`absolute -top-20 -right-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full transition-opacity duration-1000 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full transition-opacity duration-1000 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          </div>

          {/* 3. Description & CTA (Third on Mobile, Below Heading on Desktop) */}
          <div className="flex flex-col h-full justify-start order-3 lg:col-start-1 lg:row-start-2">
            <div className="mb-8 md:mb-12">
              <p className="text-sm sm:text-base md:text-xl text-white/60 font-light max-w-xl leading-relaxed">
                {description}
              </p>
            </div>

            <div className="mt-8">
              <AgencyButton text="SHOW MORE PROJECTS" href="/portfolio" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
