import { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Waves, Hammer, RefreshCw, Check, Calculator, Send, Sliders, Layers, Eye } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  lago: Waves,
  decks_deslizantes: Sliders,
  cascatas: Waves,
  kids_madeira: Hammer,
  kids_metalon: Hammer,
  areas_kids: Layers,
  clinicas_tea: Eye,
};

export default function Services() {
  // Simulator State variables
  const [selectedSimCategory, setSelectedSimCategory] = useState<'lago' | 'kids'>('lago');
  const [simArea, setSimArea] = useState<number>(35); // in m²: range 1 to 200
  const [lagoDeckType, setLagoDeckType] = useState<'com_deck' | 'sem_deck'>('com_deck');
  const [kidsMaterialType, setKidsMaterialType] = useState<'madeira' | 'metalon'>('madeira');
  const [simAddons, setSimAddons] = useState<string[]>([]);

  const addonsList = {
    lago: [
      { id: 'ozonio', name: 'Filtragem avançada transparente', complex: 1 },
      { id: 'carp', name: 'Aclimatação de Carpas', complex: 1 },
      { id: 'stone', name: 'Rochas Moledo para contorno', complex: 2 },
      { id: 'led', name: 'Iluminação subaquática LED', complex: 1 },
    ],
    kids: [
      { id: 'casinha', name: 'Casinha elevada infantil', complex: 2 },
      { id: 'escorregador', name: 'Escorregador e descidas', complex: 1 },
      { id: 'escalada', name: 'Parede de escalada', complex: 1 },
      { id: 'balancos', name: 'Acoplamento de Balanço', complex: 1 },
    ]
  };

  const handleToggleAddon = (addonId: string) => {
    if (simAddons.includes(addonId)) {
      setSimAddons(simAddons.filter((id) => id !== addonId));
    } else {
      setSimAddons([...simAddons, addonId]);
    }
  };

  const getComplexity = () => {
    // Math logic based on area and choices
    let score = 1;
    if (simArea < 20) score = 1;
    else if (simArea <= 75) score = 2;
    else score = 4;

    score += simAddons.length;

    if (selectedSimCategory === 'lago') {
      if (lagoDeckType === 'com_deck') score += 1;
    } else {
      if (kidsMaterialType === 'metalon') score += 1;
    }

    if (score <= 3) {
      return {
        label: 'Sob Medida Home',
        color: 'text-primary-green bg-primary-green/10 border-primary-green/20 border',
        duration: '5 a 10 dias úteis'
      };
    } else if (score <= 6) {
      return {
        label: 'Signature Premium',
        color: 'text-[#C9A227] bg-[#C9A227]/10 border-[#C9A227]/20 border',
        duration: '10 a 15 dias úteis'
      };
    } else {
      return {
        label: 'Resort Luxury Exclusivo',
        color: 'text-rose-500 bg-rose-500/10 border-rose-500/20 border',
        duration: '15 a 20 dias úteis'
      };
    }
  };

  const currentAddons = addonsList[selectedSimCategory] || [];

  const handleSendSimulatorMsg = () => {
    const spaceCategoryName = selectedSimCategory === 'lago' ? 'Lago Ornamental' : 'Área Kids (Playground)';
    const specificationDetail = selectedSimCategory === 'lago'
      ? `Configuração: ${lagoDeckType === 'com_deck' ? 'Com Deck' : 'Sem Deck'}`
      : `Material: ${kidsMaterialType === 'madeira' ? 'Playground de Madeira' : 'Playground de Metalon'}`;

    const activeAddonNames = currentAddons
      .filter((addon) => simAddons.includes(addon.id))
      .map((a) => a.name)
      .join(', ');

    const message = `Olá! Utilizei o simulador do site da Seven e gostaria de solicitar um atendimento com orçamento prévio para meu espaço:
    
- *Segmento:* ${spaceCategoryName}
- *Área Estimada:* ${simArea} m²
- *${specificationDetail}*
- *Opcionais de Sofisticação:* ${activeAddonNames || 'Nenhum opcional selecionado'}
- *Complexidade Calculada:* ${getComplexity().label}

Gostaria de agendar uma visita técnica para validar as metragens e bater um papo sobre o prazo de execução residencial.`;

    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/5519971636969?text=${encodedText}`, '_blank');
  };

  return (
    <section id="servicos" className="py-24 bg-[#ECECEC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary-green font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2">
            <span className="w-4 h-0.5 bg-primary-green" />
            <span>EXCELÊNCIA EM EXECUÇÃO</span>
            <span className="w-4 h-0.5 bg-primary-green" />
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-navy tracking-tight">
            Nossas Especialidades de Alto Padrão
          </h2>
          <p className="font-sans text-gray-600 text-sm leading-relaxed">
            Concentramos nossa engenharia e marcenaria artística naquilo que somos referência absoluta: a harmonia estética da água e a felicidade segura dos seus filhos.
          </p>
        </div>

        {/* Dynamic Service Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = ICON_MAP[service.id] || Waves;
            return (
              <div
                key={service.id}
                id={`card-${service.id}`}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 border border-gray-150 flex flex-col h-full group"
              >
                {/* Image thumb container */}
                <div className="relative h-52 overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/' + service.id + '/500/300';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/75 via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 right-4 bg-primary-navy/95 p-3 rounded-xl text-cyan-400 border border-cyan-400/20 shadow-lg">
                    <Icon className="w-5 h-5 rotate-0 group-hover:rotate-6 transition-transform" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-primary-navy tracking-tight group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Specifications list */}
                  <ul className="space-y-2 border-t border-gray-100 mt-4 pt-4">
                    {service.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start space-x-2 text-xs text-gray-700 leading-tight">
                        <Check className="w-4 h-4 text-primary-green shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      const element = document.querySelector('#orcamento-checkout');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-4 w-full bg-primary-navy text-white hover:bg-[#8B5A2B] font-display text-xs font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all duration-300"
                  >
                    Consultar Orçamento
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* High Conversion Interactive Project Builder Module with Range Slider */}
        <div id="simulador-card" className="mt-20 bg-primary-navy text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-white/5">
          
          {/* Abstract deep water and playground wood light patterns */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-green/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left selector col (7 columns) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 text-[10px] font-black uppercase tracking-widest py-1 px-3.5 rounded-full flex items-center w-fit space-x-1.5 font-display">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Simulador de Lazer e Sofisticação</span>
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white leading-snug">
                  Planeje e estruture as bases do seu projeto
                </h3>
                <p className="font-sans text-xs text-[#F5F5F5]/70">
                  Defina o tipo de obra ideal, ajuste a barra de metragem disponível no seu terreno e selecione os opcionais de alto padrão para receber um contato técnico pré-calculado.
                </p>
              </div>

              {/* Step 1: Category selections */}
              <div className="space-y-3">
                <label className="font-display text-xs font-extrabold text-cyan-400 uppercase tracking-widest flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <span>1. Qual é a vertente do seu projeto?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'lago', label: 'Lago Ornamental', icon: Waves, desc: 'Ecossistemas aquáticos integrados' },
                    { id: 'kids', label: 'Área Kids / Recreação', icon: Hammer, desc: 'Parquinhos de madeira ou metal' },
                  ].map((cat) => {
                    const CatIcon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedSimCategory(cat.id as any);
                          setSimAddons([]); // clear options to refresh
                        }}
                        className={`flex items-start p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                          selectedSimCategory === cat.id
                            ? 'border-cyan-400 bg-cyan-400/10 text-white shadow-lg'
                            : 'border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <div className={`p-2.5 rounded-lg mr-3 ${selectedSimCategory === cat.id ? 'bg-[#00B4D8] text-white' : 'bg-white/5 text-white'}`}>
                          <CatIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-display text-xs font-bold uppercase tracking-wider">{cat.label}</p>
                          <p className="text-[10px] text-white/50">{cat.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 1.5: Specific Segment Selectors based on Category */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedSimCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 bg-white/[0.03] border border-white/5 rounded-2xl p-4"
                >
                  {selectedSimCategory === 'lago' ? (
                    <div className="space-y-2">
                      <label 
                        id="deck-label"
                        className="font-display text-xs font-extrabold text-cyan-400 uppercase tracking-widest block"
                      >
                        Estrutura do Deck:
                      </label>
                      <div 
                        role="group" 
                        aria-labelledby="deck-label"
                        className="grid grid-cols-2 gap-3"
                      >
                        {[
                          { id: 'com_deck', label: 'Com Deck' },
                          { id: 'sem_deck', label: 'Sem Deck' }
                        ].map((deck) => (
                          <button
                            key={deck.id}
                            type="button"
                            onClick={() => setLagoDeckType(deck.id as any)}
                            className={`p-3.5 rounded-xl border text-center text-xs font-display font-bold transition-all cursor-pointer ${
                              lagoDeckType === deck.id
                                ? 'border-cyan-400 bg-cyan-400/20 text-white shadow-md'
                                : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            <span>{deck.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label 
                        id="material-label"
                        className="font-display text-xs font-extrabold text-cyan-400 uppercase tracking-widest block"
                      >
                        Material do Playground Infantil:
                      </label>
                      <div 
                        role="group" 
                        aria-labelledby="material-label"
                        className="grid grid-cols-2 gap-2"
                      >
                        {[
                          { id: 'madeira', label: 'Playground em Madeira', desc: 'Charme rústico' },
                          { id: 'metalon', label: 'Playground em Metalon', desc: 'Estrutura reforçada' }
                        ].map((mat) => (
                          <button
                            key={mat.id}
                            type="button"
                            onClick={() => setKidsMaterialType(mat.id as any)}
                            className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                              kidsMaterialType === mat.id
                                ? 'border-cyan-400 bg-cyan-400/20 text-white shadow-md'
                                : 'border-white/10 bg-white/5 text-white/50 hover:bg-white/10'
                            }`}
                          >
                            <p className="font-bold underline decoration-cyan-400/40 leading-tight">{mat.label}</p>
                            <p className="text-[9px] text-[#F5F5F5]/60 mt-0.5 leading-tight">{mat.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Step 2: NEW Metragem Área Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between" id="area-label">
                  <label className="font-display text-xs font-extrabold text-cyan-400 uppercase tracking-widest flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span>2. Qual a área média disponível?</span>
                  </label>
                  <span className="bg-cyan-400/20 text-cyan-400 border border-cyan-400/40 font-display font-black text-xs py-1 px-3 rounded-lg">
                    {simArea} m²
                  </span>
                </div>
                
                <div className="space-y-1.5 bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5">
                  <input
                    type="range"
                    min="1"
                    max="200"
                    value={simArea}
                    onChange={(e) => setSimArea(Number(e.target.value))}
                    aria-describedby="area-label"
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                    style={{
                      background: `linear-gradient(to right, #22d3ee ${(simArea - 1) / 1.99}%, rgba(255, 255, 255, 0.1) ${(simArea - 1) / 1.99}%)`
                    }}
                  />
                  <div className="flex justify-between text-[10px] text-[#F5F5F5]/50 font-mono">
                    <span>1 m²</span>
                    <span>50 m²</span>
                    <span>100 m²</span>
                    <span>150 m²</span>
                    <span>200 m²</span>
                  </div>
                  
                  {/* Dynamic dimension scale text */}
                  <div className="pt-2 border-t border-white/5 mt-3 flex items-center justify-between text-xs font-sans text-[#F5F5F5]/80">
                    <span className="flex items-center space-x-1">
                      <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Classificação da Área:</span>
                    </span>
                    <span className="font-bold font-display text-white">
                      {simArea <= 15 ? 'Compacto / Residência Interna' : simArea <= 65 ? 'Intermediário / Padrão Familiar' : 'Amplo / Resort Residencial ou Chácara'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step 3: Add-ons checkboxes */}
              <div className="space-y-3">
                <label className="font-display text-xs font-extrabold text-cyan-400 uppercase tracking-widest flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <span>3. Deseja opcionais de sofisticação?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentAddons.map((addon) => (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => handleToggleAddon(addon.id)}
                      className={`flex items-center space-x-3 p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        simAddons.includes(addon.id)
                          ? 'border-primary-green bg-primary-green/20 text-white shadow-md'
                          : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                        simAddons.includes(addon.id) ? 'bg-primary-green border-primary-green text-white' : 'border-white/30'
                      }`}>
                        {simAddons.includes(addon.id) && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span className="font-sans text-xs">{addon.name}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right statistics output panel (5 columns) */}
            <div className="lg:col-span-5 bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <p className="font-display text-xs font-bold text-cyan-400 uppercase tracking-widest border-b border-white/10 pb-2">
                  Diagnóstico Técnico Prévio
                </p>

                {/* Complexity Tier indicator */}
                <div className="space-y-1">
                  <p className="font-sans text-[10px] text-white/60 uppercase">Linha Tecnológica Estimada</p>
                  <div className={`py-2.5 px-3 rounded-lg font-display text-xs font-bold uppercase tracking-wider text-center ${getComplexity().color}`}>
                    {getComplexity().label}
                  </div>
                </div>

                {/* Estimate Execution duration */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <p className="font-sans text-[10px] text-white/50 uppercase leading-none">Tempo de Obra</p>
                    <p className="font-display text-xs font-bold text-white mt-1.5 leading-tight">{getComplexity().duration}</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <p className="font-sans text-[10px] text-white/50 uppercase leading-none">Mão de Obra</p>
                    <p className="font-display text-xs font-bold text-cyan-400 mt-1.5">100% Homologada</p>
                  </div>
                </div>

                {/* Quick Quality details check list */}
                <div className="space-y-2.5 pt-3 border-t border-white/5 text-[#F5F5F5]/80 text-[11px] leading-relaxed font-sans">
                  {selectedSimCategory === 'lago' ? (
                    <>
                      <p className="flex items-start space-x-2">
                        <span className="text-[#00B4D8] font-bold shrink-0 mt-0.5">●</span>
                        <span>Desenho sob medida e especificação do ecossistema do lago.</span>
                      </p>
                      <p className="flex items-start space-x-2">
                        <span className="text-[#00B4D8] font-bold shrink-0 mt-0.5">●</span>
                        <span>Impermeabilização dupla atóxica de alta blindagem contra vazamento.</span>
                      </p>
                      <p className="flex items-start space-x-2">
                        <span className="text-[#00B4D8] font-bold shrink-0 mt-0.5">●</span>
                        <span>Filtragem premium inteligente que consome pouca energia.</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="flex items-start space-x-2">
                        <span className="text-[#00B4D8] font-bold shrink-0 mt-0.5">●</span>
                        <span>Projeto personalizado sob medida para o espaço do seu quintal.</span>
                      </p>
                      <p className="flex items-start space-x-2">
                        <span className="text-[#00B4D8] font-bold shrink-0 mt-0.5">●</span>
                        <span>Local desenvolvido para máxima durabilidade e segurança das crianças.</span>
                      </p>
                      <p className="flex items-start space-x-2">
                        <span className="text-[#00B4D8] font-bold shrink-0 mt-0.5">●</span>
                        <span>Ancoragem pesada para suportar alta intensidade de uso no parquinho.</span>
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Direct Action trigger */}
              <div className="space-y-2">
                <button
                  onClick={handleSendSimulatorMsg}
                  className="w-full bg-[#25D366] hover:bg-[#1EBE57] text-white font-display text-xs font-bold uppercase tracking-widest py-4 px-6 rounded-xl hover:scale-102 active:scale-98 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Orçamento no WhatsApp</span>
                </button>
                <p className="text-[9px] text-[#F5F5F5]/40 text-center leading-normal">
                  *Nossa equipe fará o contato com base nessas diretrizes informadas.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
