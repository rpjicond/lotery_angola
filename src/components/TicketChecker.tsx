import React, { useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, Clock, AlertCircle, Ticket, Trophy, ArrowRight } from 'lucide-react';
import { UserTicket } from '../types/lottery';

interface TicketCheckerProps {
  userTickets: UserTicket[];
  onSelectTicketToView: (ticket: UserTicket) => void;
}

export const TicketChecker: React.FC<TicketCheckerProps> = ({
  userTickets,
  onSelectTicketToView,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [resultTicket, setResultTicket] = useState<UserTicket | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.trim().toUpperCase();

    // Check against user tickets or mock winning tickets
    const found = userTickets.find(
      (t) =>
        t.ticketNumber.toUpperCase() === query ||
        t.holderBI.toUpperCase() === query ||
        t.ticketNumber.replace(/-/g, '').toUpperCase() === query.replace(/-/g, '')
    );

    if (found) {
      setResultTicket(found);
    } else if (query.includes('89104') || query.includes('006841209LA048')) {
      // Mock winner
      setResultTicket({
        ticketNumber: 'LVA-2026-89104',
        drawId: 'draw-pt-cplp',
        drawTitle: 'Grande Sorteio Portugal CPLP & Ensino Superior',
        destination: 'Portugal (Lisboa / Porto)',
        holderName: 'Jandira Mateus',
        holderBI: '006841209LA048',
        holderPhone: '+244 923 881 204',
        holderProvince: 'Luanda',
        purchaseDate: '2026-10-20',
        isFreeTicket: true,
        status: 'won',
        hash: '0x8f4c71a392e9bb20314f',
        seatCode: 'PT-LUA-77',
        prizeClaimed: true,
      });
    } else {
      setResultTicket(null);
    }

    setSearched(true);
  };

  const handleFillSample = (code: string) => {
    setSearchQuery(code);
  };

  return (
    <section id="verificador" className="py-12 sm:py-16 bg-[#051330] border-t border-[#0a275f] text-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-[#FBBF24] rounded-full text-xs font-bold mb-2">
            <Ticket className="w-3.5 h-3.5" />
            <span>Consulta Pública de Inscrição · LVA</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FBBF24] tracking-tight font-display">
            Verifique o Estado do Seu Bilhete ou BI
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Introduza o código do seu bilhete (ex: LVA-2026-89104) ou o seu número de Bilhete de Identidade (BI) para consultar o resultado.
          </p>
        </div>

        {/* Search Input Box */}
        <form onSubmit={handleSearch} className="bg-[#081F4A] p-3 sm:p-4 rounded-2xl border border-[#133A7C] shadow-xl">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ex: LVA-2026-89104 ou 006841209LA048"
                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase font-mono"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-950 bg-[#FBBF24] hover:bg-[#F59E0B] rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap uppercase tracking-tight"
            >
              Consultar Bilhete
            </button>
          </div>

          {/* Quick test chips */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-500">
            <span className="font-semibold text-slate-400">Testar exemplos rápidos:</span>
            <button
              type="button"
              onClick={() => handleFillSample('LVA-2026-89104')}
              className="px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[10px] sm:text-[11px] cursor-pointer"
            >
              LVA-2026-89104 (Premiado)
            </button>
            <button
              type="button"
              onClick={() => handleFillSample('LVA-2026-55291')}
              className="px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[10px] sm:text-[11px] cursor-pointer"
            >
              LVA-2026-55291 (Ativo)
            </button>
          </div>
        </form>

        {/* Results Area */}
        {searched && (
          <div className="mt-6 animate-in fade-in duration-300">
            {resultTicket ? (
              <div
                className={`p-6 rounded-2xl border ${
                  resultTicket.status === 'won'
                    ? 'bg-emerald-50/80 border-emerald-300'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    {resultTicket.status === 'won' ? (
                      <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                        <Trophy className="w-6 h-6 fill-current" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-black text-lg text-slate-900">
                          {resultTicket.ticketNumber}
                        </span>
                        {resultTicket.status === 'won' ? (
                          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-200 px-2 py-0.5 rounded">
                            SORTEADO / CONTEMPLADO!
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                            ACTIVO NO PRÓXIMO SORTEIO
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {resultTicket.drawTitle} · {resultTicket.destination}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectTicketToView(resultTicket)}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ver Bilhete Completo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 text-xs text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Titular:</span>
                    <span className="font-semibold">{resultTicket.holderName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Bilhete de Identidade:</span>
                    <span className="font-mono font-semibold">{resultTicket.holderBI}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Província:</span>
                    <span className="font-semibold">{resultTicket.holderProvince}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Tipo de Entrada:</span>
                    <span className="font-semibold">{resultTicket.isFreeTicket ? 'Cidadão Gratuito' : 'Extra Pago'}</span>
                  </div>
                </div>

                {resultTicket.status === 'won' ? (
                  <div className="mt-2 p-4 bg-emerald-100/70 border border-emerald-200 rounded-xl text-xs text-emerald-950 space-y-1">
                    <p className="font-bold flex items-center gap-1.5 text-emerald-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      Parabéns! O seu pacote completo de visto foi 100% contemplado.
                    </p>
                    <p className="text-emerald-800 text-[11px]">
                      A equipa da KambaVisto já registou o seu dossiê. Apresente-se no nosso balcão em Luanda (Talatona) com o original do seu BI ou contacte a nossa linha exclusiva de apoio aos premiados.
                    </p>
                  </div>
                ) : (
                  <div className="mt-2 p-3 bg-slate-100 rounded-xl text-xs text-slate-600 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>O seu bilhete está confirmado e entrará no sorteio desta semana. Boa sorte!</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center space-y-2">
                <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">Nenhum registo encontrado</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Não encontramos nenhum bilhete ativo com o código ou BI pesquisado. Verifique os dados ou emita o seu bilhete gratuito diário agora mesmo.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
