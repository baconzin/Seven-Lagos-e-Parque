import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Trigger bubble guide entry delay after user settles
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Dynamic Conversions Greeting Bubble (Tooltip) */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="mb-3 bg-white text-primary-navy py-3 px-4 rounded-2xl shadow-2xl border border-gray-150 flex items-center space-x-2.5 max-w-xs pointer-events-auto"
          >
            {/* Direct Close Button to avoid user annoyance */}
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
              aria-label="Cerrar guia"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex-1">
              <p className="font-display font-black text-[#2E5E3A] text-[10px] uppercase tracking-wider">
                Atendimento Imediato
              </p>
              <p className="font-sans text-[11px] text-gray-700 leading-snug mt-0.5">
                Olá! Como posso te ajudar hoje no orçamento do seu projeto?
              </p>
            </div>
            {/* Visual small green indicator indicator */}
            <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full shrink-0 animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Pulsating Floating Action Trigger Button */}
      <a
        href="https://wa.me/5519971636969?text=Olá! Gostaria de solicitar um orçamento para meu projeto."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white hover:bg-[#1EBE57] p-4 rounded-full shadow-2xl flex items-center justify-center pointer-events-auto animate-pulse-whatsapp transition-transform duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Falar pelo WhatsApp"
        onClick={() => {
          // Fade away bubble helper on click
          setShowTooltip(false);
        }}
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
        
        {/* Double-indicator attention helper tooltip on desktop cursor hover */}
        <span className="absolute right-16 bg-primary-navy text-white text-[10px] font-bold uppercase tracking-widest py-2 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden sm:block">
          Falar no WhatsApp
        </span>
      </a>

    </div>
  );
}
