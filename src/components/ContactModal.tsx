"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import { sendEmail } from "@/app/actions/sendEmail";
import SuccessToast from "./SuccessToast";

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
    <div className="group relative flex flex-col gap-2">
      <span className="text-[12px] font-medium text-zinc-500 uppercase tracking-tight">
        {label}{required && "*"}
      </span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border-b border-black py-1.5 text-base md:text-lg lg:text-xl font-bold tracking-tighter uppercase placeholder:text-zinc-200 focus:outline-none focus:border-black transition-colors w-full"
      />
    </div>
  );
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        setErrorMessage(result.error || "Failed to send message.");
      }
    } catch (error: any) {
      console.error("Submission failed:", error);
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[140] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[150] w-full md:w-[55%] bg-white text-black flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.2)] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-start p-6 md:p-10">
              <div className="flex flex-col">
                <h2 className="text-[10px] md:text-[12px] font-bold leading-tight tracking-tight uppercase">
                  START SIMPLE —<br />
                  JUST WRITE TO US
                </h2>
              </div>

              <button
                onClick={onClose}
                className="group flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase hover:opacity-60 transition-opacity"
              >
                CLOSE
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 flex flex-col justify-center w-full px-6 md:px-12 pb-12">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <ContactInput 
                  label="(Name)" 
                  placeholder="SIRIUS BLACK" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <ContactInput 
                  label="(Phone)" 
                  placeholder="+1 639 387 6511" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
                <ContactInput 
                  label="(Email)" 
                  placeholder="HELLO@INEXLABS.COM" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    (Your Message)
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="A BRIEF ABOUT YOUR PROJECT..."
                    rows={1}
                    className="bg-transparent border-b border-black py-1.5 text-base md:text-lg lg:text-xl font-bold tracking-tighter uppercase placeholder:text-zinc-200 focus:outline-none focus:border-black transition-colors w-full resize-none min-h-[60px]"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-black text-white px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl disabled:opacity-50"
                    >
                      {isSubmitting ? "SENDING..." : isSuccess ? "MESSAGE SENT!" : "Send Message"}
                    </button>
                    <button type="submit" disabled={isSubmitting} className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl group disabled:opacity-50">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-[10px] leading-relaxed text-zinc-500 max-w-md mt-1">
                    By providing your phone number, you agree to receive SMS messages from Inex Labs related to consultations, project updates, and customer support. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. View our <a href="https://inexlabs.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Privacy Policy</a> and <a href="https://inexlabs.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Terms & Conditions</a>.
                  </p>
                </div>
                {errorMessage && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] font-bold text-red-600 tracking-widest uppercase"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          <SuccessToast 
            show={isSuccess} 
            onClose={() => setIsSuccess(false)} 
            message="Message sent! We'll talk soon."
          />
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
