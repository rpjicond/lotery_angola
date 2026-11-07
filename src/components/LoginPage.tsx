import React, { useState } from 'react';
import { Lock, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from './Container';

interface LoginPageProps {
  onLoginSuccess: (userName: string, userBI: string) => void;
  onBackToHome: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  onBackToHome,
}) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!identifier.trim()) {
      setErrorMsg('Introduza o seu BI ou e-mail.');
      return;
    }
    if (!password.trim()) {
      setErrorMsg('Introduza a sua palavra-passe.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const mockName = identifier.includes('@') ? identifier.split('@')[0] : 'Cidadão';
      onLoginSuccess(mockName, identifier.toUpperCase());
    }, 800);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 selection:bg-[#FACC15] selection:text-slate-950">
      {/* City Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/login_tower_background.jpg"
          alt="Admin Fundo Oficial LVA"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm" />
      </div>

      <Container className="max-w-sm w-full relative z-10">
        {/* Clean Login Box */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <img src="/assets/aistudio/image_6d0ddae8.png" alt="LVA Logo" className="h-16 mx-auto mb-4" />
          <h1 className="text-xl font-extrabold text-slate-950 tracking-tight mb-6 text-center">
            Entrada Administrativa
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-[11px] text-red-700 font-medium">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                ID de Administrador
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="ID de administrador"
                  className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-400 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Palavra-passe do Sistema
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-400 transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-5 rounded-xl font-black text-xs text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 ease-in-out cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider shadow-md disabled:opacity-50"
            >
              {isLoading ? (
                <span>A autenticar...</span>
              ) : (
                <>
                  <span>Entrar no Painel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
          
          <button
            onClick={onBackToHome}
            className="w-full mt-4 py-2 px-5 rounded-xl font-bold text-[10px] text-slate-500 hover:text-slate-900 transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            <ArrowLeft className="w-3 h-3" />
            Voltar ao Início
          </button>
        </div>
      </Container>
    </div>
  );
};
