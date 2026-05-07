"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";

interface SuccessToastProps {
  show: boolean;
  onClose: () => void;
  message?: string;
}

export default function SuccessToast({ show, onClose, message = "Message Sent Successfully" }: SuccessToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-10 right-6 md:right-12 z-[1000] flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-w-[300px]"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
            <CheckCircle2 className="w-6 h-6 text-green-400" />
          </div>
          
          <div className="flex-1">
            <h4 className="text-[10px] font-black tracking-[0.2em] text-white/50 uppercase mb-1">Success</h4>
            <p className="text-sm font-medium text-white tracking-tight uppercase">{message}</p>
          </div>

          <button 
            onClick={onClose}
            className="text-white/30 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Animated Progress Bar */}
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute bottom-0 left-0 h-[2px] bg-green-500/50 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
