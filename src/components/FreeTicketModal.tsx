import React, { useState } from 'react';
import { LotteryDraw, UserTicket } from '../types/lottery';
import { LOTTERY_DRAWS, PROVINCES_OF_ANGOLA } from '../data/lotteries';
import { X, ShieldCheck, Ticket as TicketIcon, CheckCircle2, AlertCircle } from 'lucide-react';

interface FreeTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDraw?: LotteryDraw | null;
  onTicketGenerated: (ticket: UserTicket) => void;
}

export const FreeTicketModal: React.FC<FreeTicketModalProps> = ({
  isOpen,
  onClose,
  selectedDraw,
  onTicketGenerated,
}) => {
  const [selectedDrawId, setSelectedDrawId] = useState<string>(
    selectedDraw?.id || LOTTERY_DRAWS[0].id
  );
  const [fullName, setFullName] = useState('');
  const [biNumber, setBiNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [province, setProvince] = useState('Luanda');
  const [purpose, setPurpose] = useState('Estudos Superiores / Formação');
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<UserTicket | null>(null);

  // Sync selectedDraw if passed
  React.useEffect(() => {
    if (selectedDraw) {
      setSelectedDrawId(selectedDraw.id);
    }
  }, [selectedDraw]);

  if (!isOpen) return null;

  const currentDraw = LOTTERY_DRAWS.find((d) => d.id === selectedDrawId) || LOTTERY_DRAWS[0];

  const validateBI = (bi: string) => {
    const cleaned = bi.trim().toUpperCase();
    // Angola BI format: 9 digits, 2 letters, 3 digits (14 chars)
    const regex = /^\d{9}[A-Z]{2}\d{3}$/;
    return regex.test(cleaned) || cleaned.length >= 10;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Por favor, introduza o seu nome completo conforme consta no BI.');
      return;
    }

    if (!biNumber.trim()) {
      setErrorMsg('O número do Bilhete de Identidade (BI) é obrigatório.');
      return;
    }

    if (!validateBI(biNumber)) {
      setErrorMsg('Formato de BI angolano inválido. Exemplo correto: 007891234LA042');
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 9) {
      setErrorMsg('Introduza um número de telefone angolano válido (ex: 923 000 000).');
      return;
    }

    if (!agreedTerms) {
      setErrorMsg('Deverá confirmar que as informações prestadas são verdadeiras.');
      return;
    }

    setIsSubmitting(true);

    // Simulate cryptographic ticket emission
    setTimeout(() => {
      const randomFive = Math.floor(10000 + Math.random() * 90000);
      const ticketNum = `LVA-2026-${randomFive}`;
      const randomHash = '0x' + Array.from({ length: 20 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      const seatCode = `${currentDraw.flag.slice(0, 2)}-${province.slice(0, 3).toUpperCase()}-${Math.floor(10 + Math.random() * 89)}`;

      const newTicket: UserTicket = {
        ticketNumber: ticketNum,
        drawId: currentDraw.id,
        drawTitle: currentDraw.title,
        destination: currentDraw.destination,
        holderName: fullName.trim(),
        holderBI: biNumber.trim().toUpperCase(),
        holderPhone: phone.trim(),
        holderProvince: province,
        purchaseDate: new Date().toISOString().split('T')[0],
        isFreeTicket: true,
        status: 'pending',
        hash: randomHash,
        seatCode,
        prizeClaimed: false,
      };

      setGeneratedTicket(newTicket);
      onTicketGenerated(newTicket);
      setIsSubmitting(false);
    }, 700);
  };

  const handleReset = () => {
    setGeneratedTicket(null);
    setFullName('');
    setBiNumber('');
    setPhone('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[92vh] border border-slate-200 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-[#071F4A] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0">
              <TicketIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold leading-tight">LVA · Registo de Bilhete de Visto</h3>
              <p className="text-[11px] sm:text-xs text-slate-300">1 Entrada Diária Gratuita por Cidadão com BI</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
        {/* Success View */}
        {generatedTicket ? (
          <div className="p-4 sm:p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-xl font-extrabold text-slate-900">
                Bilhete Emitido com Sucesso!
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Está oficialmente inscrito na Lotaria de Vistos Angola com tratamento gratuito.
              </p>
            </div>

            {/* Generated Ticket Card Mockup */}
            <div className="p-4 bg-amber-50/80 border-2 border-dashed border-amber-300 rounded-xl text-left space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-900">BILHETE OFICIAL LVA ANGOLA</span>
                <span className="font-black text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded">
                  GRÁTIS
                </span>
              </div>

              <div className="flex items-center justify-between border-y border-amber-200/60 py-2">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase">Número do Bilhete</p>
                  <p className="text-lg font-mono font-black text-slate-900">{generatedTicket.ticketNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 uppercase">Destino</p>
                  <p className="text-xs font-bold text-slate-800">{generatedTicket.destination}</p>
                </div>
              </div>

              <div className="text-xs grid grid-cols-2 gap-2 pt-1 text-slate-700">
                <div>
                  <span className="text-slate-400 block text-[10px]">Titular:</span>
                  <span className="font-semibold truncate block">{generatedTicket.holderName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">BI:</span>
                  <span className="font-mono font-semibold">{generatedTicket.holderBI}</span>
                </div>
              </div>

              <div className="pt-2 text-[10px] font-mono text-slate-400 break-all border-t border-amber-200/50">
                Hash de Segurança: {generatedTicket.hash}
              </div>
            </div>

            <p className="text-xs text-slate-500">
              O sorteio será realizado na data indicada. Caso seja sorteado, será contactado via chamada e WhatsApp no número <span className="font-semibold text-slate-800">{generatedTicket.holderPhone}</span>.
            </p>

            <button
              onClick={handleReset}
              className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              Concluir & Acompanhar Sorteio
            </button>
          </div>
        ) : (
          /* Input Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Select Lottery */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Escolha o Sorteio de Destino
              </label>
              <select
                value={selectedDrawId}
                onChange={(e) => setSelectedDrawId(e.target.value)}
                className="w-full text-xs font-medium border border-slate-300 rounded-xl px-3 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ease-in-out"
              >
                {LOTTERY_DRAWS.map((draw) => (
                  <option key={draw.id} value={draw.id}>
                    {draw.flag} {draw.title} ({draw.destination})
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nome Completo (conforme no BI) *
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: Manuel António da Costa"
                className="w-full text-xs border border-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ease-in-out"
                required
              />
            </div>

            {/* BI & Phone (2 cols) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Número de BI Angolano *
                </label>
                <input
                  type="text"
                  value={biNumber}
                  onChange={(e) => setBiNumber(e.target.value.toUpperCase())}
                  placeholder="007891234LA042"
                  maxLength={14}
                  className="w-full text-xs font-mono border border-slate-300 rounded-xl px-3 py-2.5 uppercase focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ease-in-out"
                  required
                />
                <span className="text-[10px] text-slate-400 mt-0.5 block">14 dígitos (Ex: 004...LA041)</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Telefone (Unitel / Movicel / Africell) *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="923 123 456"
                  className="w-full text-xs border border-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ease-in-out"
                  required
                />
                <span className="text-[10px] text-slate-400 mt-0.5 block">Para contacto se for sorteado</span>
              </div>
            </div>

            {/* Province & Purpose */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Província de Residência *
                </label>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-xl px-3 py-2.5 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ease-in-out"
                >
                  {PROVINCES_OF_ANGOLA.map((prov) => (
                    <option key={prov} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Finalidade da Viagem
                </label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-xl px-3 py-2.5 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ease-in-out"
                >
                  <option value="Estudos Superiores / Formação">Estudos / Universidade</option>
                  <option value="Trabalho / Emprego Especializado">Trabalho / Procura de Emprego</option>
                  <option value="Negócios / Empreendedorismo">Negócios / Conferências</option>
                  <option value="Reagrupamento Familiar">Reagrupamento Familiar</option>
                </select>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                  className="mt-0.5 rounded border-slate-300 text-amber-500 focus:ring-amber-400 transition-all duration-200 ease-in-out"
                />
                <span>
                  Declaro ser cidadão angolano, que os dados correspondem ao meu documento e aceito o regulamento transparente do sorteio.
                </span>
              </label>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-xl transition-all duration-200 ease-in-out hover:scale-[1.01] active:scale-[0.98] shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                {isSubmitting ? (
                  <span>A emitir bilhete oficial...</span>
                ) : (
                  <>
                    <TicketIcon className="w-4 h-4" />
                    <span>Confirmar Inscrição Gratuita</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sem custos ocultos. 100% patrocinado pelo programa de vistos.</span>
            </div>
          </form>
        )}
        </div>
      </div>
    </div>
  );
};
