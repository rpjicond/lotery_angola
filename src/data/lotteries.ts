import { LotteryDraw, WinnerStory, UserTicket } from '../types/lottery';

// Now timestamp + relative hours for dynamic countdowns
const now = Date.now();

export const LOTTERY_DRAWS: LotteryDraw[] = [
  {
    id: 'draw-pt-cplp',
    slug: 'portugal-trabalho-estudo',
    title: 'Sorteio Oficial Portugal: Vistos de Trabalho & Estudo',
    destination: 'Portugal (Lisboa / Porto / Coimbra)',
    flag: '🇵🇹',
    visaType: 'Visto de Trabalho (Empresas Parceiras) & Visto de Estudos',
    nextDrawDate: 'Sexta-Feira, 20:00 (Hora de Luanda)',
    drawNumber: 48,
    totalPrizes: 3,
    freeEntryAvailable: true,
    ticketPriceAOA: 500,
    accentColor: '#15803d',
    highlightBenefit: 'Contrato com Empresas Parceiras + Taxas VFS + Passagem TAAG + 600.000 Kz',
    description: 'A LVA possui parcerias diretas com empresas empregadoras e instituições de ensino em Portugal. O contemplado recebe patrocínio integral para Visto de Trabalho ou de Estudo, com taxas consulares 100% pagas, passagem aérea e subsídio de instalação.',
    packageIncludes: [
      'Contrato de Trabalho / Carta de Aceitação de Empresas Parceiras em Portugal',
      'Taxas Consulares Oficiais e de Agendamento VFS pagas',
      'Elaboração e revisão jurídica completa do dossiê',
      'Seguro de Saúde Internacional e Passagem Aérea de Ida Luanda - Lisboa (TAAG)',
      'Subsídio de Instalação de 600.000 AOA creditado na conta bancária',
      'Apoio no Alojamento e obtenção do NIF / NISS em Portugal'
    ],
    totalRegistered: 14280,
    status: 'drawing_soon',
    drawTargetTimestamp: now + 2 * 24 * 3600 * 1000 + 4 * 3600 * 1000
  },
  {
    id: 'draw-fr-france',
    slug: 'franca-trabalho-estudo',
    title: 'Sorteio Oficial França: Vistos de Trabalho & Estudo',
    destination: 'França (Paris / Lyon / Marseille)',
    flag: '🇫🇷',
    visaType: 'Visto de Trabalho (Parcerias Corporativas) & Visto de Estudos',
    nextDrawDate: 'Quarta-Feira, 20:30 (Hora de Luanda)',
    drawNumber: 26,
    totalPrizes: 2,
    freeEntryAvailable: true,
    ticketPriceAOA: 500,
    accentColor: '#0055A5',
    highlightBenefit: 'Parcerias com Empresas em França + Capago + Passagem + 800.000 Kz',
    description: 'Oportunidade oficial de obter visto de trabalho ou estudo para a França. Contamos com parcerias com empresas e grupos corporativos em território francês, financiando 100% das taxas do centro Capago/VFS, traduções e passagens aéreas.',
    packageIncludes: [
      'Oportunidade de Contrato ou Vínculo com Empresas Parceiras na França',
      'Taxas de Agendamento no Centro Capago / VFS França e Embaixada pagas',
      'Tradução Juramentada de documentos e processo Campus France',
      'Seguro de Saúde Internacional Schengen com cobertura de 30.000€',
      'Passagem Aérea de Ida Luanda - Paris (Air France / TAAG)',
      'Subsídio de Instalação de 800.000 AOA e Apoio no Alojamento'
    ],
    totalRegistered: 9820,
    status: 'active',
    drawTargetTimestamp: now + 3 * 24 * 3600 * 1000 + 8 * 3600 * 1000
  }
];

export const WINNERS_STORIES: WinnerStory[] = [
  {
    id: 'win-01',
    name: 'Jandira Mateus & Família',
    province: 'Luanda (Centralidade do Kilamba)',
    destination: 'Portugal (Universidade do Porto & Empresa Parceira)',
    visaType: 'Visto de Trabalho / Mestrado com Patrocínio Integral',
    drawDate: '24 de Outubro de 2026',
    ticketNumber: 'KV-2026-89104',
    quote: 'Quando recebi a chamada a dizer que o meu bilhete tinha sido sorteado, comecei a chorar junto com os meus pais. O KambaVisto tratou de tudo: desde o contrato de trabalho com a empresa parceira em Portugal até as passagens aéreas e os 600.000 Kz para me instalar!',
    image: '/src/assets/images/winner_angola_celebration_1793810575688.jpg',
    packageValueAOA: '3.850.000 Kz equivalentes',
    currentStatus: 'A residir no Porto, em atividade profissional e académica',
    hasAudioTestimonial: true,
    audioDurationSeconds: 42
  },
  {
    id: 'win-02',
    name: 'Domingos Sebastião Muachifi',
    province: 'Benguela (Lobito)',
    destination: 'França (Paris)',
    visaType: 'Visto de Trabalho & Estudo (Parceria Corporativa)',
    drawDate: '12 de Setembro de 2026',
    ticketNumber: 'KV-2026-44021',
    quote: 'Tentava tirar visto para a Europa há quase 3 anos e gastava fortunas com intermediários falsos. Participei com o bilhete grátis diário da LVA. A equipa jurídica preparou o dossiê perfeitamente através das parcerias corporativas em França.',
    image: '/src/assets/images/hero_angola_visa_lottery_1793810573572.jpg',
    packageValueAOA: '5.200.000 Kz equivalentes',
    currentStatus: 'Visto carimbado, embarque agendado na Air France',
    hasAudioTestimonial: true,
    audioDurationSeconds: 38
  },
  {
    id: 'win-03',
    name: 'Teresa Nzuzi Simão',
    province: 'Huíla (Lubango)',
    destination: 'Portugal (Lisboa)',
    visaType: 'Visto CPLP de Trabalho',
    drawDate: '03 de Agosto de 2026',
    ticketNumber: 'KV-2026-11892',
    quote: 'Nunca pensei que uma lotaria fosse tão transparente. Acompanhei o sorteio ao vivo pelo site e o número do meu BI apareceu! Já estou a trabalhar em Lisboa graças aos acordos de parceria da LVA.',
    image: '/src/assets/images/visa_destinations_showcase_1793810573404.jpg',
    packageValueAOA: '2.900.000 Kz equivalentes',
    currentStatus: 'A exercer funções profissionais em Lisboa',
    hasAudioTestimonial: false
  }
];

export const INITIAL_USER_TICKETS: UserTicket[] = [
  {
    ticketNumber: 'LVA-2026-89104',
    drawId: 'draw-pt-cplp',
    drawTitle: 'Sorteio Oficial Portugal: Vistos de Trabalho & Estudo',
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
    drawId: 'draw-fr-france',
    drawTitle: 'Sorteio Oficial França: Vistos de Trabalho & Estudo',
    destination: 'França (Paris)',
    holderName: 'António Kapapelo',
    holderBI: '004739102HA031',
    holderPhone: '+244 944 112 005',
    holderProvince: 'Huambo',
    purchaseDate: '2026-11-01',
    isFreeTicket: false,
    status: 'pending',
    hash: '0x1a89f944bd031ef09c12',
    seatCode: 'FR-HUA-14',
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
