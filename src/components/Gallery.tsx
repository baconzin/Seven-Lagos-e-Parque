import { useState } from 'react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Maximize2, Share2, HelpCircle } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'lagos' | 'kids'>('todos');
  const [selectedProject, setSelectedProject] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'todos', label: 'Todos' },
    { id: 'lagos', label: 'Lagos Ornamentais' },
    { id: 'kids', label: 'Área Kids' },
  ];

  const filteredCollection = activeFilter === 'todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeFilter);

  const handleOpenProject = (project: GalleryItem) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleRequestSimilar = (title: string) => {
    const message = `Olá! Vi o projeto "${title}" em seu site institucional e gostaria de solicitar um orçamento similar para minha casa.`;
    window.open(`https://wa.me/5519971636969?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Section Header Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 pb-6 border-b border-gray-100">
          <div className="space-y-3 max-w-2xl">
            <p className="text-[#8B5A2B] font-display text-xs font-bold uppercase tracking-widest flex items-center space-x-2">
              <span className="w-6 h-0.5 bg-[#8B5A2B]" />
              <span>Portfólio Seven</span>
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-navy tracking-tight">
              Projetos Autorais de Alto Padrão
            </h2>
            <p className="font-sans text-gray-500 text-sm">
              Explore obras concluídas pela nossa equipe nos condomínios e residências mais luxuosas do estado. Cada detalhe é único.
            </p>
          </div>

          {/* Filter Tab options row */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`py-2.5 px-4 rounded-full font-display text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-primary-navy text-white shadow-md font-bold'
                    : 'bg-primary-light text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid of items with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCollection.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#F5F5F5] rounded-2xl overflow-hidden shadow-lg h-80 cursor-pointer"
                onClick={() => handleOpenProject(item)}
              >
                {/* Thumbnail Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/' + item.id + '/600/400';
                  }}
                />
                
                {/* Gradient shade overlays */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-navy/95 via-primary-navy/40 to-transparent p-6 flex flex-col justify-end h-2/3 group-hover:from-primary-green/95 transition-all duration-500" />
                
                {/* Upper categories label */}
                <span className="absolute top-4 left-4 bg-primary-gold/90 text-primary-navy font-display text-[9px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-md z-10 transition-transform group-hover:translate-y-1">
                  {item.categoryLabel}
                </span>

                {/* Overlaid details content */}
                <div className="absolute bottom-6 left-6 right-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                  <h3 className="font-display font-extrabold text-[#FFFFFF] text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-white/70 text-xs line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.description}
                  </p>
                  
                  {/* Tags row with animation */}
                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {item.tags.map((tg, key) => (
                      <span key={key} className="bg-white/15 text-white text-[9px] font-medium py-0.5 px-2 rounded font-sans border border-white/5">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Expand graphic hint */}
                <div className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-primary-navy p-2 rounded-full backdrop-blur-sm z-10 transition-all opacity-0 group-hover:opacity-100">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Collection state if matching filters fail */}
        {filteredCollection.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-2xl text-gray-500">
            <HelpCircle className="w-12 h-12 mx-auto text-gray-400 mb-2" />
            <p className="font-display font-bold">Nenhum projeto encontrado nesta categoria.</p>
            <p className="font-sans text-xs">Fique ligado, adicionaremos fotos de obras recentes em breve!</p>
          </div>
        )}

        {/* Lightbox Modal overlay portal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-primary-navy/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={handleCloseProject}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button absolute top */}
                <button
                  onClick={handleCloseProject}
                  className="absolute top-4 right-4 bg-primary-navy text-white hover:bg-primary-gold hover:text-primary-navy p-2.5 rounded-full transition-all z-20 shadow-md cursor-pointer"
                  aria-label="Clean Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left col photo pane (7 columns of 12) */}
                <div className="md:col-span-7 bg-black min-h-[300px] md:min-h-[450px] relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/' + selectedProject.id + '/800/600';
                    }}
                  />
                  
                  {/* Subtle water mirror bottom light glow decorator */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 md:hidden">
                    <span className="bg-primary-gold text-primary-navy font-display text-[9px] font-bold uppercase py-1 px-3 rounded-full">
                      {selectedProject.categoryLabel}
                    </span>
                    <h4 className="font-display font-extrabold text-white text-xl mt-1">{selectedProject.title}</h4>
                  </div>
                </div>

                {/* Right col technical explanation (5 columns of 12) */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
                  
                  <div className="space-y-4">
                    
                    {/* Categories tag top */}
                    <div className="hidden md:block">
                      <span className="bg-[#8B5A2B]/10 text-[#8B5A2B] font-display text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full border border-[#8B5A2B]/20">
                        {selectedProject.categoryLabel}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl text-primary-navy tracking-tight hidden md:block leading-tight">
                      {selectedProject.title}
                    </h3>

                    <p className="font-sans text-gray-700 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>

                    {/* Quality highlights checklist inside lightbox */}
                    <div className="space-y-2 border-t border-gray-100 pt-4">
                      <p className="font-display text-xs font-bold text-primary-navy uppercase tracking-wider">
                        Atributos do Projeto:
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tg, idx) => (
                          <span key={idx} className="bg-[#2E5E3A]/10 text-primary-green text-xs font-semibold py-1 px-2.5 rounded-lg font-sans border border-primary-green/15 flex items-center space-x-1">
                            <Check className="w-3.5 h-3.5 stroke-[3px]" />
                            <span>{tg}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary-light/60 border border-[#8B5A2B]/5 rounded-xl p-4 text-[11px] font-sans text-gray-600 leading-relaxed">
                      Todos os nossos projetos contam com suporte contra infiltrações estruturais de até 5 anos, além de acompanhamento técnico pré e pós instalação.
                    </div>

                  </div>

                  {/* High Conversion WhatsApp Call in modal pop */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleRequestSimilar(selectedProject.title)}
                      className="w-full bg-[#25D366] hover:bg-[#1EBE57] text-white font-display text-xs font-bold uppercase tracking-widest py-4 px-6 rounded-xl hover:scale-101 active:scale-99 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Quero Orçamento Igual</span>
                    </button>
                    
                    <button
                      onClick={handleCloseProject}
                      className="w-full text-center text-gray-500 hover:text-primary-navy font-display text-[10px] font-semibold uppercase tracking-widest py-1"
                    >
                      Voltar ao Portfólio
                    </button>
                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
