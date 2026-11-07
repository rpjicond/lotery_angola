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
import { Container } from './Container';
import { DrawCountdown } from './DrawCountdown';

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
    <div id="premios" className="bg-slate-50 text-slate-900">
      
      {/* SEÇÃO 4: SELEÇÃO DE PRÉMIOS (Tabs & Spec Sheet) */}
      <section className="py-14 sm:py-20 border-b border-slate-200">
        <Container>
          
          {/* Header com Badge Pílula Unificado */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-300 mb-3">
                COBERTURAS FINANCIADAS A 100%
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Prêmios a Ganhar
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal">
              A Lotaria de Vistos Angola assegura a liquidação direta de todos os custos de viagem, taxas consulares e estadias.
            </p>
          </div>

          {/* Segmented Control Tabs */}
          <div className="inline-flex p-1 bg-slate-200 border border-slate-300 rounded-xl mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ease-in-out cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-sm border border-slate-200 scale-[1.01]'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className="w-4 h-4 stroke-[2] transition-transform duration-200 ease-in-out" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Cartão Principal com fundo branco */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out text-slate-900">
            {activeTab === 'passagens' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>BENEFÍCIO GARANTIDO · PARTIDA DE LUANDA</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Passagens Aéreas Internacionais de Ida e Volta
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Voos de linha regular com <strong className="text-slate-900 font-semibold">partida do Aeroporto Internacional 4 de Fevereiro (Luanda)</strong> para os principais destinos internacionais (Lisboa, Paris, Madrid e Porto), operados por companhias parceiras oficiais (TAAG, Air France, TAP).
                  </p>

                  <ul className="space-y-3 pt-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>2 volumes de bagagem de porão (23kg cada) incluídos</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Taxas aeroportuárias e emissão de e-ticket cobertas</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Apólice de seguro de viagem internacional Schengen 30.000€</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Flexibilidade de remarcação conforme agenda consular</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center lg:border-l lg:border-slate-200 lg:pl-8 pt-6 lg:pt-0 border-t border-slate-200 lg:border-t-0">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Participação por Bilhete
                  </span>
                  <div className="text-3xl font-extrabold text-slate-900 mt-1 font-mono">
                    500 KZ
                  </div>
                  <span className="text-xs text-slate-500 mt-1">
                    Disponível também com 1 bilhete diário grátis por BI
                  </span>

                  <button
                    type="button"
                    onClick={onOpenTicket}
                    className="w-full mt-6 py-3.5 px-6 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-md cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <span>CONCORRER COM 500 KZ</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'hospedagens' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>ESTADIA 4★ E 5★ GARANTIDA</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Hospedagens em Hotéis Parceiros Selecionados
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Estadias asseguradas em hotéis de qualidade comprovada em Lisboa, Paris e principais centros urbanos, garantindo comodidade durante o período inicial de instalação ou viagem turística.
                  </p>

                  <ul className="space-y-3 pt-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Pequeno-almoço e taxas municipais incluídas</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Localização central com acesso a transportes públicos</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center lg:border-l lg:border-slate-200 lg:pl-8 pt-6 lg:pt-0 border-t border-slate-200 lg:border-t-0">
                  <button
                    type="button"
                    onClick={onOpenTicket}
                    className="w-full py-3.5 px-6 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-md cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <span>CONCORRER COM 500 KZ</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'pacotes' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>PACOTE INTEGRAL OURO</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Visto + Passagens + Hospedagem + Subsídio Financeiro
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    O prêmio de excelência da LVA: cobertura integral de emolumentos consulares, taxas de agendamento VFS/Capago, elaboração de dossiê, passagem aérea de ida e subsídio financeiro em Kwanzas creditado na conta bancária.
                  </p>

                  <ul className="space-y-3 pt-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Até 800.000 Kz de subsídio de acolhimento</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Assessoria jurídica de imigração do início ao carimbo</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center lg:border-l lg:border-slate-200 lg:pl-8 pt-6 lg:pt-0 border-t border-slate-200 lg:border-t-0">
                  <button
                    type="button"
                    onClick={onOpenTicket}
                    className="w-full py-3.5 px-6 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-md cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <span>CONCORRER COM 500 KZ</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </Container>
      </section>

      {/* SEÇÃO 5: CARTÕES DE DESTINOS (PORTUGAL / FRANÇA) em modo claro */}
      <section className="py-14 sm:py-20">
        <Container>
          
          {/* Header da Secção de Destinos */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-300 mb-3">
                SORTEIOS OFICIAIS ABERTOS · ANGOLA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Escolha o Seu Destino e Participe
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal">
              Processos com patrocínio oficial de vistos, viagem internacional e apoio financeiro de acolhimento.
            </p>
          </div>

          {/* Pricing Cards Brancos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {LOTTERY_DRAWS.map((draw) => (
              <div
                key={draw.id}
                className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ease-in-out hover:border-amber-400/80 hover:-translate-y-1 shadow-sm hover:shadow-xl text-slate-900"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex justify-between items-start gap-4 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl select-none shrink-0 transition-transform duration-200 ease-in-out group-hover:scale-110" role="img" aria-label={draw.destination}>
                        {draw.flag}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight transition-colors duration-200 ease-in-out group-hover:text-amber-600">
                          {draw.destination.split('(')[0].trim()}
                        </h3>
                        <span className="text-xs text-slate-600 font-medium block mt-0.5">
                          {draw.visaType}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-base sm:text-lg font-black font-mono text-slate-950">
                        500 KZ
                      </div>
                      <span className="text-[11px] text-slate-500 block font-normal">por bilhete</span>
                    </div>
                  </div>

                  {/* Destaque do Benefício */}
                  <div className="my-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 transition-colors duration-200 ease-in-out group-hover:bg-amber-50/50 group-hover:border-amber-200">
                    <strong className="text-slate-950 font-bold">Destaque:</strong> {draw.highlightBenefit}
                  </div>

                  {/* Lista de Benefícios */}
                  <div className="space-y-3 my-6">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Coberturas Incluídas no Patrocínio:
                    </span>
                    {draw.packageIncludes.slice(0, 5).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data da Extração, Real-time Countdown & Botão CTA */}
                <div className="pt-5 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-600 font-normal">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>
                        Próxima extração: <strong className="text-slate-900 font-semibold">{draw.nextDrawDate}</strong>
                      </span>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      Sorteio #{draw.drawNumber}
                    </span>
                  </div>

                  {/* Real-time Countdown Timer Bar */}
                  <DrawCountdown targetTimestamp={draw.drawTargetTimestamp} />

                  <button
                    type="button"
                    onClick={() => onSelectDraw(draw)}
                    className="w-full py-3.5 px-6 text-xs sm:text-sm font-black text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 rounded-xl transition-all duration-200 ease-in-out hover:scale-[1.01] active:scale-[0.98] hover:shadow-md cursor-pointer text-center uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>PARTICIPAR NESTE VISTO</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </section>

    </div>
  );
};
