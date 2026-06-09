import { ServiceItem, GalleryItem, StepItem, TestimonialItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'lago',
    title: 'Lagos Ornamentais',
    description: 'Projetos exclusivos que unem engenharia biológica e beleza estética. Criamos ecossistemas maduros com águas cristalinas, opções de decks elegantes e carpas de linhagem.',
    bullets: [
      'Projetos Personalizados e Estudo de Implantação',
      'Estruturas com ou sem Deck de Madeira nobre (Cumaru/Ipê)',
      'Escavação estruturada e impermeabilização reforçada de alta durabilidade',
      'Filtragem biológica avançada com ozônio e UV (sem odores ou mosquitos)',
      'Instalação e aclimatação de Carpas Nishikigoi selecionadas'
    ],
    image: 'https://images.unsplash.com/photo-1544480542-14decd216bf6?q=80&w=1200',
    category: 'lagos'
  },
  {
    id: 'kids',
    title: 'Área Kids (Playgrounds Premium)',
    description: 'Espaços recreativos infantis focados em máxima segurança e design harmônico. Oferecemos playground de madeira nobre, playground de metal resistente, ou a fusão de ambos.',
    bullets: [
      'Parquinhos customizados em Madeira de Lei tratada',
      'Playgrounds em Metal com pintura eletrostática altamente durável',
      'Estruturas híbridas unindo com suavidade madeira e metal juntos',
      'Fixações ocultas sem parafusos expostos e quinas 100% arredondadas',
      'Integração estética e funcional com o espaço de lazer da família'
    ],
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1200',
    category: 'kids'
  },
  {
    id: 'manutencao',
    title: 'Manutenção e Conservação Exclusiva',
    description: 'Suporte constante para manter seu ecossistema saudável e seus playgrounds sempre firmes e seguros para a alegria das crianças.',
    bullets: [
      'Limpeza bioquímica detalhada dos filtros e mídias biológicas',
      'Lixamento mecânico, tratamento de pragas e aplicação de verniz náutico',
      'Upgrades preventivos em lâmpadas germicidas UV e geradores de ozônio',
      'Análise rigorosa e reaperto de ferragens e ancoragens de playgrounds',
      'Monitoramento preventivo de parâmetros periódicos do lago'
    ],
    image: 'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=1200',
    category: 'lagos'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Lago Ornamental de Carpas com Deck Integrado',
    category: 'lagos',
    categoryLabel: 'Lagos Ornamentais',
    image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1200',
    description: 'Lago de carpas de alto padrão contornando deck exclusivo em madeira Cumaru tratada, conferindo requinte imediato ao jardim.',
    tags: ['Com Deck de Madeira', 'Ozônio Ativo', 'Rochas Vulcânicas']
  },
  {
    id: 'gal-2',
    title: 'Playground sob Medida Híbrido (Madeira & Metal)',
    category: 'kids',
    categoryLabel: 'Área Kids',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e9053?q=80&w=1200',
    description: 'Estrutura premium instalada no jardim que combina as torres quentes de madeira de reflorestamento com as barras e balanços de metal galvanizado.',
    tags: ['Multi Material', 'Escalada de Corda', 'Pintura Automotiva']
  },
  {
    id: 'gal-3',
    title: 'Lago Ornamental Tradicional com Pedras Moledo',
    category: 'lagos',
    categoryLabel: 'Lagos Ornamentais',
    image: 'https://images.unsplash.com/photo-1544480542-14decd216bf6?q=80&w=1200',
    description: 'Lindo ecossistema de 14.000 litros elaborado sem deck, emoldurado organicamente por pedras Moledo brutas, carpas ativas e filtro de controle de lodo.',
    tags: ['Sem Deck', 'Pedras Moledo', 'Água Cristalina']
  },
  {
    id: 'gal-4',
    title: 'Playground Premium Clássico em Madeira de Reflorestamento',
    category: 'kids',
    categoryLabel: 'Área Kids',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1200',
    description: 'Parquinho infantil imponente feito inteiramente em madeira nobre certificada, apresentando balanço duplo, escorregador plano e torre de aventura.',
    tags: ['Playground de Madeira', 'Toras Nobres', 'Acabamento Liso']
  },
  {
    id: 'gal-5',
    title: 'Lago Ornamental Compacto de Entrada',
    category: 'lagos',
    categoryLabel: 'Lagos Ornamentais',
    image: 'https://images.unsplash.com/photo-1563884105-188b89410518?q=80&w=1200',
    description: 'Perfeito para pequenos refúgios residenciais ou recepções externas, utilizando bombas eletrônicas inteligentes de alta eficiência energética.',
    tags: ['Compacto', 'Zero Odor', 'Aconchegante']
  },
  {
    id: 'gal-6',
    title: 'Playground Kids Slim em Metal Marítimo',
    category: 'kids',
    categoryLabel: 'Area Kids',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200',
    description: 'Parquinho em metal de altíssima resistência urbana, com tratamento anti-ferrugem e balanços ergonômicos confortáveis.',
    tags: ['Playground de Metal', 'Pintura Eletrostática', 'Anticorrosão']
  }
];

export const TIMELINE_DATA: StepItem[] = [
  {
    number: '01',
    title: 'Briefing Inteligente',
    description: 'Entendimento total do seu sonho. Alinhamos as dimensões disponíveis, preferências de materiais (madeira, metal ou combos) e o escopo exato do projeto do lago ou parquinho.'
  },
  {
    number: '02',
    title: 'Visita Técnica Rigorosa',
    description: 'Análise detalhada de insolação e inclinação do terreno residencial, estabilidade de solos para balanços/ancoragens, e infraestrutura elétrica/hidráulica.'
  },
  {
    number: '03',
    title: 'Layout Técnico & Planejamento',
    description: 'Apresentação detalhada do layout, posicionamento das pedras ou brinquedos, cronograma de obras e orçamento cristalino sem qualquer taxa oculta.'
  },
  {
    number: '04',
    title: 'Instalação & Construção',
    description: 'Fase de execução liderada por carpinteiros, serralheiros e especialistas biológicos autorizados. Mão de obra cirúrgica para garantir encaixes perfeitos de segurança de ponta.'
  },
  {
    number: '05',
    title: 'Entrega Técnica',
    description: 'Rigoroso comissionamento e testes de filtragem, dosadores de ozônio e teste de cargas nos brinquedos. Orientação cuidadosa sobre cuidados preventivos e entrega das chaves.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'dep-1',
    name: 'Juliana Vasconcelos',
    role: 'Proprietária em Condomínio Fechado',
    text: 'A Seven superou todas as expectativas. Meu lago ornamental de carpas com deck integrado é o coração da nossa casa hoje. A água está sempre cristalina e a manutenção é extremamente sossegada.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&fit=crop',
    project: 'Lago Ornamental de Carpas com Deck'
  },
  {
    id: 'dep-2',
    name: 'Roberto Camargo',
    role: 'Arquiteto e Paisagista',
    text: 'Como arquiteto que atua em alto padrão residencial, eu prezo por prazos e alto acabamento. O playground híbrido de madeira e metal que elaboramos juntos ficou fascinante. Encaixes milimétricos e quinas redondas que dão muita paz aos pais.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop',
    project: 'Playground sob Medida Combinado'
  },
  {
    id: 'dep-3',
    name: 'Felipe e Mariana Mendes',
    role: 'Pais de Família em Chácara',
    text: 'Decidimos encomendar um lago de carpas em pedras Moledo e um parquinho infantil de madeira para os nossos filhos. A qualidade técnica deles nos deu enorme segurança desde o primeiro contato. Excelente!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&fit=crop',
    project: 'Lago Ornamental & Área Kids'
  }
];
