import React from 'react';
import { BookOpen, Scale, Plane, UserCheck, CheckCircle } from 'lucide-react';
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
  const prizes = [
    {
      icon: BookOpen,
      line1: 'Tratamento de',
      line2: 'Visto Gratuito',
    },
    {
      icon: Scale,
      line1: 'Assessoria',
      line2: 'Jurídica',
    },
    {
      icon: Plane,
      line1: 'Bilhetes de Avião',
      line2: '(Opcional)',
    },
    {
      icon: UserCheck,
      line1: 'Assessoria',
      line2: 'Jurídica',
    },
    {
      icon: Plane,
      line1: 'Bilhetes de Avião',
      line2: '(Opcional)',
    },
  ];

  return (
    <section id="premios" className="py-10 sm:py-14 bg-[#051330] border-b border-[#0a275f] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Exact Layout matching reference: "Prêmios do Mês" + 5 Green Icons Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Title on the left */}
          <div className="shrink-0 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FBBF24] tracking-tight font-display">
              Prêmios a Ganhar
            </h2>
          </div>

          {/* 5 Green Icons in a row */}
          <div className="w-full flex-1 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 justify-items-center">
            {prizes.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center group cursor-pointer p-1"
                  onClick={onOpenTicket}
                >
                  {/* Clean Emerald Icon Glyph */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 sm:w-9 sm:h-9 stroke-[2.2]" />
                  </div>
                  <p className="text-[11px] sm:text-[13px] font-bold text-white leading-snug mt-1">
                    {p.line1}
                    <br />
                    <span className="font-semibold text-slate-300">{p.line2}</span>
                  </p>
                </div>
              );
            })}
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
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
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
