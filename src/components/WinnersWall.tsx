import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Container } from './Container';

interface WinnersWallProps {
  onOpenLiveDraw: () => void;
}

export const WinnersWall: React.FC<WinnersWallProps> = ({
  onOpenLiveDraw,
}) => {
  const [countdown, setCountdown] = useState({
    days: 15,
    hours: 2,
    minutes: 45,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Esperança Muachifi',
      photo: '/assets/lva/winner_1.jpg',
      quote: '"Fui liberta de toda a burocracia e recebi assessoria jurídica e agendamento VFS da Lotaria de Vistos Angola!"',
    },
    {
      id: 2,
      name: 'Domingos Sebastião',
      photo: '/assets/lva/winner_2.jpg',
      quote: '"Participei pelo portal oficial e ganhei o tratamento de visto 100% financiado com passagens aéreas incluídas."',
    },
    {
      id: 3,
      name: 'Família Kapapelo',
      photo: '/assets/lva/winner_3.jpg',
      quote: '"Financiamento integral das taxas consulares e bilhetes emitidos pela TAAG para toda a nossa família."',
    },
    {
      id: 4,
      name: 'Paulo Bento Ganga',
      photo: '/assets/lva/winner_4.jpg',
      quote: '"O meu bilhete foi extraído na transmissão auditada pelo ISJ. Agradeço à Lotaria de Vistos Angola!"',
    },
  ];

  return (
    <section id="vencedores" className="py-14 sm:py-20 bg-white border-b border-slate-200 text-slate-900">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
              Resultados Oficiais Anteriores
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Testemunhos de Cidadãos Contemplados
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal">
            Histórias reais de angolanos que obtiveram vistos de trabalho, estudo e turismo com patrocínio total da LVA.
          </p>
        </div>

        {/* Testimonials + Sorteio Ao Vivo Widget Container */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
          
          {/* 4 Testimonials Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-400">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-700 italic leading-snug line-clamp-2">
                    {t.quote}
                  </p>
                  <p className="text-xs font-bold text-slate-950 mt-1 truncate">
                    {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Sorteio Ao Vivo Light Banner */}
          <div className="shrink-0 w-full xl:w-auto flex justify-center">
            <button
              type="button"
              onClick={onOpenLiveDraw}
              className="w-full sm:w-auto px-7 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl shadow-md border border-slate-800 flex flex-col items-center justify-center cursor-pointer transition-colors group text-center"
            >
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <Play className="w-3 h-3 fill-current text-slate-300" />
                Próxima Extração Oficial:
              </span>
              <span className="text-xl sm:text-2xl font-black font-mono text-[#FACC15] tracking-tight mt-1">
                {countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
              </span>
              <span className="text-[11px] text-slate-300 font-semibold mt-1">
                Clique para aceder à Sala de Transmissão
              </span>
            </button>
          </div>

        </div>

      </Container>
    </section>
  );
};
