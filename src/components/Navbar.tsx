"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AgencyButton from "./AgencyButton";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import { useContact } from "@/context/ContactContext";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "SERVICES +", href: "/" },
  { name: "ABOUT", href: "/about" },
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
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="Inno7 Softwares Logo" 
            width={120} 
            height={40} 
            className="h-10 w-auto object-contain"
            style={{ height: 'auto' }}
          />
        </Link>

        {/* Desktop Links - Now a cohesive centered group */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-14 text-[13px] font-bold tracking-[0.15em]">
          {navLinks.map((link) => {
            const isServices = link.name === "SERVICES +";
            const isActive = isServices && isServicesOpen;
            
            return (
              <div 
                key={link.name}
                onMouseEnter={() => handleMouseEnter(link.name)}
                className="relative group"
              >
                {isServices ? (
                  <div className={`transition-colors uppercase py-2 cursor-pointer ${isActive ? "text-red-500" : "text-white group-hover:text-red-500"}`}>
                    {link.name}
                  </div>
                ) : (
                  <Link 
                    href={link.href} 
                    className="block py-2 text-white hover:text-red-500 transition-colors uppercase"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <AgencyButton text="LET'S TALK" onClick={openContact} size="sm" isPulsing={true} />
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
