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
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      // Subsequent images cycle every 1.5s
      timer = setTimeout(cycleImages, 1500);
    };

    // First transition happens after exactly 0.5s
    timer = setTimeout(cycleImages, 500);

    return () => clearTimeout(timer);
  }, [isHovered, allImages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPlaceholder ? (
        <div className={`relative ${aspectRatio} overflow-hidden bg-zinc-900/50 mb-6 border border-white/5 flex items-center justify-center`}>
          <span className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">Image Coming Soon</span>
        </div>
      ) : (
        <div className={`relative ${aspectRatio} overflow-hidden bg-zinc-950 mb-6 group-hover:shadow-2xl transition-shadow duration-500`}>
          {/* Persistent Thumbnail Background */}
          {!isPlaceholder && allImages.length > 0 && (
            <div className="absolute inset-0 opacity-20 blur-[2px] scale-105 saturate-150">
              <Image
                src={allImages[0]}
                alt="Project context background"
                fill
                className="object-cover"
              />
            </div>
          )}

          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: currentIndex === 0 ? 1 : 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`absolute inset-0 flex items-center justify-center ${currentIndex === 0 ? '' : 'p-4'}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={allImages[currentIndex]}
                  alt={`${title} - ${currentIndex + 1}`}
                  fill
                  sizes={sizes}
                  className={`${currentIndex === 0 ? 'object-cover' : 'object-contain'} relative z-20`}
                  priority={currentIndex === 0}
                />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-transparent transition-colors duration-500 z-30 pointer-events-none" />
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
    </motion.div>
  );
}
