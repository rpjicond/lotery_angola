import React, { useState } from 'react';
import { UserCheck, Ticket, Tv, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenParticipate: () => void;
  onSelectStep: (stepNumber: number) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenParticipate,
  onSelectStep,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      num: '01',
      title: 'Registo Cívico com BI',
      subtitle: '1 Bilhete Grátis Diário por BI Nacional',
      detail: 'Acesso universal para todos os cidadãos angolanos com Bilhete de Identidade válido.',
      actionText: 'Registar Bilhete Grátis',
      icon: UserCheck,
    },
    {
      id: 2,
      num: '02',
      title: 'Compre o Bilhete',
      subtitle: 'Apenas 500 Kwanza por Bilhete',
      detail: 'Pagamento imediato via Multicaixa Express, Referência Bancária ou Unitel Money.',
      actionText: 'Comprar Bilhete (500 KZ)',
      icon: Ticket,
    },
    {
      id: 3,
      num: '03',
      title: 'Participe no Sorteio',
      subtitle: 'Extração Pública ao Vivo',
      detail: 'Sorteios transparentes com auditoria oficial presencial do ISJ de Angola.',
      actionText: 'Ver Transmissão ao Vivo',
      icon: Tv,
    },
  ];

  return (
    <section id="hero" className="relative bg-[#050914] text-white overflow-hidden">
      {/* Hero Skyline Section */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center pt-[92px] sm:pt-[104px] lg:pt-[116px]">
        
        {/* Real Paris City Background with Cinematic Dark Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <picture className="w-full h-full">
            <source media="(max-width: 639px)" srcSet="/assets/lva/paris_city_mobile.jpg" />
            <img
              src="/assets/lva/paris_city_desktop.jpg"
              alt="Paris - Fundo Oficial LVA"
              className="w-full h-full object-cover object-center opacity-80 filter brightness-[0.95] contrast-[1.08]"
              referrerPolicy="no-referrer"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050914] via-[#050914]/75 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/20 to-[#050914]/80 pointer-events-none" />
        </div>

        {/* Airspace Layer: Single Commercial Airplane in flight */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          <div
            onClick={onOpenParticipate}
            className="absolute top-[12%] sm:top-[16%] left-0 w-[220px] sm:w-[380px] lg:w-[480px] pointer-events-auto cursor-pointer animate-travel-city"
            title="Clique para participar na Lotaria de Vistos Angola"
          >
            <div className="relative w-full">
              {/* Subtle engine contrails */}
              <div className="absolute left-[5%] bottom-[24%] w-[42%] h-1.5 bg-gradient-to-r from-transparent via-white/30 to-white/60 blur-[1.5px] rounded-full -rotate-[22deg] pointer-events-none animate-contrail opacity-70" />
              <div className="absolute left-[18%] bottom-[38%] w-[35%] h-1 bg-gradient-to-r from-transparent via-amber-200/30 to-white/50 blur-[1.5px] rounded-full -rotate-[22deg] pointer-events-none animate-contrail opacity-60" />

              <img
                src="/assets/lva/aviao_voando_transparente.png"
                alt="Avião comercial internacional"
                className="relative z-10 w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)] transition-transform duration-300 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />

              {/* Navigation beacons */}
              <div className="absolute top-[28%] right-[22%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-strobe-flash pointer-events-none z-20" />
              <div className="absolute bottom-[28%] left-[16%] w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e] animate-nav-beacon pointer-events-none z-20" />
              <div className="absolute top-[38%] right-[9%] w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-nav-beacon pointer-events-none z-20" />
            </div>
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-2xl text-center lg:text-left">
            
            {/* Clean, Discreet Institutional Authority Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Regulado pelo Instituto de Supervisão de Jogos · ISJ Angola</span>
            </div>

            {/* High-Impact Editorial Typography without neon overload */}
            <h1 className="text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
              Cansado de burocracia? <br />
              Ganhe tratamento de <span className="text-[#FACC15]">visto gratuito.</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              A Lotaria de Vistos Angola financia 100% das taxas consulares, assessoria jurídica de imigração, certidões no MIREX, seguro de saúde e bilhetes aéreos para os contemplados.
            </p>

            {/* Clean CTA Group */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onOpenParticipate}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 rounded-lg transition-colors cursor-pointer shadow-sm tracking-wide"
              >
                <span>PARTICIPAR NO SORTEIO</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1 Bilhete Grátis Diário por BI Nacional</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SEÇÃO "COMO FUNCIONA": Minimalist, Modern 3-Step Timeline without Nested Cards */}
      <div id="como-funciona" className="border-y border-slate-800/80 bg-[#070D1E] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header da Secção com autoridade limpa */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-slate-800/80">
            <div>
              <span className="text-xs font-bold text-[#FACC15] uppercase tracking-wider block">
                Processo Simples & Auditado
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Como Funciona em 3 Passos
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Registe o seu Bilhete de Identidade, adquira participações adicionais e acompanhe as extrações em tempo real.
            </p>
          </div>

          {/* Minimalist 3-Step Horizontal Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    onSelectStep(step.id);
                  }}
                  className={`group relative flex flex-col justify-between p-6 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] border-slate-600 shadow-lg'
                      : 'bg-[#0A1022] border-slate-800/80 hover:border-slate-700 hover:bg-[#0E152B]'
                  }`}
                >
                  <div>
                    {/* Top Step Number & Clean Icon */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                      <span className="font-mono text-xs font-bold text-[#FACC15] tracking-widest uppercase">
                        Passo {step.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-800/60 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                      {step.subtitle}
                    </p>

                    <p className="text-xs text-slate-400 mt-2.5 leading-relaxed font-normal">
                      {step.detail}
                    </p>
                  </div>

                  {/* Clean Action Link */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-[#FACC15] transition-colors">
                    <span>{step.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
