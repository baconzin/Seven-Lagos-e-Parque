import { Building2, Home, Landmark, Hotel, Warehouse, ShieldPlus, TentTree, Trees, Plane, Users, School } from 'lucide-react';

export default function Segments() {
  const segments = [
    { title: 'Escolas', icon: School },
    { title: 'Clínicas', icon: ShieldPlus },
    { title: 'Condomínios', icon: Building2 },
    { title: 'Hotéis e Resorts', icon: Hotel },
    { title: 'Prefeituras', icon: Landmark },
    { title: 'Empresas', icon: Warehouse },
    { title: 'Chácaras e Fazendas', icon: Trees },
    { title: 'Residências', icon: Home },
    { title: 'Espaços de Eventos', icon: Users },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[#8B5A2B] font-display text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-2">
            <span className="w-4 h-0.5 bg-[#8B5A2B]" />
            <span>ALCANCE DA SEVEN CONSTRUÇÃO</span>
            <span className="w-4 h-0.5 bg-[#8B5A2B]" />
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary-navy tracking-tight">
            Segmentos Atendidos
          </h2>
          <p className="font-sans text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Atendemos de forma personalizada todos os tipos de projetos, desde residências exclusivas até grandes obras de infraestrutura recreativa e bem-estar para o setor corporativo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#ECECEC] rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 hover:bg-primary-navy hover:text-white transition-all duration-300 group cursor-default shadow-sm border border-gray-200"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm text-primary-navy group-hover:bg-[#8B5A2B] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-sm tracking-wide text-primary-navy group-hover:text-white transition-colors duration-300">
                  {seg.title}
                </h4>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
