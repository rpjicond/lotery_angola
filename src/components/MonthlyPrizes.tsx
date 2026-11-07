import React, { useState } from 'react';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Gift,
  Flame,
  Check,
} from 'lucide-react';
import { LOTTERY_DRAWS } from '../data/lotteries';
import { LotteryDraw } from '../types/lottery';

interface MonthlyPrizesProps {
  onSelectDraw: (draw: LotteryDraw) => void;
  onOpenTicket: () => void;
}

interface ServiceCategory {
  id: string;
  label: string;
  badge?: string;
  badgeColor?: string;
  iconType: string;
  categoryTitle: string;
  categoryDescription: string;
}

export const MonthlyPrizes: React.FC<MonthlyPrizesProps> = ({
  onSelectDraw,
  onOpenTicket,
}) => {
  const [activeService, setActiveService] = useState('passagens');

  const services: ServiceCategory[] = [
    {
      id: 'hospedagens',
      label: 'Hospedagens',
      iconType: 'bed',
      categoryTitle: 'Hospedagens em Hotéis 4★ e 5★ 100% Pagas',
      categoryDescription: 'Garantia de estadias nos melhores hotéis parceiros em Paris, Lisboa, Londres, Nova Iorque e Dubai durante todo o processo consular e estadia turística.',
    },
    {
      id: 'passagens',
      label: 'Passagens',
      iconType: 'plane',
      categoryTitle: 'Passagens Aéreas Internacionais de Ida e Volta',
      categoryDescription: 'Voos de linha regular com partida de Luanda (4 de Fevereiro) para os principais destinos mundiais, com taxa de bagagem incluída.',
    },
    {
      id: 'pacotes',
      label: 'Pacotes',
      badge: 'Poupe',
      badgeColor: 'bg-[#98fbc5] text-[#004d2c] font-black',
      iconType: 'suitcase',
      categoryTitle: 'Pacotes Completos: Visto + Passagem + Estadia',
      categoryDescription: 'O prêmio de ouro da LVA: financiamento integral de taxas do consulado, assessoria jurídica de imigração, passagem e hotel.',
    },
    {
      id: 'ofertas',
      label: 'Partiu Ofertas',
      iconType: 'flame',
      categoryTitle: 'Sorteios Relâmpago e Edições Especiais',
      categoryDescription: 'Extrações extraordinárias com bilhetes a metade do preço e probabilidade tripla de extração.',
    },
    {
      id: 'passeios',
      label: 'Passeios',
      iconType: 'ticket',
      categoryTitle: 'Passeios Culturais e Ingressos a Monumentos',
      categoryDescription: 'Subida à Torre Eiffel, Museu do Louvre, cruzeiro no Rio Sena e visitas guiadas históricas nos destinos premiados.',
    },
    {
      id: 'carros',
      label: 'Carros',
      iconType: 'car',
      categoryTitle: 'Aluguer de Carro com Seguro Total',
      categoryDescription: 'Viatura disponível no aeroporto de destino durante 7 a 15 dias com quilometragem ilimitada e GPS.',
    },
    {
      id: 'disney',
      label: 'Disney',
      iconType: 'disney',
      categoryTitle: 'Viagem de Sonho à Disneyland Paris & Orlando',
      categoryDescription: 'Sorteio familiar com ingressos para todos os parques Disney, passagens e hotel temático oficial com tudo incluído.',
    },
    {
      id: 'universal',
      label: 'Universal',
      iconType: 'universal',
      categoryTitle: 'Parques Universal Studios & Aventura',
      categoryDescription: 'Acesso VIP express aos parques temáticos mais famosos do mundo com hospedagem resort.',
    },
    {
      id: 'vale-presente',
      label: 'Vale Presente',
      badge: 'Novo',
      badgeColor: 'bg-white text-[#0f172a] font-black',
      iconType: 'gift',
      categoryTitle: 'Vales Presente e Bolsas em Moeda Forte',
      categoryDescription: 'Bolsa de viagem de 2.000 a 5.000 Euros ou Dólares para cobrir despesas de subsistência na chegada ao país de destino.',
    },
    {
      id: 'cruzeiros',
      label: 'Cruzeiros',
      iconType: 'cruise',
      categoryTitle: 'Cruzeiros de Luxo no Mediterrâneo e Caraíbas',
      categoryDescription: 'Cabine com varanda privativa, pensão completa e paragens em múltiplos portos da Europa ou Américas.',
    },
    {
      id: 'seguros',
      label: 'Seguros',
      iconType: 'shield-medical',
      categoryTitle: 'Seguro Internacional de Saúde Schengen e Mundial',
      categoryDescription: 'Apólice oficial de 30.000€ exigida pelas embaixadas e consulados europeus e globais com assistência médica integral 24/7.',
    },
    {
      id: 'transfers',
      label: 'Transfers',
      iconType: 'van',
      categoryTitle: 'Translados Privados Aeroporto - Hotel - Aeroporto',
      categoryDescription: 'Motorista privativo à sua espera no terminal com placa personalizada para total segurança e comodidade.',
    },
    {
      id: 'cambio',
      label: 'Câmbio',
      iconType: 'exchange',
      categoryTitle: 'Apoio Cambial e Subsídio em Divisas',
      categoryDescription: 'Conversão garantida sem taxas abusivas e apoio financeiro legal no processo de saída de divisas de Angola.',
    },
  ];

  const currentCategory = services.find((s) => s.id === activeService) || services[1];

  // Render SVG icons matching exact style from the screenshot
  const renderCategoryIcon = (type: string, isActive: boolean) => {
    const strokeClass = isActive ? 'stroke-[#2a0458]' : 'stroke-white';
    const fillClass = isActive ? 'fill-[#2a0458]' : 'fill-white';

    switch (type) {
      case 'bed':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            {/* Bed Headboard */}
            <path d="M3 7v13M3 13h18M21 11v9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            {/* Pillows */}
            <rect x="6" y="8" width="5" height="4" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
            <rect x="13" y="8" width="5" height="4" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          </svg>
        );

      case 'plane':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            {/* Airplane angled like travel apps */}
            <path
              d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19.5 2.5s-3.5-1.5-5 0L11 6 2.8 4.2c-.6-.1-1.1.2-1.3.7-.2.6.1 1.2.6 1.5l6.4 4.5-3.2 3.2-2.5-.5c-.4-.1-.8.1-1 .4-.3.4-.2.9.2 1.2l2.8 2.2 2.2 2.8c.3.4.8.5 1.2.2.3-.2.5-.6.4-1l-.5-2.5 3.2-3.2 4.5 6.4c.3.5.9.8 1.5.6.5-.2.8-.7.7-1.3l-1.8-4.2Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'suitcase':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            {/* Luggage / Suitcase */}
            <rect x="5" y="8" width="14" height="12" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
            <path d="M9 8V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2.2" />
            <path d="M10 12v4M14 12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'flame':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            <path
              d="M8.5 14.5A4.5 4.5 0 0 0 16 12c0-3.5-2.5-4.5-2.5-7.5-1.5 2-2.5 3.5-4 5.5-1.5 2-1 3.5-1 4.5Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 21c4.4 0 7.5-3.1 7.5-7.5 0-3.8-2.5-6.5-4-8.5C14.7 4 14 2.5 14 2c-1.5 1.8-3 3.5-4.5 5.5C8 9.5 5 12 5 15.5 5 18.5 7.9 21 12 21Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      case 'ticket':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 9a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2v6a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2a2 2 0 0 0-2-2V9Z"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" strokeLinecap="round" />
          </svg>
        );

      case 'car':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 11l2-4h10l2 4M3 16h18v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4ZM7 16v2M17 16v2"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="7.5" cy="13.5" r="1.2" fill="currentColor" />
            <circle cx="16.5" cy="13.5" r="1.2" fill="currentColor" />
          </svg>
        );

      case 'disney':
        // Exact Mickey Mouse Silhouette (iconic 3-circle silhouette matching screenshot)
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            {/* Mickey Ears */}
            <circle cx="6.5" cy="7.5" r="4.2" stroke="currentColor" strokeWidth="2.2" />
            <circle cx="17.5" cy="7.5" r="4.2" stroke="currentColor" strokeWidth="2.2" />
            {/* Mickey Head */}
            <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="2.2" />
          </svg>
        );

      case 'universal':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.2" />
            <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="2.2" />
            <path d="M3 12h18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        );

      case 'gift':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="9" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
            <rect x="3" y="6" width="18" height="3" rx="1" stroke="currentColor" strokeWidth="2.2" />
            <path d="M12 6v15M12 6H8a2 2 0 0 1-2-2 2 2 0 0 1 2-2c2 0 4 4 4 4ZM12 6h4a2 2 0 0 0 2-2 2 2 0 0 0-2-2c-2 0-4 4-4 4Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );

      case 'cruise':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            {/* Ship Hull */}
            <path d="M3 16l2 4h14l2-4H3Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            {/* Superstructure */}
            <path d="M6 16v-5h12v5M8 11V7h8v4" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            {/* Funnel chimney */}
            <path d="M11 7V4h3v3" stroke="currentColor" strokeWidth="2.2" />
            {/* Ocean wave */}
            <path d="M2 21c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );

      case 'shield-medical':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            {/* Medical suitcase / cross */}
            <rect x="4" y="8" width="16" height="13" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
            <path d="M9 8V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2.2" />
            <path d="M12 11v6M9 14h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        );

      case 'van':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            {/* Shuttle Van */}
            <path d="M3 17h18v-6a2 2 0 0 0-2-2H9L5 13H3v4Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            <rect x="9" y="11" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="2.2" />
            <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="2.2" />
          </svg>
        );

      case 'exchange':
        return (
          <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
            {/* Curved exchange arrows around coin */}
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2.2" />
            <path d="M12 10.5v3M11 12h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M19 8a8 8 0 0 0-14 0l-2-1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M5 16a8 8 0 0 0 14 0l2 1" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        );

      default:
        return <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />;
    }
  };

  return (
    <section id="premios" className="py-10 sm:py-14 bg-[#030A17] border-b border-[#0d2c66] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-6">
          <span className="text-[11px] sm:text-xs font-black text-[#FFDE00] tracking-widest uppercase font-display bg-[#FFDE00]/10 border border-[#FFDE00]/30 px-3.5 py-1 rounded-full">
            BENEFÍCIOS E PRÊMIOS FINANCIADOS A 100%
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FBBF24] tracking-tight font-display mt-2.5">
            Prêmios a Ganhar
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-medium">
            Explore as categorias de viagens, vistos e benefícios que a Lotaria de Vistos Angola patrocina integralmente para os cidadãos sorteados.
          </p>
        </div>

        {/* Circular Travel Service Category Bar - EXACTLY Matching Screenshot image_07471a2d.png */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#240046] via-[#330066] to-[#240046] border border-[#5b199c] shadow-[0_12px_45px_rgba(36,0,70,0.65)] p-3 sm:p-5">
          <div className="flex items-start gap-4 sm:gap-6 overflow-x-auto pb-2.5 pt-2 px-2 scrollbar-thin scrollbar-thumb-white/30 select-none">
            {services.map((item) => {
              const isActive = activeService === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveService(item.id)}
                  className="flex flex-col items-center shrink-0 group cursor-pointer transition-transform active:scale-95 focus:outline-none"
                >
                  {/* Circular Icon Bubble */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-200 relative ${
                      isActive
                        ? 'bg-white text-[#2a0458] shadow-[0_4px_25px_rgba(255,255,255,0.65)] scale-105'
                        : 'bg-white/12 text-white hover:bg-white/20 hover:text-white border border-white/10'
                    }`}
                  >
                    {renderCategoryIcon(item.iconType, isActive)}

                    {/* Mini pill badge (e.g. Poupe, Novo) */}
                    {item.badge && (
                      <span
                        className={`absolute -bottom-1.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tight shadow-md border border-black/10 leading-none ${
                          item.badgeColor || 'bg-white text-slate-950'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Label underneath */}
                  <span
                    className={`text-xs sm:text-[13px] mt-2.5 transition-colors whitespace-nowrap relative ${
                      isActive
                        ? 'text-white font-bold pb-1 border-b-2 border-white'
                        : 'text-slate-200 group-hover:text-white font-medium'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Category Spotlight Banner */}
          <div className="mt-4 pt-4 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 px-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#98fbc5] animate-ping" />
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {currentCategory.categoryTitle}
                </h4>
              </div>
              <p className="text-xs text-purple-200/90 mt-0.5">
                {currentCategory.categoryDescription}
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenTicket}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFDE00] hover:bg-[#F3B700] text-slate-950 transition-colors shadow cursor-pointer shrink-0"
            >
              <span>Concorrer com 500 Kz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Draws Cards Section */}
        <div className="mt-12 pt-8 border-t border-[#0d347c]/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FBBF24]">
                Sorteios Oficiais Abertos · Angola
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Escolha o Seu Destino e Participe
              </h3>
            </div>
            <button
              onClick={onOpenTicket}
              className="text-xs font-bold text-slate-950 bg-[#FBBF24] hover:bg-[#F59E0B] px-5 py-2.5 rounded-full transition-colors uppercase tracking-tight shadow-sm cursor-pointer"
            >
              Comprar Bilhete (500 Kz)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {LOTTERY_DRAWS.map((draw) => (
              <div
                key={draw.id}
                className="bg-[#081f4a] hover:bg-[#0c2a63] rounded-2xl border border-[#133c82] p-5 shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-2xl" role="img" aria-label={draw.destination}>
                      {draw.flag}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                      500 Kz / Bilhete
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug group-hover:text-[#FBBF24] transition-colors">
                    {draw.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {draw.destination}
                  </p>

                  <div className="mt-3 p-2.5 bg-[#051535] rounded-xl border border-[#103575] text-[11px] text-slate-300 space-y-1">
                    <p className="font-semibold text-white flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{draw.highlightBenefit}</span>
                    </p>
                    <p className="text-slate-400 text-[10px]">
                      Próxima extração: {draw.nextDrawDate}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#133c82]/60">
                  <button
                    type="button"
                    onClick={() => onSelectDraw(draw)}
                    className="w-full py-2 px-3 text-xs font-bold text-slate-950 bg-[#FBBF24] hover:bg-[#F59E0B] rounded-xl transition-colors cursor-pointer text-center uppercase tracking-tight"
                  >
                    Participar neste Visto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
