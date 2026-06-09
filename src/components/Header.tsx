import { useState, useEffect } from 'react';
import { Menu, X, Phone, Waves, Trees, HelpingHand } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Empresa', href: '#empresa' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Como Trabalhamos', href: '#como-trabalhamos' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-primary-navy/95 shadow-xl py-3 border-b border-primary-wood/20 backdrop-blur-md'
          : 'bg-gradient-to-b from-primary-navy/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('#inicio');
            }}
            className="flex items-center space-x-2.5 group"
          >
            <div className="relative">
              <div className="bg-primary-navy text-cyan-400 p-2.5 rounded-xl border border-cyan-400/30 transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400">
                <Waves className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="font-display font-black text-xl sm:text-2xl tracking-wider text-white transition-colors duration-300">
                SEV<span className="text-cyan-400 font-extrabold">7</span>EN
              </div>
              <span className="text-[8px] uppercase tracking-[0.16em] text-[#F5F5F5]/75 -mt-0.5 font-bold">
                Lagos Ornamentais & Área Kids
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link Items */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.href);
                }}
                className="font-display text-xs lg:text-sm font-medium tracking-wide text-white/90 hover:text-primary-gold transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* High Conversion Request Quote Actions Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="https://wa.me/5519971636969?text=Olá! Gostaria de solicitar um orçamento para meu projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 font-sans text-xs text-white/90 hover:text-primary-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-primary-gold" />
              <span>(19) 97163-6969</span>
            </a>
            
            <button
              onClick={() => handleScrollTo('#orcamento-checkout')}
              className="bg-gradient-to-r from-primary-gold to-[#DDB635] text-primary-navy font-display text-xs font-semibold uppercase tracking-wider py-2.5 px-5 rounded-full shadow-lg hover:shadow-primary-gold/10 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Hamburguer Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => handleScrollTo('#orcamento-checkout')}
              className="sm:hidden bg-primary-gold text-primary-navy text-[10px] font-bold uppercase py-2 px-3 rounded-md"
            >
              Orçamento
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 focus:outline-none hover:text-primary-gold transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Drawer Overlay backdrop-blur for Mobile Devices */}
      <div
        className={`fixed inset-0 top-[60px] bg-primary-navy/95 z-40 transition-all duration-500 lg:hidden flex flex-col justify-between p-6 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className="font-display text-lg font-medium text-white hover:text-primary-gold transition-colors py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <span className="text-primary-gold text-xs">➔</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-4 bg-white/5 p-4 rounded-xl border border-white/10 mt-auto">
          <p className="font-display text-xs text-[#F5F5F5]/60 text-center uppercase tracking-widest">
            Atendimento Exclusivo
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch justify-center">
            <a
              href="https://wa.me/5519971636969?text=Olá! Gostaria de solicitar um orçamento para meu projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-green text-white text-center py-3 px-4 rounded-lg font-medium text-sm transition-transform hover:scale-102 active:scale-98 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
            <button
              onClick={() => handleScrollTo('#orcamento-checkout')}
              className="bg-primary-gold text-primary-navy text-center py-3 px-4 rounded-lg font-bold text-sm transition-transform hover:scale-102 active:scale-98"
            >
              Orçamento pelo Site
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
