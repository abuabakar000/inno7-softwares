"use client";

import Link from "next/link";
import MagneticButton from "./MagneticButton";

interface AgencyButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md';
}

export default function AgencyButton({ 
  text, 
  href, 
  onClick, 
  className = "",
  size = 'md'
}: AgencyButtonProps) {
  const content = (
    <div className={`group flex items-center gap-4 bg-white rounded-full ${size === 'sm' ? 'px-6 py-2.5' : 'px-8 py-4'} transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] ${className}`}>
      <span className={`text-black ${size === 'sm' ? 'text-[9px]' : 'text-[10px]'} font-bold uppercase tracking-[0.2em] whitespace-nowrap`}>
        {text}
      </span>
      <div className={`${size === 'sm' ? 'w-6 h-6' : 'w-8 h-8'} rounded-full bg-black flex items-center justify-center transition-transform group-hover:rotate-[-45deg] shrink-0`}>
        <svg 
          width={size === 'sm' ? "14" : "18"} 
          height={size === 'sm' ? "14" : "18"} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="inline-block">
      <MagneticButton>
        {href ? (
          <Link href={href} className="block cursor-pointer">
            {content}
          </Link>
        ) : (
          <button onClick={onClick} className="block cursor-pointer">
            {content}
          </button>
        )}
      </MagneticButton>
    </div>
  );
}
