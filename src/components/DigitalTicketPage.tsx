import React from 'react';
import { UserTicket } from '../types/lottery';
import {
  ArrowLeft,
  Printer,
  Share2,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Award,
  Hash
} from 'lucide-react';
import { CountryFlag } from './CountryFlag';
import { Container } from './Container';

interface DigitalTicketPageProps {
  ticket: UserTicket;
  onBack: () => void;
  onGoToHome: () => void;
}

export const DigitalTicketPage: React.FC<DigitalTicketPageProps> = ({
  ticket,
  onBack,
  onGoToHome,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Concorri na Lotaria de Vistos Angola (LVA) com o Bilhete Oficial ${ticket.ticketNumber} para ganhar tratamento de visto gratuito para ${ticket.destination}! Participe você também com o seu BI.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const isWon = ticket.status === 'won';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-18">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors py-2 px-3 rounded-xl hover:bg-slate-100 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-amber-600" />
              <span>Voltar aos Bilhetes</span>
            </button>

            <span className="font-extrabold text-slate-900 text-sm hidden sm:inline">
              Comprovativo Digital Oficial · LVA
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="py-2 px-3.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Imprimir"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Imprimir</span>
              </button>
              <button
                onClick={handleShareWhatsApp}
                className="py-2 px-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                title="WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Ticket Certificate */}
      <main className="flex-1 py-10 sm:py-16">
        <Container>
          <div className="max-w-xl mx-auto space-y-6">
            <div className="bg-white border-2 border-slate-300 rounded-3xl overflow-hidden shadow-2xl print:shadow-none print:border-slate-800">
              {/* Ticket Top Ribbon */}
              <div className="bg-[#0B2C69] text-white p-6 sm:p-8 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <CountryFlag
                    code={ticket.destination.includes('França') ? 'FR' : 'PT'}
                    className="w-10 h-7 rounded"
                  />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-semibold block">
                      Certificado de Participação Oficial
                    </span>
                    <h1 className="text-base sm:text-lg font-black text-white leading-tight">
                      {ticket.drawTitle}
                    </h1>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase text-slate-300 block font-medium">Bilhete Nº</span>
                  <span className="font-mono text-lg sm:text-xl font-black text-[#FACC15] tracking-wider">
                    {ticket.ticketNumber}
                  </span>
                </div>
              </div>

              {/* Perforation line */}
              <div className="relative flex items-center justify-between bg-slate-100 py-2 px-4 border-y border-dashed border-slate-300">
                <div className="w-4 h-4 rounded-full bg-slate-50 -ml-6 border-r border-slate-300" />
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest text-center">
                  CÓDIGO DE ASSENTO: {ticket.seatCode} · AUDITADO ISJ
                </span>
                <div className="w-4 h-4 rounded-full bg-slate-50 -mr-6 border-l border-slate-300" />
              </div>

              {/* Ticket Content */}
              <div className="p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Titular</span>
                    <strong className="text-sm font-bold text-slate-900 block mt-0.5">{ticket.holderName}</strong>
                    <span className="text-xs font-mono text-slate-600">BI: {ticket.holderBI}</span>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Destino</span>
                    <strong className="text-sm font-bold text-slate-900 block mt-0.5">{ticket.destination}</strong>
                    <span className="text-xs text-slate-600">Província: {ticket.holderProvince}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="p-3 border border-slate-100 rounded-lg">
                    <span className="text-[10px] text-slate-400 block uppercase">Modalidade</span>
                    <strong className="text-slate-800">{ticket.isFreeTicket ? 'Cidadania Grátis' : 'Extra Pago'}</strong>
                  </div>
                  <div className="p-3 border border-slate-100 rounded-lg">
                    <span className="text-[10px] text-slate-400 block uppercase">Data Emissão</span>
                    <strong className="text-slate-800">{ticket.purchaseDate}</strong>
                  </div>
                  <div className="p-3 border border-slate-100 rounded-lg">
                    <span className="text-[10px] text-slate-400 block uppercase">Estado</span>
                    <strong className={isWon ? 'text-emerald-600 font-black' : 'text-amber-700'}>
                      {isWon ? 'PREMIADO!' : 'Em Sorteio'}
                    </strong>
                  </div>
                </div>

                {/* Cryptographic hash */}
                <div className="p-3.5 bg-slate-900 text-slate-200 rounded-xl font-mono text-[10px] space-y-1">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Semente Criptográfica Imutável:</span>
                    <span className="text-emerald-400 font-bold">NIST SP 800-90A</span>
                  </div>
                  <p className="break-all text-slate-300">{ticket.hash}</p>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-3 border-t border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Certificado digital com validade legal em todo o território nacional. Em caso de contemplação, a comissão da LVA entrará em contacto através do número de telefone registado.
                  </span>
                </div>
              </div>
            </div>

            <div className="no-print text-center pt-2">
              <button
                onClick={onGoToHome}
                className="text-xs font-bold text-slate-600 hover:text-slate-950 underline cursor-pointer"
              >
                Voltar à Página Principal
              </button>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};
