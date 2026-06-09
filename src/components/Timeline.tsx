import { TIMELINE_DATA } from '../data';
import { HelpingHand, Compass, FileText, Drill, Award } from 'lucide-react';

const STEP_ICONS = [
  HelpingHand, // step 1
  Compass,     // step 2
  FileText,    // step 3
  Drill,       // step 4
  Award,       // step 5
];

export default function Timeline() {
  return (
    <section id="como-trabalhamos" className="py-24 bg-primary-light relative">
      
      {/* Decorative vertical connection line background */}
      <div className="absolute inset-0 bg-[radial-gradient(#8b5a2b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Component Header Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-primary-green font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2">
            <span className="w-4 h-0.5 bg-primary-green" />
            <span>Processo Meticuloso</span>
            <span className="w-4 h-0.5 bg-primary-green" />
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-navy tracking-tight">
            Nossa Jornada Operacional
          </h2>
          <p className="font-sans text-gray-600 text-sm">
            Desde a escuta atenta das suas preferências ao primeiro balanço ou à filtragem biológica ligada, coordenamos excelência estrutural em cada marco.
          </p>
        </div>

        {/* Elegant Timeline Cards Path Layout */}
        <div className="relative">
          {/* Central spine line for desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-navy/15 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((step, idx) => {
              const StepIcon = STEP_ICONS[idx] || HelpingHand;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-stretch md:items-center relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Central Indicator Badge Icon with numbering */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center">
                    <div className="bg-[#8B5A2B] text-white p-3 rounded-full shadow-lg border-4 border-white transition-transform hover:scale-110">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Left Column Box (Takes half scale on desktop) */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:border-[#8B5A2B]/30 transition-all duration-300 relative group">
                      
                      {/* Numeric Floating Anchor badge */}
                      <span className="absolute top-4 right-4 bg-[#0F2744]/5 text-primary-navy font-display text-4xl font-black leading-none opacity-40 select-none group-hover:text-primary-gold group-hover:opacity-100 transition-colors">
                        {step.number}
                      </span>

                      {/* Small header row */}
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-primary-green/10 text-primary-green p-2 rounded-lg sm:hidden">
                          <StepIcon className="w-4 h-4" />
                        </div>
                        <h3 className="font-display font-extrabold text-[#0F2744] text-lg sm:text-xl tracking-tight">
                          {step.title}
                        </h3>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                        {step.description}
                      </p>

                    </div>
                  </div>

                  {/* Space buffer to keep side of spine clean (takes 10% space in grid equivalent) */}
                  <div className="hidden md:block w-[10%]" />

                  {/* Empty matching Column block to balance layout */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

        {/* Dynamic conversion alert banner under timeline */}
        <div className="mt-16 bg-[#0F2744] rounded-2xl p-6 shadow-xl text-center max-w-4xl mx-auto border border-primary-gold/10">
          <p className="font-display font-bold text-[#FFFFFF] text-base leading-snug">
            Quer discutir uma ideia exclusiva com a nossa equipe?
          </p>
          <p className="font-sans text-xs text-[#F5F5F5]/70 mt-1">
            Realizamos atendimento remoto preliminar por videoconferência ou chamada de voz para acelerar seu planejamento!
          </p>
          <a
            href="https://wa.me/5519971636969?text=Olá! Gostaria de alinhar um projeto exclusivo com a equipe da Seven."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#2E5E3A] hover:bg-primary-green text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-lg mt-4 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Falar com Nossos Especialistas</span>
            <span className="text-primary-gold">➔</span>
          </a>
        </div>

      </div>
    </section>
  );
}
