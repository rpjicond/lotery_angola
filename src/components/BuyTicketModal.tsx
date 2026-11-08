import React, { useState } from 'react';
import { LotteryDraw, UserTicket } from '../types/lottery';
import { X, CreditCard, Smartphone, Building, CheckCircle2, Copy, Check, ShieldCheck } from 'lucide-react';
import { CountryFlag } from './CountryFlag';

interface BuyTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  draw: LotteryDraw;
  onTicketPurchased: (ticket: UserTicket) => void;
}

export const BuyTicketModal: React.FC<BuyTicketModalProps> = ({
  isOpen,
  onClose,
  draw,
  onTicketPurchased,
}) => {
  const [method, setMethod] = useState<'mcx' | 'ref' | 'unitel'>('mcx');
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [buyerName, setBuyerName] = useState('');
  const [buyerBI, setBuyerBI] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);
  const [successTicket, setSuccessTicket] = useState<UserTicket | null>(null);

  if (!isOpen) return null;

  const totalCostAOA = draw.ticketPriceAOA * ticketQuantity;
  const mockEntity = '10542';
  const mockReference = '942 108 329';

  const handleCopyRef = () => {
    navigator.clipboard.writeText(`${mockEntity} - ${mockReference} - ${totalCostAOA}`);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleConfirmPayment = () => {
    if (!buyerName.trim()) {
      alert('Por favor introduza o seu nome.');
      return;
    }
    if (!buyerBI.trim()) {
      alert('Por favor introduza o seu número de BI.');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const randomFive = Math.floor(10000 + Math.random() * 90000);
      const ticketNum = `LVA-2026-${randomFive}`;
      const randomHash = '0x' + Array.from({ length: 20 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

      const newTicket: UserTicket = {
        ticketNumber: ticketNum,
        drawId: draw.id,
        drawTitle: draw.title,
        destination: draw.destination,
        holderName: buyerName.trim(),
        holderBI: buyerBI.trim().toUpperCase(),
        holderPhone: buyerPhone || '+244 923 000 000',
        holderProvince: 'Luanda',
        purchaseDate: new Date().toISOString().split('T')[0],
        isFreeTicket: false,
        status: 'pending',
        hash: randomHash,
        seatCode: `VIP-${draw.flag.slice(0, 2)}-${Math.floor(100 + Math.random() * 899)}`,
        prizeClaimed: false,
      };

      setSuccessTicket(newTicket);
      onTicketPurchased(newTicket);
      setIsProcessing(false);
    }, 1200);
  };

  const handleFinish = () => {
    setSuccessTicket(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[92vh] border border-slate-200 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#071F4A] text-white flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-base sm:text-lg font-bold leading-tight">Adquirir Bilhetes Extras · LVA</h3>
            <p className="text-[11px] sm:text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
              <CountryFlag code={draw.flag} className="w-4 h-3" />
              <span>{draw.title}</span>
            </p>
          </div>
          <button
            onClick={handleFinish}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1">
        {successTicket ? (
          <div className="p-4 sm:p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="text-xl font-black text-slate-900">
              Pagamento Confirmado com Sucesso!
            </h4>
            <p className="text-xs text-slate-600">
              O seu bilhete extra foi registado no sistema da lotaria. As suas probabilidades aumentaram!
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Número do Bilhete:</span>
                <span className="font-mono font-bold text-slate-900">{successTicket.ticketNumber}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Titular:</span>
                <span className="font-semibold text-slate-800">{successTicket.holderName}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Valor Pago:</span>
                <span className="font-bold text-emerald-700">{totalCostAOA.toLocaleString('pt-AO')} Kz</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400 break-all pt-1 border-t border-slate-200">
                Hash: {successTicket.hash}
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer"
            >
              Concluir & Ver Meus Bilhetes
            </button>
          </div>
        ) : (
          <div className="p-6 space-y-5">
            {/* Quantity selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Quantidade de Bilhetes Extras:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 3, 5, 10].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setTicketQuantity(qty)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all duration-200 ease-in-out cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                      ticketQuantity === qty
                        ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-sm scale-[1.02]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {qty}x Bilhete{qty > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-right text-xs font-bold text-slate-900">
                Total a pagar: <span className="text-amber-600 text-sm font-black">{totalCostAOA.toLocaleString('pt-AO')} AOA</span>
              </div>
            </div>

            {/* Holder information */}
            <div className="space-y-3 pt-1 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome do Titular *
                </label>
                <input
                  type="text"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="Nome completo conforme no BI"
                  className="w-full text-xs border border-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Número do BI *
                  </label>
                  <input
                    type="text"
                    value={buyerBI}
                    onChange={(e) => setBuyerBI(e.target.value.toUpperCase())}
                    placeholder="007891234LA042"
                    className="w-full text-xs font-mono border border-slate-300 rounded-xl px-3 py-2.5 uppercase focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ease-in-out"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Telefone para Contacto
                  </label>
                  <input
                    type="tel"
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    placeholder="923 000 000"
                    className="w-full text-xs border border-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-2 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Método de Pagamento em Angola:
              </label>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setMethod('mcx')}
                  className={`p-2.5 sm:p-3 text-center rounded-xl border flex flex-col items-center gap-1 sm:gap-1.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] ${
                    method === 'mcx'
                      ? 'border-red-500 bg-red-50/50 text-red-700 ring-2 ring-red-400 scale-[1.02]'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  <span className="text-[10px] sm:text-xs font-bold leading-tight">Multicaixa Express</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod('ref')}
                  className={`p-2.5 sm:p-3 text-center rounded-xl border flex flex-col items-center gap-1 sm:gap-1.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] ${
                    method === 'ref'
                      ? 'border-blue-500 bg-blue-50/50 text-blue-700 ring-2 ring-blue-400 scale-[1.02]'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Building className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  <span className="text-[10px] sm:text-xs font-bold leading-tight">Referência BAI/BFA</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMethod('unitel')}
                  className={`p-2.5 sm:p-3 text-center rounded-xl border flex flex-col items-center gap-1 sm:gap-1.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98] ${
                    method === 'unitel'
                      ? 'border-orange-500 bg-orange-50/50 text-orange-700 ring-2 ring-orange-400 scale-[1.02]'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                  <span className="text-[10px] sm:text-xs font-bold leading-tight">Unitel Money</span>
                </button>
              </div>

              {/* Method Specific Details */}
              <div className="mt-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs transition-all duration-200 ease-in-out">
                {method === 'mcx' && (
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-800">
                      Pagamento Instantâneo por Multicaixa Express (MCX)
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      Será enviada uma notificação de compra para o aplicativo MCX associado ao seu número de telefone com o valor de <strong className="text-slate-900">{totalCostAOA.toLocaleString('pt-AO')} Kz</strong>.
                    </p>
                  </div>
                )}

                {method === 'ref' && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center pb-1 border-b border-slate-200">
                      <span className="text-slate-500">Entidade:</span>
                      <span className="font-mono font-bold text-slate-900">{mockEntity}</span>
                    </div>
                    <div className="flex justify-between items-center pb-1 border-b border-slate-200">
                      <span className="text-slate-500">Referência:</span>
                      <span className="font-mono font-bold text-slate-900">{mockReference}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Valor em Kz:</span>
                      <span className="font-mono font-bold text-emerald-700">{totalCostAOA.toLocaleString('pt-AO')} AOA</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyRef}
                      className="mt-2 w-full py-1.5 text-[11px] font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg flex items-center justify-center gap-1.5 hover:bg-slate-100 cursor-pointer transition-all duration-200 ease-in-out active:scale-95"
                    >
                      {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedRef ? 'Dados Copiados!' : 'Copiar Dados de Pagamento'}</span>
                    </button>
                  </div>
                )}

                {method === 'unitel' && (
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-800">Carteira Digital Unitel Money</p>
                    <p className="text-slate-500 text-[11px]">
                      O montante de {totalCostAOA.toLocaleString('pt-AO')} Kz será debitado do saldo da sua conta Unitel Money.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action button */}
            <button
              type="button"
              disabled={isProcessing}
              onClick={handleConfirmPayment}
              className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 rounded-xl transition-all duration-200 ease-in-out hover:scale-[1.01] active:scale-[0.98] shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              {isProcessing ? (
                <span>A processar no sistema bancário...</span>
              ) : (
                <span>Confirmar e Emitir {ticketQuantity} Bilhete{ticketQuantity > 1 ? 's' : ''}</span>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Transação protegida por EMIS e Banco Nacional de Angola (BNA)</span>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
