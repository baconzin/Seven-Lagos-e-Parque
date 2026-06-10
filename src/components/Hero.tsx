import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Calendar, ChevronRight, Waves, Sparkles, Hammer } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: '/PISCINA NATURAL 03.png',
    tag: 'Lagos Ornamentais',
    title: 'Lagos Ornamentais de Alto Padrão',
    desc: 'Ecossistemas biológicos sofisticados com carpas nobres, filtragem automatizada por ozônio e opção de deck integrado em madeira de lei.',
    icon: Waves,
    badgeText: 'Águas Cristalinas e Filtragem com Ozônio'
  },
  {
    image: '/PISCINA NATURAL 02.png',
    tag: 'Piscinas Naturais',
    title: 'Piscinas Naturais Imersivas',
    desc: 'Projetos harmoniosos com água límpida, pedras naturais e perfeita integração ao paisagismo, proporcionando beleza de ponta em seu ambiente.',
    icon: Waves,
    badgeText: 'Integração Perfeita & Paisagismo'
  },
  {
    image: '/Deck deslizante.png',
    tag: 'Decks Deslizantes',
    title: 'Decks Deslizantes Automatizados',
    desc: 'Otimização inteligente do seu espaço com decks que deslizam suavemente sobre sua piscina ou lago, proporcionando máxima sofisticação e segurança.',
    icon: Sparkles,
    badgeText: 'Design Inovador & Otimização de Espaço'
  },
  {
    image: '/Area kids 002.jpeg',
    tag: 'Área Kids',
    title: 'Playgrounds Premium sob Medida',
    desc: 'Dê vida ao seu parquinho com opções robustas em madeira de lei tratada, estruturas em metal altamente resistente ou a união híbrida de ambos.',
    icon: Hammer,
    badgeText: 'Madeira Tratada & Metal de Alta Resistência'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToDetail = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const current = HERO_SLIDES[currentSlide];
  const IconComponent = current.icon;

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-primary-navy">
      {/* Background slide transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Cover image with no-referrer */}
          <img
            src={current.image}
            alt={current.title}
            className="absolute inset-x-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback image in case of broken unsplash urls
              (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/seven-back/1920/1080';
            }}
          />
          {/* Visual gradient overlay with luxury navy and natural forest tones */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/95 via-primary-navy/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent opacity-85" />
        </motion.div>
      </AnimatePresence>

      {/* Floating abstract gold and wood decoration borders */}
      <div className="absolute top-1/3 right-12 w-96 h-96 rounded-full border border-primary-gold/15 pointer-events-none hidden xl:block animate-pulse-slow" />
      <div className="absolute top-1/4 right-32 w-48 h-48 rounded-full border-2 border-primary-wood/10 pointer-events-none hidden xl:block animate-wave-slow" />

      {/* Content wrapper */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl mt-16 sm:mt-24 space-y-6 flex flex-col items-center">
          
          {/* Animated Accent Line Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-gold/15 border border-primary-gold/30 rounded-full py-1.5 px-4 text-primary-gold text-xs font-semibold uppercase tracking-widest font-display"
          >
            <IconComponent className="w-4 h-4" />
            <span>{current.badgeText}</span>
          </motion.div>

          {/* Majestic Hero Main Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col"
          >
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Transformamos Espaços em <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-[#e5c158] to-white relative">
                Experiências Inesquecíveis
              </span>
            </h1>
            
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#F5F5F5]/90 leading-relaxed font-light mt-10 sm:mt-14 max-w-2xl mx-auto">
              Especialistas no projeto e execução de lagos ornamentais de alto padrão e áreas kids sob medida, com acabamento impecável e extrema segurança.
            </p>
          </motion.div>

          {/* Conversion Drive Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-10 sm:pt-12 w-full"
          >
            {/* CTA 1: Request Quote on site */}
            <button
              onClick={() => handleScrollToDetail('#orcamento-checkout')}
              className="bg-gradient-to-r from-primary-gold to-[#DDB635] text-primary-navy font-display font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-lg shadow-xl hover:shadow-primary-gold/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Solicitar Orçamento</span>
            </button>

            {/* CTA 2: WhatsApp quick contact */}
            <a
              href="https://wa.me/5519971636969?text=Olá! Gostaria de solicitar um orçamento para meu projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-display font-semibold text-xs uppercase tracking-widest py-4 px-8 rounded-lg shadow-lg hover:shadow-green-500/10 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </motion.div>

          {/* Quick trust metrics row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-8 border-t border-white/10 hidden sm:flex items-center justify-center space-x-8 text-white/70 text-xs w-full"
          >
            <div className="flex items-center space-x-2">
              <span className="text-primary-gold font-bold text-lg">✓</span>
              <span>Projetos 3D Exclusivos</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-primary-gold font-bold text-lg">✓</span>
              <span>Madeiras de Lei Fortes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-primary-gold font-bold text-lg">✓</span>
              <span>Garantia de Assistência</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Manual Slide selection controls (bottom indicator) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-30">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full h-2 focus:outline-none ${
              currentSlide === idx ? 'w-10 bg-primary-gold' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={currentSlide === idx ? 'true' : 'false'}
          />
        ))}
      </div>

      {/* Luxury Curve bottom waves transition divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[30px] md:h-[50px]"
          fill="#F5F5F5"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
