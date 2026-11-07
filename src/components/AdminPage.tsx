import React, { useState } from 'react';
import { Lock, ShieldCheck, ArrowLeft, Key, User, CheckCircle2, AlertCircle, RefreshCw, Database, Globe, LogOut } from 'lucide-react';
import { Container } from './Container';

interface AdminPageProps {
  onBackToHome: () => void;
  isAdminLoggedIn: boolean;
  onLoginSuccess: () => void;
  onAdminLogout: () => void;
  onRegenerateSeed: () => void;
  showToast: (msg: string) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({
  onBackToHome,
  isAdminLoggedIn,
  onLoginSuccess,
  onAdminLogout,
  onRegenerateSeed,
  showToast,
}) => {
  const [username, setUsername] = useState('isj_admin');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [liveHash, setLiveHash] = useState('0x8f4c71a392e9bb20314f7b28e104a92c');
  const [blockHeight, setBlockHeight] = useState(19482042);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      setIsLoading(false);
      if (username.trim() === 'isj_admin' && password === 'lva2026') {
        onLoginSuccess();
        showToast('Sessão de Administrador ISJ iniciada com sucesso!');
      } else {
        setError('Credenciais inválidas. Utilize: isj_admin / lva2026');
      }
    }, 600);
  };

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      const newHash = '0x' + Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      setLiveHash(newHash);
      setBlockHeight((prev) => prev + 1);
      setIsRegenerating(false);
      onRegenerateSeed();
      showToast('Nova semente criptográfica gerada na LVA-Chain com sucesso!');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#FACC15] selection:text-slate-950">
      
      {/* Top Navigation Bar for Admin Page */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-20">
            
            {/* Back to Home Button */}
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4 text-slate-600" />
              <span>Voltar à Página Principal</span>
            </button>

            {/* Title / Badge */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <h1 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                  Painel de Controlo ISJ / LVA
                </h1>
                <p className="text-[10px] text-slate-500">Área de Administração e Auditoria Blockchain</p>
              </div>
            </div>

            {/* Status indicator */}
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-slate-600">Sistema Seguro</span>
            </div>

          </div>
        </Container>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-12 px-4 sm:px-6">
        <Container>
          <div className="max-w-3xl mx-auto">

            {!isAdminLoggedIn ? (
              /* --- LOGIN FORM PAGE --- */
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8 animate-in fade-in duration-300">
                
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-amber-100 border border-amber-300 rounded-2xl flex items-center justify-center mx-auto shadow-inner text-amber-700">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Autenticação de Administrador ISJ
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Insira as credenciais oficiais fornecidas pelo Instituto de Supervisão de Jogos (ISJ) para aceder aos controlos de auditoria e gestão de sorteios.
                  </p>
                </div>

                {error && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-3 text-rose-900 text-xs font-bold animate-in shake duration-200">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Nome de Utilizador / ID de Inspetor
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="isj_admin"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Palavra-passe Segura / Token ISJ
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Key className="w-4 h-4" />
                      </div>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FACC15] focus:bg-white transition-all"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 italic mt-1">
                      (Dica de demonstração: Utilizador <strong className="font-mono text-slate-800">isj_admin</strong> / Palavra-passe <strong className="font-mono text-slate-800">lva2026</strong>)
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-2xl text-xs font-black text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 shadow-lg flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider transition-all duration-200 ease-in-out hover:scale-[1.01]"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>A autenticar na rede ISJ...</span>
                      </div>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>ENTRAR NA ÁREA RESTRITA</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3 text-xs text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Acesso encriptado via TLS 1.3 com validação de chave pública da LVA-Chain.</span>
                </div>

              </div>
            ) : (
              /* --- ADMIN DASHBOARD PAGE --- */
              <div className="space-y-8 animate-in fade-in duration-300">
                
                {/* Welcome Card */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black shrink-0">
                      <CheckCircle2 className="w-7 h-7 text-emerald-700" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 text-emerald-800 rounded-full text-[10px] font-bold mb-1">
                        Sessão Ativa
                      </div>
                      <h2 className="text-xl font-black text-slate-900">
                        Bem-vindo, Administrador ISJ
                      </h2>
                      <p className="text-xs text-slate-500">
                        Controlo total de auditoria e validação de sorteios da Lotaria de Vistos Angola.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onAdminLogout();
                      showToast('Sessão terminada com sucesso.');
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-all flex items-center gap-2 cursor-pointer shrink-0"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Terminar Sessão</span>
                  </button>
                </div>

                {/* Blockchain Node Status */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                    <div>
                      <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                        Nó de Validação ISJ / LVA-Chain
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Bloco Atual: <strong className="font-mono text-slate-800">#{blockHeight}</strong> · Sincronização 100%
                      </p>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full font-bold">
                      CONSENSO ATIVO
                    </span>
                  </div>

                  {/* Hash Box */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Hash Criptográfico SHA-256 Ativo:
                    </span>
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl font-mono text-xs sm:text-sm font-bold text-amber-400 tracking-wider break-all shadow-inner">
                      {liveHash}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                      <div className="flex items-center gap-2 text-blue-700 font-bold">
                        <Database className="w-4 h-4" />
                        <span>Algoritmo</span>
                      </div>
                      <p className="text-slate-800 font-semibold">SHA-256 / Ed25519</p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                      <div className="flex items-center gap-2 text-emerald-700 font-bold">
                        <Globe className="w-4 h-4" />
                        <span>Validadores</span>
                      </div>
                      <p className="text-slate-800 font-semibold">3 Nós Oficiais (ISJ)</p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                      <div className="flex items-center gap-2 text-amber-700 font-bold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Estado</span>
                      </div>
                      <p className="text-slate-800 font-semibold">Imutável & Verificável</p>
                    </div>
                  </div>

                  {/* Seed Regeneration Action */}
                  <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl space-y-4">
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                      Controlo de Semente Criptográfica para Sorteio Ao Vivo
                    </h4>
                    <p className="text-xs text-slate-700">
                      Ao regenerar a semente, um novo bloco é criado na LVA-Chain para garantir aleatoriedade absoluta e inauditable na extração dos bilhetes.
                    </p>
                    <button
                      type="button"
                      disabled={isRegenerating}
                      onClick={handleRegenerate}
                      className="px-6 py-3.5 rounded-2xl text-xs font-black text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 shadow flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider transition-all"
                    >
                      <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
                      <span>{isRegenerating ? 'A gerar nova semente...' : 'Regenerar Semente Criptográfica'}</span>
                    </button>
                  </div>

                </div>

              </div>
            )}

          </div>
        </Container>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <Container>
          <p>© 2026 Lotaria de Vistos Angola (LVA) · Regulado pelo Instituto de Supervisão de Jogos (ISJ).</p>
        </Container>
      </footer>

    </div>
  );
};
