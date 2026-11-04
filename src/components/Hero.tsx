import React, { useState, useEffect } from 'react';
import { UserCheck, Ticket, Tv, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenParticipate: () => void;
  onSelectStep: (stepNumber: number) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenParticipate,
  onSelectStep,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = [
    {
      stepNum: 1,
      badge: 'PASSO 1: REGISTE-SE',
      title: 'Registo Cívico com BI',
      description: '1 Bilhete Grátis Diário por BI Nacional · Acesso imediato e seguro.',
      icon: UserCheck,
    },
    {
      stepNum: 2,
      badge: 'PASSO 2: COMPRE O BILHETE',
      title: 'Apenas 500 Kwanza',
      description: 'Multicaixa Express, Referência Bancária ou Unitel Money para multiplicar as suas chances.',
      icon: Ticket,
    },
    {
      stepNum: 3,
      badge: 'PASSO 3: PARTICIPE NO SORTEIO',
      title: 'Extração Pública ao Vivo',
      description: 'Auditoria Oficial do Instituto de Supervisão de Jogos (ISJ) de Angola.',
      icon: Tv,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [steps.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="hero" className="relative bg-[#040C1D] text-white overflow-hidden">
      {/* Background with futuristic Angolan golden waves and national emblem */}
      <div className="relative min-h-[620px] min-[400px]:min-h-[680px] sm:min-h-[740px] lg:min-h-[800px] flex items-center pt-[100px] sm:pt-[112px] lg:pt-[124px]">
        
        {/* Angolan Golden Waves & Emblem Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <picture className="w-full h-full">
            <source media="(max-width: 639px)" srcSet="/assets/lva/angola_golden_waves_mobile.jpg" />
            <img
              src="/assets/lva/angola_golden_waves_emblem.jpg"
              alt="Ondas Douradas da Rede Futurista Angolana com Emblema Nacional"
              className="w-full h-full object-cover object-center opacity-100 filter brightness-[1.10] contrast-[1.05]"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#040C1D]/30 via-transparent to-[#040C1D]/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040C1D] via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Headlines, Description & CTA */}
            <div className="lg:col-span-6 z-10 text-center lg:text-left">
              <h1 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black uppercase tracking-tight leading-[1.1] font-display drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
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

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-100 max-w-lg mx-auto lg:mx-0 leading-relaxed font-semibold px-1 sm:px-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                A Lotaria de Vistos Angola (LVA) financia 100% das suas taxas consulares, assessoria jurídica, certidões no MIREX, seguro de saúde e bilhetes de avião para Portugal e França.
              </p>

              {/* Big Golden Yellow Pill CTA Button */}
              <div className="mt-5 sm:mt-6 flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={onOpenParticipate}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-10 py-3.5 text-xs sm:text-sm font-black text-slate-950 bg-[#FFDE00] hover:bg-[#F3B700] active:bg-amber-500 rounded-full transition-all shadow-[0_10px_30px_rgba(255,222,0,0.4)] active:scale-95 cursor-pointer uppercase tracking-tight"
                >
                  <span>QUERO PARTICIPAR AGORA!</span>
                </button>
              </div>
            </div>

            {/* Right Column: Palanca Negra Gigante holding passport */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end z-10 mt-4 lg:mt-0">
              <div
                onClick={onOpenParticipate}
                className="relative group cursor-pointer flex flex-col items-center justify-center max-w-[420px] sm:max-w-[540px] lg:max-w-[660px] w-full"
                title="Clique para participar no Sorteio Oficial da LVA"
              >
                <div className="absolute inset-0 bg-radial from-[#FBBF24]/20 via-[#1E4B94]/15 to-transparent blur-3xl rounded-full transform scale-105 pointer-events-none" />
                <img
                  src="/assets/lva/palanca_transparente.png"
                  alt="Palanca Negra Gigante em fato executivo exibindo o Passaporte de Angola com fundo transparente"
                  className="relative z-10 w-full max-h-[440px] min-[400px]:max-h-[500px] sm:max-h-[600px] lg:max-h-[680px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)] filter hover:brightness-105 transition-all duration-300 transform group-hover:scale-102"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Como Funciona: Professional Long Rectangular Slide Banner without yellow borders */}
      <div id="como-funciona" className="bg-[#030B1A] border-y border-[#0d2f6b] text-white py-5 sm:py-7">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative bg-[#06183C] border border-[#133A7C] rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden">

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              
              {/* Left arrow button */}
              <button
                type="button"
                onClick={prevSlide}
                className="hidden sm:flex w-10 h-10 rounded-xl bg-[#081F4A] border border-[#1A438C] items-center justify-center text-white hover:bg-[#103780] hover:text-[#FFDE00] transition-colors cursor-pointer shrink-0 shadow-sm"
                aria-label="Passo anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main slide content area */}
              <div
                onClick={() => onSelectStep(steps[currentSlide].stepNum)}
                className="flex-1 cursor-pointer text-center md:text-left group w-full py-1"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-5">
                  
                  {/* Icon badge */}
                  <div className="mx-auto md:mx-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0B2C69] border border-[#1C4694] flex items-center justify-center text-[#FFDE00] shrink-0 group-hover:scale-105 transition-transform shadow-inner">
                    {React.createElement(steps[currentSlide].icon, { className: 'w-6 h-6 sm:w-7 sm:h-7' })}
                  </div>

                  {/* Text details */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <span className="text-[11px] sm:text-xs font-bold text-[#FFDE00] uppercase tracking-wider font-display bg-[#0B2C69] border border-[#1B4492] px-3 py-0.5 rounded-full">
                        {steps[currentSlide].badge}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-xl font-extrabold text-white group-hover:text-[#FFDE00] transition-colors">
                      {steps[currentSlide].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-2xl">
                      {steps[currentSlide].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right controls & action */}
              <div className="flex items-center gap-3 shrink-0 mt-2 md:mt-0">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#051535] rounded-xl border border-[#133A7C] text-[11px] font-bold text-slate-300">
                  <span>{currentSlide + 1}</span>
                  <span className="text-slate-500">/</span>
                  <span>{steps.length}</span>
                </div>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-xl bg-[#081F4A] border border-[#1A438C] flex items-center justify-center text-white hover:bg-[#103780] hover:text-[#FFDE00] transition-colors cursor-pointer shrink-0 shadow-sm"
                  aria-label="Próximo passo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Slide dots indicators */}
            <div className="relative z-10 flex items-center justify-center gap-2 mt-4 pt-3 border-t border-[#133A7C]/60">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx
                      ? 'w-8 bg-white'
                      : 'w-2 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para o slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
