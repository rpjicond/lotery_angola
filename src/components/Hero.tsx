import React from 'react';
import { UserCheck, Ticket, Tv, Sparkles } from 'lucide-react';

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
      <div id="como-funciona" className="bg-[#030B1A] border-y border-[#0a275f]/80 text-white py-6 sm:py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Step 1 Card */}
            <button
              type="button"
              onClick={() => onSelectStep(1)}
              className="relative bg-[#06183C] hover:bg-[#0A2254] border border-[#133C82]/80 hover:border-[#FFDE00]/70 rounded-2xl p-4 sm:p-5 shadow-xl hover:shadow-[0_10px_30px_rgba(255,222,0,0.18)] transition-all duration-300 cursor-pointer group flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFDE00]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FFDE00]/15 transition-all" />
              
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-[#FFDE00]/15 border border-[#FFDE00]/30 flex items-center justify-center text-[#FFDE00] shrink-0 group-hover:scale-110 transition-transform">
                  <UserCheck className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-black text-[#FFDE00] uppercase tracking-wider font-display bg-[#FFDE00]/10 border border-[#FFDE00]/30 px-2.5 py-0.5 rounded-full">
                  PASSO 1: REGISTE-SE
                </span>
              </div>

              <p className="text-sm sm:text-base font-extrabold text-white mt-1 group-hover:text-[#FFDE00] transition-colors">
                Registo Cívico com BI
              </p>
              <p className="text-xs text-slate-300 mt-1 font-medium leading-relaxed">
                1 Bilhete Grátis Diário por BI Nacional
              </p>
            </button>

            {/* Step 2 Card */}
            <button
              type="button"
              onClick={() => onSelectStep(2)}
              className="relative bg-[#06183C] hover:bg-[#0A2254] border border-[#133C82]/80 hover:border-[#FFDE00]/70 rounded-2xl p-4 sm:p-5 shadow-xl hover:shadow-[0_10px_30px_rgba(255,222,0,0.18)] transition-all duration-300 cursor-pointer group flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFDE00]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FFDE00]/15 transition-all" />

              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-[#FFDE00]/15 border border-[#FFDE00]/30 flex items-center justify-center text-[#FFDE00] shrink-0 group-hover:scale-110 transition-transform">
                  <Ticket className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-black text-[#FFDE00] uppercase tracking-wider font-display bg-[#FFDE00]/10 border border-[#FFDE00]/30 px-2.5 py-0.5 rounded-full">
                  PASSO 2: COMPRE O BILHETE
                </span>
              </div>

              <p className="text-sm sm:text-base font-extrabold text-white mt-1 group-hover:text-[#FFDE00] transition-colors">
                Apenas 500 Kwanza
              </p>
              <p className="text-xs text-[#FFDE00] mt-1 font-semibold leading-relaxed">
                Multicaixa Express, Referência ou Unitel Money
              </p>
            </button>

            {/* Step 3 Card */}
            <button
              type="button"
              onClick={() => onSelectStep(3)}
              className="relative bg-[#06183C] hover:bg-[#0A2254] border border-[#133C82]/80 hover:border-[#FFDE00]/70 rounded-2xl p-4 sm:p-5 shadow-xl hover:shadow-[0_10px_30px_rgba(255,222,0,0.18)] transition-all duration-300 cursor-pointer group flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFDE00]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FFDE00]/15 transition-all" />

              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-[#FFDE00]/15 border border-[#FFDE00]/30 flex items-center justify-center text-[#FFDE00] shrink-0 group-hover:scale-110 transition-transform">
                  <Tv className="w-4 h-4" />
                </div>
                <span className="text-[11px] sm:text-xs font-black text-[#FFDE00] uppercase tracking-wider font-display bg-[#FFDE00]/10 border border-[#FFDE00]/30 px-2.5 py-0.5 rounded-full">
                  PASSO 3: PARTICIPE NO SORTEIO
                </span>
              </div>

              <p className="text-sm sm:text-base font-extrabold text-white mt-1 group-hover:text-[#FFDE00] transition-colors">
                Extração Pública ao Vivo
              </p>
              <p className="text-xs text-slate-300 mt-1 font-medium leading-relaxed">
                Auditoria Oficial do ISJ de Angola
              </p>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};
