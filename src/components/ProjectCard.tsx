'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  tags: string[];
  image?: string;
  aspectRatio?: string;
  className?: string;
  isPlaceholder?: boolean;
  sizes?: string;
}

export default function ProjectCard({
  title,
  category,
  tags,
  image,
  aspectRatio = 'aspect-[16/11]',
  className = '',
  isPlaceholder = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col group ${className}`}
    >
      {isPlaceholder ? (
        <div className={`relative ${aspectRatio} overflow-hidden bg-zinc-900/50 mb-6 border border-white/5 flex items-center justify-center`}>
          <span className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">Image Coming Soon</span>
        </div>
      ) : (
        <div className={`relative ${aspectRatio} overflow-hidden bg-zinc-900 mb-6`}>
          <Image
            src={image || ''}
            alt={title}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
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
