'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  tags: string[];
  images?: string[];
  image?: string;
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
  const [imagesReady, setImagesReady] = useState(false);
  const preloadedRef = useRef<Set<string>>(new Set());

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const allImages = images.length > 0 ? images : (image ? [image] : []);

  // Native JS preloading — bypasses Next.js image optimization entirely
  // This guarantees the browser has the exact URL cached before hover
  useEffect(() => {
    if (allImages.length <= 1) return;

    let loaded = 0;
    const total = allImages.length;

    allImages.forEach((src) => {
      if (preloadedRef.current.has(src)) {
        loaded++;
        if (loaded >= total) setImagesReady(true);
        return;
      }
      const img = new window.Image();
      img.onload = () => {
        preloadedRef.current.add(src);
        loaded++;
        if (loaded >= total) setImagesReady(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded >= total) setImagesReady(true);
      };
      img.src = src; // Direct URL — no Next.js transformation
    });
  }, [allImages]);

  // Hover cycle — only runs after images are confirmed in browser cache
  useEffect(() => {
    if (!isHovered || allImages.length <= 1) {
      setCurrentIndex(0);
      return;
    }

    let timer: NodeJS.Timeout;

    const cycleImages = () => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
      timer = setTimeout(cycleImages, 1200);
    };

    // Start instantly if images ready, otherwise wait briefly
    timer = setTimeout(cycleImages, imagesReady ? 150 : 400);

    return () => clearTimeout(timer);
  }, [isHovered, allImages, imagesReady]);

  const cardContent = (
    <>
      {isPlaceholder ? (
        <div className={`relative ${aspectRatio} overflow-hidden bg-zinc-900/50 mb-6 border border-white/5 flex items-center justify-center`}>
          <span className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">Image Coming Soon</span>
        </div>
      ) : (
        <div className={`relative ${aspectRatio} overflow-hidden bg-zinc-950 mb-6 group-hover:shadow-2xl transition-shadow duration-500`}>

          {/* 1. Glassmorphism Ambient Glow */}
          <AnimatePresence>
            {isHovered && currentIndex > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 z-[5] overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={allImages[currentIndex]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-3xl saturate-150 scale-125"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 2. Persistent Base Thumbnail — uses Next.js Image for initial priority load */}
          {!isPlaceholder && allImages.length > 0 && (
            <div className="absolute inset-0 z-[1]">
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

          {/* 3. Dynamic Cycling Layer — uses native <img> for guaranteed cache hit */}
          <AnimatePresence mode="popLayout">
            {isHovered && currentIndex > 0 && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center p-4 z-[15]"
              >
                <div className="relative w-full h-full shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={allImages[currentIndex]}
                    alt={`${title} - ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-[25] pointer-events-none" />

          {/* Magnetic 'Link' Circle */}
          <motion.div
            className="pointer-events-none absolute z-50 flex items-center justify-center bg-white rounded-full w-24 h-24 mix-blend-normal shadow-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0,
              x: mousePos.x - 48,
              y: mousePos.y - 48,
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
