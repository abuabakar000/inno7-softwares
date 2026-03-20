"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import { useContact } from "@/context/ContactContext";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "PORTFOLIO +", href: "/" },
  { name: "SERVICES +", href: "/" },
  { name: "TECHNOLOGIES +", href: "/" },
  { name: "ABOUT", href: "/" },
  { name: "AWARDS & REVIEWS", href: "/" },
  { name: "BLOG", href: "/" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { openContact } = useContact();
  const timeoutRef = useRef<NodeJS.Timeout|null>(null);

  const handleMouseEnter = (name: string) => {
    if (name === "SERVICES +") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsServicesOpen(true);
    } else {
      setIsServicesOpen(false);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // Small delay to allow moving mouse to the menu
  };

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-black/50 backdrop-blur-md border-b border-white/5"
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/" className="flex flex-col leading-none hover:opacity-80 transition-opacity">
          <span className="text-xl font-bold tracking-tight text-white uppercase">REDSTONE</span>
          <span className="text-[10px] tracking-[0.2em] text-white/60">SOFTWARE</span>
        </Link>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold tracking-wider">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              onMouseEnter={() => handleMouseEnter(link.name)}
              className="relative py-2"
            >
              <Link 
                href={link.href} 
                className={`text-white hover:text-white/60 transition-colors uppercase ${isServicesOpen && link.name === "SERVICES +" ? "text-white/60" : ""}`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <MagneticButton>
            <button 
              onClick={openContact}
              className="bg-white text-black px-6 py-2.5 text-[12px] font-bold hover:bg-zinc-200 transition-all block"
            >
              LET&apos;S TALK
            </button>
          </MagneticButton>
        </div>
      </nav>

      {/* Services Mega Menu - Desktop Desktop only */}
      <div 
        className="hidden lg:block"
        onMouseEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          setIsServicesOpen(true);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
      </div>

      {/* Mobile Navigation - Visible only on Small Screens */}
      <MobileNav navLinks={navLinks} />
    </>
  );
}
