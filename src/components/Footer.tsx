import { Waves, Trees, Instagram, Facebook, Mail, MapPin, Phone, Building } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleQuickScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-navy text-white text-xs border-t border-primary-wood/20 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand Introduction Column (4 cols of 12) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="bg-primary-navy text-cyan-400 p-2.5 rounded-xl border border-cyan-400/25">
                <Waves className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="font-display font-black text-lg tracking-wider text-white">
                  SEV<span className="text-cyan-400">7</span>EN
                </div>
                <span className="text-[8px] uppercase tracking-[0.16em] text-[#F5F5F5]/60 -mt-0.5 font-bold">
                  Lagos Ornamentais & Área Kids
                </span>
              </div>
            </div>

            <p className="font-sans text-[#F5F5F5]/70 leading-relaxed text-justify">
              Especializada na consultoria, desenvolvimento e execução de lagos ornamentais de alto padrão (com ou sem deck de madeira) e parquinhos ou playgrounds infantis customizados em madeira de reflorestamento, metal ou estruturas híbridas.
            </p>
            
            <p className="font-display font-bold text-primary-gold italic text-[11px]">
              &quot;Construindo espaços que encantam e valorizam.&quot;
            </p>

            {/* Social Network row buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-[#8B5A2B] text-white hover:text-[#C9A227] p-2.5 rounded-lg border border-white/10 transition-all shadow-md flex items-center justify-center cursor-pointer"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-[#8B5A2B] text-white hover:text-white p-2.5 rounded-lg border border-white/10 transition-all shadow-md flex items-center justify-center cursor-pointer"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation link groups (2 cols of 12) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-display font-black text-sm text-primary-gold uppercase tracking-widest border-l-2 border-primary-gold pl-2">
              Menu Rápido
            </p>
            <ul className="space-y-2.5 font-sans">
              {[
                { name: 'Início', href: '#inicio' },
                { name: 'Empresa', href: '#empresa' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Portfólio', href: '#projetos' },
                { name: 'Workflow', href: '#como-trabalhamos' },
                { name: 'Contato', href: '#orcamento-checkout' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleQuickScroll(link.href);
                    }}
                    className="text-[#F5F5F5]/60 hover:text-primary-gold transition-colors block py-0.5"
                  >
                    ➔ {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Contacts info (3 cols of 12) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-display font-black text-sm text-primary-gold uppercase tracking-widest border-l-2 border-primary-gold pl-2">
              Contato Direto
            </p>
            <ul className="space-y-4 font-sans text-[#F5F5F5]/80">
              <li className="flex items-start space-x-3">
                <Phone className="w-4.5 h-4.5 text-primary-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white uppercase text-[10px] tracking-wide">WhatsApp Atendimento</p>
                  <a
                    href="https://wa.me/5519971636969?text=Olá! Gostaria de conversar sobre um projeto."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-gold transition-colors font-medium mt-0.5 block"
                  >
                    (19) 97163-6969
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4.5 h-4.5 text-primary-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white uppercase text-[10px] tracking-wide">Atendimento Presencial</p>
                  <span className="leading-snug mt-0.5 block text-[#F5F5F5]/70 text-xs">
                    Rio Claro, Limeira, Piracicaba, Cordeirópolis, Santa Gertrudes, Artur Nogueira, Analândia e região.
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Building className="w-4.5 h-4.5 text-primary-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white uppercase text-[10px] tracking-wide">Sede Corporativa</p>
                  <span className="leading-snug mt-0.5 block text-[#F5F5F5]/70 text-xs">
                    Rio Claro - SP, Brasil
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Interactive responsively embedded Google Map wrapper (3 cols of 12) */}
          <div className="lg:col-span-3 space-y-4 flex flex-col h-full">
            <p className="font-display font-black text-sm text-primary-gold uppercase tracking-widest border-l-2 border-primary-gold pl-2">
              Localização Sede
            </p>
            
            {/* Embedded Iframe Container */}
            <div className="w-full h-40 rounded-xl overflow-hidden shadow-md border border-white/10 bg-white/5 relative">
              <iframe
                title="Sede Seven - Rio Claro, SP"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117961.56549491763!2d-47.654316!3d-22.408794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7c5ed24b611e9%3A0xe5a3c200424fbfe6!2sRio%20Claro%20-%20SP%2C%20Brazil!5e0!3m2!1sen!2sus!4v1717894000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0 select-none grayscale invert contrast-125 opacity-70"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Closing details & Copyright credits row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#F5F5F5]/40 text-[10px]">
          <p className="font-sans text-center sm:text-left transition-colors hover:text-[#FFFFFF]/90">
            © {currentYear} Seven. CNPJ sob diretrizes paulistas. Todos os direitos reservados.
          </p>
          <p className="font-display font-bold uppercase tracking-wider text-center sm:text-right">
            Slogan: <span className="text-[#C9A227]">Construindo espaços que encantam e valorizam.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
