import React, { useState } from 'react';
import { Search, CheckCircle2, Clock, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
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

    // Check user tickets or sample tickets
    const found = userTickets.find(
      (t) =>
        t.ticketNumber.toUpperCase() === query ||
        t.holderBI.toUpperCase() === query ||
        t.ticketNumber.replace(/-/g, '').toUpperCase() === query.replace(/-/g, '')
    );

    if (found) {
      setResultTicket(found);
    } else if (query.includes('89104') || query.includes('006841209LA048')) {
      setResultTicket({
        ticketNumber: 'LVA-2026-89104',
        drawId: 'draw-pt-cplp',
        drawTitle: 'Sorteio Oficial Portugal: Vistos de Trabalho & Estudo',
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

  return (
    <section id="verificador" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Consulta */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
            Consulta Pública Centralizada
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Verificar Estado do Bilhete ou BI
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Consulte a validação da sua inscrição diária gratuita ou dos seus bilhetes adquiridos através da base de dados oficial da LVA.
          </p>
        </div>

        {/* Input Largo e Elegante com Fundo Branco */}
        <form onSubmit={handleSearch} className="bg-white border border-slate-200 rounded-2xl p-3 sm:p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Introduza o número de BI ou código do bilhete (ex: 006841209LA048)"
                className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-400 font-mono uppercase"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-black text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 rounded-xl transition-colors cursor-pointer whitespace-nowrap uppercase tracking-wider shrink-0 shadow-sm"
            >
              Consultar Bilhete
            </button>
          </div>
        </form>

        {/* Área de Resultados Limpa */}
        {searched && (
          <div className="mt-6">
            {resultTicket ? (
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all text-slate-900">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        resultTicket.status === 'won'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {resultTicket.status === 'won' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono font-bold text-base sm:text-lg text-slate-950">
                          {resultTicket.ticketNumber}
                        </span>
                        {resultTicket.status === 'won' ? (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                            Contemplado no Sorteio
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                            Inscrição Ativa
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
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Ver Dossiê do Bilhete</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-xs border-b border-slate-100">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Titular:</span>
                    <span className="font-semibold text-slate-900">{resultTicket.holderName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Bilhete de Identidade:</span>
                    <span className="font-mono font-semibold text-slate-900">{resultTicket.holderBI}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Província:</span>
                    <span className="font-semibold text-slate-900">{resultTicket.holderProvince}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Tipo de Bilhete:</span>
                    <span className="font-semibold text-slate-900">
                      {resultTicket.isFreeTicket ? 'Diário Gratuito' : 'Extra Pago'}
                    </span>
                  </div>
                </div>

                {resultTicket.status === 'won' ? (
                  <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Parabéns! O seu visto foi contemplado com financiamento a 100%. A equipa jurídica entrará em contacto para tramitação do dossiê.
                    </span>
                  </div>
                ) : (
                  <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs text-slate-700 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Bilhete validado e devidamente registado nos servidores oficiais da LVA para o próximo sorteio auditado.
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-2 shadow-sm">
                <AlertCircle className="w-7 h-7 text-amber-500 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">Nenhum registo encontrado</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Não foi encontrado nenhum bilhete ativo com o código ou BI inserido. Verifique os dados ou registe o seu bilhete gratuito de hoje.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
