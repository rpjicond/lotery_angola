import React from 'react';
import { UserTicket } from '../types/lottery';
import { X, Printer, Share2, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

interface DigitalTicketViewProps {
  ticket: UserTicket | null;
  onClose: () => void;
}

export const DigitalTicketView: React.FC<DigitalTicketViewProps> = ({
  ticket,
  onClose,
}) => {
  if (!ticket) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Concorri na Lotaria de Vistos Angola (LVA) com o Bilhete Oficial ${ticket.ticketNumber} para ganhar tratamento de visto gratuito para ${ticket.destination}! Participe você também com o seu BI.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top actions bar */}
        <div className="no-print p-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Bilhete Digital Homologado</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Imprimir ou Salvar em PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleShareWhatsApp}
              className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
              title="Partilhar no WhatsApp"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Ticket Area */}
        <div className="p-3.5 sm:p-6 sm:p-8 bg-gradient-to-b from-amber-50/60 to-white text-slate-900 print:p-0">
          <div className="border-2 border-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden bg-white shadow-sm">
            {/* Watermark badge */}
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between border-b-2 border-slate-900 pb-3 mb-3 sm:mb-4 gap-2">
              <div>
                <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500">
                  REPÚBLICA DE ANGOLA
                </p>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight font-display leading-tight">
                  LVA <span className="text-amber-600 font-bold text-xs sm:text-base">– Lotaria de Vistos Angola</span>
                </h3>
                <p className="text-[9px] sm:text-[10px] italic font-semibold text-amber-600">
                  O Seu Passaporte Para o Mundo!
                </p>
              </div>

              <div className="text-left xs:text-right">
                <span
                  className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border inline-block ${
                    ticket.status === 'won'
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-amber-100 text-amber-800 border-amber-300'
                  }`}
                >
                  {ticket.status === 'won' ? 'PREMIADO / CONTEMPLADO' : 'REGISTADO NO SORTEIO'}
                </span>
                <p className="text-[9px] sm:text-[10px] font-mono text-slate-400 mt-0.5 sm:mt-1">
                  Código: {ticket.seatCode}
                </p>
              </div>
            </div>

            {/* Ticket Big Number */}
            <div className="text-center py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl my-3 sm:my-4">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Número Oficial do Bilhete
              </span>
              <p className="text-2xl xs:text-3xl sm:text-4xl font-mono font-black text-slate-950 tracking-wider break-all">
                {ticket.ticketNumber}
              </p>
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 mt-1 block">
                {ticket.isFreeTicket ? '★ Bilhete de Cidadania Gratuito' : '★ Bilhete Adicional Pago'}
              </span>
            </div>

            {/* Ticket Info Grid */}
            <div className="space-y-2.5 sm:space-y-3 py-1 sm:py-2 text-xs">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 border-b border-slate-100 pb-2.5 sm:pb-3">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase">Titular Registado:</span>
                  <p className="font-bold text-slate-900 truncate">{ticket.holderName}</p>
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase">Bilhete de Identidade:</span>
                  <p className="font-mono font-bold text-slate-900">{ticket.holderBI}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 border-b border-slate-100 pb-2.5 sm:pb-3">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase">Destino do Visto:</span>
                  <p className="font-bold text-slate-800">{ticket.destination}</p>
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase">Província / Telefone:</span>
                  <p className="font-semibold text-slate-700">{ticket.holderProvince} · {ticket.holderPhone}</p>
                </div>
              </div>

              <div>
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase">Sorteio Associado:</span>
                <p className="font-semibold text-slate-800 text-[10px] sm:text-[11px] leading-snug">{ticket.drawTitle}</p>
              </div>
            </div>

            {/* Barcode & Security stamp */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t-2 border-dashed border-slate-200 flex items-center justify-between gap-2 overflow-hidden">
              {/* CSS Barcode simulation */}
              <div className="space-y-1 overflow-hidden shrink-0">
                <div className="flex items-center gap-[1.5px] sm:gap-[2px] h-7 sm:h-9">
                  {[2, 3, 1, 2, 2, 4, 1, 2, 3, 2, 1, 3, 2, 1, 2, 4, 2, 1, 2, 3, 2, 1, 2].map((width, i) => (
                    <div
                      key={i}
                      className="bg-slate-900 h-full"
                      style={{ width: `${width}px` }}
                    />
                  ))}
                </div>
                <p className="text-[8px] sm:text-[9px] font-mono text-slate-400 tracking-wider text-center">
                  {ticket.ticketNumber}
                </p>
              </div>

              <div className="text-right shrink-0">
                <div className="w-9 h-9 sm:w-11 sm:h-11 bg-slate-900 text-white rounded-lg flex items-center justify-center font-mono text-[10px] sm:text-xs font-black mx-auto">
                  QR
                </div>
                <p className="text-[8px] sm:text-[9px] font-mono text-slate-400 mt-0.5">Assinado</p>
              </div>
            </div>

            <div className="mt-2 text-[8px] sm:text-[9px] font-mono text-slate-400 break-all text-center">
              SHA256: {ticket.hash}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="no-print p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={handleShareWhatsApp}
            className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Partilhar no WhatsApp</span>
          </button>

          <button
            onClick={handlePrint}
            className="py-2.5 px-4 text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir</span>
          </button>
        </div>
      </div>
    </div>
  );
};
