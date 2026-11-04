import React from 'react';
import { UserTicket } from '../types/lottery';
import { X, Ticket, Trophy, Clock, ArrowRight } from 'lucide-react';

interface MyTicketsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tickets: UserTicket[];
  onSelectTicket: (ticket: UserTicket) => void;
  onOpenFreeTicket: () => void;
}

export const MyTicketsModal: React.FC<MyTicketsModalProps> = ({
  isOpen,
  onClose,
  tickets,
  onSelectTicket,
  onOpenFreeTicket,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0E357A] border border-[#2552A1] flex items-center justify-center shrink-0">
              <img src="/favicon.svg" alt="LVA" className="w-5 h-5 rounded-sm shrink-0" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Meus Bilhetes de Lotaria</h3>
              <p className="text-xs text-slate-400">
                {tickets.length} bilhete{tickets.length !== 1 ? 's' : ''} registado{tickets.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tickets List */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {tickets.length === 0 ? (
            <div className="text-center py-8 space-y-3">
              <Ticket className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">Ainda não tem bilhetes emitidos</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Todos os angolanos têm direito a 1 bilhete grátis diário com o seu BI.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenFreeTicket();
                }}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer"
              >
                <Ticket className="w-3.5 h-3.5" />
                <span>Emitir Meu Bilhete Grátis Agora</span>
              </button>
            </div>
          ) : (
            tickets.map((t) => (
              <div
                key={t.ticketNumber}
                onClick={() => {
                  onSelectTicket(t);
                  onClose();
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer hover:shadow-sm flex items-center justify-between ${
                  t.status === 'won'
                    ? 'bg-emerald-50/80 border-emerald-300'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm text-slate-900">
                      {t.ticketNumber}
                    </span>
                    {t.status === 'won' ? (
                      <span className="text-[10px] font-black uppercase text-emerald-800 bg-emerald-200 px-2 py-0.5 rounded">
                        PREMIADO!
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                        Em Jogo
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-slate-700">{t.destination}</p>
                  <p className="text-[11px] text-slate-400 font-mono">BI: {t.holderBI}</p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-amber-700">
                  <span>Abrir</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenFreeTicket();
            }}
            className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 cursor-pointer"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>Adicionar Novo Bilhete Grátis</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
