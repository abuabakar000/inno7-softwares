'use client';

import AgencyButton from './AgencyButton';
import { useContact } from '@/context/ContactContext';

export default function CTASection() {
  const { openContact } = useContact();

  return (
    <section className="py-16 md:py-40 px-4 md:px-12 bg-black flex flex-col items-center justify-center text-center overflow-hidden border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col items-center gap-2">
          {/* Row 1: LET'S CREATE + Video Tile */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <h2 className="text-[10vw] md:text-[6vw] font-thin leading-[0.9] tracking-tighter uppercase text-white opacity-90">
              LET&apos;S CREATE
            </h2>
            <div className="relative w-[18vw] h-[10vw] md:w-[12vw] md:h-[7vw] overflow-hidden shadow-2xl skew-x-[-2deg] hover:skew-x-0 transition-transform duration-700">
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

          {/* Row 2: SOMETHING GREAT (Single Line) */}
          <h2 className="text-[10vw] md:text-[6vw] font-thin leading-[0.9] tracking-tighter uppercase text-white opacity-90 mt-4">
            SOMETHING GREAT
          </h2>
        </div>

        {/* Exotic Magnetic CTA Button */}
        <div className="mt-20 flex items-center justify-center">
          <AgencyButton text="BECOME A CLIENT" onClick={openContact} isPulsing={true} />
        </div>
      </div>
    </section>
  );
}
