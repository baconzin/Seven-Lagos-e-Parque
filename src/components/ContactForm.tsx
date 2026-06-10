import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, Sparkles, MessageSquare, Clock } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    tipoProjeto: 'Lagos Ornamentais',
    mensagem: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const [popupBlocked, setPopupBlocked] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Format phone number dynamically to (XX) XXXXX-XXXX as user digits
  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, '');
    if (digits.length > 11) digits = digits.slice(0, 11);
    
    if (digits.length <= 2) {
      return digits;
    } else if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const formatted = formatPhone(rawVal);
    setFormData({ ...formData, telefone: formatted });
    if (errors.telefone) {
      setErrors({ ...errors, telefone: '' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Basic Validation Checks
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório.';
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone/WhatsApp é obrigatório.';
    } else if (formData.telefone.replace(/\D/g, '').length < 10) {
      newErrors.telefone = 'Insira um telefone válido com DDD.';
    }
    if (!formData.cidade.trim()) newErrors.cidade = 'Cidade é obrigatória.';
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Descreva brevemente o seu sonho.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success state triggering animation
    setIsSuccess(true);

    // Dynamic WhatsApp integration compiler
    const baseMsg = `Olá, Seven Construção! Gostaria de solicitar um orçamento pelo site:

*Nome completo:* ${formData.nome}
*Telefone/WhatsApp:* ${formData.telefone}
*Cidade/Região:* ${formData.cidade}
*Interesse principal:* ${formData.tipoProjeto}

*Detalhes do Projeto:*
"${formData.mensagem}"

Agradeço e aguardo contato para alinhamento!`;

    const encoded = encodeURIComponent(baseMsg);
    
    // Auto-opens after a brief micro-delay for success visuals
    setTimeout(() => {
      const waUrl = `https://wa.me/5519971636969?text=${encoded}`;
      const newWindow = window.open(waUrl, '_blank');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        setPopupBlocked(true);
        setWhatsappUrl(waUrl);
      }
      setIsSuccess(false);
    }, 1200);
  };

  return (
    <section id="orcamento-checkout" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column (5 cols) - Brand contacts and conversion credentials */}
          <div className="lg:col-span-5 bg-gradient-to-br from-primary-navy to-[#061221] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/5">
            
            {/* Background elements */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-[#8B5A2B]/10 blur-3xl pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              <div className="space-y-3">
                <span className="bg-primary-gold/15 text-primary-gold border border-primary-gold/30 text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full flex items-center w-fit space-x-1 font-display">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Vamos Projetar Juntos?</span>
                </span>
                
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  Tire o Seu Projeto do Papel Hoje Mesmo!
                </h2>
                
                <p className="font-sans text-xs sm:text-sm text-[#F5F5F5]/70 leading-relaxed">
                  Traga seus esboços, metragens ou apenas um desejo. Prestamos consultoria cuidadosa para transformar suas ideias em um projeto concreto e sofisticado.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2E5E3A]/20 text-[#25D366] p-3 rounded-xl">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-primary-gold uppercase tracking-wider">Fale no WhatsApp</p>
                    <a
                      href="https://wa.me/5519971636969?text=Olá! Gostaria de solicitar um orçamento para meu projeto."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-base hover:text-primary-gold transition-colors block font-semibold mt-0.5"
                    >
                      (19) 97163-6969
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/5 text-primary-gold p-3 rounded-xl border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-white/50 uppercase tracking-wider">Telefone Comercial</p>
                    <a
                      href="tel:+5519971636969"
                      className="font-sans text-base hover:text-primary-gold transition-colors block font-semibold mt-0.5"
                    >
                      (19) 97163-6969
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/5 text-white/70 p-3 rounded-xl border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-white/50 uppercase tracking-wider">Área de Atendimento</p>
                    <p className="font-sans text-xs text-justify text-[#F5F5F5]/80 mt-0.5 leading-relaxed">
                      Campinas, Piracicaba, Limeira e todas as principais regiões metropolitanas do interior paulista.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Support guarantee info */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2 mt-8 relative z-10">
              <div className="flex items-center space-x-2 text-primary-gold font-semibold font-display text-xs">
                <Clock className="w-4 h-4" />
                <span>Resposta Rápida</span>
              </div>
              <p className="text-[10px] font-sans text-white/60 leading-normal">
                Retornamos todas as solicitações de orçamento pelo site em no máximo 2 horas comerciais de segunda a sábado.
              </p>
            </div>

          </div>

          {/* Right Column (7 cols) - Interactive detailed quote form */}
          <div id="contato" className="lg:col-span-7 bg-[#F5F5F5] rounded-3xl p-6 sm:p-10 border border-gray-150 shadow-xl">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-primary-navy tracking-tight mb-2">
              Formulário de Pré-Orçamento
            </h3>
            <p className="font-sans text-xs text-gray-500 mb-8">
              Preencha com calma. As informações abaixo nos ajudam a preparar soluções exclusivas para a sua consulta técnica.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nome Completo */}
                <div className="space-y-1.5">
                  <label htmlFor="nome" className="block text-xs font-semibold text-primary-navy uppercase tracking-wider font-display">
                    Seu Nome Completo *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Ex: João da Silva"
                    className={`w-full bg-white border rounded-xl py-3 px-4 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-gold ${
                      errors.nome ? 'border-rose-400 focus:border-rose-400' : 'border-gray-200'
                    }`}
                  />
                  {errors.nome && <p className="text-[10px] text-rose-500 font-medium">{errors.nome}</p>}
                </div>

                {/* Telefone / WhatsApp */}
                <div className="space-y-1.5">
                  <label htmlFor="telefone" className="block text-xs font-semibold text-primary-navy uppercase tracking-wider font-display">
                    Telefone ou WhatsApp *
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handlePhoneChange}
                    placeholder="Ex: (19) 97163-6969"
                    className={`w-full bg-white border rounded-xl py-3 px-4 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-gold ${
                      errors.telefone ? 'border-rose-400 focus:border-rose-400' : 'border-gray-200'
                    }`}
                  />
                  {errors.telefone && <p className="text-[10px] text-rose-500 font-medium">{errors.telefone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Cidade / Região */}
                <div className="space-y-1.5">
                  <label htmlFor="cidade" className="block text-xs font-semibold text-primary-navy uppercase tracking-wider font-display">
                    Cidade / Região do Projeto *
                  </label>
                  <input
                    id="cidade"
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    placeholder="Ex: Campinas - SP"
                    className={`w-full bg-white border rounded-xl py-3 px-4 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-gold ${
                      errors.cidade ? 'border-rose-400 focus:border-rose-400' : 'border-gray-200'
                    }`}
                  />
                  {errors.cidade && <p className="text-[10px] text-rose-500 font-medium">{errors.cidade}</p>}
                </div>

                {/* Tipo de Projeto dropdown selection */}
                <div className="space-y-1.5">
                  <label htmlFor="tipoProjeto" className="block text-xs font-semibold text-primary-navy uppercase tracking-wider font-display">
                    Tipo de Projeto Ideal *
                  </label>
                  <select
                    id="tipoProjeto"
                    name="tipoProjeto"
                    value={formData.tipoProjeto}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-gold cursor-pointer"
                  >
                    <option value="Lago Ornamental">Lago Ornamental</option>
                    <option value="Deck Deslizante">Deck Deslizante</option>
                    <option value="Cascata ou Espelho d'Água">Cascata ou Espelho d'Água</option>
                    <option value="Playground em Madeira">Playground em Madeira</option>
                    <option value="Playground em Metalon">Playground em Metalon</option>
                    <option value="Área Kids">Área Kids</option>
                    <option value="Clínica para TEA">Clínica para TEA</option>
                    <option value="Outro Projeto">Outro Projeto</option>
                  </select>
                </div>
              </div>

              {/* Mensagem detalhada */}
              <div className="space-y-1.5">
                <label htmlFor="mensagem" className="block text-xs font-semibold text-primary-navy uppercase tracking-wider font-display">
                  Conte-nos Sobre Seu Sonho *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Diga-nos o que você planeja, medidas estimadas da área que possui no terreno ou quaisquer outras escolhas que preze..."
                  className={`w-full bg-white border rounded-xl py-3 px-4 text-xs sm:text-sm font-sans focus:outline-none focus:border-primary-gold resize-none ${
                    errors.mensagem ? 'border-rose-400 focus:border-rose-400' : 'border-gray-200'
                  }`}
                />
                {errors.mensagem && <p className="text-[10px] text-rose-500 font-medium">{errors.mensagem}</p>}
              </div>

              {/* Action trigger block */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSuccess}
                  className={`w-full font-display text-xs font-bold uppercase tracking-widest py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                    isSuccess
                      ? 'bg-primary-green text-white'
                      : 'bg-primary-navy hover:bg-[#8B5A2B] text-white hover:scale-101 active:scale-99'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSuccess ? 'Abrindo seu WhatsApp...' : 'Enviar Orçamento pelo WhatsApp'}</span>
                </button>
                {popupBlocked && (
                  <div className="text-[10px] text-center mt-3 bg-red-50 text-red-600 p-2 rounded border border-red-100">
                    Seu navegador bloqueou o redirecionamento. <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline">Clique aqui para abrir o WhatsApp</a> ou ligue: (19) 97163-6969
                  </div>
                )}
                <p className="text-[10px] text-gray-400 text-center mt-3 font-sans">
                  * Ao clicar em enviar, você será redirecionado para o WhatsApp com os dados preenchidos de forma formatada e limpa.
                </p>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
