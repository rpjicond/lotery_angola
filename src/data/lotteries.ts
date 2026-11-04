import { LotteryDraw, WinnerStory, UserTicket } from '../types/lottery';

// Now timestamp + relative hours for dynamic countdowns
const now = Date.now();

export const LOTTERY_DRAWS: LotteryDraw[] = [
  {
    id: 'draw-pt-cplp',
    slug: 'portugal-cplp-estudo',
    title: 'Grande Sorteio Portugal CPLP & Ensino Superior',
    destination: 'Portugal (Lisboa / Porto / Coimbra)',
    flag: '🇵🇹',
    visaType: 'Visto CPLP de Trabalho & Visto de Estudante',
    nextDrawDate: 'Sexta-Feira, 20:00 (Hora de Luanda)',
    drawNumber: 48,
    totalPrizes: 3,
    freeEntryAvailable: true,
    ticketPriceAOA: 500,
    accentColor: '#15803d',
    highlightBenefit: 'Tratamento consular completo + Passagem TAAG + 600.000 Kz de Apoio',
    description: 'O sorteio mais popular em Angola. O contemplado recebe tratamento integral do processo no VFS Global e Consulado Geral de Portugal em Luanda, com taxas 100% pagas, seguro de viagem e passagem aérea.',
    packageIncludes: [
      'Taxas Consulares Oficiais e de Agendamento VFS pagas',
      'Elaboração e revisão jurídica completa do dossiê pelo nosso advogado',
      'Autenticação de certidões e legalizações no MIREX e Registo Criminal',
      'Seguro de Saúde Internacional Schengen com cobertura mínima de 30.000€',
      'Passagem Aérea de Ida Luanda - Lisboa (classe económica com 2 malas)',
      'Subsídio de Chegada de 600.000 AOA creditado na conta bancária',
      'Apoio no Alojamento e obtenção do NIF / NISS em Portugal'
    ],
    totalRegistered: 14280,
    status: 'drawing_soon',
    drawTargetTimestamp: now + 2 * 24 * 3600 * 1000 + 4 * 3600 * 1000 // in ~2.1 days
  },
  {
    id: 'draw-ca-express',
    slug: 'canada-dream-study-work',
    title: 'Sorteio Canadá Dream: Estudos & Imigração Express',
    destination: 'Canadá (Toronto / Montreal / Vancouver)',
    flag: '🇨🇦',
    visaType: 'Permissão de Estudos (Study Permit) ou Express Entry',
    nextDrawDate: 'Dia 15 do Mês, 19:30 (Hora de Luanda)',
    drawNumber: 22,
    totalPrizes: 2,
    freeEntryAvailable: true,
    ticketPriceAOA: 500,
    accentColor: '#dc2626',
    highlightBenefit: 'Consultoria RCIC + Exames Médicos + Taxas IRCC + 1.200.000 Kz',
    description: 'Pacote premium para quem quer viver e construir carreira no Canadá. Abrange desde a candidatura universitária ou perfil Express Entry até a emissão da carta de aprovação pelo governo canadiano.',
    packageIncludes: [
      'Assessoria com Consultor de Imigração Regulamentado (RCIC)',
      'Pagamento de taxas governamentais do IRCC e Biometria no VFS Luanda',
      'Custeio do Teste Oficial de Proficiência em Inglês (IELTS General ou Academic)',
      'Exames Médicos de Imigração na clínica autorizada pela Embaixada em Luanda',
      'Tradução Juramentada de todos os diplomas e certidões',
      'Passagem Aérea Luanda - Toronto ou Vancouver',
      'Bolsa de Instalação de 1.200.000 AOA para primeiros custos'
    ],
    totalRegistered: 8940,
    status: 'active',
    drawTargetTimestamp: now + 5 * 24 * 3600 * 1000 + 10 * 3600 * 1000
  },
  {
    id: 'draw-br-cplp',
    slug: 'brasil-cplp-universidade',
    title: 'Sorteio Brasil: Oportunidades & Visto Universitário',
    destination: 'Brasil (São Paulo / Rio de Janeiro / Curitiba)',
    flag: '🇧🇷',
    visaType: 'Visto Temporário IV (Estudante) ou Acordo de Residência CPLP',
    nextDrawDate: 'Domingo, 18:00 (Hora de Luanda)',
    drawNumber: 34,
    totalPrizes: 4,
    freeEntryAvailable: true,
    ticketPriceAOA: 500,
    accentColor: '#16a34a',
    highlightBenefit: 'Processo no Consulado do Brasil + Passagem + 450.000 Kz de Apoio',
    description: 'Acesso facilitado às melhores faculdades e oportunidades do Brasil ao abrigo do Acordo de Mobilidade da CPLP. Tratamento rápido e sem complicações burocráticas.',
    packageIncludes: [
      'Taxas do Consulado Geral do Brasil em Luanda pagas',
      'Carta de Aceitação Universitária ou assistência de acolhimento',
      'Seguro de Viagem Internacional',
      'Passagem Aérea Luanda - São Paulo pela TAAG',
      'Ajuda de Custo Inicial de 450.000 AOA',
      'Apoio na emissão do CPF e registo na Polícia Federal Brasileira (RNM)'
    ],
    totalRegistered: 11450,
    status: 'active',
    drawTargetTimestamp: now + 4 * 24 * 3600 * 1000 + 2 * 3600 * 1000
  },
  {
    id: 'draw-eu-germany',
    slug: 'schengen-alemanha-polonia',
    title: 'Sorteio Europa Técnica: Alemanha & Polónia',
    destination: 'Alemanha (Berlim / Munique) & Polónia',
    flag: '🇪🇺',
    visaType: 'Visto Carta de Oportunidade (Chancenkarte) / Trabalho Especializado',
    nextDrawDate: 'Quarta-Feira, 21:00 (Hora de Luanda)',
    drawNumber: 16,
    totalPrizes: 2,
    freeEntryAvailable: true,
    ticketPriceAOA: 500,
    accentColor: '#2563eb',
    highlightBenefit: 'Taxas Embaixada + Reconhecimento IHK/ZAB + Passagem + 800.000 Kz',
    description: 'Projetado para técnicos, enfermeiros, engenheiros e profissionais angolanos com formação média ou superior que desejam atuar no mercado industrial da União Europeia.',
    packageIncludes: [
      'Taxas consulares da Embaixada da Alemanha em Luanda pagas',
      'Reconhecimento oficial de habilitações junto das autoridades europeias (ZAB)',
      'Tradução juramentada para o alemão de todo o processo',
      'Seguro de saúde conforme requisitos Schengen (30.000€)',
      'Passagem aérea de Ida para a Europa',
      'Subsídio de Acomodação inicial de 800.000 AOA'
    ],
    totalRegistered: 6320,
    status: 'active',
    drawTargetTimestamp: now + 7 * 24 * 3600 * 1000
  }
];

export const WINNERS_STORIES: WinnerStory[] = [
  {
    id: 'win-01',
    name: 'Jandira Mateus & Família',
    province: 'Luanda (Centralidade do Kilamba)',
    destination: 'Portugal (Universidade do Porto)',
    visaType: 'Visto D4 de Mestrado com Isenção de Custos',
    drawDate: '24 de Outubro de 2026',
    ticketNumber: 'KV-2026-89104',
    quote: 'Quando recebi a chamada a dizer que o meu bilhete tinha sido sorteado, comecei a chorar junto com os meus pais. O KambaVisto tratou de tudo: desde o agendamento no VFS Luanda, antecedentes criminais, até as passagens aéreas e os 600.000 Kz para me instalar no Porto!',
    image: '/src/assets/images/winner_angola_celebration_1793810575688.jpg',
    packageValueAOA: '3.850.000 Kz equivalentes',
    currentStatus: 'A residir no Porto, frequência de Mestrado em Gestão',
    hasAudioTestimonial: true,
    audioDurationSeconds: 42
  },
  {
    id: 'win-02',
    name: 'Domingos Sebastião Muachifi',
    province: 'Benguela (Lobito)',
    destination: 'Canadá (Toronto)',
    visaType: 'Study & Work Permit (Colégio Comunitário)',
    drawDate: '12 de Setembro de 2026',
    ticketNumber: 'KV-2026-44021',
    quote: 'Tentava tirar visto para o Canadá há quase 3 anos e gastava fortunas com intermediários falsos. Participei com o bilhete grátis diário do KambaVisto. A equipa jurídica preparou o dossiê perfeitamente e o visto foi carimbado em menos de 8 semanas.',
    image: '/src/assets/images/hero_angola_visa_lottery_1793810573572.jpg',
    packageValueAOA: '5.200.000 Kz equivalentes',
    currentStatus: 'Visto carimbado, embarque agendado na TAAG',
    hasAudioTestimonial: true,
    audioDurationSeconds: 38
  },
  {
    id: 'win-03',
    name: 'Teresa Nzuzi Simão',
    province: 'Huíla (Lubango)',
    destination: 'Brasil (Florianópolis)',
    visaType: 'Visto CPLP & Pós-Graduação em Agronomia',
    drawDate: '03 de Agosto de 2026',
    ticketNumber: 'KV-2026-11892',
    quote: 'Nunca pensei que uma lotaria fosse tão transparente. Acompanhei o sorteio ao vivo pelo site e o número do meu BI apareceu! Já estou com a autorização de residência e tudo correu com máxima dignidade.',
    image: '/src/assets/images/visa_destinations_showcase_1793810573404.jpg',
    packageValueAOA: '2.900.000 Kz equivalentes',
    currentStatus: 'A frequentar Pós-Graduação na UFSC',
    hasAudioTestimonial: false
  }
];

export const INITIAL_USER_TICKETS: UserTicket[] = [
  {
    ticketNumber: 'LVA-2026-89104',
    drawId: 'draw-pt-cplp',
    drawTitle: 'Grande Sorteio Portugal CPLP & Ensino Superior',
    destination: 'Portugal (Lisboa / Porto)',
    holderName: 'Jandira Mateus',
    holderBI: '006841209LA048',
    holderPhone: '+244 923 881 204',
    holderProvince: 'Luanda',
    purchaseDate: '2026-10-20',
    isFreeTicket: true,
    status: 'won',
    hash: '0x8f4c71a392e9bb20314f',
    seatCode: 'PT-LUA-77',
    prizeClaimed: true
  },
  {
    ticketNumber: 'LVA-2026-55291',
    drawId: 'draw-ca-express',
    drawTitle: 'Sorteio Canadá Dream: Estudos & Imigração Express',
    destination: 'Canadá (Toronto)',
    holderName: 'António Kapapelo',
    holderBI: '004739102HA031',
    holderPhone: '+244 944 112 005',
    holderProvince: 'Huambo',
    purchaseDate: '2026-11-01',
    isFreeTicket: false,
    status: 'pending',
    hash: '0x1a89f944bd031ef09c12',
    seatCode: 'CA-HUA-14',
    prizeClaimed: false
  }
];

export const PROVINCES_OF_ANGOLA = [
  'Luanda',
  'Benguela',
  'Huambo',
  'Huíla',
  'Cabinda',
  'Cuanza Sul',
  'Cuanza Norte',
  'Uíge',
  'Zaire',
  'Malanje',
  'Namibe',
  'Lunda Norte',
  'Lunda Sul',
  'Moxico',
  'Bié',
  'Cuando Cubango',
  'Cunene',
  'Bengo'
];
