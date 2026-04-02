'use client';

import MagneticButton from './MagneticButton';

export default function CTASection() {
  return (
    <section className="py-40 px-6 md:px-12 bg-black flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col items-center gap-2">
          {/* Row 1: LET'S MOVE + Video Tile */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <h2 className="text-[10vw] md:text-[6vw] font-thin leading-[0.9] tracking-tighter uppercase text-white">
              LET&apos;S MOVE
            </h2>
            <div className="relative w-[18vw] h-[10vw] md:w-[12vw] md:h-[7vw] overflow-hidden rounded-xl shadow-2xl skew-x-[-2deg] hover:skew-x-0 transition-transform duration-700">
              <video
                src="/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-white/5 border border-white/10" />
            </div>
          </div>

          {/* Row 2: THE WORLD TOGETHER (Single Line) */}
          <h2 className="text-[10vw] md:text-[6vw] font-thin leading-[0.9] tracking-tighter uppercase text-white mt-4">
            THE WORLD TOGETHER
          </h2>
        </div>

        {/* Exotic Magnetic CTA Button */}
        <div className="mt-20 flex items-center justify-center">
          <MagneticButton>
            <button className="group relative flex items-center bg-white rounded-full p-2 pl-12 pr-2 overflow-hidden transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
              {/* Rolling Text Container */}
              <div className="relative h-6 overflow-hidden mr-6">
                <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                  <span className="text-black text-lg font-bold uppercase tracking-[0.2em] h-6 flex items-center">
                    Become a client
                  </span>
                  <span className="text-black text-lg font-bold uppercase tracking-[0.2em] h-6 flex items-center">
                    Let&apos;s start
                  </span>
                </div>
              </div>

              {/* Single Animated Arrow */}
              <div className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center overflow-hidden">
                <div className="transition-transform duration-500 ease-out group-hover:translate-x-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
