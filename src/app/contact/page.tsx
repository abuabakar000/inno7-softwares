"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Beaker, Globe, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
            className="w-full lg:w-1/3 bg-zinc-900/30 p-10 md:p-14 rounded-sm border border-white/5"
          >
            <div className="flex flex-col gap-8 mb-16">
              <div className="flex flex-col gap-2">
                <a href="mailto:office@redstone.software" className="text-base md:text-lg font-light hover:opacity-60 transition-opacity">
                  office@redstone.software
                </a>
                <a href="mailto:support@redstone.software" className="text-base md:text-lg font-light hover:opacity-60 transition-opacity">
                  support@redstone.software
                </a>
              </div>

              <a href="tel:+17867447141" className="text-base md:text-lg font-light tracking-tight hover:opacity-60 transition-opacity">
                +1 786 744 7141
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
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
              <button className="bg-white text-black px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 group">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
