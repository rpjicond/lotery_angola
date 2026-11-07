import React, { useState } from 'react';
import { UserCheck, Ticket, Tv, Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface HeroProps {
  onOpenParticipate: () => void;
  onSelectStep: (stepNumber: number) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenParticipate,
  onSelectStep,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [circleColor, setCircleColor] = useState<'amarelo' | 'azul'>('amarelo');
  return (
    <section id="hero" className="relative bg-[#040C1D] text-white overflow-hidden">
      {/* Background with futuristic Angolan golden waves and national emblem */}
      <div className="relative min-h-[640px] min-[400px]:min-h-[720px] sm:min-h-[780px] lg:min-h-[840px] flex items-center pt-[105px] sm:pt-[118px] lg:pt-[128px]">
        
        {/* Real Paris City Background - picture tag with mobile and desktop authentic city photography */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <picture className="w-full h-full">
            <source media="(max-width: 639px)" srcSet="/assets/lva/paris_city_mobile.jpg" />
            <img
              src="/assets/lva/paris_city_desktop.jpg"
              alt="Fotografia Real da Cidade de Paris - Fundo Oficial LVA"
              className="w-full h-full object-cover object-center opacity-95 filter brightness-[1.04] contrast-[1.04]"
              referrerPolicy="no-referrer"
            />
          </picture>
          {/* Subtle gradient vignette to blend seamlessly while keeping the real city photo vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040C1D]/65 via-[#040C1D]/20 to-[#040C1D]/35 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040C1D] via-transparent to-[#040C1D]/50 pointer-events-none" />
        </div>

        {/* Full Airspace Layer: O Avião Comercial a Viajar Ativamente por Toda a Cidade de Paris */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          <div
            onClick={onOpenParticipate}
            className="absolute top-[10%] sm:top-[14%] left-0 w-[240px] min-[400px]:w-[300px] sm:w-[420px] lg:w-[520px] pointer-events-auto cursor-pointer animate-travel-city"
            title="Clique para participar no Sorteio Oficial da LVA e voar para Paris"
          >
            <div className="relative w-full">
              {/* Jet Contrails / Rastros de Condensação a sair dos motores */}
              <div className="absolute left-[4%] bottom-[24%] w-[44%] h-2.5 bg-gradient-to-r from-transparent via-white/40 to-white/70 blur-[2px] rounded-full -rotate-[22deg] pointer-events-none animate-contrail opacity-75" />
              <div className="absolute left-[18%] bottom-[38%] w-[38%] h-2 bg-gradient-to-r from-transparent via-amber-200/40 to-white/60 blur-[2px] rounded-full -rotate-[22deg] pointer-events-none animate-contrail opacity-65" />

              {/* Main Airplane Image */}
              <img
                src="/assets/lva/aviao_voando_transparente.png"
                alt="Avião comercial internacional a viajar pela cidade de Paris"
                className="relative z-10 w-full object-contain drop-shadow-[0_28px_55px_rgba(0,0,0,0.98)] filter hover:brightness-105 transition-all duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Anti-collision Strobe & Navigation Beacons */}
              <div className="absolute top-[28%] right-[22%] w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#ffffff] animate-strobe-flash pointer-events-none z-20" />
              <div className="absolute bottom-[28%] left-[16%] w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-nav-beacon pointer-events-none z-20" />
              <div className="absolute top-[38%] right-[9%] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] animate-nav-beacon pointer-events-none z-20" />
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headlines, Description & CTA - basic text without card background */}
            <div className="lg:col-span-6 z-10 text-center lg:text-left">
              <h1 className="hidden sm:block text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black uppercase tracking-tight leading-[1.1] font-display drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
                <span className="block text-[#FFDE00] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  CANSADO DE
                </span>
                <span className="block text-[#FFDE00] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  BUROCRACIA?
                </span>
                <span className="block text-white mt-0.5 sm:mt-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                  GANHE TRATAMENTO
                </span>
                <span className="block mt-0.5 sm:mt-1">
                  <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">DE VISTO </span>
                  <span className="text-[#FFDE00] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">GRATUITO!</span>
                </span>
              </h1>

              <p className="hidden sm:block mt-3.5 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-100 max-w-lg mx-auto lg:mx-0 leading-relaxed font-semibold px-1 sm:px-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                A Lotaria de Vistos Angola (LVA) financia 100% das suas taxas consulares, assessoria jurídica, certidões no MIREX, seguro de saúde e bilhetes de avião.
              </p>

              {/* Big Golden Yellow Pill CTA Button with warm glow - visible on tablet and desktop */}
              <div className="hidden sm:flex mt-5 sm:mt-7 justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={onOpenParticipate}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-10 py-3.5 text-xs sm:text-sm font-black text-slate-950 bg-[#FFDE00] hover:bg-[#F3B700] active:bg-amber-500 rounded-full transition-all shadow-[0_10px_30px_rgba(255,222,0,0.4)] active:scale-95 cursor-pointer uppercase tracking-tight"
                >
                  <span>QUERO PARTICIPAR AGORA!</span>
                </button>
              </div>
            </div>

            {/* Right Column: Espaço Aéreo Aberto */}
            <div className="lg:col-span-6 min-h-[180px] sm:min-h-[300px] pointer-events-none" />

          </div>
        </div>
      </div>

      {/* Como Funciona: 3-Step Premium Cards aligned by a vertical line with active blue/yellow circle */}
      <div id="como-funciona" className="bg-[#020815] border-y border-[#0d2c66] text-white py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Subheader */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-black text-[#FFDE00] tracking-widest uppercase font-display bg-[#FFDE00]/10 border border-[#FFDE00]/30 px-3.5 py-1 rounded-full">
              PROCESSO SIMPLES & TRANSPARENTE
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight font-display mt-2.5">
              Como Funciona a Lotaria em 3 Passos
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
              Siga os passos abaixo alinhados pela linha oficial de participação da LVA.
            </p>

            {/* Alternador de Cor do Círculo Ativo: Amarelo ou Azul */}
            <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 bg-[#06183C] border border-[#1E4D9B] rounded-full shadow-inner">
              <span className="text-[11px] text-slate-300 font-semibold">Círculo no Passo:</span>
              <button
                type="button"
                onClick={() => setCircleColor('amarelo')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  circleColor === 'amarelo'
                    ? 'bg-[#FFDE00] text-slate-950 font-black shadow-[0_0_18px_rgba(255,222,0,0.8)] scale-105'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFDE00] shadow-[0_0_8px_#FFDE00]" />
                <span>Amarelo</span>
              </button>
              <button
                type="button"
                onClick={() => setCircleColor('azul')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  circleColor === 'azul'
                    ? 'bg-[#00D2FF] text-slate-950 font-black shadow-[0_0_18px_rgba(0,210,255,0.8)] scale-105'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
                <span>Azul</span>
              </button>
            </div>
          </div>

          {/* RETA VERTICAL ALINHANDO CADA UMA DAS DIVS DOS PASSOS */}
          <div className="relative max-w-3xl mx-auto pt-2 pb-2">
            {/* A Reta Vertical contínua */}
            <div className="absolute left-[26px] sm:left-[34px] top-8 bottom-8 w-1 sm:w-1.5 bg-gradient-to-b from-[#FFDE00] via-[#00D2FF] to-[#1E4D9B] rounded-full shadow-[0_0_16px_rgba(0,210,255,0.4)] z-0" />

            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  id: 1,
                  badge: 'PASSO 1: REGISTE-SE',
                  title: 'Registo Cívico com BI',
                  subtitle: '1 Bilhete Grátis Diário por BI Nacional',
                  tagText: '100% Patrocinado pelo Estado',
                  tagColor: 'text-emerald-300 bg-emerald-950/60 border-emerald-500/40',
                  actionText: 'Registar Bilhete Grátis',
                  icon: UserCheck,
                },
                {
                  id: 2,
                  badge: 'PASSO 2: COMPRE O BILHETE',
                  title: 'Apenas 500 Kwanza',
                  subtitle: 'Multicaixa Express, Referência ou Unitel Money',
                  tagText: 'Emissão Instantânea & MCX',
                  tagColor: 'text-amber-300 bg-amber-950/60 border-amber-500/40',
                  actionText: 'Adquirir Bilhetes Extras',
                  icon: Ticket,
                },
                {
                  id: 3,
                  badge: 'PASSO 3: PARTICIPE NO SORTEIO',
                  title: 'Extração Pública ao Vivo',
                  subtitle: 'Auditoria Oficial do ISJ de Angola',
                  tagText: 'Sorteio Auditado & Transparente',
                  tagColor: 'text-sky-300 bg-sky-950/60 border-sky-500/40',
                  actionText: 'Ver Transmissão em Direto',
                  icon: Tv,
                },
              ].map((step) => {
                const isActive = activeStep === step.id;
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    onMouseEnter={() => setActiveStep(step.id)}
                    className="relative z-10 flex items-start gap-4 sm:gap-6 group"
                  >
                    {/* O CÍRCULO NA RETA VERTICAL */}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveStep(step.id);
                        onSelectStep(step.id);
                      }}
                      className={`w-13 h-13 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 cursor-pointer relative z-10 ${
                        isActive
                          ? circleColor === 'amarelo'
                            ? 'bg-[#FFDE00] text-slate-950 shadow-[0_0_35px_rgba(255,222,0,0.95)] ring-4 ring-[#FFDE00]/40 ring-offset-2 ring-offset-[#020815] scale-110'
                            : 'bg-[#00D2FF] text-slate-950 shadow-[0_0_35px_rgba(0,210,255,0.95)] ring-4 ring-[#00D2FF]/40 ring-offset-2 ring-offset-[#020815] scale-110'
                          : 'bg-[#06183C] text-slate-300 border-2 border-[#1E4D9B] hover:border-[#FFDE00] hover:text-white'
                      }`}
                      title={`Passo ${step.id}`}
                    >
                      {/* Número do Passo ou Ícone no centro do círculo */}
                      <span className="font-mono font-black text-sm sm:text-base">
                        0{step.id}
                      </span>

                      {/* Halo pulsante quando ativo */}
                      {isActive && (
                        <span
                          className={`absolute -inset-1 rounded-full animate-ping opacity-35 pointer-events-none ${
                            circleColor === 'amarelo' ? 'bg-[#FFDE00]' : 'bg-[#00D2FF]'
                          }`}
                        />
                      )}
                    </button>

                    {/* A DIV DO PASSO ALINHADA PELA RETA VERTICAL */}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveStep(step.id);
                        onSelectStep(step.id);
                      }}
                      className={`flex-1 rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer text-left relative overflow-hidden border-2 flex flex-col justify-between ${
                        isActive
                          ? circleColor === 'amarelo'
                            ? 'bg-gradient-to-r from-[#0E3278] via-[#092252] to-[#04122E] border-[#FFDE00] shadow-[0_16px_45px_rgba(255,222,0,0.22)] translate-x-1 sm:translate-x-2'
                            : 'bg-gradient-to-r from-[#08306b] via-[#06204c] to-[#03112a] border-[#00D2FF] shadow-[0_16px_45px_rgba(0,210,255,0.22)] translate-x-1 sm:translate-x-2'
                          : 'bg-gradient-to-r from-[#081f4a] via-[#06183C] to-[#030D22] border-[#1E4D9B] hover:border-white/30 hover:bg-[#0a275f]'
                      }`}
                    >
                      {/* Subtle Watermark Step Number */}
                      <span className="absolute top-2 right-4 text-white/5 font-black text-6xl sm:text-7xl font-mono select-none pointer-events-none group-hover:text-white/10 transition-colors">
                        0{step.id}
                      </span>

                      <div>
                        {/* Header: Glowing Icon & Step Pill */}
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-black shadow-md shrink-0 transition-all ${
                                isActive
                                  ? circleColor === 'amarelo'
                                    ? 'bg-[#FFDE00] text-slate-950'
                                    : 'bg-[#00D2FF] text-slate-950'
                                  : 'bg-white/10 border border-white/20 text-white'
                              }`}
                            >
                              <Icon className="w-5 h-5 stroke-[2.2]" />
                            </div>
                            <span
                              className={`text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider font-display shadow-sm ${
                                isActive
                                  ? circleColor === 'amarelo'
                                    ? 'bg-[#FFDE00] text-slate-950'
                                    : 'bg-[#00D2FF] text-slate-950'
                                  : 'bg-[#FFDE00] text-slate-950'
                              }`}
                            >
                              {step.badge}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <h3
                          className={`text-base sm:text-xl font-black transition-colors leading-snug ${
                            isActive
                              ? circleColor === 'amarelo'
                                ? 'text-[#FFDE00]'
                                : 'text-[#00D2FF]'
                              : 'text-white'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium leading-relaxed">
                          {step.subtitle}
                        </p>

                        {/* Value Tag */}
                        <div
                          className={`mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg border ${step.tagColor}`}
                        >
                          {step.id === 1 && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                          {step.id === 2 && <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                          {step.id === 3 && <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />}
                          <span>{step.tagText}</span>
                        </div>
                      </div>

                      {/* Action Callout */}
                      <div className="pt-3.5 mt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                        <span>{step.actionText}</span>
                        <ArrowRight
                          className={`w-4 h-4 transform group-hover:translate-x-1.5 transition-transform ${
                            isActive
                              ? circleColor === 'amarelo'
                                ? 'text-[#FFDE00]'
                                : 'text-[#00D2FF]'
                              : 'text-slate-300'
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
