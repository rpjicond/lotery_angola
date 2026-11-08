import React from 'react';

interface CountryFlagProps {
  code: string;
  className?: string;
  showLabel?: boolean;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({
  code,
  className = 'w-5 h-3.5',
  showLabel = false
}) => {
  const norm = (code || '').toUpperCase().trim();

  const renderFlag = () => {
    // Portugal
    if (norm === 'PT' || norm.includes('PORTUGAL')) {
      return (
        <svg
          viewBox="0 0 600 400"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="240" height="400" fill="#006600" />
          <rect x="240" width="360" height="400" fill="#FF0000" />
          <circle cx="240" cy="200" r="76" fill="#FFCC00" stroke="#000" strokeWidth="2" />
          <path d="M 215,165 h 50 v 40 a 25 25 0 0 1 -50 0 Z" fill="#FFFFFF" stroke="#000" strokeWidth="1.5" />
          <path d="M 223,172 h 34 v 28 a 17 17 0 0 1 -34 0 Z" fill="#CC0000" />
        </svg>
      );
    }

    // França
    if (norm === 'FR' || norm.includes('FRANÇA') || norm.includes('FRANCE')) {
      return (
        <svg
          viewBox="0 0 600 400"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="400" fill="#002654" />
          <rect x="200" width="200" height="400" fill="#FFFFFF" />
          <rect x="400" width="200" height="400" fill="#ED2939" />
        </svg>
      );
    }

    // Canadá
    if (norm === 'CA' || norm.includes('CANADÁ') || norm.includes('CANADA')) {
      return (
        <svg
          viewBox="0 0 600 400"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="150" height="400" fill="#D80027" />
          <rect x="150" width="300" height="400" fill="#FFFFFF" />
          <rect x="450" width="150" height="400" fill="#D80027" />
          <polygon
            points="300,130 312,185 348,175 328,210 355,230 315,242 305,275 295,275 285,242 245,230 272,210 252,175 288,185"
            fill="#D80027"
          />
        </svg>
      );
    }

    // Brasil
    if (norm === 'BR' || norm.includes('BRASIL') || norm.includes('BRAZIL')) {
      return (
        <svg
          viewBox="0 0 600 400"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="600" height="400" fill="#009739" />
          <polygon points="300,45 545,200 300,355 55,200" fill="#FEDF00" />
          <circle cx="300" cy="200" r="68" fill="#002776" />
        </svg>
      );
    }

    // Europa / Espaço Schengen / Alemanha
    if (
      norm === 'EU' ||
      norm === 'DE' ||
      norm.includes('EUROPA') ||
      norm.includes('SCHENGEN')
    ) {
      return (
        <svg
          viewBox="0 0 600 400"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="600" height="400" fill="#003399" />
          <circle cx="300" cy="200" r="55" fill="none" stroke="#FFCC00" strokeWidth="9" strokeDasharray="1 28" />
        </svg>
      );
    }

    // Angola
    if (norm === 'AO' || norm.includes('ANGOLA')) {
      return (
        <svg
          viewBox="0 0 600 400"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="600" height="200" fill="#CC0000" />
          <rect y="200" width="600" height="200" fill="#000000" />
          <circle cx="300" cy="200" r="45" fill="none" stroke="#FFCC00" strokeWidth="12" strokeDasharray="180 30" />
        </svg>
      );
    }

    // Fallback text badge
    return (
      <span className="text-[10px] font-mono font-bold text-slate-700">
        {norm.slice(0, 2)}
      </span>
    );
  };

  return (
    <span className="inline-flex items-center gap-1.5 shrink-0 align-middle">
      <span
        className={`inline-flex items-center justify-center shrink-0 overflow-hidden rounded-xs border border-slate-300 bg-slate-100 shadow-2xs ${className}`}
        aria-hidden="true"
      >
        {renderFlag()}
      </span>
      {showLabel && (
        <span className="text-xs font-bold text-slate-800 uppercase font-mono">
          {norm.slice(0, 2)}
        </span>
      )}
    </span>
  );
};
