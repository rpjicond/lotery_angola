import React from 'react';

interface NotificationProps {
  type: 'info' | 'success' | 'alert';
  message: string;
  time: string;
}

export const Notification: React.FC<NotificationProps> = ({ type, message, time }) => {
  const dotColor = {
    info: 'bg-slate-400',
    success: 'bg-emerald-500',
    alert: 'bg-rose-500',
  };

  return (
    <div className="flex items-start gap-3 py-2.5 px-3 rounded-lg hover:bg-[#1E293B]/40 transition-colors border-b border-[#1F2937]/50 last:border-b-0">
      <div className="mt-1.5 shrink-0">
        <span className={`block w-1.5 h-1.5 rounded-full ${dotColor[type]}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-300 leading-snug">{message}</p>
        <span className="text-[10px] text-slate-500 font-mono mt-0.5 block">{time}</span>
      </div>
    </div>
  );
};
