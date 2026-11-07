import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, ShieldCheck, Trophy, CheckCircle, Volume2 } from 'lucide-react';
import { LOTTERY_DRAWS } from '../data/lotteries';

export const LiveDrawRoom: React.FC = () => {
  const [selectedDrawId, setSelectedDrawId] = useState(LOTTERY_DRAWS[0].id);
  const [isDrawing, setIsDrawing] = useState(false);
  const [extractedBalls, setExtractedBalls] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [winningTicket, setWinningTicket] = useState<string | null>('KV-2026-89104');
  const [winnerInfo, setWinnerInfo] = useState<{
    name: string;
    province: string;
    destination: string;
  } | null>({
    name: 'Jandira Mateus & Família',
    province: 'Luanda (Kilamba)',
    destination: 'Portugal (Universidade do Porto)',
  });
  const [soundEnabled, setSoundEnabled] = useState(false);

  const currentDraw = LOTTERY_DRAWS.find((d) => d.id === selectedDrawId) || LOTTERY_DRAWS[0];

  const handleStartDraw = () => {
    setIsDrawing(true);
    setExtractedBalls([]);
    setCurrentStep(0);
    setWinningTicket(null);
    setWinnerInfo(null);

    // Generate random 5 digits
    const targetDigits = [
      Math.floor(1 + Math.random() * 9),
      Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 9),
    ];

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentStep(step);
      setExtractedBalls(targetDigits.slice(0, step));

      if (step >= 5) {
        clearInterval(interval);
        setTimeout(() => {
          const ticketString = `LVA-2026-${targetDigits.join('')}`;
          setWinningTicket(ticketString);

          // Angolan mock winner names
          const angolanNames = [
            'Mateus Kiala de Carvalho',
            'Esperança Domingos Nzuzi',
            'Manuel Afonso Kapapelo',
            'Helena Muachifi da Silva',
            'Paulo Bento Ganga',
            'Neusa Tchissola Chimuco',
          ];
          const provinces = ['Luanda (Cazenga)', 'Benguela (Lobito)', 'Huambo (Cidade)', 'Huíla (Lubango)', 'Cabinda'];

          const pickedName = angolanNames[Math.floor(Math.random() * angolanNames.length)];
          const pickedProvince = provinces[Math.floor(Math.random() * provinces.length)];

          setWinnerInfo({
            name: pickedName,
            province: pickedProvince,
            destination: currentDraw.destination,
          });

          setIsDrawing(false);
        }, 800);
      }
    }, 1200);
  };

  return (
    <section id="extracao-ao-vivo" className="py-16 sm:py-20 bg-[#050914] border-t border-slate-800/80 text-white relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/30 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-800 rounded-full text-xs font-bold text-red-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>Sala de Extração Pública e Transparente</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Acompanhe o Sorteio das Esferas ao Vivo
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Cada esfera representa um dígito do bilhete vencedor. O sistema utiliza sementes criptográficas imutáveis para garantir 100% de transparência e auditoria pública.
          </p>
        </div>

        {/* Draw Controls & Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-8 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-400 whitespace-nowrap">Sorteio:</span>
            <select
              value={selectedDrawId}
              disabled={isDrawing}
              onChange={(e) => setSelectedDrawId(e.target.value)}
              className="w-full sm:w-auto bg-slate-800 border border-slate-700 text-xs font-semibold text-white rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {LOTTERY_DRAWS.map((draw) => (
                <option key={draw.id} value={draw.id}>
                  {draw.flag} {draw.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors ${
                soundEnabled
                  ? 'bg-amber-400/20 border-amber-400/40 text-amber-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
              }`}
              title="Efeitos sonoros"
            >
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline">{soundEnabled ? 'Som Activo' : 'Sem Som'}</span>
            </button>

            <button
              onClick={handleStartDraw}
              disabled={isDrawing}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 disabled:opacity-50 text-slate-950 text-xs font-black rounded-xl transition-all shadow-lg shadow-amber-400/20 active:scale-95 cursor-pointer"
            >
              {isDrawing ? (
                <>
                  <RotateCcw className="w-4 h-4 animate-spin text-slate-950" />
                  <span>A extrair esferas...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{winningTicket ? 'Simular Nova Extração' : 'Iniciar Extração'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Lottery Machine Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl relative">
          {/* Header of the drum */}
          <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 mb-4 sm:mb-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FBBF24]">
                Globo Transparente de Extração · LVA
              </span>
              <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                {currentDraw.destination} · Sorteio #{currentDraw.drawNumber}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Auditado · Luanda</span>
            </div>
          </div>

          {/* Drum Visual simulation */}
          <div className="my-4 sm:my-6 py-6 sm:py-8 px-2 sm:px-4 bg-slate-950/80 border border-slate-800/60 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden min-h-[140px] sm:min-h-[160px]">
            {isDrawing && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 border-dashed border-amber-400/30 animate-spin" />
              </div>
            )}

            <div className="flex items-center justify-center gap-1.5 xs:gap-2.5 sm:gap-4 z-10 w-full max-w-full overflow-hidden">
              {[0, 1, 2, 3, 4].map((index) => {
                const isExtracted = index < extractedBalls.length;
                const value = extractedBalls[index];

                return (
                  <div
                    key={index}
                    className={`relative w-11 h-11 xs:w-13 xs:h-13 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-black text-base xs:text-xl sm:text-2xl transition-all duration-500 shadow-xl shrink-0 ${
                      isExtracted
                        ? 'bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-slate-950 scale-100 rotate-0 ring-2 sm:ring-4 ring-amber-400/30'
                        : isDrawing && index === currentStep
                        ? 'bg-slate-800 text-slate-400 animate-bounce ring-2 ring-amber-400/50'
                        : 'bg-slate-900 border border-slate-800 text-slate-600'
                    }`}
                  >
                    {isExtracted ? (
                      <span className="drop-shadow-sm tabular-nums">{value}</span>
                    ) : (
                      <span className="text-xs font-mono text-slate-600">?</span>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs font-medium text-slate-400 text-center">
              {isDrawing
                ? `A extrair esfera ${currentStep + 1} de 5...`
                : winningTicket
                ? 'Extração concluída com sucesso'
                : 'Pressione "Iniciar Extração" para começar'}
            </p>
          </div>

          {/* Winner announcement box */}
          {winningTicket && winnerInfo && (
            <div className="mt-6 p-5 bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/40 rounded-2xl animate-in fade-in duration-500">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                    <Trophy className="w-6 h-6 fill-current text-slate-950" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 justify-center sm:justify-start">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                      Bilhete Contemplado com Visto Gratuito
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">
                      {winningTicket}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Titular: <span className="font-bold text-white">{winnerInfo.name}</span> ({winnerInfo.province})
                    </p>
                  </div>
                </div>

                <div className="text-center sm:text-right shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1.5 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Dossiê Consular Aprovado</span>
                  </span>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Passagens e taxas 100% patrocinadas
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
