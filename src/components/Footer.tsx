"use client";

import Image from "next/image";

export default function Footer() {
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-12">
          {/* Large CTA Text */}
          <div className="mb-40">
            <h2 className="text-[10vw] md:text-[7vw] font-thin leading-none tracking-tighter uppercase mb-6 opacity-90">
              LET&apos;S MOVE THE<br />
              WORLD TOGETHER
            </h2>
            <p className="text-[5vw] md:text-[2.5vw] font-thin tracking-tighter">
              Drop us a line at{" "}
              <a
                href="mailto:hello@inexlabs.com"
                className="italic underline decoration-white/30 underline-offset-[12px] hover:text-zinc-400 hover:decoration-white transition-all duration-500"
              >
                hello@inexlabs.com
              </a>
            </p>
          </div>

          {/* Single-line Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-y-6 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
            {/* Left: Branding */}
            <div className="flex items-center gap-4">
              <span className="text-zinc-400">© 2026 INEX LABS</span>
            </div>

            {/* Middle: Socials */}
            <div className="flex items-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
              <span className="opacity-20">|</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
            </div>

            {/* Right: Placeholder to keep center alignment */}
            <div className="hidden md:block w-[140px]" />
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons - Hidden on Mobile to avoid overlap with MobileNav */}
      <div className="fixed bottom-8 right-8 flex-col gap-4 z-50 hidden lg:flex">
        <button className="w-14 h-14 bg-zinc-900/80 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-2xl group">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition-transform" />
            <div className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition-transform delay-75" />
            <div className="w-1 h-1 bg-white rounded-full group-hover:scale-125 transition-transform delay-150" />
          </div>
        </button>
        <button className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </button>
      </div>
    </>
  );
}
