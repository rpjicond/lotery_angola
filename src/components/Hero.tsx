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
        
        {/* Angolan Golden Waves & Emblem Background - picture tag with mobile and desktop assets */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <picture className="w-full h-full">
            <source media="(max-width: 639px)" srcSet="/assets/lva/angola_golden_waves_mobile.jpg" />
            <img
              src="/assets/lva/angola_golden_waves_emblem.jpg"
              alt="Ondas Douradas da Rede Futurista Angolana com Emblema Nacional"
              className="w-full h-full object-cover object-center opacity-100 filter brightness-[1.10] contrast-[1.05]"
            />
          </picture>
          {/* Light gradient vignette to blend seamlessly while keeping background vivid and bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040C1D]/30 via-transparent to-[#040C1D]/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040C1D] via-transparent to-transparent pointer-events-none" />
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

            {/* Right Column: Palanca Negra Gigante with transparent background holding passport */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end z-10 mt-1 sm:mt-0">
              <div
                onClick={onOpenParticipate}
                className="relative group cursor-pointer flex flex-col items-center justify-center max-w-[620px] sm:max-w-[700px] lg:max-w-[800px] w-full"
                title="Clique para participar no Sorteio Oficial da LVA"
              >
                {/* Subtle golden & navy glow behind character */}
                <div className="absolute inset-0 bg-radial from-[#FBBF24]/35 via-[#1E4B94]/25 to-transparent blur-3xl rounded-full transform scale-105 pointer-events-none group-hover:from-[#FBBF24]/50 transition-all duration-500" />

                {/* Palanca Negra Gigante holding Angolan passport with transparent background */}
                <img
                  src="/assets/lva/palanca_transparente.png"
                  alt="Palanca Negra Gigante em fato executivo exibindo o Passaporte de Angola com fundo transparente"
                  className="relative z-10 w-full max-h-[520px] min-[400px]:max-h-[580px] sm:max-h-[780px] lg:max-h-[840px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)] filter hover:brightness-105 transition-all duration-300 transform group-hover:scale-102"
                />

                {/* Mobile Text & CTA Block positioned directly under Palanca image */}
                <div className="block sm:hidden text-center mt-3 pb-2 px-2 z-20">
                  <h1 className="text-xl min-[380px]:text-2xl font-black uppercase tracking-tight leading-tight font-display drop-shadow-[0_4px_15px_rgba(0,0,0,0.95)]">
                    <span className="block text-[#FFDE00] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      CANSADO DE BUROCRACIA?
                    </span>
                    <span className="block text-white mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                      GANHE TRATAMENTO DE VISTO <span className="text-[#FFDE00]">GRATUITO!</span>
                    </span>
                  </h1>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={onOpenParticipate}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-black text-slate-950 bg-[#FFDE00] hover:bg-[#F3B700] active:bg-amber-500 rounded-full transition-all shadow-[0_8px_25px_rgba(255,222,0,0.4)] active:scale-95 cursor-pointer uppercase tracking-tight"
                    >
                      <span>QUERO PARTICIPAR AGORA!</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
