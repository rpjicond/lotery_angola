import React, { useState } from 'react';
import { LotteryDraw } from '../types/lottery';
import { Check, Sparkles, Plus, ChevronDown, ChevronUp, Clock, Users } from 'lucide-react';
import { DrawCountdown } from './DrawCountdown';
import { CountryFlag } from './CountryFlag';

interface LotteryCardProps {
  draw: LotteryDraw;
  onEnterFree: (draw: LotteryDraw) => void;
  onBuyExtra: (draw: LotteryDraw) => void;
}

export const LotteryCard: React.FC<LotteryCardProps> = ({
  draw,
  onEnterFree,
  onBuyExtra,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Card Header Strip */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <CountryFlag code={draw.flag} className="w-6 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {draw.destination}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Sorteio #{draw.drawNumber}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
            {draw.title}
          </h3>

          <p className="mt-1 text-xs text-slate-500 font-medium">
            {draw.visaType}
          </p>

          <div className="mt-3 py-2 px-3 bg-amber-50/80 border border-amber-200/60 rounded-xl text-xs font-semibold text-amber-900 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{draw.highlightBenefit}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <p className="text-xs text-slate-600 leading-relaxed">
            {draw.description}
          </p>

          {/* Benefits summary */}
          <div className="mt-4 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              O que o vencedor recebe:
            </p>
            <ul className="space-y-1.5">
              {draw.packageIncludes.slice(0, expanded ? draw.packageIncludes.length : 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {draw.packageIncludes.length > 3 && (
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="mt-2 text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
              >
                {expanded ? (
                  <>
                    <span>Ver menos detalhes</span>
                    <ChevronUp className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>Ver lista completa ({draw.packageIncludes.length - 3} mais itens)</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </>
                )
                }
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer & Action Buttons */}
      <div className="p-6 pt-0 border-t border-slate-100 bg-white space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500 pt-4">
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-700 tabular-nums">{draw.totalRegistered.toLocaleString('pt-AO')}</span>
            <span>inscritos</span>
          </div>
          <span className="font-medium text-slate-600">{draw.nextDrawDate}</span>
        </div>

        {/* Real-time Countdown Timer Bar */}
        <DrawCountdown targetTimestamp={draw.drawTargetTimestamp} />

        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onEnterFree(draw)}
            className="w-full py-2.5 px-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Entrada Grátis</span>
          </button>

          <button
            onClick={() => onBuyExtra(draw)}
            className="w-full py-2.5 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Extra ({draw.ticketPriceAOA.toLocaleString('pt-AO')} Kz)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
