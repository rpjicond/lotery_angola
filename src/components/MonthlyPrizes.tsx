import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  Plane,
  Building2,
  Briefcase,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { LOTTERY_DRAWS } from '../data/lotteries';
import { LotteryDraw } from '../types/lottery';

interface MonthlyPrizesProps {
  onSelectDraw: (draw: LotteryDraw) => void;
  onOpenTicket: () => void;
}

export const MonthlyPrizes: React.FC<MonthlyPrizesProps> = ({
  onSelectDraw,
  onOpenTicket,
}) => {
  const [activeTab, setActiveTab] = useState<'passagens' | 'hospedagens' | 'pacotes'>('passagens');

  const tabs = [
    { id: 'passagens' as const, label: 'Passagens Aéreas', icon: Plane },
    { id: 'hospedagens' as const, label: 'Hospedagens', icon: Building2 },
    { id: 'pacotes' as const, label: 'Pacotes Completos', icon: Briefcase },
  ];

  return (
    <div id="premios" className="bg-[#050914] text-white">
      
      {/* SEÇÃO 4: SELEÇÃO DE PRÉMIOS (Segmented Control Tabs & Clean Spec Sheet) */}
      <section className="py-14 sm:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header com autoridade discreta */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#FACC15] uppercase tracking-wider block">
                Coberturas Financiadas a 100%
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Prêmios a Ganhar
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              A Lotaria de Vistos Angola assegura a liquidação direta de todos os custos de viagem, taxas consulares e estadias.
            </p>
          </div>

          {/* Segmented Control Tabs (Stripe / Administrative style) */}
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-lg mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 stroke-[1.8]" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Clean Content Sheet without Nested Card Clutter */}
          <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-6 sm:p-10">
            {activeTab === 'passagens' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Benefício Garantido · Partida de Luanda</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Passagens Aéreas Internacionais de Ida e Volta
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Voos de linha regular com <strong className="text-white font-semibold">partida do Aeroporto Internacional 4 de Fevereiro (Luanda)</strong> para os principais destinos internacionais (Lisboa, Paris, Madrid e Porto), operados por companhias parceiras oficiais (TAAG, Air France, TAP).
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>2 volumes de bagagem de porão (23kg cada) incluídos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Taxas aeroportuárias e emissão de e-ticket cobertas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Apólice de seguro de viagem internacional Schengen 30.000€</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Flexibilidade de remarcação conforme agenda consular</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center lg:border-l lg:border-slate-800 lg:pl-8 pt-6 lg:pt-0 border-t border-slate-800 lg:border-t-0">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Participação por Bilhete
                  </span>
                  <div className="text-3xl font-extrabold text-white mt-1 font-mono">
                    500 KZ
                  </div>
                  <span className="text-xs text-slate-400 mt-1">
                    Disponível também com 1 bilhete diário grátis por BI
                  </span>

                  <button
                    type="button"
                    onClick={onOpenTicket}
                    className="w-full mt-6 py-3 px-6 rounded-lg font-bold text-xs sm:text-sm text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    <span>CONCORRER COM 500 KZ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'hospedagens' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Estadia 4★ e 5★ Garantida</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Hospedagens em Hotéis Parceiros Selecionados
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Estadias asseguradas em hotéis de qualidade comprovada em Lisboa, Paris e principais centros urbanos, garantindo comodidade durante o período inicial de instalação ou viagem turística.
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Pequeno-almoço e taxas municipais incluídas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Localização central com acesso a transportes públicos</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center lg:border-l lg:border-slate-800 lg:pl-8 pt-6 lg:pt-0 border-t border-slate-800 lg:border-t-0">
                  <button
                    type="button"
                    onClick={onOpenTicket}
                    className="w-full py-3 px-6 rounded-lg font-bold text-xs sm:text-sm text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    <span>CONCORRER COM 500 KZ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'pacotes' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Pacote Integral Ouro</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Visto + Passagens + Hospedagem + Subsídio Financeiro
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    O prêmio de excelência da LVA: cobertura integral de emolumentos consulares, taxas de agendamento VFS/Capago, elaboração de dossiê, passagem aérea de ida e subsídio financeiro em Kwanzas creditado na conta bancária.
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Até 800.000 Kz de subsídio de acolhimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Assessoria jurídica de imigração do início ao carimbo</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center lg:border-l lg:border-slate-800 lg:pl-8 pt-6 lg:pt-0 border-t border-slate-800 lg:border-t-0">
                  <button
                    type="button"
                    onClick={onOpenTicket}
                    className="w-full py-3 px-6 rounded-lg font-bold text-xs sm:text-sm text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    <span>CONCORRER COM 500 KZ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SEÇÃO 5: CARTÕES DE DESTINOS (PORTUGAL / FRANÇA) - Estilo Pricing Card Corporativo */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header da Secção de Destinos */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
            <div>
              <span className="text-xs font-bold text-[#FACC15] uppercase tracking-wider block">
                Sorteios Oficiais Abertos · Angola
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Escolha o Seu Destino e Participe
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Processos com patrocínio oficial de vistos, viagem internacional e apoio financeiro de acolhimento.
            </p>
          </div>

          {/* Pricing Cards Limpos e Corporativos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {LOTTERY_DRAWS.map((draw) => (
              <div
                key={draw.id}
                className="bg-[#0F172A] border border-slate-800 rounded-xl p-7 sm:p-8 flex flex-col justify-between transition-colors hover:border-slate-700"
              >
                <div>
                  {/* Header: Flag, Destination & Price */}
                  <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl select-none" role="img" aria-label={draw.destination}>
                        {draw.flag}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {draw.destination.split('(')[0].trim()}
                        </h3>
                        <span className="text-xs text-slate-400 font-medium">
                          {draw.visaType}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-base sm:text-lg font-bold font-mono text-white">
                        500 KZ
                      </div>
                      <span className="text-[11px] text-slate-400 block">por bilhete</span>
                    </div>
                  </div>

                  {/* Highlight Benefit Callout */}
                  <div className="my-5 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-200">
                    <strong className="text-white font-semibold">Destaque:</strong> {draw.highlightBenefit}
                  </div>

                  {/* Itemized Benefits List with subtle checks */}
                  <div className="space-y-2.5 my-6">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Coberturas Incluídas no Patrocínio:
                    </span>
                    {draw.packageIncludes.slice(0, 5).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Extraction Date & Single Primary Solid CTA Button */}
                <div className="pt-5 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>
                      Próxima extração: <strong className="text-slate-200 font-medium">{draw.nextDrawDate}</strong>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectDraw(draw)}
                    className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 rounded-lg transition-colors cursor-pointer text-center uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>PARTICIPAR NESTE VISTO</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
