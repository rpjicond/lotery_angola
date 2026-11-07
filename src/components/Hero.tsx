import React from 'react';
import { UserCheck, Ticket, Tv, Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface HeroProps {
  onOpenParticipate: () => void;
  onSelectStep: (stepNumber: number) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenParticipate,
  onSelectStep,
}) => {
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

      {/* Como Funciona: 3-Step Premium Cards */}
      <div id="como-funciona" className="bg-[#020815] border-y border-[#0d2c66] text-white py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Subheader */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-black text-[#FFDE00] tracking-widest uppercase font-display bg-[#FFDE00]/10 border border-[#FFDE00]/30 px-3.5 py-1 rounded-full">
              PROCESSO SIMPLES & TRANSPARENTE
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight font-display mt-2.5">
              Como Funciona a Lotaria em 3 Passos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Step 1 Card */}
            <button
              type="button"
              onClick={() => onSelectStep(1)}
              className="relative bg-gradient-to-b from-[#092252] via-[#06183C] to-[#030D22] hover:from-[#0E3278] hover:via-[#092252] hover:to-[#051433] border-2 border-[#1E4D9B] hover:border-[#FFDE00] rounded-3xl p-5 sm:p-6 shadow-[0_12px_32px_rgba(2,10,25,0.7)] hover:shadow-[0_16px_40px_rgba(255,222,0,0.22)] transition-all duration-300 cursor-pointer group flex flex-col justify-between text-left overflow-hidden active:scale-[0.98]"
            >
              {/* Subtle Watermark Step Number */}
              <span className="absolute top-2 right-4 text-white/5 font-black text-6xl sm:text-7xl font-mono select-none pointer-events-none group-hover:text-[#FFDE00]/10 transition-colors">
                01
              </span>
              
              <div>
                {/* Header: Glowing Icon & Step Pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center font-black shadow-md shrink-0 group-hover:bg-white group-hover:text-[#0B2C69] group-hover:scale-105 transition-all">
                      <UserCheck className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-black text-slate-950 bg-[#FFDE00] px-3.5 py-1 rounded-full uppercase tracking-wider font-display shadow-sm">
                      PASSO 1: REGISTE-SE
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#FFDE00] transition-colors leading-snug">
                  Registo Cívico com BI
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-medium leading-relaxed">
                  1 Bilhete Grátis Diário por BI Nacional
                </p>

                {/* Value Tag */}
                <div className="mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Patrocinado pelo Estado</span>
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-[#FFDE00] transition-colors">
                <span>Registar Bilhete Grátis</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* Step 2 Card */}
            <button
              type="button"
              onClick={() => onSelectStep(2)}
              className="relative bg-gradient-to-b from-[#092252] via-[#06183C] to-[#030D22] hover:from-[#0E3278] hover:via-[#092252] hover:to-[#051433] border-2 border-[#1E4D9B] hover:border-[#FFDE00] rounded-3xl p-5 sm:p-6 shadow-[0_12px_32px_rgba(2,10,25,0.7)] hover:shadow-[0_16px_40px_rgba(255,222,0,0.22)] transition-all duration-300 cursor-pointer group flex flex-col justify-between text-left overflow-hidden active:scale-[0.98]"
            >
              {/* Subtle Watermark Step Number */}
              <span className="absolute top-2 right-4 text-white/5 font-black text-6xl sm:text-7xl font-mono select-none pointer-events-none group-hover:text-[#FFDE00]/10 transition-colors">
                02
              </span>

              <div>
                {/* Header: Glowing Icon & Step Pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center font-black shadow-md shrink-0 group-hover:bg-white group-hover:text-[#0B2C69] group-hover:scale-105 transition-all">
                      <Ticket className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-black text-slate-950 bg-[#FFDE00] px-3.5 py-1 rounded-full uppercase tracking-wider font-display shadow-sm">
                      PASSO 2: COMPRE O BILHETE
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-black text-[#FFDE00] leading-snug">
                  Apenas 500 Kwanza
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-medium leading-relaxed">
                  Multicaixa Express, Referência ou Unitel Money
                </p>

                {/* Value Tag */}
                <div className="mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2.5 py-1 rounded-lg">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Emissão Instantânea & MCX</span>
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-[#FFDE00] transition-colors">
                <span>Adquirir Bilhetes Extras</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            {/* Step 3 Card */}
            <button
              type="button"
              onClick={() => onSelectStep(3)}
              className="relative bg-gradient-to-b from-[#092252] via-[#06183C] to-[#030D22] hover:from-[#0E3278] hover:via-[#092252] hover:to-[#051433] border-2 border-[#1E4D9B] hover:border-[#FFDE00] rounded-3xl p-5 sm:p-6 shadow-[0_12px_32px_rgba(2,10,25,0.7)] hover:shadow-[0_16px_40px_rgba(255,222,0,0.22)] transition-all duration-300 cursor-pointer group flex flex-col justify-between text-left overflow-hidden active:scale-[0.98]"
            >
              {/* Subtle Watermark Step Number */}
              <span className="absolute top-2 right-4 text-white/5 font-black text-6xl sm:text-7xl font-mono select-none pointer-events-none group-hover:text-[#FFDE00]/10 transition-colors">
                03
              </span>

              <div>
                {/* Header: Glowing Icon & Step Pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center font-black shadow-md shrink-0 group-hover:bg-white group-hover:text-[#0B2C69] group-hover:scale-105 transition-all">
                      <Tv className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-black text-slate-950 bg-[#FFDE00] px-3.5 py-1 rounded-full uppercase tracking-wider font-display shadow-sm">
                      PASSO 3: PARTICIPE NO SORTEIO
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#FFDE00] transition-colors leading-snug">
                  Extração Pública ao Vivo
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-medium leading-relaxed">
                  Auditoria Oficial do ISJ de Angola
                </p>

                {/* Value Tag */}
                <div className="mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-300 bg-sky-950/60 border border-sky-500/40 px-2.5 py-1 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
                  <span>Sorteio Auditado & Transparente</span>
                </div>
              </div>

              {/* Action Callout */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-[#FFDE00] transition-colors">
                <span>Ver Transmissão em Direto</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};
