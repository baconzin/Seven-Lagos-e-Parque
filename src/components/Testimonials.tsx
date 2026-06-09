import { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="py-24 bg-primary-light relative overflow-hidden">
      
      {/* Abstract water splash shape in background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[#8B5A2B] font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2">
            <span className="w-4 h-0.5 bg-[#8B5A2B]" />
            <span>Opinião de Quem Confia</span>
            <span className="w-4 h-0.5 bg-[#8B5A2B]" />
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-navy tracking-tight">
            Depoimentos de Clientes Reais
          </h2>
          <p className="font-sans text-gray-600 text-sm">
            Temos orgulho das avaliações excelentes que recebemos. A satisfação a longo prazo é a maior métrica de sucesso de Seven Construção.
          </p>
        </div>

        {/* Carousel Slider Panel with Framer Motion transitions */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-gray-150 flex flex-col items-center text-center space-y-6 relative"
            >
              <Quote className="w-12 h-12 text-[#C9A227]/20 absolute top-6 left-6" />

              {/* Star Rating visualization */}
              <div className="flex space-x-1 text-[#C9A227]">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-gold" />
                ))}
              </div>

              {/* Text testimony content */}
              <p className="font-sans text-gray-700 italic text-sm sm:text-base leading-relaxed tracking-wide max-w-2xl">
                &ldquo;{current.text}&rdquo;
              </p>

              {/* User Meta Information details */}
              <div className="flex flex-col items-center space-y-2 border-t border-gray-100 pt-6 w-full max-w-md">
                
                {/* Client avatar no-referrer */}
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-gold shadow-md">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/' + current.id + '/150/150';
                    }}
                  />
                </div>

                <div className="text-center">
                  <h4 className="font-display font-extrabold text-primary-navy text-sm sm:text-base">{current.name}</h4>
                  <p className="text-[11px] font-medium text-gray-500 uppercase tracking-widest">{current.role}</p>
                  
                  {/* Undertaken project category reference */}
                  <span className="inline-block bg-[#2E5E3A]/10 text-primary-green font-display text-[9px] font-extrabold uppercase tracking-widest py-1 px-3.5 rounded-full mt-2 border border-primary-green/10">
                    Projeto: {current.project}
                  </span>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider Controllers Buttons (Navigation) */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              type="button"
              className="bg-primary-navy text-white hover:bg-primary-gold hover:text-primary-navy p-3 rounded-xl transition-all shadow-md focus:outline-none cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-1.5">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    activeIndex === idx ? 'w-8 bg-primary-gold' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              type="button"
              className="bg-primary-navy text-white hover:bg-primary-gold hover:text-primary-navy p-3 rounded-xl transition-all shadow-md focus:outline-none cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
