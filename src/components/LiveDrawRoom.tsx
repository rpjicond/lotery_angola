import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Trophy, CheckCircle, ShieldCheck, Ticket } from 'lucide-react';
import { LOTTERY_DRAWS } from '../data/lotteries';
import { Container } from './Container';

export const LiveDrawRoom: React.FC = () => {
  const [selectedDrawId, setSelectedDrawId] = useState(LOTTERY_DRAWS[0].id);
  const [isDrawing, setIsDrawing] = useState(false);
  const [extractedBalls, setExtractedBalls] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [liveCandidateTicket, setLiveCandidateTicket] = useState<string>('LVA-2026-89104');
  const [winningTicket, setWinningTicket] = useState<string | null>('LVA-2026-89104');
  const [winnerProvince, setWinnerProvince] = useState<string | null>('Luanda (Kilamba)');

  const currentDraw = LOTTERY_DRAWS.find((d) => d.id === selectedDrawId) || LOTTERY_DRAWS[0];

  // Real-time cycling of candidate Ticket IDs during live extraction
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isDrawing) {
      interval = setInterval(() => {
        const randomNum = Math.floor(10000 + Math.random() * 90000);
        setLiveCandidateTicket(`LVA-2026-${randomNum}`);
      }, 120);
    }
    return () => clearInterval(interval);
  }, [isDrawing]);

  const handleStartDraw = () => {
    setIsDrawing(true);
    setExtractedBalls([]);
    setCurrentStep(0);
    setWinningTicket(null);
    setWinnerProvince(null);

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
          const finalTicketString = `LVA-2026-${targetDigits.join('')}`;
          setWinningTicket(finalTicketString);
          setLiveCandidateTicket(finalTicketString);

          const provinces = ['Luanda', 'Benguela', 'Huambo', 'Huíla', 'Cabinda', 'Uíge', 'Cuanza Sul'];
          setWinnerProvince(provinces[Math.floor(Math.random() * provinces.length)]);

          setIsDrawing(false);
        }, 600);
      }
    }, 1100);
  };

  return (
    <section id="extracao-ao-vivo" className="py-14 sm:py-20 bg-white border-t border-slate-200 text-slate-900 relative overflow-hidden">
      <Container className="relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200 rounded-full text-xs font-bold text-red-700 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span>Sistema de Seleção de Candidatos em Tempo Real</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Extração Pública de Bilhetes ao Vivo
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Acompanhe em tempo real a escolha dos bilhetes contemplados. Por motivos de proteção de dados e privacidade cívica, o sistema exibe publicamente apenas o <strong className="text-slate-900 font-bold">ID do Bilhete</strong>.
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
              className="w-full sm:w-auto bg-white border border-slate-300 text-xs font-semibold text-slate-900 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 ease-in-out cursor-pointer"
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
              className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ease-in-out flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                isDrawing
                  ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                  : 'bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 hover:scale-[1.02] active:scale-[0.98] text-slate-950'
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
                  <span>Simular Seleção de Candidato</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Crisp Light Extraction Chamber (No blue background noise) */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm text-slate-900 text-center">
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
              Globo Auditado Oficial · {currentDraw.destination}
            </span>
          </div>

          {/* Real-time Ticket ID Candidate Selector Ticker */}
          <div className="my-4 py-3 px-4 bg-white border border-slate-200 rounded-xl inline-flex items-center gap-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <Ticket className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Candidato em Processamento:</span>
            </div>
            <span className={`font-mono text-base sm:text-lg font-black tracking-wider transition-all duration-100 ${isDrawing ? 'text-amber-600 scale-105' : 'text-slate-900'}`}>
              {liveCandidateTicket}
            </span>
          </div>

          {/* Spheres display in Light Theme */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 my-6 min-h-[80px]">
            {[1, 2, 3, 4, 5].map((index) => {
              const ballValue = extractedBalls[index - 1];

              return (
                <div
                  key={index}
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-mono text-xl sm:text-2xl font-black transition-all duration-300 shadow-sm ${
                    ballValue !== undefined
                      ? 'bg-[#FACC15] text-slate-950 border-2 border-amber-400 scale-105 shadow-md'
                      : 'bg-white text-slate-400 border border-slate-200'
                  }`}
                >
                  {ballValue !== undefined ? ballValue : '?'}
                </div>
              );
            })}
          </div>

          {/* Winner announcement box (Strictly Ticket ID & Province, NO PUBLIC NAMES) */}
          {winningTicket && winnerProvince && (
            <div className="mt-8 p-6 bg-white border-2 border-emerald-300 rounded-2xl text-left shadow-sm animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>ID DO BILHETE CONTEMPLADO EM TEMPO REAL</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  VALIDADO PELO ISJ
                </span>
              </div>

              <div className="my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">Código Único do Bilhete:</span>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-slate-950 tracking-tight">
                    {winningTicket}
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">Província do Contemplado:</span>
                  <span className="text-sm font-bold text-slate-800">{winnerProvince}</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 space-y-1.5 font-normal">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Proteção de Dados Civis:</strong> O nome do titular não é exibido publicamente para garantir a privacidade. O vencedor é notificado de forma direta e privada pela equipa da LVA.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tabela de Números e Dígitos Selecionados em Tempo Real */}
          <div className="mt-8">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 text-left">
              Registo de Extração e Números Selecionados
            </h4>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 uppercase text-[10px] tracking-wider font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Ordem</th>
                    <th className="py-3 px-4">Dígito da Esfera</th>
                    <th className="py-3 px-4">ID do Bilhete Parcial</th>
                    <th className="py-3 px-4">Estado da Semente</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {extractedBalls.length > 0 ? (
                    extractedBalls.map((digit, i) => (
                      <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-2.5 px-4 font-bold text-slate-500">0{i + 1}</td>
                        <td className="py-2.5 px-4 font-black text-amber-600 text-sm">{digit}</td>
                        <td className="py-2.5 px-4 text-slate-800">
                          LVA-2026-{extractedBalls.slice(0, i + 1).join('')}
                          {i < 4 ? '...' : ''}
                        </td>
                        <td className="py-2.5 px-4 text-emerald-600 font-sans font-semibold text-[11px]">
                          Auditado ISJ
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-slate-400 font-sans text-xs italic">
                        Clique em "Simular Seleção de Candidato" para iniciar a extração das esferas...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

