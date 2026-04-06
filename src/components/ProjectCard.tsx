'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  tags: string[];
  images?: string[]; // Multiple images for hover cycle
  image?: string;   // Fallback for single image
  aspectRatio?: string;
  className?: string;
  isPlaceholder?: boolean;
  sizes?: string;
  href?: string;
}

export default function ProjectCard({
  title,
  category,
  tags,
  images = [],
  image,
  aspectRatio = 'aspect-[16/11]',
  className = '',
  isPlaceholder = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  href
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Combine image and images for a unified array
  const allImages = images.length > 0 ? images : (image ? [image] : []);

  useEffect(() => {
    if (!isHovered || allImages.length <= 1) {
      setCurrentIndex(0);
      return;
    }

    let timer: NodeJS.Timeout;

    const cycleImages = () => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
      // Subsequent images cycle every 1.2s for rhythmic energy
      timer = setTimeout(cycleImages, 1200);
    };

    // First transition happens almost instantly (200ms) for high-response feel
    timer = setTimeout(cycleImages, 200);

    return () => clearTimeout(timer);
  }, [isHovered, allImages]);

  const cardContent = (
    <>
      {isPlaceholder ? (
        <div className={`relative ${aspectRatio} overflow-hidden bg-zinc-900/50 mb-6 border border-white/5 flex items-center justify-center`}>
          <span className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">Image Coming Soon</span>
        </div>
      ) : (
        <div className={`relative ${aspectRatio} overflow-hidden bg-zinc-950 mb-6 group-hover:shadow-2xl transition-shadow duration-500`}>
          {/* 1. Preload Component: Force cache all cycle images in WebP */}
          <div className="absolute inset-0 z-0 opacity-0 pointer-events-none -translate-x-full overflow-hidden">
            {allImages.map((img, i) => {
              // Convert to optimized path if not already
              const optimizedSrc = img.startsWith('/images/optimized') ? img : `/images/optimized${img.replace(/\.[^/.]+$/, ".webp")}`;
              return (
                <Image
                  key={`preload-${i}`}
                  src={optimizedSrc}
                  alt=""
                  width={10}
                  height={10}
                  priority={i < 4} // Preload the whole sequence
                />
              );
            })}
          </div>

          {/* 2. Glassmorphism Ambient Glow: Blurred background logic */}
          <AnimatePresence>
            {isHovered && currentIndex > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 blur-3xl saturate-150 scale-125"
              >
                <Image
                  src={allImages[currentIndex].startsWith('/images/optimized') ? allImages[currentIndex] : `/images/optimized${allImages[currentIndex].replace(/\.[^/.]+$/, ".webp")}`}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 backdrop-blur-xl" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3. Persistent Foundation: Always shows the main image */}
          {!isPlaceholder && allImages.length > 0 && (
            <div className="absolute inset-0 z-0">
              <Image
                src={allImages[0]}
                alt={`${title} - Base`}
                fill
                className="object-cover"
                sizes={sizes}
                priority
              />
            </div>
          )}

          {/* 4. Dynamic Cycling Layer: High-fidelity focus */}
          <AnimatePresence mode="popLayout">
            {isHovered && currentIndex > 0 && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center p-4 z-20"
              >
                <div className="relative w-full h-full shadow-2xl">
                  <Image
                    src={allImages[currentIndex].startsWith('/images/optimized') ? allImages[currentIndex] : `/images/optimized${allImages[currentIndex].replace(/\.[^/.]+$/, ".webp")}`}
                    alt={`${title} - ${currentIndex + 1}`}
                    fill
                    sizes={sizes}
                    className="object-contain relative z-20"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-30 pointer-events-none" />

          {/* Magnetic 'Link' Circle */}
          <motion.div
            className="pointer-events-none absolute z-50 flex items-center justify-center bg-white rounded-full w-24 h-24 mix-blend-normal shadow-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0,
              x: mousePos.x - 48, // Half of width (w-24 = 96px / 2 = 48)
              y: mousePos.y - 48, // Half of height
            }}
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
        </div>
      )}
      
      <div className="flex justify-between items-start border-t border-white/10 pt-4">
        <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter ${isPlaceholder ? 'text-zinc-600' : ''}`}>
          {title}
        </h3>
        <div className="text-right">
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isPlaceholder ? 'text-zinc-400' : 'text-white'}`}>
            {category}
          </p>
          <div className={`flex flex-col text-[8px] uppercase tracking-widest font-bold ${isPlaceholder ? 'text-zinc-500 opacity-40' : 'text-zinc-500 opacity-60'}`}>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="contents">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}
