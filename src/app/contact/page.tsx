"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Beaker, Globe, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgencyButton from "@/components/AgencyButton";
import { useContact } from "@/context/ContactContext";

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Beaker, href: "#", name: "Behance" },
  { icon: Globe, href: "#", name: "Dribbble" },
];

function ContactInput({ label, placeholder, required = false }: { label: string; placeholder: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-4 group">
      <span className="text-[12px] font-medium text-zinc-500 tracking-tight">
        ({label}){required && "*"}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-b border-white/20 py-2 text-base md:text-xl lg:text-2xl font-thin tracking-tighter uppercase placeholder:text-white/40 focus:outline-none focus:border-white transition-colors w-full"
      />
    </div>
  );
}

export default function ContactPage() {
  const { openContact } = useContact();
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32"
        >
          <h1 className="text-[10vw] md:text-[8vw] font-thin leading-[0.9] tracking-tight uppercase mb-8">
            WANT A PROJECT<br />
            THAT WORKS?
          </h1>
          <p className="text-xl md:text-2xl font-light text-zinc-400">
            We&apos;re Here – Message or Call Us.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/3 group relative overflow-hidden"
          >
            {/* Glassmorphic Card */}
            <div className="bg-white/[0.03] backdrop-blur-3xl p-10 md:p-14 rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-white/20">
              
              <div className="flex flex-col gap-12">
                {/* Email Section */}
                <div className="flex flex-col gap-4 group/item">
                  <span className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.2em]">
                    (Email)
                  </span>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:office@redstone.software" className="text-[13px] md:text-base font-normal tracking-tight uppercase text-white/90 hover:text-white transition-all duration-500">
                      office@redstone.software
                    </a>
                    <a href="mailto:support@redstone.software" className="text-[13px] md:text-base font-normal tracking-tight uppercase text-white/90 hover:text-white transition-all duration-500">
                      support@redstone.software
                    </a>
                  </div>
                  <div className="w-8 h-[1px] bg-white/20 group-hover/item:w-12 transition-all duration-500" />
                </div>

                {/* Phone Section */}
                <div className="flex flex-col gap-4 group/item">
                  <span className="text-[12px] font-medium text-zinc-500 uppercase tracking-[0.2em]">
                    (Phone)
                  </span>
                  <a href="tel:+17867447141" className="text-xl md:text-2xl font-thin tracking-tighter uppercase text-white/90 hover:text-white transition-all duration-500">
                    +1 786 744 7141
                  </a>
                  <div className="w-8 h-[1px] bg-white/20 group-hover/item:w-12 transition-all duration-500" />
                </div>

                {/* Branding Accent */}
                <div className="pt-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                   <div className="text-[10px] font-black tracking-[0.5em] text-white uppercase">REDSTONE SOFTWARE</div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-20 bg-white/[0.02] rounded-full blur-3xl -z-10 group-hover:bg-white/[0.04] transition-colors duration-700" />
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/3 flex flex-col gap-12"
          >
            <ContactInput label="Name" placeholder="SIRIUS BLACK" />
            <ContactInput label="Phone" placeholder="+1 312 340 0323" required />
            <ContactInput label="Email" placeholder="SIRIUSBLACK@MAIL.COM" />

            <div className="flex flex-col gap-4 pt-4">
              <span className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight">
                (Your Message)
              </span>
              <textarea
                placeholder="A BRIEF ABOUT YOUR PROJECT..."
                rows={1}
                className="bg-transparent border-b border-white/20 py-2 text-base md:text-xl lg:text-2xl font-thin tracking-tighter uppercase text-white placeholder:text-white/10 focus:outline-none focus:border-white transition-colors w-full resize-none min-h-[80px]"
              />
            </div>

            <div className="pt-8">
              <AgencyButton text="SEND MESSAGE" onClick={() => console.log('Sending message...')} />
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
