import React from 'react';

export interface PaymentLogoProps {
  type: 'mcx' | 'ref' | 'unitel' | 'visa' | 'mastercard';
  className?: string;
}

export const PaymentLogo: React.FC<PaymentLogoProps> = ({ type, className = 'h-14 w-auto' }) => {
  // Multicaixa Express
  if (type === 'mcx') {
    return (
      <svg
        viewBox="0 0 400 160"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Multicaixa Express"
      >
        <rect width="400" height="160" rx="20" fill="#F26522" />
        
        <g transform="translate(140, 18)">
          {/* Flower / Star composed of Multicaixa Cards */}
          <g transform="translate(60, 48)">
            <circle cx="0" cy="0" r="16" fill="#F26522" stroke="#FFFFFF" strokeWidth="4" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
              <g key={idx} transform={`rotate(${angle}) translate(0, -26)`}>
                <rect x="-8" y="-12" width="16" height="24" rx="3" fill="#D0021B" stroke="#FFFFFF" strokeWidth="2.5" />
                <line x1="-5" y1="-5" x2="5" y2="-5" stroke="#FFFFFF" strokeWidth="2" />
              </g>
            ))}
          </g>

          <text
            x="60"
            y="120"
            fontFamily="'Plus Jakarta Sans', 'Segoe UI', sans-serif"
            fontWeight="900"
            fontSize="36"
            fill="#FFFFFF"
            textAnchor="middle"
            letterSpacing="2"
          >
            express
          </text>
        </g>
      </svg>
    );
  }

  // Referência Bancária Multicaixa
  if (type === 'ref') {
    return (
      <svg
        viewBox="0 0 400 160"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Referência Bancária Multicaixa"
      >
        <rect width="400" height="160" rx="20" fill="#071F4A" />
        <rect x="6" y="6" width="388" height="148" rx="16" fill="none" stroke="#FBBF24" strokeWidth="3" strokeDasharray="10 5" />

        <g transform="translate(30, 26)">
          <rect x="0" y="8" width="88" height="88" rx="14" fill="#FBBF24" />
          <path d="M 44,22 L 20,38 L 68,38 Z" fill="#071F4A" />
          <rect x="24" y="42" width="8" height="24" fill="#071F4A" rx="1" />
          <rect x="36" y="42" width="8" height="24" fill="#071F4A" rx="1" />
          <rect x="48" y="42" width="8" height="24" fill="#071F4A" rx="1" />
          <rect x="60" y="42" width="8" height="24" fill="#071F4A" rx="1" />
          <rect x="20" y="70" width="52" height="6" rx="2" fill="#071F4A" />

          <text
            x="110"
            y="42"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            fontSize="26"
            fill="#FFFFFF"
            letterSpacing="1"
          >
            REFERÊNCIA
          </text>
          <text
            x="110"
            y="72"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            fontSize="24"
            fill="#FBBF24"
            letterSpacing="1"
          >
            BANCÁRIA ATM
          </text>
          <text
            x="110"
            y="96"
            fontFamily="monospace"
            fontWeight="700"
            fontSize="14"
            fill="#93C5FD"
            letterSpacing="2"
          >
            MULTICAIXA EMIS
          </text>
        </g>
      </svg>
    );
  }

  // Unitel Money
  if (type === 'unitel') {
    return (
      <svg
        viewBox="0 0 400 160"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Unitel Money"
      >
        <rect width="400" height="160" rx="20" fill="#4C126B" />

        <g transform="translate(35, 25)">
          <text
            x="15"
            y="68"
            fontFamily="'Plus Jakarta Sans', Impact, sans-serif"
            fontWeight="900"
            fontSize="64"
            fill="#FFFFFF"
            letterSpacing="1"
          >
            MO<tspan fill="#F26522">N</tspan>EY
          </text>

          <g transform="translate(255, 0)">
            <rect x="0" y="0" width="62" height="108" rx="10" fill="#F26522" stroke="#FFFFFF" strokeWidth="3" />
            <rect x="8" y="10" width="46" height="30" rx="4" fill="#FFFFFF" />
            <rect x="10" y="48" width="10" height="10" rx="2" fill="#FFFFFF" />
            <rect x="26" y="48" width="10" height="10" rx="2" fill="#FFFFFF" />
            <rect x="42" y="48" width="10" height="10" rx="2" fill="#FFFFFF" />
            <rect x="10" y="64" width="10" height="10" rx="2" fill="#FFFFFF" />
            <rect x="26" y="64" width="10" height="10" rx="2" fill="#FFFFFF" />
            <rect x="42" y="64" width="10" height="10" rx="2" fill="#FFFFFF" />
            <rect x="10" y="80" width="10" height="10" rx="2" fill="#FFFFFF" />
            <rect x="26" y="80" width="10" height="10" rx="2" fill="#FFFFFF" />
            <rect x="42" y="80" width="10" height="10" rx="2" fill="#FFFFFF" />
          </g>

          <text
            x="18"
            y="98"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            fontSize="16"
            fill="#F26522"
            letterSpacing="1"
          >
            BY <tspan fill="#FFFFFF">UNITEL</tspan>
          </text>
        </g>
      </svg>
    );
  }

  // Visa
  if (type === 'visa') {
    return (
      <svg
        viewBox="0 0 400 160"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Visa"
      >
        <rect width="400" height="160" rx="20" fill="#0057B8" />
        <text
          x="200"
          y="108"
          fontFamily="'Plus Jakarta Sans', 'Arial Black', sans-serif"
          fontStyle="italic"
          fontWeight="900"
          fontSize="82"
          fill="#FFFFFF"
          textAnchor="middle"
          letterSpacing="-2"
        >
          VISA
        </text>
        <polygon points="105,48 128,48 116,92" fill="#FAA61A" />
      </svg>
    );
  }

  // Mastercard
  return (
    <svg
      viewBox="0 0 400 160"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Mastercard"
    >
      <rect width="400" height="160" rx="20" fill="#111827" />
      <g transform="translate(130, 30)">
        <circle cx="50" cy="50" r="44" fill="#EB001B" />
        <circle cx="90" cy="50" r="44" fill="#F79E1B" fillOpacity="0.9" />
      </g>
      <text
        x="200"
        y="140"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="800"
        fontSize="16"
        fill="#FFFFFF"
        textAnchor="middle"
        letterSpacing="3"
      >
        mastercard
      </text>
    </svg>
  );
};
