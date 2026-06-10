import { CheckCircle2, ShieldAlert, Award, Star } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Marcenaria de Alto Padrão',
      desc: 'Nossos playgrounds são esculpidos com madeiras selecionadas de lei, tratadas com verniz de classe naval, quinas meticulosamente arredondadas e fixações ocultas que evitam acidentes.'
    },
    {
      title: 'Excelência em Projetos Exclusivos',
      desc: 'Os lagos ornamentais projetados pela Seven Construção não são meros espelhos d\'água. Eles utilizam sistemas eficientes de filtragem, garantindo água sempre cristalina e promovendo o bem-estar visual sem complicações.'
    },
    {
      title: 'Soluções Chave na Mão',
      desc: 'Cuidamos de tudo desde a escavação inicial, posicionamento milimétrico de pedras pesadas, instalação de sistemas, até o paisagismo que emoldura e completa o visual natural.'
    }
  ];

  return (
    <section id="empresa" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Creative Imagery Block (5 cols / 12) */}
          <div className="lg:col-span-6 relative">
            
            {/* Primary Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/PISCINA NATURAL 02.png"
                alt="Lago ornamental premium com carpas e água cristalina"
                className="w-full h-[350px] sm:h-[450px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />
            </div>

            {/* Overlapping secondary illustration representing craftsmanship woodwork */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 w-2/3 sm:w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
              <img
                src="/Deck deslizante.png"
                alt="Deck deslizante automatizado com requinte"
                className="w-full h-[180px] sm:h-[220px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Decorative Golden Badge Overlap */}
            <div className="absolute -top-5 -left-5 bg-[#C9A227] text-primary-navy font-display py-4 px-6 rounded-lg shadow-xl flex items-center space-x-3 border border-white">
              <Award className="w-8 h-8 text-primary-navy" />
              <div>
                <p className="font-bold text-lg leading-tight">100%</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider">Premium</p>
              </div>
            </div>

            {/* Dynamic visual bubble counter */}
            <div className="absolute bottom-1/3 -left-6 bg-primary-navy text-white p-4 rounded-xl shadow-xl hidden md:block border border-primary-gold/20 max-w-[170px]">
              <div className="flex space-x-1 mb-1 text-primary-gold">
                <Star className="w-4 h-4 fill-primary-gold" />
                <Star className="w-4 h-4 fill-primary-gold" />
                <Star className="w-4 h-4 fill-primary-gold" />
                <Star className="w-4 h-4 fill-primary-gold" />
                <Star className="w-4 h-4 fill-primary-gold" />
              </div>
              <p className="text-xs font-semibold leading-snug">Nota máxima em satisfação e durabilidade.</p>
            </div>

          </div>

          {/* Descriptive Content Block (7 cols / 12) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <p className="text-primary-gold font-display text-sm font-semibold uppercase tracking-widest flex items-center space-x-2">
                <span className="w-6 h-0.5 bg-primary-gold" />
                <span>Sobre a Seven</span>
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-navy tracking-tight leading-tight">
                Construindo espaços que encantam e valorizam seu imóvel.
              </h2>
            </div>

            <p className="font-sans text-gray-700 text-base leading-relaxed">
              A **Seven Construção** desenvolve projetos exclusivos para clientes que buscam beleza, lazer e valorização. Nossa equipe combina vasta experiência prática em construção de lagos, cascatas e playgrounds em playgrounds lúdicos, e também no segmento da saúde com o projeto de clínicas TEA.
            </p>

            <p className="font-sans text-gray-600 text-sm leading-relaxed border-l-4 border-primary-green pl-4">
              Cada detalhe de nossos lagos e áreas recreativas é planejado pensando na harmonia do ambiente, utilizando materiais de alta qualidade para resistir a anos de uso contínuo com beleza impecável.
            </p>

            {/* Three key pillars description list */}
            <div className="space-y-4 pt-2">
              {pillars.map((p, idx) => (
                <div key={idx} className="flex items-start space-x-3 group">
                  <div className="bg-primary-navy/5 text-primary-green p-1.5 rounded-lg group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#0F2744] text-sm group-hover:text-primary-gold transition-colors duration-300">
                      {p.title}
                    </h4>
                    <p className="font-sans text-xs text-justify text-gray-600 mt-0.5 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
