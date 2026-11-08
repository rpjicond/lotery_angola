import React, { useState } from 'react';
import {
  ArrowLeft,
  Ticket,
  Printer,
  Share2,
  Trophy,
  Clock,
  ShieldCheck,
  Plus,
  ExternalLink,
  Search,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { UserTicket } from '../types/lottery';
import { CountryFlag } from './CountryFlag';
import { Container } from './Container';

interface MyTicketsPageProps {
  tickets: UserTicket[];
  onBackToHome: () => void;
  onGoToPurchase: () => void;
  onSelectTicketToView: (ticket: UserTicket) => void;
}

export const MyTicketsPage: React.FC<MyTicketsPageProps> = ({
  tickets,
  onBackToHome,
  onGoToPurchase,
  onSelectTicketToView,
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'won'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTickets = tickets.filter((t) => {
    const matchesFilter =
      filter === 'all' ? true : filter === 'won' ? t.status === 'won' : t.status === 'pending';
    const matchesSearch =
      t.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.holderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.holderBI.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.destination.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const wonCount = tickets.filter((t) => t.status === 'won').length;
  const freeCount = tickets.filter((t) => t.isFreeTicket).length;
  const paidCount = tickets.filter((t) => !t.isFreeTicket).length;

  const handlePrintTicket = (t: UserTicket) => {
    window.print();
  };

  const handleShareWhatsApp = (t: UserTicket) => {
    const text = encodeURIComponent(
      `O meu Bilhete Oficial da Lotaria de Vistos Angola (LVA) é o número ${t.ticketNumber} (${t.destination})! Concorra você também no portal oficial.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Header Bar */}
      <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-18">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors py-2 px-3 rounded-xl hover:bg-slate-100 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-amber-600" />
              <span>Voltar à Página Principal</span>
            </button>

            {/* Title / Badge */}
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                Os Meus Bilhetes Registados
              </span>
              <span className="px-2 py-0.5 rounded-full text-xs font-mono font-black bg-amber-400 text-slate-950">
                {tickets.length}
              </span>
            </div>

            <button
              onClick={onGoToPurchase}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-2xs"
            >
              <Plus className="w-4 h-4" />
              <span>Adquirir Mais Bilhetes</span>
            </button>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <Container>
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Header Description */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                  Registo Oficial de Apostas Cidadãs
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                  Carteira Oficial de Bilhetes · LVA
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Todos os seus bilhetes diários gratuitos e extras vinculados ao seu Bilhete de Identidade.
                </p>
              </div>

              {/* Summary Stats Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-center">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Total</span>
                  <span className="text-lg font-black text-slate-900 font-mono">{tickets.length}</span>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-center">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Grátis (BI)</span>
                  <span className="text-lg font-black text-emerald-600 font-mono">{freeCount}</span>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-center">
                  <span className="text-[10px] text-slate-500 block uppercase font-bold">Extras Pagos</span>
                  <span className="text-lg font-black text-amber-600 font-mono">{paidCount}</span>
                </div>
              </div>
            </div>

            {/* Search and Filters Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs">
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Pesquisar por número, titular ou BI..."
                  className="w-full text-xs pl-9.5 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filter === 'all'
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Todos ({tickets.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('pending')}
                  className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filter === 'pending'
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Em Sorteio ({tickets.length - wonCount})
                </button>
                {wonCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setFilter('won')}
                    className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      filter === 'won'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Premiados ({wonCount})
                  </button>
                )}
              </div>
            </div>

            {/* Tickets Grid */}
            {filteredTickets.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
                  <Ticket className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Nenhum bilhete encontrado</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {searchTerm
                    ? 'Nenhum resultado corresponde à sua pesquisa.'
                    : 'Ainda não registou bilhetes com este BI. Todos os cidadãos angolanos têm direito a 1 bilhete diário grátis.'}
                </p>
                <button
                  onClick={onGoToPurchase}
                  className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Emitir Bilhete Agora</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTickets.map((ticket) => {
                  const isWon = ticket.status === 'won';
                  return (
                    <div
                      key={ticket.ticketNumber}
                      className={`bg-white border-2 rounded-2xl p-5 shadow-xs transition-all hover:shadow-md space-y-4 ${
                        isWon ? 'border-emerald-400 bg-emerald-50/20' : 'border-slate-200'
                      }`}
                    >
                      {/* Top Header of Ticket */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <CountryFlag
                            code={ticket.destination.includes('França') ? 'FR' : 'PT'}
                            className="w-7 h-5 rounded"
                          />
                          <div>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                              {ticket.seatCode}
                            </span>
                            <h3 className="text-sm font-bold text-slate-900 leading-snug">
                              {ticket.destination}
                            </h3>
                          </div>
                        </div>

                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                            isWon
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : 'bg-amber-100 text-amber-900 border border-amber-300'
                          }`}
                        >
                          {isWon ? 'Contemplado!' : 'Ativo no Sorteio'}
                        </span>
                      </div>

                      {/* Ticket Number Hero Badge */}
                      <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase font-semibold block">Número Oficial</span>
                          <span className="font-mono text-base font-black text-slate-900 tracking-wider">
                            {ticket.ticketNumber}
                          </span>
                        </div>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                          {ticket.isFreeTicket ? 'Cidadania Grátis' : 'Extra Pago'}
                        </span>
                      </div>

                      {/* Participant details */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase">Titular</span>
                          <strong className="text-slate-900 truncate block">{ticket.holderName}</strong>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase">BI</span>
                          <span className="font-mono text-slate-700">{ticket.holderBI}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase">Província</span>
                          <span className="text-slate-700">{ticket.holderProvince}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase">Data Emissão</span>
                          <span className="text-slate-700">{ticket.purchaseDate}</span>
                        </div>
                      </div>

                      {/* Hash Preview */}
                      <div className="text-[10px] font-mono text-slate-400 truncate bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                        Hash RNG: {ticket.hash}
                      </div>

                      {/* Action buttons */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                        <button
                          onClick={() => onSelectTicketToView(ticket)}
                          className="flex-1 py-2 px-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer text-center"
                        >
                          Ver Comprovativo
                        </button>
                        <button
                          onClick={() => handlePrintTicket(ticket)}
                          className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                          title="Imprimir"
                        >
                          <Printer className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleShareWhatsApp(ticket)}
                          className="p-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors cursor-pointer"
                          title="Partilhar no WhatsApp"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
};
