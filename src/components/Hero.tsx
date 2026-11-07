import React, { useState } from 'react';
import { UserCheck, Ticket, Tv, ArrowRight } from 'lucide-react';
import { Container } from './Container';

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
    <section id="hero" className="relative bg-white text-slate-900 overflow-hidden">
      {/* Hero Skyline Section with Crisp White Light Vignette */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center pt-[92px] sm:pt-[104px] lg:pt-[116px]">
        
        {/* Real Paris City Background with Light Vignette */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <picture className="w-full h-full">
            <source media="(max-width: 639px)" srcSet="/assets/lva/paris_city_mobile.jpg" />
            <img
              src="/assets/lva/paris_city_desktop.jpg"
              alt="Paris - Fundo Oficial LVA"
              className="w-full h-full object-cover object-center opacity-90 filter brightness-[1.02] contrast-[1.02]"
              referrerPolicy="no-referrer"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 pointer-events-none" />
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
              <div className="absolute left-[5%] bottom-[24%] w-[42%] h-1.5 bg-gradient-to-r from-transparent via-white/40 to-white/80 blur-[1.5px] rounded-full -rotate-[22deg] pointer-events-none animate-contrail opacity-80" />
              <div className="absolute left-[18%] bottom-[38%] w-[35%] h-1 bg-gradient-to-r from-transparent via-amber-200/50 to-white/70 blur-[1.5px] rounded-full -rotate-[22deg] pointer-events-none animate-contrail opacity-70" />

              <img
                src="/assets/lva/aviao_voando_transparente.png"
                alt="Avião comercial internacional"
                className="relative z-10 w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />

              {/* Navigation beacons */}
              <div className="absolute top-[28%] right-[22%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-strobe-flash pointer-events-none z-20" />
              <div className="absolute bottom-[28%] left-[16%] w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_#f43f5e] animate-nav-beacon pointer-events-none z-20" />
              <div className="absolute top-[38%] right-[9%] w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-nav-beacon pointer-events-none z-20" />
            </div>
          </div>
        </div>

        {/* Hero Airspace Container (Clean view of Paris & flying airplane) */}
        <Container className="relative z-10 py-16 sm:py-24 pointer-events-none">
          <div className="min-h-[220px] sm:min-h-[320px] lg:min-h-[380px]" />
        </Container>
      </div>

      {/* SEÇÃO "COMO FUNCIONA": Minimalist Light Theme Timeline */}
      <div id="como-funciona" className="border-y border-slate-200 bg-slate-50 py-14 sm:py-20">
        <Container>
          
          {/* Header da Secção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                Processo Simples & Auditado
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Como Funciona em 3 Passos
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Registe o seu Bilhete de Identidade, adquira participações adicionais e acompanhe as extrações em tempo real.
            </p>
          </div>

          {/* Minimalist 3-Step Horizontal Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    onSelectStep(step.id);
                  }}
                  className={`group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white border-amber-400 shadow-md scale-[1.01]'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Top Step Number & Clean Icon */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <span className="font-mono text-xs font-black text-amber-600 tracking-widest uppercase">
                        Passo {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-4.5 h-4.5 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                      {step.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-normal">
                      {step.detail}
                    </p>
                  </div>

                  {/* Clean Action Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                    <span>{step.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

        </Container>
      </div>
    </section>
  );
};
