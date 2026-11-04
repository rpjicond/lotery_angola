import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface WinnersWallProps {
  onOpenLiveDraw: () => void;
}

export const WinnersWall: React.FC<WinnersWallProps> = ({
  onOpenLiveDraw,
}) => {
  // Countdown matching the "15 dias, 2 horas" in the reference image
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
      quote: '"Fui removida de toda a burocracia e recebi assessoria jurídica e agendamento VFS da Lotaria de Vistos Angola!"',
    },
    {
      id: 2,
      name: 'Domingos Sebastião',
      photo: '/assets/lva/winner_2.jpg',
      quote: '"Comprei o bilhete por 500 Kz e ganhei tratamento de Visto 100% gratuito com passagens aéreas incluídas."',
    },
    {
      id: 3,
      name: 'Família Kapapelo',
      photo: '/assets/lva/winner_3.jpg',
      quote: '"Financiamento total das taxas consulares e bilhetes de avião emitidos. Uma bênção para a nossa família reunida."',
    },
    {
      id: 4,
      name: 'Paulo Bento Ganga',
      photo: '/assets/lva/winner_4.jpg',
      quote: '"O meu número de bilhete foi sorteado na extração ao vivo auditada. Agradeço à Lotaria de Vistos de Angola!"',
    },
  ];

  return (
    <section id="vencedores" className="py-10 sm:py-14 bg-[#040C1D] border-b border-[#0a275f] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#FBBF24] tracking-tight font-display">
            Testemunhos de Vencedores
          </h2>
        </div>

        {/* Testimonials + Sorteio Ao Vivo Widget Container */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
          
          {/* 4 Testimonials Grid matching reference */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#081F4A] border border-[#133A7C] hover:border-amber-400/50 hover:bg-[#0c2960] transition-all shadow-md"
              >
                {/* Winner circular portrait */}
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-amber-400/80 shadow-md">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote text */}
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] sm:text-xs text-slate-200 italic leading-snug">
                    {t.quote}
                  </p>
                  <p className="text-[10px] font-bold text-[#FBBF24] mt-1 truncate">
                    {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Green Sorteio Ao Vivo Card: Exactly matching reference image */}
          <div className="shrink-0 w-full xl:w-auto flex justify-center">
            <button
              type="button"
              onClick={onOpenLiveDraw}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#15803D] hover:bg-[#166534] text-white rounded-2xl shadow-lg border-2 border-emerald-400/30 flex flex-col items-center justify-center cursor-pointer transition-transform active:scale-98 group text-center"
            >
              <span className="text-xs sm:text-sm font-semibold text-emerald-100 flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 fill-current" />
                Sorteio Ao Vivo em:
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#D7FF38] tracking-tight font-display mt-0.5">
                {countdown.days} dias, {countdown.hours} horas
              </span>
              <span className="text-[10px] text-emerald-200 font-mono mt-0.5">
                {countdown.minutes}m {countdown.seconds}s · Clique para assistir
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
