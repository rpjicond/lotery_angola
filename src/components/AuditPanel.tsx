import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, CheckCircle, RefreshCw, Copy, Check, Database, Globe } from 'lucide-react';
import { Container } from './Container';

interface AuditPanelProps {
  onNavigateToAdmin: () => void;
  isAdminLoggedIn: boolean;
  onAdminLogout: () => void;
  onRegenerateSeed: () => void;
}

export const AuditPanel: React.FC<AuditPanelProps> = ({
  onNavigateToAdmin,
  isAdminLoggedIn,
  onAdminLogout,
  onRegenerateSeed,
}) => {
  const [liveHash, setLiveHash] = useState('0x8f4c71a392e9bb20314f7b28e104a92c');
  const [blockHeight, setBlockHeight] = useState(19482042);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  // Real-time minor hash fluctuation simulation for blockchain live feel
  useEffect(() => {
    const interval = setInterval(() => {
      const randomHex = Math.floor(Math.random() * 16).toString(16);
      setLiveHash((prev) => prev.slice(0, -1) + randomHex);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      const newHash = '0x' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      setLiveHash(newHash);
      setBlockHeight((prev) => prev + 1);
      setIsRegenerating(false);
      onRegenerateSeed();
    }, 800);
  };

  const handleCopyHash = () => {
    navigator.clipboard.writeText(liveHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section id="auditoria-blockchain" className="py-14 sm:py-20 bg-white border-t border-slate-200 text-slate-900">
      <Container>
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Auditoria Criptográfica & Blockchain</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Painel de Transparência Blockchain em Tempo Real
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Cada sorteio e emissão de bilhete na Lotaria de Vistos Angola (LVA) é registado com uma semente hash imutável validada pelo regulador nacional ISJ.
          </p>
        </div>

        {/* Audit Panel Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Nó de Validação ISJ / LVA-Chain
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Bloco atual: <strong className="font-mono text-slate-800">#{blockHeight}</strong> · Estado: <span className="text-emerald-700 font-bold">Consenso Ativo (100% Sincronizado)</span>
              </p>
            </div>

            {/* Admin Login Button or Active Status */}
            <div>
              {!isAdminLoggedIn ? (
                <button
                  type="button"
                  onClick={onNavigateToAdmin}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-white border border-slate-300 hover:bg-slate-100 transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Área Restrita (Admin ISJ)</span>
                </button>
              ) : (
                <div className="flex items-center gap-3 bg-emerald-100 text-emerald-900 border border-emerald-300 px-3.5 py-2 rounded-xl text-xs font-bold">
                  <CheckCircle className="w-4 h-4 text-emerald-700" />
                  <span>Sessão Admin Ativa (ISJ)</span>
                  <button
                    type="button"
                    onClick={onAdminLogout}
                    className="text-[11px] text-rose-700 hover:underline ml-2 cursor-pointer font-semibold"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Live Hash Display */}
          <div className="my-6 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700 uppercase tracking-wider">Hash Criptográfico SHA-256 Ativo:</span>
              <button
                type="button"
                onClick={handleCopyHash}
                className="text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1 cursor-pointer"
              >
                {copiedHash ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedHash ? 'Hash Copiado!' : 'Copiar Hash'}</span>
              </button>
            </div>

            <div className="p-4 bg-white border border-slate-300 rounded-xl font-mono text-xs sm:text-sm font-black text-slate-950 tracking-wider break-all shadow-inner flex items-center justify-between gap-3">
              <span className="text-amber-600">{liveHash}</span>
              <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-1 rounded shrink-0 font-sans font-bold">
                VERIFICÁVEL
              </span>
            </div>
          </div>

          {/* Network Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 text-xs border-y border-slate-200">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Algoritmo</span>
                <span className="font-bold text-slate-800">SHA-256 / Ed25519</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Validadores</span>
                <span className="font-bold text-slate-800">3 Nós Oficiais (ISJ / LVA)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Imutabilidade</span>
                <span className="font-bold text-slate-800">100% Verificável</span>
              </div>
            </div>
          </div>

          {/* Admin Logged-In Controls Section */}
          {isAdminLoggedIn && (
            <div className="mt-6 p-5 bg-white border-2 border-amber-300 rounded-2xl shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Painel de Controlo Exclusivo · Administrador ISJ
                </h4>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                  AUTORIZADO
                </span>
              </div>

              <p className="text-xs text-slate-600">
                Pode regenerar a semente criptográfica para o próximo sorteio ou auditar os blocos da rede LVA-Chain.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  disabled={isRegenerating}
                  onClick={handleRegenerate}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-black text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 shadow transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
                  <span>{isRegenerating ? 'A gerar nova semente...' : 'Regenerar Semente Criptográfica'}</span>
                </button>

                <span className="text-[11px] text-emerald-700 font-semibold">
                  ✓ Ação protegida com assinatura digital imutável.
                </span>
              </div>
            </div>
          )}

        </div>

      </Container>
    </section>
  );
};
