import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface DrawCountdownProps {
  targetTimestamp: number;
  label?: string;
  className?: string;
}

export const DrawCountdown: React.FC<DrawCountdownProps> = ({
  targetTimestamp,
  label = 'Tempo Restante:',
  className = '',
}) => {
  const calculateTime = () => {
    const diff = Math.max(0, targetTimestamp - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTimestamp]);

  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <div className={`p-3 rounded-xl bg-amber-50/90 border border-amber-200/90 flex flex-wrap items-center justify-between gap-2 transition-all duration-200 ease-in-out ${className}`}>
      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
        <Clock className="w-3.5 h-3.5 text-amber-600 animate-pulse shrink-0" />
        <span>{label}</span>
      </div>
      <div className="flex items-center gap-1 font-mono font-black text-amber-950 text-xs sm:text-sm tracking-tight tabular-nums select-none">
        <span className="bg-white px-2 py-0.5 rounded-lg border border-amber-200 shadow-2xs">
          {pad(timeLeft.days)}d
        </span>
        <span className="text-amber-500 font-bold">:</span>
        <span className="bg-white px-2 py-0.5 rounded-lg border border-amber-200 shadow-2xs">
          {pad(timeLeft.hours)}h
        </span>
        <span className="text-amber-500 font-bold">:</span>
        <span className="bg-white px-2 py-0.5 rounded-lg border border-amber-200 shadow-2xs">
          {pad(timeLeft.minutes)}m
        </span>
        <span className="text-amber-500 font-bold">:</span>
        <span className="bg-white px-2 py-0.5 rounded-lg border border-amber-200 shadow-2xs text-amber-700">
          {pad(timeLeft.seconds)}s
        </span>
      </div>
    </div>
  );
};
