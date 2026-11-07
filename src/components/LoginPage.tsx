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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between py-10 px-4 selection:bg-[#FACC15] selection:text-slate-950">
      <Container className="max-w-sm w-full my-auto">
        
        {/* Back button & Brand */}
        <div className="flex items-center justify-between mb-8">
          <button
            type="button"
            onClick={onBackToHome}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao início</span>
          </button>

          <div className="text-xl font-black text-slate-900 font-display tracking-tight">
            LVA
          </div>
        </div>

        {/* Clean Login Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight mb-6">
            Entrada Administrativa
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Identificador de Administrador
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="ID de administrador"
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-400 transition-all font-sans"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Palavra-passe do Sistema
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-400 transition-all font-sans"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 ease-in-out cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider shadow-xs disabled:opacity-50"
            >
              {isLoading ? (
                <span>A autenticar...</span>
              ) : (
                <>
                  <span>Entrar no Painel</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>


      </Container>
    </div>
  );
};
