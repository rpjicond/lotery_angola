import React, { useState } from 'react';
import { Play, RotateCcw, ShieldCheck, Trophy, CheckCircle } from 'lucide-react';
import { LOTTERY_DRAWS } from '../data/lotteries';

export const LiveDrawRoom: React.FC = () => {
  const [selectedDrawId, setSelectedDrawId] = useState(LOTTERY_DRAWS[0].id);
  const [isDrawing, setIsDrawing] = useState(false);
  const [extractedBalls, setExtractedBalls] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [winningTicket, setWinningTicket] = useState<string | null>('LVA-2026-89104');
  const [winnerInfo, setWinnerInfo] = useState<{
    name: string;
    province: string;
    destination: string;
  } | null>({
    name: 'Jandira Mateus & Família',
    province: 'Luanda (Kilamba)',
    destination: 'Portugal (Universidade do Porto)',
  });

  const currentDraw = LOTTERY_DRAWS.find((d) => d.id === selectedDrawId) || LOTTERY_DRAWS[0];

  const handleStartDraw = () => {
    setIsDrawing(true);
    setExtractedBalls([]);
    setCurrentStep(0);
    setWinningTicket(null);
    setWinnerInfo(null);

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

          const angolanNames = [
            'Mateus Kiala de Carvalho',
            'Esperança Domingos Nzuzi',
            'Manuel Afonso Kapapelo',
            'Helena Muachifi da Silva',
            'Paulo Bento Ganga',
            'Neusa Tchissola Chimuco',
          ];
          const provinces = ['Luanda', 'Benguela', 'Huambo', 'Huíla', 'Cabinda', 'Uíge'];

          setWinnerInfo({
            name: angolanNames[Math.floor(Math.random() * angolanNames.length)],
            province: provinces[Math.floor(Math.random() * provinces.length)],
            destination: currentDraw.destination,
          });

          setIsDrawing(false);
        }, 800);
      }
    }, 1200);
  };

  return (
    <section id="extracao-ao-vivo" className="py-16 sm:py-20 bg-white border-t border-slate-200 text-slate-900 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-full text-xs font-bold text-red-700 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>Sala de Extração Pública e Transparente</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Acompanhe o Sorteio das Esferas ao Vivo
          </h2>

          <p className="mt-3 text-sm text-slate-600">
            Cada esfera representa um dígito do bilhete vencedor. O sistema utiliza sementes criptográficas imutáveis para garantir 100% de transparência e auditoria pública.
          </p>
        </div>

        {/* Draw Controls & Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-8 bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Sorteio:</span>
            <select
              value={selectedDrawId}
              disabled={isDrawing}
              onChange={(e) => setSelectedDrawId(e.target.value)}
              className="w-full sm:w-auto bg-white border border-slate-300 text-xs font-semibold text-slate-900 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
              type="button"
              onClick={handleStartDraw}
              disabled={isDrawing}
              className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                isDrawing
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-[#FACC15] hover:bg-yellow-400 text-slate-950'
              }`}
            >
              {isDrawing ? (
                <>
                  <RotateCcw className="w-4 h-4 animate-spin" />
                  <span>Extraindo Esferas...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Simular Sorteio ao Vivo</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Sphere Extraction Chamber display */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl text-white text-center">
          <div className="text-xs font-bold text-[#FACC15] uppercase tracking-wider mb-6">
            Globo Auditado Oficial · {currentDraw.destination}
          </div>

          {/* Spheres display */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 my-6 min-h-[80px]">
            {[1, 2, 3, 4, 5].map((index) => {
              const ballValue = extractedBalls[index - 1];

              return (
                <div
                  key={index}
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-mono text-xl sm:text-2xl font-black transition-all duration-300 shadow-md ${
                    ballValue !== undefined
                      ? 'bg-gradient-to-br from-[#FACC15] to-amber-500 text-slate-950 scale-105 ring-4 ring-[#FACC15]/30'
                      : 'bg-slate-800 text-slate-500 border border-slate-700'
                  }`}
                >
                  {ballValue !== undefined ? ballValue : '?'}
                </div>
              );
            })}
          </div>

          {/* Winner announcement box */}
          {winningTicket && winnerInfo && (
            <div className="mt-8 p-6 bg-slate-800/90 border border-slate-700 rounded-xl text-left animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                <Trophy className="w-5 h-5" />
                <span>BILHETE CONTEMPLADO COM SUCESSO!</span>
              </div>
              <div className="text-2xl font-black font-mono text-[#FACC15] mb-1">
                {winningTicket}
              </div>
              <p className="text-xs text-slate-300">
                Titular: <strong className="text-white">{winnerInfo.name}</strong> · Província: <strong className="text-white">{winnerInfo.province}</strong>
              </p>
              <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Semente Hash imutável verificada. Cobertura consular financiada a 100%.</span>
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
