'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ClipboardList, MoreHorizontal, X, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { serviceCategories } from './MegaMenu';
import { useContact } from '@/context/ContactContext';

interface MobileNavProps {
  navLinks: { name: string; href: string }[];
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const { openContact } = useContact();

  const menuVariants: any = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  const navItemVariants: any = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      {/* Floating Pill Nav */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 lg:hidden">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full flex items-center gap-10 px-8 py-3.5 shadow-2xl"
        >
          {/* Custom 2-line Hamburger */}
          <button
            onClick={() => {
              setIsOpen(true);
              setActiveSubMenu(null);
            }}
            className="flex flex-col gap-1.5 items-start group"
          >
            <div className="w-5 h-[1.5px] bg-white group-hover:w-6 transition-all" />
            <div className="w-5 h-[1.5px] bg-white group-hover:w-4 transition-all" />
          </button>

          {/* Survey/Clipboard Icon */}
          <button 
            onClick={openContact}
            className="text-white/80 hover:text-white transition-colors"
          >
            <ClipboardList size={20} strokeWidth={1.5} />
          </button>

          {/* Phone Icon */}
          <a href="tel:#" className="text-white/80 hover:text-white transition-colors">
            <Phone size={20} strokeWidth={1.5} />
          </a>
        </motion.div>

        {/* More Button */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-full text-white/80 hover:text-white shadow-2xl"
        >
          <MoreHorizontal size={20} strokeWidth={1.5} />
        </motion.button>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[110] bg-black flex flex-col p-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              {activeSubMenu ? (
                <button
                  onClick={() => setActiveSubMenu(null)}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase">Back</span>
                </button>
              ) : (
                <span className="text-[10px] font-black tracking-[0.4em] text-red-600 uppercase">Navigations</span>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            {/* Menu Links Content */}
            <div className="flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!activeSubMenu ? (
                  <motion.div
                    key="main-menu"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: { transition: { staggerChildren: 0.05 } },
                      closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                    }}
                    className="flex flex-col gap-4"
                  >
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        variants={navItemVariants}
                      >
                        {link.name === "SERVICES +" ? (
                          <button
                            onClick={() => setActiveSubMenu('SERVICES')}
                            className="text-4xl font-thin tracking-tighter text-white hover:text-red-500 transition-colors uppercase flex items-center justify-between w-full group py-2"
                          >
                            <span>{link.name}</span>
                            <ChevronRight size={24} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ) : link.name === "CONTACT US" ? (
                          <button
                            onClick={() => {
                              openContact();
                              setIsOpen(false);
                            }}
                            className="text-4xl font-thin tracking-tighter text-white hover:text-red-500 transition-colors uppercase block py-2 text-left"
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-thin tracking-tighter text-white hover:text-red-500 transition-colors uppercase block py-2"
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="services-menu"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: { transition: { staggerChildren: 0.05 } },
                      closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                    }}
                    className="flex flex-col gap-6"
                  >
                    <h2 className="text-xl font-base tracking-tight text-white mb-4">SERVICES</h2>
                    {serviceCategories.map((cat, i) => (
                      <motion.div
                        key={cat.title}
                        variants={{
                          closed: { opacity: 0, x: 20 },
                          open: { opacity: 1, x: 0 }
                        }}
                      >
                        <Link
                          href={cat.href}
                          onClick={() => setIsOpen(false)}
                          className="flex flex-col gap-1 group py-2"
                        >
                          <span className="text-xl font-thin tracking-tight text-white/80 group-hover:text-white transition-colors uppercase">
                            {cat.title}
                          </span>
                          <span className="text-[10px] text-white/30 uppercase tracking-widest">{cat.subLinks[0]}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Accent */}
            <div className="text-center mt-auto pt-8">
              <p className="text-[10px] text-white/30 tracking-widest uppercase mb-4">Redstone Software © 2026</p>
              <div className="w-12 h-px bg-white/10 mx-auto" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
