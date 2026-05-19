"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Beaker, Globe, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgencyButton from "@/components/AgencyButton";
import { useContact } from "@/context/ContactContext";

import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import SuccessToast from "@/components/SuccessToast";

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Beaker, href: "#", name: "Behance" },
  { icon: Globe, href: "#", name: "Dribbble" },
];

function ContactInput({ 
  label, 
  placeholder, 
  name, 
  value, 
  onChange, 
  required = false 
}: { 
  label: string; 
  placeholder: string; 
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean 
}) {
  return (
    <div className="flex flex-col gap-2 md:gap-4 group">
      <span className="text-[11px] md:text-[12px] font-medium text-zinc-400 tracking-tight">
        ({label}){required && "*"}
      </span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border-b border-white/20 py-1 md:py-2 text-base md:text-xl lg:text-2xl font-thin tracking-tighter uppercase placeholder:text-white/40 focus:outline-none focus:border-white transition-colors w-full"
      />
    </div>
  );
}

export default function ContactPage() {
  const { openContact } = useContact();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    smsConsent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", email: "", message: "", smsConsent: false });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (error: any) {
      console.error("Submission failed:", error);
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-24 md:pt-40 pb-16 md:pb-32 px-6 md:px-12 relative overflow-hidden">
        {/* Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-32"
        >
          <h1 className="text-[10vw] md:text-[8vw] font-thin leading-[0.9] tracking-tight uppercase mb-4 md:mb-8">
            WANT A PROJECT<br />
            THAT WORKS?
          </h1>
          <p className="text-lg md:text-2xl font-light text-zinc-400">
            We&apos;re Here – Message or Call Us.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-start">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/3 group relative overflow-hidden"
          >
            {/* Glassmorphic Card */}
            <div className="bg-white/[0.03] backdrop-blur-3xl p-6 md:p-14 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-white/20">

              <div className="flex flex-col gap-6 md:gap-12">
                {/* Email Section */}
                <div className="flex flex-col gap-2 md:gap-4 group/item">
                  <span className="text-[11px] md:text-[12px] font-medium text-zinc-400 uppercase tracking-[0.2em]">
                    (Email)
                  </span>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:office@inexlabs.com" className="text-[13px] md:text-base font-normal tracking-tight uppercase text-white/90 hover:text-white transition-all duration-500">
                      office@inexlabs.com
                    </a>
                  </div>
                  <div className="w-8 h-[1px] bg-white/20 group-hover/item:w-12 transition-all duration-500" />
                </div>

                {/* Working Hours Section */}
                <div className="flex flex-col gap-2 md:gap-4 group/item">
                  <span className="text-[11px] md:text-[12px] font-medium text-zinc-400 uppercase tracking-[0.2em]">
                    (Working Hours)
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-[13px] md:text-base font-normal tracking-tight uppercase text-white/90">
                      Mon — Sat: 8 AM — 4 PM
                    </p>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      Canadian Time (EST/CST)
                    </p>
                  </div>
                  <div className="w-8 h-[1px] bg-white/20 group-hover/item:w-12 transition-all duration-500" />
                </div>

                {/* Phone Section */}
                <div className="flex flex-col gap-2 md:gap-4 group/item">
                  <span className="text-[11px] md:text-[12px] font-medium text-zinc-400 uppercase tracking-[0.2em]">
                    (Phone)
                  </span>
                  <a href="tel:+16393876511" className="text-xl md:text-2xl font-thin tracking-tighter uppercase text-white/90 hover:text-white transition-all duration-500">
                    +1 639 387 6511
                  </a>
                  <div className="w-8 h-[1px] bg-white/20 group-hover/item:w-12 transition-all duration-500" />
                </div>

                {/* Branding Accent */}
                <div className="pt-4 md:pt-8 group-hover:scale-105 transition-transform duration-700">
                  <div className="relative inline-block">
                    <div className="text-[11px] font-black tracking-[0.7em] bg-gradient-to-r from-white via-white/50 to-white bg-clip-text text-transparent uppercase py-1 border-y border-white/5">
                      INEX LABS
                    </div>
                    <div className="absolute -inset-1 bg-white/5 blur-xl -z-10 group-hover:bg-white/10 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-20 bg-white/[0.02] rounded-full blur-3xl -z-10 group-hover:bg-white/[0.04] transition-colors duration-700" />
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/3 flex flex-col gap-6 md:gap-12"
          >
            <ContactInput 
              label="Name" 
              placeholder="SIRIUS BLACK" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <ContactInput 
              label="Phone" 
              placeholder="+1 312 340 0323" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required 
            />
            <ContactInput 
              label="Email" 
              placeholder="SIRIUSBLACK@MAIL.COM" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="flex flex-col gap-2 pt-2 md:gap-4 md:pt-4">
              <span className="text-[11px] md:text-[12px] font-medium text-zinc-400 uppercase tracking-tight">
                (Your Message)
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="A BRIEF ABOUT YOUR PROJECT..."
                rows={1}
                className="bg-transparent border-b border-white/20 py-1 md:py-2 text-base md:text-xl lg:text-2xl font-thin tracking-tighter uppercase text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors w-full resize-none min-h-[60px] md:min-h-[80px]"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-start gap-3 cursor-pointer group text-zinc-400 hover:text-white transition-colors">
                <input
                  type="checkbox"
                  name="smsConsent"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-transparent text-white focus:ring-white cursor-pointer accent-black shrink-0"
                />
                <span className="text-[11px] leading-relaxed select-none">
                  I agree to receive SMS messages from Inex Labs regarding consultations, project updates, and customer support. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out and HELP for assistance. Consent is not a condition of purchase.
                </span>
              </label>
            </div>

            <div className="pt-4 md:pt-8 flex flex-col gap-4">
              <div className="relative inline-block">
                <AgencyButton 
                  text={isSubmitting ? "SENDING..." : isSuccess ? "MESSAGE SENT!" : "SEND MESSAGE"} 
                  className={isSuccess ? "bg-green-500/20" : ""}
                />
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-500 mt-2 max-w-xl">
                View our <a href="https://inexlabs.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-300 transition-colors">Privacy Policy</a> and <a href="https://inexlabs.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-300 transition-colors">Terms & Conditions</a>.
              </p>
            </div>
          </motion.form>
        </div>
      </main>

      <SuccessToast 
        show={isSuccess} 
        onClose={() => setIsSuccess(false)} 
        message="Your inquiry has been received. We'll be in touch shortly."
      />

      <Footer />
    </div>
  );
}

