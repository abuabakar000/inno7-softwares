'use client';

import {
  Users,
  Monitor,
  Activity,
  Cpu,
  Rocket,
  Eye,
  Layout,
  Smartphone,
  Lock,
  Database,
  Settings,
  Code2,
  Shield,
  Globe
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgencyButton from '@/components/AgencyButton';
import ProjectSection from '@/components/ProjectSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { useContact } from '@/context/ContactContext';
import { ServiceData } from '@/data/services';

const ICON_MAP: Record<string, any> = {
  Users,
  Monitor,
  Activity,
  Cpu,
  Rocket,
  Eye,
  Layout,
  Smartphone,
  Lock,
  Database,
  Settings,
  Code2,
  Shield,
  Globe
};

export default function ServiceClient({ data }: { data: ServiceData }) {
  const { openContact } = useContact();

  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Section 1: Header */}
        <section className="px-6 md:px-12 mb-32">
          <h1 className="text-[10vw] md:text-[8vw] font-thin uppercase leading-none tracking-tight opacity-90 mb-16 whitespace-pre-line">
            {data.title}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="relative aspect-video bg-zinc-900 border border-white/10 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black uppercase tracking-widest text-xs">
                {/* Image Placeholder */}
              </div>
            </div>

            <div className="lg:pl-15">
              <p className="text-xl md:text-2xl font-base leading-tight text-zinc-400 max-w-xl">
                {data.heroDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Specialization & CTA */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10 bg-zinc-950/30">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-thin mb-10 tracking-tight leading-tight text-white uppercase">
              {data.specializationHeading}
            </h2>
            <p className="text-lg md:text-xl font-normal mb-16 tracking-tight text-zinc-400">
              {data.specializationText}
            </p>

            <div className="flex justify-center">
              <AgencyButton text={data.ctaText} onClick={openContact} />
            </div>
          </div>
        </section>

        {/* Section 3: Why This Service? */}
        <section className="px-6 md:px-12 py-32 border-t border-white/10">
          <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-tight mb-20 max-w-3xl leading-none">
            {data.whySectionTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {data.steps.map((step) => (
              <div key={step.num} className="flex flex-col border-l border-white/10 pl-6 group">
                <span className="text-4xl font-medium mb-8 flex items-center gap-4">
                  {step.num}
                  <div className="h-[1px] w-8 bg-white/20 group-hover:w-12 transition-all duration-500" />
                </span>
                <h3 className="text-xl font-bold uppercase mb-6 tracking-tight leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Projects (Swapped) */}
        <ProjectSection 
          projectTitle={data.project.title}
          projectSubtitle={data.project.subtitle}
          description={data.project.description}
          image={data.project.image}
          tag={data.project.tag}
        />

        {/* Section 5: Capabilities Grid / Mobile Slider (Swapped) */}
        <section className="border-t border-black/5 bg-white overflow-hidden pb-12 md:pb-0">
          <div 
            onScroll={(e) => {
              const target = e.currentTarget;
              const index = Math.round(target.scrollLeft / (target.clientWidth * 0.85));
              const dots = document.querySelectorAll('.cap-dot');
              dots.forEach((dot, i) => {
                if (i === index) {
                  dot.classList.add('w-8', 'bg-black');
                  dot.classList.remove('w-2', 'bg-black/10');
                } else {
                  dot.classList.remove('w-8', 'bg-black');
                  dot.classList.add('w-2', 'bg-black/10');
                }
              });
            }}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar"
          >
            {data.capabilities.map((cap, index) => {
              const Icon = ICON_MAP[cap.icon] || Rocket;
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[85vw] md:w-auto h-auto flex flex-col border-l ${index === data.capabilities.length - 1 ? 'border-r' : ''} border-black/5 px-8 md:px-12 py-20 group hover:bg-black/[0.02] transition-colors snap-start`}
                >
                  <div className="mb-20 text-black transition-opacity">
                    <Icon strokeWidth={1} size={48} />
                  </div>
                  <h3 className="text-2xl font-bold uppercase mb-8 tracking-tight leading-tight whitespace-pre-line text-black">
                    {cap.title}
                  </h3>
                  <p className="text-[15px] text-zinc-400 leading-relaxed font-normal mt-auto group-hover:text-black transition-opacity">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots (Mobile Only) */}
          <div className="flex items-center justify-center gap-2 mt-8 md:hidden">
            {data.capabilities.map((_, i) => (
              <div 
                key={i} 
                className={`cap-dot h-2 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-black' : 'w-2 bg-black/10'}`}
              />
            ))}
          </div>
        </section>

        {/* Section 6: FAQs */}
        <FAQSection
          onContactClick={openContact}
          faqs={data.faqs}
        />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
