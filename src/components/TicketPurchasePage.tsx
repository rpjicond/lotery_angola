import React, { useState } from 'react';
import {
  ArrowLeft,
  Ticket as TicketIcon,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Printer,
  Share2,
  Info,
  Lock,
  CreditCard
} from 'lucide-react';
import { LotteryDraw, UserTicket } from '../types/lottery';
import { LOTTERY_DRAWS, PROVINCES_OF_ANGOLA } from '../data/lotteries';
import { CountryFlag } from './CountryFlag';
import { Container } from './Container';
import { PaymentLogo } from './PaymentLogo';

interface TicketPurchasePageProps {
  initialDraw?: LotteryDraw;
  initialMode?: 'buy' | 'free';
  onBackToHome: () => void;
  onTicketCreated: (ticket: UserTicket) => void;
  onGoToMyTickets: () => void;
}

export const TicketPurchasePage: React.FC<TicketPurchasePageProps> = ({
  initialDraw,
  initialMode = 'buy',
  onBackToHome,
  onTicketCreated,
  onGoToMyTickets,
}) => {
  const [mode, setMode] = useState<'buy' | 'free'>(initialMode);
  const [selectedDrawId, setSelectedDrawId] = useState<string>(
    initialDraw?.id || LOTTERY_DRAWS[0].id
  );

  // Form fields
  const [quantity, setQuantity] = useState<number>(1);
  const [customQty, setCustomQty] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [biNumber, setBiNumber] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [province, setProvince] = useState<string>('Luanda');
  const [purpose, setPurpose] = useState<string>('Trabalho e Emprego');
  const [paymentMethod, setPaymentMethod] = useState<'mcx' | 'ref' | 'unitel' | 'visa' | 'mastercard'>('mcx');
  const [agreedTerms, setAgreedTerms] = useState<boolean>(true);

  // Card payment fields (for Visa/Mastercard if selected)
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvc, setCardCvc] = useState<string>('');

  // Processing & State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [generatedTicket, setGeneratedTicket] = useState<UserTicket | null>(null);
  const [copiedRef, setCopiedRef] = useState<boolean>(false);

  const selectedDraw =
    LOTTERY_DRAWS.find((d) => d.id === selectedDrawId) || LOTTERY_DRAWS[0];

  const effectiveQty = customQty ? Math.max(1, parseInt(customQty, 10) || 1) : quantity;
  const unitPrice = selectedDraw.ticketPriceAOA;
  const totalAmountAOA = mode === 'free' ? 0 : unitPrice * effectiveQty;

  const mockEntity = '10542';
  const mockReference = '942 108 329';

  const validateBI = (bi: string) => {
    const cleaned = bi.trim().toUpperCase();
    const regex = /^\d{9}[A-Z]{2}\d{3}$/;
    return regex.test(cleaned) || cleaned.length >= 10;
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(`${mockEntity} - ${mockReference} - ${totalAmountAOA} Kz`);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleShareWhatsApp = (ticket: UserTicket) => {
    const text = encodeURIComponent(
      `Registei o meu bilhete n.º ${ticket.ticketNumber} para o sorteio de vistos da LVA (${ticket.destination}). Inscrição oficial e regulamentada pelo ISJ.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Indique o nome completo tal como consta no Bilhete de Identidade.');
      return;
    }

    if (!biNumber.trim()) {
      setErrorMsg('Indique o número do Bilhete de Identidade.');
      return;
    }

    if (!validateBI(biNumber)) {
      setErrorMsg('Número de BI incorreto. O formato habitual é composto por 9 dígitos, 2 letras e 3 dígitos (ex: 006841209LA048).');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      setErrorMsg('Indique um contacto telefónico válido com pelo menos 9 dígitos.');
      return;
    }

    if (mode === 'buy' && (paymentMethod === 'visa' || paymentMethod === 'mastercard')) {
      if (!cardNumber.replace(/\s/g, '') || cardNumber.length < 15) {
        setErrorMsg('Por favor introduza o número do cartão bancário válido.');
        return;
      }
    }

    if (!agreedTerms) {
      setErrorMsg('É necessário confirmar a veracidade das informações para continuar.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const ticketNum = `LVA-2026-${randomNum}`;
      const randomHash =
        '0x' +
        Array.from({ length: 20 }, () =>
          Math.floor(Math.random() * 16).toString(16)
        ).join('');
      const prefix = mode === 'free' ? selectedDraw.flag.slice(0, 2) : `VIP-${selectedDraw.flag.slice(0, 2)}`;
      const seatCode = `${prefix}-${province.slice(0, 3).toUpperCase()}-${Math.floor(10 + Math.random() * 89)}`;

      const newTicket: UserTicket = {
        ticketNumber: ticketNum,
        drawId: selectedDraw.id,
        drawTitle: selectedDraw.title,
        destination: selectedDraw.destination,
        holderName: fullName.trim(),
        holderBI: biNumber.trim().toUpperCase(),
        holderPhone: phone.trim(),
        holderProvince: province,
        purchaseDate: new Date().toISOString().split('T')[0],
        isFreeTicket: mode === 'free',
        status: 'pending',
        hash: randomHash,
        seatCode,
        prizeClaimed: false,
      };

      setGeneratedTicket(newTicket);
      onTicketCreated(newTicket);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
  };

  const handleResetForAnother = () => {
    setGeneratedTicket(null);
    setCustomQty('');
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Top Header */}
      <header className="no-print bg-white border-b border-slate-200">
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors py-2 px-3.5 rounded-xl hover:bg-slate-100 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-amber-600" />
              <span>Voltar ao Portal</span>
            </button>

            {/* Official Logo Brand */}
            <div className="flex items-center gap-3">
              <div className="relative flex items-center shrink-0 w-8 h-7">
                <div className="absolute left-0 top-0 w-4.5 h-6 bg-[#0B2C69] border border-[#FBBF24] rounded-[2px] rotate-[-9deg]" />
                <div className="absolute left-2.5 top-0 w-4.5 h-6 bg-[#FBBF24] rounded-[2px] rotate-[9deg] flex items-center justify-center">
                  <span className="text-[5px] font-black text-slate-950">AO</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-base font-extrabold text-slate-900 leading-none block">
                  Lotaria de Vistos Angola
                </span>
                <span className="text-xs text-slate-500 font-medium leading-none block mt-0.5">
                  Portal Oficial de Pagamentos & Inscrição
                </span>
              </div>
            </div>

            <button
              onClick={onGoToMyTickets}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 px-4 py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              <TicketIcon className="w-4 h-4" />
              <span>Os Meus Bilhetes</span>
            </button>
          </div>
        </Container>
      </header>

      {/* Main Container */}
      <main className="flex-1 py-10 sm:py-14">
        <Container>
          {generatedTicket ? (
            /* ====================================================================== */
            /* COMPROVATIVO DE EMISSÃO                                                */
            /* ====================================================================== */
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="no-print bg-emerald-50 border border-emerald-300 p-6 rounded-2xl flex items-start gap-4 shadow-2xs">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h1 className="text-xl font-bold text-emerald-950">
                    {generatedTicket.isFreeTicket
                      ? 'Bilhete Gratuito Registado com Sucesso'
                      : 'Pagamento Confirmado e Bilhete Emitido'}
                  </h1>
                  <p className="text-sm text-emerald-900">
                    A sua inscrição foi registada no sorteio oficial. Guarde o número do bilhete para a consulta da extração pública.
                  </p>
                </div>
              </div>

              {/* Bilhete Oficial */}
              <div className="bg-white border border-slate-300 rounded-3xl overflow-hidden shadow-sm">
                <div className="bg-[#0B2C69] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <CountryFlag code={selectedDraw.flag} className="w-9 h-6 rounded" />
                    <div>
                      <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider block">
                        Supervisão Oficial ISJ
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-white">
                        {generatedTicket.drawTitle}
                      </h2>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-300 block">Número do Bilhete</span>
                    <span className="font-mono text-xl sm:text-2xl font-bold text-amber-400">
                      {generatedTicket.ticketNumber}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="text-xs text-slate-500 block">Concorrente</span>
                      <strong className="text-slate-900 block text-base font-semibold mt-0.5">{generatedTicket.holderName}</strong>
                      <span className="text-xs text-slate-600 font-mono">BI: {generatedTicket.holderBI}</span>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <span className="text-xs text-slate-500 block">Destino e Província</span>
                      <strong className="text-slate-900 block text-base font-semibold mt-0.5">{generatedTicket.destination}</strong>
                      <span className="text-xs text-slate-600">Província: {generatedTicket.holderProvince}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs pt-1 border-t border-slate-100">
                    <div>
                      <span className="text-slate-500 block">Tipo:</span>
                      <strong className="text-slate-900">{generatedTicket.isFreeTicket ? 'Gratuito Diário' : 'Bilhete Adicional'}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Data de Emissão:</span>
                      <strong className="text-slate-900">{generatedTicket.purchaseDate}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Estado:</span>
                      <strong className="text-amber-700 font-bold">Inscrito no Sorteio</strong>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-mono text-slate-600 space-y-1">
                    <div className="flex justify-between text-slate-500">
                      <span>Código de Registo: {generatedTicket.seatCode}</span>
                      <span>Assinatura Digital RNG</span>
                    </div>
                    <p className="break-all text-[11px] text-slate-700">{generatedTicket.hash}</p>
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="no-print grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={handlePrint}
                  className="py-3 px-4 text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  <span>Imprimir Comprovativo</span>
                </button>

                <button
                  onClick={() => handleShareWhatsApp(generatedTicket)}
                  className="py-3 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </button>

                <button
                  onClick={onGoToMyTickets}
                  className="py-3 px-4 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <TicketIcon className="w-4 h-4" />
                  <span>Ver Meus Bilhetes</span>
                </button>
              </div>

              <div className="no-print text-center pt-2">
                <button
                  onClick={handleResetForAnother}
                  className="text-sm font-medium text-slate-600 hover:text-slate-950 underline cursor-pointer"
                >
                  Registar outro bilhete
                </button>
              </div>
            </div>
          ) : (
            /* ====================================================================== */
            /* FORMULÁRIO DE INSCRIÇÃO E PORTAL DE PAGAMENTOS                         */
            /* ====================================================================== */
            <div className="max-w-3xl mx-auto space-y-10">
              {/* Apresentação Institucional */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs">
                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-600 uppercase tracking-widest">
                  <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
                  <span>Instituto de Supervisão de Jogos (ISJ) · República de Angola</span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    Portal Oficial de Inscrição & Pagamentos
                  </h1>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                    Selecione a modalidade e preencha os dados do concorrente para efetuar o registo no sorteio público.
                  </p>
                </div>

                {/* Alternador de Modalidade */}
                <div className="pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setMode('buy')}
                      className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                        mode === 'buy'
                          ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                          : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-base font-bold">Comprar Bilhetes Extras</span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                          mode === 'buy' ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-800'
                        }`}>
                          500 Kz / un
                        </span>
                      </div>
                      <p className={`text-xs mt-3 ${mode === 'buy' ? 'text-slate-300' : 'text-slate-500'}`}>
                        Adquira mais participações para aumentar as hipóteses de contemplação.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMode('free')}
                      className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                        mode === 'free'
                          ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                          : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-base font-bold">1 Bilhete Grátis Diário</span>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                          mode === 'free' ? 'bg-emerald-400 text-slate-950' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          0 Kz (com BI)
                        </span>
                      </div>
                      <p className={`text-xs mt-3 ${mode === 'free' ? 'text-slate-300' : 'text-slate-500'}`}>
                        Direito universal para todos os cidadãos com Bilhete de Identidade.
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mensagem de Erro */}
              {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-300 rounded-2xl text-sm text-red-900 font-medium flex items-center gap-3">
                  <Info className="w-5 h-5 text-red-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Formulário Principal */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Seleção do Sorteio */}
                <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 space-y-5">
                  <h2 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100">
                    1. Destino do Sorteio
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {LOTTERY_DRAWS.map((draw) => {
                      const isSelected = selectedDrawId === draw.id;
                      return (
                        <label
                          key={draw.id}
                          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer block ${
                            isSelected
                              ? 'border-amber-400 bg-amber-50/50 shadow-xs ring-1 ring-amber-400/30'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <CountryFlag code={draw.flag} className="w-8 h-5.5 rounded" />
                              <div>
                                <h3 className="text-base font-bold text-slate-900">{draw.title}</h3>
                                <span className="text-xs text-slate-600 block mt-0.5">{draw.destination}</span>
                              </div>
                            </div>
                            <input
                              type="radio"
                              name="drawSelection"
                              checked={isSelected}
                              onChange={() => setSelectedDrawId(draw.id)}
                              className="w-4 h-4 text-amber-500 focus:ring-amber-400 mt-1 cursor-pointer"
                            />
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                            <span>Vagas patrocinadas: <strong className="text-slate-900 font-bold">{draw.totalPrizes} vistos</strong></span>
                            <span className="font-semibold text-slate-800">{draw.nextDrawDate}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Quantidade de Bilhetes (Apenas se for compra) */}
                {mode === 'buy' && (
                  <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <h2 className="text-lg font-bold text-slate-900">
                        2. Quantidade de Bilhetes
                      </h2>
                      <span className="text-xs font-semibold text-slate-500">
                        Preço oficial: 500 Kz / bilhete
                      </span>
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[1, 3, 5, 10].map((qty) => (
                          <button
                            key={qty}
                            type="button"
                            onClick={() => {
                              setQuantity(qty);
                              setCustomQty('');
                            }}
                            className={`py-3.5 px-3 text-center rounded-2xl border-2 transition-all cursor-pointer ${
                              !customQty && quantity === qty
                                ? 'bg-amber-400 text-slate-950 border-amber-500 font-bold shadow-xs'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 font-medium'
                            }`}
                          >
                            <span className="block text-lg font-black">{qty} {qty === 1 ? 'Bilhete' : 'Bilhetes'}</span>
                            <span className="text-xs text-slate-600 font-semibold">{(qty * unitPrice).toLocaleString('pt-AO')} Kz</span>
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-1">
                        <label className="text-xs font-bold text-slate-700">
                          Digitar outra quantidade:
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={customQty}
                          onChange={(e) => setCustomQty(e.target.value)}
                          placeholder="Ex: 15"
                          className="w-28 text-sm font-bold border border-slate-300 rounded-xl px-3.5 py-2 focus:outline-none focus:border-slate-900"
                        />
                        <span className="text-xs text-slate-500">bilhetes</span>
                      </div>

                      {/* Resumo de Valor */}
                      <div className="p-5 bg-slate-900 text-white rounded-2xl flex items-center justify-between shadow-xs">
                        <div>
                          <span className="text-xs text-slate-400 block font-medium">Montante Total a Pagar</span>
                          <span className="text-sm font-semibold text-slate-200 mt-0.5 block">
                            {effectiveQty} {effectiveQty === 1 ? 'bilhete inscrito' : 'bilhetes inscritos'}
                          </span>
                        </div>
                        <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                          {totalAmountAOA.toLocaleString('pt-AO')} Kz
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Dados do Participante */}
                <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h2 className="text-lg font-bold text-slate-900">
                      {mode === 'buy' ? '3. Identificação do Concorrente' : '2. Identificação do Concorrente'}
                    </h2>
                    <span className="text-xs font-semibold text-slate-500">
                      Conforme Bilhete de Identidade
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Nome Completo */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nome completo conforme consta no BI"
                        className="w-full text-sm font-medium border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-white"
                        required
                      />
                    </div>

                    {/* BI */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Número de Bilhete de Identidade (BI) *
                      </label>
                      <input
                        type="text"
                        value={biNumber}
                        onChange={(e) => setBiNumber(e.target.value.toUpperCase())}
                        placeholder="Ex: 006841209LA048"
                        className="w-full text-sm font-mono border border-slate-300 rounded-xl px-4 py-3 uppercase focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-white"
                        required
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Contacto Telefónico / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ex: 923 881 204"
                        className="w-full text-sm font-medium border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-white"
                        required
                      />
                    </div>

                    {/* Província */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Província de Residência *
                      </label>
                      <select
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        className="w-full text-sm font-medium border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-white cursor-pointer"
                      >
                        {PROVINCES_OF_ANGOLA.map((prov) => (
                          <option key={prov} value={prov}>
                            {prov}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Finalidade */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5">
                        Motivo da Candidatura
                      </label>
                      <select
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="w-full text-sm font-medium border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-white cursor-pointer"
                      >
                        <option value="Trabalho e Emprego">Visto de Trabalho em Empresas Parceiras</option>
                        <option value="Estudos Superiores">Visto de Estudos e Universidades</option>
                        <option value="Formação Técnica">Formação Profissional e Estágio</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 4. Ícones e Opções de Pagamento SVG Nativo Nítido */}
                {mode === 'buy' && (
                  <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 space-y-6">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <h2 className="text-lg font-bold text-slate-900">
                        4. Método de Pagamento Bancário
                      </h2>
                      <span className="text-xs font-semibold text-slate-500">
                        Rede Nacional EMIS & Cartões
                      </span>
                    </div>

                    {/* Vector Payment Method Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
                      {/* Multicaixa Express */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('mcx')}
                        className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center justify-between gap-2.5 text-center ${
                          paymentMethod === 'mcx'
                            ? 'border-orange-500 bg-orange-50/50 ring-2 ring-orange-400/30 shadow-xs'
                            : 'border-slate-200 bg-white hover:bg-slate-50'
                        }`}
                      >
                        <PaymentLogo type="mcx" className="h-10 sm:h-12 w-auto max-w-full object-contain" />
                        <span className="text-[11px] font-bold text-slate-900">Express</span>
                      </button>

                      {/* Referência Multicaixa */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('ref')}
                        className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center justify-between gap-2.5 text-center ${
                          paymentMethod === 'ref'
                            ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-400/30 shadow-xs'
                            : 'border-slate-200 bg-white hover:bg-slate-50'
                        }`}
                      >
                        <PaymentLogo type="ref" className="h-10 sm:h-12 w-auto max-w-full object-contain" />
                        <span className="text-[11px] font-bold text-slate-900">Referência</span>
                      </button>

                      {/* Unitel Money */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('unitel')}
                        className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center justify-between gap-2.5 text-center ${
                          paymentMethod === 'unitel'
                            ? 'border-purple-600 bg-purple-50/50 ring-2 ring-purple-400/30 shadow-xs'
                            : 'border-slate-200 bg-white hover:bg-slate-50'
                        }`}
                      >
                        <PaymentLogo type="unitel" className="h-10 sm:h-12 w-auto max-w-full object-contain" />
                        <span className="text-[11px] font-bold text-slate-900">Unitel Money</span>
                      </button>

                      {/* Visa */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('visa')}
                        className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center justify-between gap-2.5 text-center ${
                          paymentMethod === 'visa'
                            ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-400/30 shadow-xs'
                            : 'border-slate-200 bg-white hover:bg-slate-50'
                        }`}
                      >
                        <PaymentLogo type="visa" className="h-10 sm:h-12 w-auto max-w-full object-contain" />
                        <span className="text-[11px] font-bold text-slate-900">Visa</span>
                      </button>

                      {/* Mastercard */}
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('mastercard')}
                        className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center justify-between gap-2.5 text-center col-span-2 sm:col-span-1 ${
                          paymentMethod === 'mastercard'
                            ? 'border-slate-900 bg-slate-900 text-white ring-2 ring-slate-800 shadow-xs'
                            : 'border-slate-200 bg-white hover:bg-slate-50'
                        }`}
                      >
                        <PaymentLogo type="mastercard" className="h-10 sm:h-12 w-auto max-w-full object-contain" />
                        <span className={`text-[11px] font-bold ${paymentMethod === 'mastercard' ? 'text-white' : 'text-slate-900'}`}>Mastercard</span>
                      </button>
                    </div>

                    {/* Detalhes Específicos do Método Seleccionado */}
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm space-y-3">
                      {paymentMethod === 'mcx' && (
                        <div className="flex items-start gap-4">
                          <PaymentLogo type="mcx" className="h-12 w-auto shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-slate-900">
                              Notificação Direta Multicaixa Express (MCX)
                            </p>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              Será enviada uma notificação de compra para o número informado no valor de{' '}
                              <strong className="text-slate-900 font-bold">{totalAmountAOA.toLocaleString('pt-AO')} Kz</strong>. Valide a transação na aplicação MCX.
                            </p>
                          </div>
                        </div>
                      )}

                      {paymentMethod === 'ref' && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <PaymentLogo type="ref" className="h-10 w-auto shrink-0" />
                            <p className="font-bold text-slate-900">
                              Dados para Pagamento por Referência Multicaixa
                            </p>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-1">
                            <div className="p-3 bg-white border border-slate-200 rounded-xl">
                              <span className="text-xs text-slate-500 block">Entidade</span>
                              <strong className="font-mono text-base text-slate-900">{mockEntity}</strong>
                            </div>
                            <div className="p-3 bg-white border border-slate-200 rounded-xl">
                              <span className="text-xs text-slate-500 block">Referência</span>
                              <strong className="font-mono text-base text-slate-900">{mockReference}</strong>
                            </div>
                            <div className="p-3 bg-white border border-slate-200 rounded-xl col-span-2 sm:col-span-1">
                              <span className="text-xs text-slate-500 block">Montante</span>
                              <strong className="font-mono text-base text-emerald-700">{totalAmountAOA.toLocaleString('pt-AO')} Kz</strong>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={handleCopyRef}
                            className="py-2.5 px-4 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-800 flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-2xs"
                          >
                            {copiedRef ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                            <span>{copiedRef ? 'Dados copiados!' : 'Copiar Entidade e Referência'}</span>
                          </button>
                        </div>
                      )}

                      {paymentMethod === 'unitel' && (
                        <div className="flex items-start gap-4">
                          <PaymentLogo type="unitel" className="h-12 w-auto shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-slate-900">
                              Carteira Digital Unitel Money
                            </p>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                              O montante de {totalAmountAOA.toLocaleString('pt-AO')} Kz será debitado da carteira associada ao telemóvel informado.
                            </p>
                          </div>
                        </div>
                      )}

                      {(paymentMethod === 'visa' || paymentMethod === 'mastercard') && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <PaymentLogo type={paymentMethod} className="h-10 w-auto shrink-0" />
                            <p className="font-bold text-slate-900">
                              Pagamento com Cartão de Crédito / Débito Internacional
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="sm:col-span-3">
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Número do Cartão *
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  value={cardNumber}
                                  onChange={(e) => setCardNumber(e.target.value)}
                                  placeholder="0000 0000 0000 0000"
                                  className="w-full text-sm font-mono border border-slate-300 rounded-xl px-3.5 py-2.5 bg-white focus:outline-none focus:border-slate-900"
                                />
                                <CreditCard className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Validade *
                              </label>
                              <input
                                type="text"
                                value={cardExpiry}
                                onChange={(e) => setCardExpiry(e.target.value)}
                                placeholder="MM/AA"
                                className="w-full text-sm font-mono border border-slate-300 rounded-xl px-3.5 py-2.5 bg-white focus:outline-none focus:border-slate-900"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                CVC / CVV *
                              </label>
                              <input
                                type="text"
                                value={cardCvc}
                                onChange={(e) => setCardCvc(e.target.value)}
                                placeholder="123"
                                className="w-full text-sm font-mono border border-slate-300 rounded-xl px-3.5 py-2.5 bg-white focus:outline-none focus:border-slate-900"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Termo de Confirmação */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
                  <label className="flex items-start gap-3.5 cursor-pointer text-xs font-medium text-slate-700 leading-relaxed">
                    <input
                      type="checkbox"
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="w-4 h-4 text-slate-900 rounded border-slate-300 focus:ring-slate-900 mt-0.5 cursor-pointer"
                    />
                    <span>
                      Declaro que as informações prestadas correspondem à verdade e pertencem ao titular do Bilhete de Identidade, aceitando o regulamento oficial de sorteios da Lotaria de Vistos Angola supervisionado pelo ISJ.
                    </span>
                  </label>
                </div>

                {/* Botão Principal de Envio */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-2xl transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin inline-block w-4.5 h-4.5 border-2 border-slate-950 border-t-transparent rounded-full" />
                        A processar comunicação bancária...
                      </span>
                    ) : (
                      <span>
                        {mode === 'buy'
                          ? `Confirmar e Emitir ${effectiveQty} ${effectiveQty === 1 ? 'Bilhete' : 'Bilhetes'} (${totalAmountAOA.toLocaleString('pt-AO')} Kz)`
                          : 'Emitir Bilhete Cívico Gratuito com BI'}
                      </span>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Conexão Encriptada TLS 1.3 · Homologação Oficial ISJ Angola</span>
                  </div>
                </div>
              </form>
            </div>
          )}
        </Container>
      </main>
    </div>
  );
};
