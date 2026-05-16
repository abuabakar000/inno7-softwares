"use client";

import Image from "next/image";
import Link from "next/link";
import { useContact } from "@/context/ContactContext";

export default function Footer() {
  const { isMenuOpen } = useContact();

  return (
    <>
      <footer className="relative bg-black text-white overflow-hidden border-t border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/footer-bg.png"
            alt="Footer Background"
            fill
            className="object-cover opacity-60 md:opacity-30 grayscale brightness-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 md:bg-gradient-to-b md:from-black md:via-transparent md:to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-32 md:pb-12">
          {/* Large CTA Text */}
          <div className="mb-40">
            <h2 className="text-[10vw] md:text-[7vw] font-thin leading-none tracking-tighter uppercase mb-6 opacity-90">
              LET&apos;S MOVE THE<br />
              WORLD TOGETHER
            </h2>
            <p className="text-[5vw] md:text-[2.5vw] font-thin tracking-tighter">
              Drop us a line at{" "}
              <a
                href="mailto:office@inexlabs.com"
                className="italic underline decoration-white/30 underline-offset-[12px] hover:text-zinc-400 hover:decoration-white transition-all duration-500"
              >
                office@inexlabs.com
              </a>
            </p>
          </div>

          {/* Single-line Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-y-6 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
            {/* Left: Branding & Legal */}
            <div className="flex items-center gap-8">
              <span className="text-zinc-400">© 2026 INEX LABS</span>
              <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            </div>

            {/* Middle: Socials */}
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/abu-bakar-khawaja-dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
            </div>

            {/* Right: Placeholder to keep alignment */}
            <div className="hidden md:block w-[140px]" />
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons - Hidden on Mobile/Tablet where Pill Nav (Hamburger) exists */}
      {!isMenuOpen && (
        <div className="fixed bottom-8 right-8 z-50 hidden lg:flex flex-col gap-4">
          <a 
            href="tel:+16393876511" 
            className="group h-14 w-14 md:hover:w-[180px] bg-white text-black rounded-full flex items-center justify-center md:justify-end transition-all duration-500 ease-[0.22,1,0.36,1] shadow-2xl overflow-hidden px-4 relative border border-black/5"
          >
            <div className="absolute left-6 hidden md:flex items-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
              <span className="text-[11px] font-black tracking-widest">+1 639 387 6511</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 transition-transform group-hover:scale-110">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
        </div>
      )}
    </>
  );
}
