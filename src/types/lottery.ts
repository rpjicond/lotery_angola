export interface LotteryDraw {
  id: string;
  slug: string;
  title: string;
  destination: string;
  flag: string;
  visaType: string;
  nextDrawDate: string; // ISO date string or formatted date
  drawNumber: number;
  totalPrizes: number;
  freeEntryAvailable: boolean;
  ticketPriceAOA: number;
  accentColor: string;
  highlightBenefit: string;
  description: string;
  packageIncludes: string[];
  totalRegistered: number;
  status: 'active' | 'drawing_soon' | 'completed';
  drawTargetTimestamp: number;
}

export interface UserTicket {
  ticketNumber: string;
  drawId: string;
  drawTitle: string;
  destination: string;
  holderName: string;
  holderBI: string;
  holderPhone: string;
  holderProvince: string;
  purchaseDate: string;
  isFreeTicket: boolean;
  status: 'pending' | 'won' | 'not_won';
  hash: string;
  seatCode: string;
  prizeClaimed?: boolean;
}

export interface WinnerStory {
  id: string;
  name: string;
  province: string;
  destination: string;
  visaType: string;
  drawDate: string;
  ticketNumber: string;
  quote: string;
  image: string;
  packageValueAOA: string;
  currentStatus: string;
  hasAudioTestimonial?: boolean;
  audioDurationSeconds?: number;
}

export interface EligibilityData {
  destination: string;
  purpose: string;
  passportStatus: string;
  educationLevel: string;
  ageGroup: string;
}

export interface EligibilityResult {
  score: number;
  status: 'Alta Probabilidade' | 'Boa Probabilidade' | 'Requer Preparação';
  recommendedDrawId: string;
  recommendedVisaCategory: string;
  estimatedTimelineMonths: string;
  actionChecklist: string[];
}
