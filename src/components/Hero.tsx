import React from 'react';

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
      <div className="relative min-h-[640px] min-[400px]:min-h-[720px] sm:min-h-[780px] lg:min-h-[840px] flex items-center pt-[82px] sm:pt-[88px] lg:pt-[92px]">
        
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
                  className="relative z-10 w-full max-h-[640px] min-[400px]:max-h-[720px] sm:max-h-[780px] lg:max-h-[840px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)] filter hover:brightness-105 transition-all duration-300 transform group-hover:scale-102"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Como Funciona: 3-Step Horizontal Strip */}
      <div id="como-funciona" className="bg-[#051330] border-y border-[#0a275f] text-white py-3 sm:py-5">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center gap-1 md:gap-0">
            
            {/* Step 1 */}
            <button
              type="button"
              onClick={() => onSelectStep(1)}
              className="py-2.5 sm:py-3 px-3 sm:px-4 hover:bg-white/5 transition-colors cursor-pointer group rounded-lg md:rounded-none"
            >
              <p className="text-xs sm:text-sm font-black text-[#FBBF24] uppercase tracking-wider">
                PASSO 1: Registe-se
              </p>
              <p className="text-xs sm:text-base font-bold text-white mt-0.5">
                Registo Cívico com BI
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                1 Bilhete Grátis Diário por BI Nacional
              </p>
            </button>

            {/* Step 2 */}
            <button
              type="button"
              onClick={() => onSelectStep(2)}
              className="py-2.5 sm:py-3 px-3 sm:px-4 hover:bg-white/5 transition-colors cursor-pointer group rounded-lg md:rounded-none"
            >
              <p className="text-xs sm:text-sm font-black text-[#FBBF24] uppercase tracking-wider">
                PASSO 2: Compre o Bilhete
              </p>
              <p className="text-xs sm:text-base font-bold text-white mt-0.5">
                Apenas 500 Kwanza
              </p>
              <p className="text-[11px] sm:text-xs text-[#FBBF24] mt-0.5 font-medium">
                Multicaixa Express, Referência ou Unitel Money
              </p>
            </button>

            {/* Step 3 */}
            <button
              type="button"
              onClick={() => onSelectStep(3)}
              className="py-2.5 sm:py-3 px-3 sm:px-4 hover:bg-white/5 transition-colors cursor-pointer group rounded-lg md:rounded-none"
            >
              <p className="text-xs sm:text-sm font-black text-[#FBBF24] uppercase tracking-wider">
                PASSO 3: Participe no Sorteio
              </p>
              <p className="text-xs sm:text-base font-bold text-white mt-0.5">
                Extração Pública ao Vivo
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                Auditoria Oficial do ISJ de Angola
              </p>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};
