import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // SVG Circle parameters for circular progress
  const radius = 64;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth ~2.8s progression pace
        const increment = Math.floor(Math.random() * 5) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 350);

      const finishTimer = setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 850);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress, onComplete]);

  if (isDone) return null;

  return (
    <div
      onClick={() => {
        setIsFading(true);
        setTimeout(() => {
          setIsDone(true);
          if (onComplete) onComplete();
        }, 250);
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#071F4A] text-white p-6 transition-opacity duration-500 cursor-pointer ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Carregando portal LVA"
    >
      {/* Responsive Background: Mobile asset for phones, PC asset for desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <picture className="w-full h-full">
          <source media="(max-width: 639px)" srcSet="/assets/lva/angola_golden_waves_mobile.jpg" />
          <img
            src="/assets/lva/angola_golden_waves_emblem.jpg"
            alt="Ondas Douradas da Rede Futurista Angolana"
            className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08] opacity-90"
          />
        </picture>
        {/* Dark navy overlay vignette to enhance text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040C1D]/80 via-[#040C1D]/60 to-[#040C1D]/90" />
      </div>

      {/* Main Content: Emblem with Circular Ring */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Emblem Frame with Circular SVG Loader */}
        <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center mb-4">
          {/* SVG Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 148 148">
            {/* Background Track Circle */}
            <circle
              cx="74"
              cy="74"
              r={radius}
              fill="none"
              stroke="#0D2F6B"
              strokeWidth={strokeWidth}
            />
            {/* Animated Golden Progress Circle */}
            <circle
              cx="74"
              cy="74"
              r={radius}
              fill="none"
              stroke="#FBBF24"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
            />
          </svg>

          {/* Ambient Glow */}
          <div className="absolute w-24 h-28 bg-[#FBBF24]/15 rounded-full blur-lg" />

          {/* Centered Passport Emblem Logo Symbol */}
          <div className="relative flex items-center justify-center z-10">
            {/* Blue Passport */}
            <div className="relative w-14 h-20 sm:w-16 sm:h-22 bg-gradient-to-br from-[#154696] to-[#0B2A63] border-2 border-[#FBBF24] rounded-lg flex flex-col items-center justify-center shadow-xl -rotate-6 translate-x-1.5">
              <div className="w-6 h-6 rounded-full border border-[#FBBF24] flex items-center justify-center text-[10px] text-[#FBBF24] font-black">
                ★
              </div>
              <div className="w-8 h-0.5 bg-[#FBBF24] mt-1.5 rounded-full opacity-85" />
            </div>

            {/* Gold Passport */}
            <div className="relative w-12 h-18 sm:w-14 sm:h-20 bg-gradient-to-br from-[#FBBF24] via-[#F59E0B] to-[#D97706] border border-amber-200 rounded-lg flex flex-col items-center justify-center shadow-xl rotate-8 -translate-x-2">
              <div className="w-5 h-5 rounded-full border border-slate-950/40 flex items-center justify-center text-[8px] font-black text-slate-950">
                AO
              </div>
              <span className="text-[9px] font-black text-slate-950 tracking-tighter mt-0.5 font-display">
                LVA
              </span>
            </div>
          </div>
        </div>

        {/* LVA Brand Title */}
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display">
          LVA
        </h1>
        <p className="text-xs font-bold text-slate-300 tracking-wider uppercase mt-1">
          Lotaria de Vistos Angola
        </p>
      </div>
    </div>
  );
};
