import { ServiceItem, GalleryItem, StepItem, TestimonialItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'lago',
    title: 'Lagos Ornamentais',
    description: 'Projetos exclusivos que unem harmonia e beleza estética. Criamos espaços refinados com águas cristalinas, opções de decks elegantes e carpas de linhagem para valorizar seu imóvel.',
    bullets: [
      'Projetos Personalizados e Estudo de Implantação',
      'Estruturas com ou sem Deck de Madeira nobre',
      'Escavação estruturada e impermeabilização de alta durabilidade',
      'Sistemas eficientes focados em Água Cristalina',
      'Integração de beleza e funcionalidade'
    ],
    image: '/PISCINA NATURAL 02.png',
    category: 'lago'
  },
  {
    id: 'decks_deslizantes',
    title: 'Decks Deslizantes Automatizados',
    description: 'Projetos inovadores de decks de madeira que deslizam suavemente sobre piscinas ou lagos, otimizando o espaço e proporcionando segurança extrema com design sofisticado.',
    bullets: [
      'Sistema automatizado com acionamento por botão',
      'Otimização de área útil em quintais e jardins',
      'Estrutura metálica com rolamentos de alta carga',
      'Revestimento em madeira nobre tratada',
      'Segurança total para crianças e pets'
    ],
    image: '/Deck deslizante.png', // Fallback image since video isn't optimal for services thumbnail
    category: 'decks_deslizantes'
  },
  {
    id: 'cascatas',
    title: 'Cascatas e Espelhos d\'Água',
    description: 'Integração perfeita da água ao paisagismo, proporcionando tranquilidade e frescor. Cada detalhe é pensado para garantir extrema qualidade, beleza e durabilidade.',
    bullets: [
      'Cascatas com pedras naturais e acabamento premium',
      'Espelhos d\'água para ambientes internos e externos',
      'Valorização estética com projetos unicos',
      'Sistema contínuo e silencioso',
      'Beleza duradoura com uso de materiais selecionados'
    ],
    image: '/Etapa 15 lago ornamental.jpeg',
    category: 'cascatas'
  },
  {
    id: 'kids_madeira',
    title: 'Playgrounds em Madeira',
    description: 'Espaços recreativos focados em máxima segurança e design harmônico. Oferecemos estruturas feitas com as melhores madeiras para a diversão de longa durabilidade.',
    bullets: [
      'Parquinhos customizados em Madeira Tratada',
      'Projetos 100% focados na segurança das crianças',
      'Fixações ocultas e quinas arredondadas',
      'Durabilidade testada e garantia de qualidade',
      'Integração com a área de lazer'
    ],
    image: '/Parquinho02.png',
    category: 'kids_madeira'
  },
  {
    id: 'kids_metalon',
    title: 'Playgrounds em Metalon',
    description: 'Projetos recreativos de alta durabilidade desenvolvidos com estruturas metálicas reforçadas. Ideal para escolas, condomínios, clubes, hotéis e áreas públicas.',
    bullets: [
      'Estruturas resistentes em metalon galvanizado',
      'Playgrounds para condomínios e praças',
      'Máxima durabilidade para usos intensos',
      'Personalização de cores para escolas e hotéis',
      'Instalação profissional segura e ágil'
    ],
    image: '/Brinquedo Metalon 01.png', // playground metalon/hibrido
  },
  {
    id: 'areas_kids',
    title: 'Áreas Kids',
    description: 'Desenvolvimento completo de espaços recreativos para escolas, clínicas, condomínios, buffets e centros de entretenimento, unindo ludicidade e proteção.',
    bullets: [
      'Projeto criativo de Brinquedotecas',
      'Aproveitamento inteligente com espaços temáticos',
      'Ambientes educativos e lúdicos',
      'Acabamentos suaves para uso constante',
      'Projetos 100% personalizados e exclusivos'
    ],
    image: '/Area kids 01.png', // brinquedoteca
  },
  {
    id: 'pergolados',
    title: 'Coberturas e Pergolados',
    description: 'Estruturas de madeira ou metal com coberturas sofisticadas, criando espaços aconchegantes e integrados ao seu ambiente externo. Proteção contra intempéries sem perder a luminosidade e charme.',
    bullets: [
      'Projetos em Madeira Tratada ou Metalon Premium',
      'Coberturas modernas transparentes ou translúcidas',
      'Ampliação de área de lazer e convivência',
      'Resistência e durabilidade impecáveis',
      'Design integrado ao paisagismo atual'
    ],
    image: '/Cobertura e Pergolado 03.jpeg',
    category: 'pergolados'
  },
  {
    id: 'clinicas_tea',
    title: 'Clínicas Especializadas para TEA',
    description: 'Projeto e execução rigorosa de clínicas especializadas para atendimento de pessoas com Transtorno do Espectro Autista (TEA), respeitando os parâmetros de terapia e bem-estar.',
    bullets: [
      'Projeto completo estrutural da clínica',
      'Montagem fina de salas sensoriais acalentadoras',
      'Consultórios, recepção e salas terapêuticas',
      'Adequação e integração sensorial especializada',
      'Estruturas seguras, acolhedoras e padronizadas'
    ],
    image: '/Sala TEO.png', // sensorial room
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'lago-1',
    title: 'Lago Ornamental Harmonioso',
    category: 'lagos',
    categoryLabel: 'Lagos Ornamentais',
    image: '/PISCINA NATURAL 02.png',
    description: 'Lago impressionante e seguro com contorno exclusivo, conferindo requinte imediato ao jardim.',
    tags: ['Personalização', 'Qualidade', 'Durabilidade']
  },
  {
    id: 'lago-2',
    title: 'Piscina Natural Completa',
    category: 'lagos',
    categoryLabel: 'Lagos Ornamentais',
    image: '/PISCINA NATURAL 02.png',
    description: 'Projeto imersivo de piscina natural com água cristalina, pedras moledo e borda acessível.',
    tags: ['Beleza', 'Personalização', 'Excelência']
  },
  {
    id: 'lago-3',
    title: 'Integração com Deck e Paisagismo',
    category: 'lagos',
    categoryLabel: 'Lagos Ornamentais',
    image: '/PISCINA NATURAL 03.png',
    description: 'Harmonia perfeita entre água, rochas naturais e deck de madeira nobre para relaxamento.',
    tags: ['Integração', 'Requinte', 'Relaxamento']
  },
  {
    id: 'lago-4',
    title: 'Execução: Etapa de Geomenbrana e Pedras',
    category: 'lagos',
    categoryLabel: 'Lagos Ornamentais',
    image: '/Etapa 11 lago ornamental.jpeg',
    description: 'Mostrando nossa excelência nos bastidores: estruturação impecável da base com manta e pedras.',
    tags: ['Construção', 'Segurança', 'Técnica']
  },
  {
    id: 'lago-5',
    title: 'Projeto Sustentável em Viveiro',
    category: 'lagos',
    categoryLabel: 'Lagos Ornamentais',
    image: '/Etapa 13 lago ornamental.jpeg',
    description: 'Lagos concebidos com as mais exigentes técnicas de filtragem e ecossistema equilibrado.',
    tags: ['Eco', 'Cristalina']
  },
  {
    id: 'gal-7',
    title: 'Deck Deslizante Automatizado',
    category: 'decks_deslizantes',
    categoryLabel: 'Decks Deslizantes',
    image: '/Deck deslizante piscina.mp4',
    type: 'video',
    description: 'Decks que deslizam suavemente sobre piscinas ou lagos, otimizando seu ambiente.',
    tags: ['Automatizado', 'Segurança', 'Otimização de Espaço']
  },
  {
    id: 'cascata-1',
    title: 'Construção Criteriosa',
    category: 'cascatas',
    categoryLabel: 'Cascatas',
    image: '/Etapa 15 lago ornamental.jpeg',
    description: 'A base forte com ferragens para cascatas e estruturas de apoio com segurança máxima.',
    tags: ['Estrutura', 'Base Sólida', 'Segurança']
  },
  {
    id: 'kids-m1',
    title: 'Playground Rústico em Madeira',
    category: 'kids_madeira',
    categoryLabel: 'Playgrounds Madeira',
    image: '/Parquinho12-1.png',
    description: 'Balanços e torre do parquinho feitos com madeira rústica e com absoluto controle de qualidade.',
    tags: ['Segurança', 'Madeira Nobre', 'Proteção']
  },
  {
    id: 'kids-m2',
    title: 'Área Kids Acolhedora',
    category: 'areas_kids',
    categoryLabel: 'Áreas Kids',
    image: '/Area kids 02.png',
    description: 'Espaços recreativos e lúdicos com excelente aproveitamento e proteção para as crianças.',
    tags: ['Escola', 'Clínica', 'Diversão']
  },
  {
    id: 'kids-m3',
    title: 'Clínica Infantil Especializada',
    category: 'clinicas_tea',
    categoryLabel: 'Clínicas TEA',
    image: '/Sala TEO.png',
    description: 'Ambientes montados terapeuticamente visando a acomodação e conforto ideal.',
    tags: ['Especializada', 'Sensorial', 'Cuidado']
  },
  {
    id: 'kids-m4',
    title: 'Brinquedoteca Moderna',
    category: 'areas_kids',
    categoryLabel: 'Áreas Kids',
    image: '/Area kids 04.png',
    description: 'Estruturas completas para proporcionar desafios diários com aprendizado inclusivo.',
    tags: ['Aprendizado', 'Lazer', 'Madeira']
  },
  {
    id: 'kids-m5',
    title: 'Circuito Kids Completo',
    category: 'areas_kids',
    categoryLabel: 'Áreas Kids',
    image: '/Area kids 003.jpeg',
    description: 'Equilíbrio e coordenação em brinquedos modulares testados contra grandes impactos.',
    tags: ['Modular', 'Impacto', 'Kids']
  },
  {
    id: 'kids-m6',
    title: 'Playground Kids Externo',
    category: 'areas_kids',
    categoryLabel: 'Áreas Kids',
    image: '/Area kids 005.jpeg',
    description: 'Ambientes coloridos e dinâmicos de alta segurança para áreas limpas de convívio.',
    tags: ['Convívio', 'Exterior', 'Kids']
  },
  {
    id: 'kids-me1',
    title: 'Parquinho Colorido em Metalon e Madeira',
    category: 'kids_metalon',
    categoryLabel: 'Playgrounds Metalon/Híbridos',
    image: '/Brinquedo Metalon 01.png',
    description: 'A união da durabilidade do metal e a estética da madeira tratada, colorido para área educacional.',
    tags: ['Durabilidade', 'Metalon', 'Solidez']
  },
  {
    id: 'kids-me2',
    title: 'Área Kids Híbrida Condominial',
    category: 'kids_metalon',
    categoryLabel: 'Playgrounds Metalon/Híbridos',
    image: '/Brinquedo Metalon 03.png',
    description: 'Opções em áreas modulares híbridas que se adequam ao espaço restrito dos condomínios.',
    tags: ['Híbrido', 'Compacto', 'Seguro']
  },
  {
    id: 'pergolados-1',
    title: 'Pergolado e Cobertura Aconchegante',
    category: 'pergolados',
    categoryLabel: 'Coberturas e Pergolados',
    image: '/Cobertura e Pergolado 03.jpeg',
    description: 'Um espaço de lazer integrado ao ambiente externo com proteção, trazendo beleza e conforto térmico.',
    tags: ['Madeira', 'Charme', 'Lazer']
  },
  {
    id: 'pergolados-2',
    title: 'Estrutura Moderna de Convivência',
    category: 'pergolados',
    categoryLabel: 'Coberturas e Pergolados',
    image: '/Cobertura e Pergolado 04.jpeg',
    description: 'Projetos sob medida em madeira tratada que transformam e ampliam seu espaço social.',
    tags: ['Ampliação', 'Design', 'Conforto']
  },
  {
    id: 'pergolados-3',
    title: 'Pergolado Iluminado Natura',
    category: 'pergolados',
    categoryLabel: 'Coberturas e Pergolados',
    image: '/Cobertura e Pergolado 01.jpeg',
    description: 'Iluminação natural aproveitada ao máximo com uma estrutura resistente e elegante.',
    tags: ['Resistência', 'Luz Natural']
  },
  {
    id: 'pergolados-4',
    title: 'Área de Descanso Coberta',
    category: 'pergolados',
    categoryLabel: 'Coberturas e Pergolados',
    image: '/Cobertura e Pergolado 02.jpeg',
    description: 'Requinte e acabamento premium nesta cobertura perfeitamente instalada.',
    tags: ['Acabamento', 'Premium', 'Proteção']
  },
  {
    id: 'pergolados-5',
    title: 'Cobertura Translúcida e Madeira',
    category: 'pergolados',
    categoryLabel: 'Coberturas e Pergolados',
    image: '/Cobertura e Pergolado 05.jpeg',
    description: 'Proteção contra mudanças de tempo com estilo e elegância mantidos na área gourmet.',
    tags: ['Durabilidade', 'Gourmet']
  },
  {
    id: 'pergolados-6',
    title: 'Pergolado Harmonioso sob Medida',
    category: 'pergolados',
    categoryLabel: 'Coberturas e Pergolados',
    image: '/Cobertura e Pergolado 04.jpeg',
    description: 'Beleza excepcional que enaltece a casa, garantindo sombra na medida certa e aconchego familiar.',
    tags: ['Harmonia', 'Sombra', 'Requinte']
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
    description: 'Rigoroso comissionamento, testes de filtragem e verificação minuciosa de cargas nos brinquedos. Orientação cuidadosa sobre conservação e entrega das chaves.'
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
