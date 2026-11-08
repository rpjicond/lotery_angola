import React, { useState } from 'react';
import { HelpCircle, Check, ArrowRight, RotateCcw, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { LOTTERY_DRAWS } from '../data/lotteries';
import { LotteryDraw } from '../types/lottery';
import { CountryFlag } from './CountryFlag';

interface EligibilityQuizProps {
  onOpenFreeTicketForDraw: (draw: LotteryDraw) => void;
}

export const EligibilityQuiz: React.FC<EligibilityQuizProps> = ({
  onOpenFreeTicketForDraw,
}) => {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState('portugal');
  const [purpose, setPurpose] = useState('work');
  const [passport, setPassport] = useState('valid');
  const [education, setEducation] = useState('bachelor');
  const [hasResult, setHasResult] = useState(false);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setHasResult(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setHasResult(false);
  };

  // Determine recommended draw based on destination
  const recommendedDraw =
    LOTTERY_DRAWS.find((d) => {
      if (destination === 'canada') return d.id === 'draw-ca-express';
      if (destination === 'brasil') return d.id === 'draw-br-cplp';
      if (destination === 'europe') return d.id === 'draw-eu-germany';
      return d.id === 'draw-pt-cplp';
    }) || LOTTERY_DRAWS[0];

  const viabilityScore =
    destination === 'portugal'
      ? 96
      : destination === 'brasil'
      ? 94
      : destination === 'canada'
      ? 88
      : 90;

  return (
    <section id="diagnostico" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded-full text-xs font-bold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Diagnóstico Rápido de Viabilidade</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Descubra o Melhor Visto Para o Seu Perfil
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            Responda a 4 perguntas e veja instantaneamente qual é o sorteio da KambaVisto com maiores probabilidades de aprovação consular para si.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {!hasResult ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
                  <span>Passo {step} de 4</span>
                  <span>{step === 1 ? 'Destino' : step === 2 ? 'Finalidade' : step === 3 ? 'Passaporte' : 'Escolaridade'}</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Destination */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-slate-900">
                    1. Para onde gostaria de viajar ou emigrar?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'portugal', label: 'Portugal (CPLP / Lisboa / Porto)', flag: 'PT', desc: 'Acordo CPLP & Visto de Trabalho' },
                      { id: 'canada', label: 'Canadá (Toronto / Vancouver)', flag: 'CA', desc: 'Express Entry & Universidades' },
                      { id: 'brasil', label: 'Brasil (São Paulo / Rio de Janeiro)', flag: 'BR', desc: 'Graduação & Acordo CPLP' },
                      { id: 'europe', label: 'Alemanha & Polónia (Espaço Schengen)', flag: 'EU', desc: 'Trabalho Técnico Especializado' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setDestination(opt.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          destination === opt.id
                            ? 'bg-amber-50/80 border-amber-400 ring-2 ring-amber-400/30'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <CountryFlag code={opt.flag} className="w-6 h-4" />
                          <span className="text-xs font-bold text-slate-900">{opt.label}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 pl-8.5">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Purpose */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-slate-900">
                    2. Qual é a principal finalidade da sua viagem?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'work', label: 'Procura de Trabalho / Emprego Formal', desc: 'Contrato de trabalho ou visto CPLP de procura' },
                      { id: 'study', label: 'Estudo Universitário / Mestrado', desc: 'Ingresso no ensino superior ou formação' },
                      { id: 'business', label: 'Negócios ou Trabalho Remoto', desc: 'Nómada digital, feiras e empreendedorismo' },
                      { id: 'family', label: 'Reagrupamento Familiar / Residência', desc: 'Juntar-se a familiares no exterior' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPurpose(opt.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          purpose === opt.id
                            ? 'bg-amber-50/80 border-amber-400 ring-2 ring-amber-400/30'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <p className="text-xs font-bold text-slate-900">{opt.label}</p>
                        <p className="text-[11px] text-slate-500 mt-1">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Passport */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-slate-900">
                    3. Qual é a situação atual do seu Passaporte Angolano?
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: 'valid', label: 'Tenho Passaporte Válido (com mais de 6 meses de validade)', tag: 'Pronto a aplicar' },
                      { id: 'expiring', label: 'Tenho Passaporte, mas vai caducar em breve', tag: 'Renovação rápida' },
                      { id: 'sme', label: 'Ainda não tenho ou está em tramitação no SME', tag: 'Apoiamos na emissão' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPassport(opt.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                          passport === opt.id
                            ? 'bg-amber-50/80 border-amber-400 ring-2 ring-amber-400/30'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-xs font-bold text-slate-900">{opt.label}</span>
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {opt.tag}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Education */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-slate-900">
                    4. Qual é o seu nível de escolaridade concluído?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'secondary', label: 'Ensino Médio Concluído (PUNIV / IMEL / etc.)' },
                      { id: 'bachelor', label: 'Licenciatura Concluída' },
                      { id: 'postgrad', label: 'Pós-Graduação / Mestrado' },
                      { id: 'technical', label: 'Formação Técnica Profissional Certificada' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setEducation(opt.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          education === opt.id
                            ? 'bg-amber-50/80 border-amber-400 ring-2 ring-amber-400/30'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-xs font-bold text-slate-900">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Voltar
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>{step === 4 ? 'Ver Resultado do Diagnóstico' : 'Próxima Pergunta'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Result View */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Resultado da Avaliação
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    Perfil com Alta Viabilidade Consular
                  </h3>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-3xl font-black text-emerald-600 tabular-nums">
                    {viabilityScore}%
                  </span>
                  <span className="block text-[11px] font-semibold text-slate-500">
                    Índice de Compatibilidade
                  </span>
                </div>
              </div>

              {/* Recommendation card */}
              <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-center gap-2.5">
                  <CountryFlag code={recommendedDraw.flag} className="w-8 h-5.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Sorteio Recomendado Para Si
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      {recommendedDraw.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Com base na sua finalidade e nível de habilitações, este sorteio oferece o pacote completo com maiores chances de sucesso consular sem complicações.
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-700 mb-2">
                    Checklist dos Documentos que Serão Pagos e Tratados:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Agendamento prioritário e taxas consulares</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Autenticação no MIREX e Registo Criminal</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Seguro de Saúde Internacional Obrigatório</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Passagem Aérea e Subsídio de Chegada</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenFreeTicketForDraw(recommendedDraw)}
                  className="w-full sm:flex-1 py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Participar Grátis Neste Sorteio Recomendado</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto py-3 px-4 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir Diagnóstico</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
