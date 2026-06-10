import { ShieldCheck, HeartHandshake, Award, Activity, Package, HardDrive, Eye, Hammer, Coins } from 'lucide-react';

export default function Features() {
  const customFeatures = [
    {
      title: 'Projetos Exclusivos',
      desc: 'Nenhum lago ou playground é idêntico a outro. Modelamos formatos, profundidades e disposições adaptados inteiramente às proporções do seu jardim.',
      icon: Eye,
    },
    {
      title: 'Atendimento Personalizado',
      desc: 'Canal de comunicação constante e direto com o encarregado da obra. Transparência total em cada etapa de escavação e montagem.',
      icon: HeartHandshake,
    },
    {
      title: 'Equipe Especializada',
      desc: 'Biólogos, paisagistas e carpinteiros de primeira linha que conhecem os parâmetros da água e os limites físicos de resistência da madeira.',
      icon: Hammer,
    },
    {
      title: 'Materiais de Alta Qualidade',
      desc: 'Trabalhamos com mantas protetoras atóxicas importadas e madeiras de lei tratadas sob tratamentos que repelem umidade extrema e pragas.',
      icon: Package,
    },
    {
      title: 'Acabamento Premium',
      desc: 'Polimento minucioso, ocultamento de parafusos, emolduramento orgânico de rochas ornamentais e camuflagem completa de cabeamentos.',
      icon: Award,
    },
    {
      title: 'Garantia dos Serviços',
      desc: 'Todos os projetos estruturais têm cobertura contra colapsos ou vazamentos de revestimento, permitindo uso pleno com total segurança.',
      icon: ShieldCheck,
    },
    {
      title: 'Segurança Estrutural',
      desc: 'Playgrounds calculados para aguentar rajadas de vento e cargas pesadas. Encaixes testados e aprovados para brincadeiras de grande atividade.',
      icon: HardDrive,
    },
    {
      title: 'Valorização do Imóvel',
      desc: 'Espaços com lagos bem cuidados e brinquedos de madeira chegam a elevar em até 20% o valor percebido de mercado de casas residenciais.',
      icon: Coins,
    },
    {
      title: 'Pós-venda e Suporte',
      desc: 'Consultas periódicas imediatas pelo WhatsApp para oferecer suporte rápido e garantir o perfeito funcionamento dos nossos projetos.',
      icon: Activity,
    },
  ];

  return (
    <section className="py-24 bg-[#0F2744] text-white relative overflow-hidden">
      
      {/* Decorative natural background circles */}
      <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-primary-green/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-primary-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Features title descriptor */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary-gold font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2">
            <span className="w-4 h-0.5 bg-primary-gold" />
            <span>Por que escolher a Seven?</span>
            <span className="w-4 h-0.5 bg-primary-gold" />
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Nossos Diferenciais de Elite
          </h2>
          <p className="font-sans text-[#F5F5F5]/70 text-sm">
            Nossos processos são focados inteiramente em excelência estrutural e satisfação absoluta. Descubra os motivos que nos mantêm como referência no mercado paulista.
          </p>
        </div>

        {/* Dynamic features grid (3x3 structured responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white/[0.04] rounded-2xl p-6 sm:p-8 hover:bg-white/[0.08] transition-all duration-300 border border-white/5 hover:border-primary-gold/25 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon circular wrapper */}
                  <div className="bg-primary-gold/10 text-primary-gold p-3.5 rounded-xl w-fit group-hover:bg-primary-gold group-hover:text-primary-navy transition-all duration-500">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-primary-gold transition-colors">
                    {feat.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-[#F5F5F5]/80 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                {/* Subtle bottom check line indicator */}
                <div className="flex items-center space-x-2 text-primary-gold mt-6 border-t border-white/5 pt-4 text-[10px] font-bold font-display uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-primary-gold text-primary-navy rounded-full p-0.5">✓</span>
                  <span>Garantia de Qualidade</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quality quote highlight banner */}
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-between rounded-2xl bg-white/5 border border-white/10 p-8 gap-6 max-w-5xl mx-auto">
          <div className="space-y-1 max-w-2xl text-center lg:text-left">
            <p className="font-display font-extrabold text-[#FFFFFF] text-lg">
              Compromisso com o Meio Ambiente & Seus Filhos
            </p>
            <p className="font-sans text-xs text-[#F5F5F5]/70">
              Nossos lagos consomem pouca energia por utilizarem bombas inteligentes de frequência alternada, e toda madeira de playground é proveniente de fontes 100% de reflorestamento controlado.
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.querySelector('#orcamento-checkout');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary-gold text-primary-navy font-display text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-lg shadow-md hover:scale-105 active:scale-95 transition-all text-center min-w-[200px]"
          >
            Fale com Equipe
          </button>
        </div>

      </div>
    </section>
  );
}
