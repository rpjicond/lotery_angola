import React, { useState } from 'react';
import { ShieldCheck, Lock, Mail, ArrowRight, CheckCircle2, Ticket } from 'lucide-react';
import { Container } from './Container';

interface LoginPageProps {
  onLoginSuccess: (userName: string, userBI: string) => void;
  onBackToHome: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  onBackToHome,
}) => {
  const [biOrEmail, setBiOrEmail] = useState('');
  const [pinOrPassword, setPinOrPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!biOrEmail.trim()) {
      setErrorMsg('Por favor introduza o seu número de BI ou e-mail.');
      return;
    }
    if (!pinOrPassword.trim()) {
      setErrorMsg('Por favor introduza a sua palavra-passe ou PIN.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Simulate successful auth
      const mockName = biOrEmail.includes('@') ? biOrEmail.split('@')[0] : 'Cidadão Angolano';
      onLoginSuccess(mockName, biOrEmail.toUpperCase());
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between py-12 px-4 selection:bg-[#FACC15] selection:text-slate-950">
      <Container className="max-w-md w-full my-auto">
        
        {/* Top Brand & Return Link */}
        <div className="text-center mb-8">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2.5 group mb-6 cursor-pointer"
          >
            <div className="relative flex items-center shrink-0 w-11 h-9">
              <div className="absolute left-0 top-0.5 w-6 h-8 bg-[#0B2C69] border border-[#FBBF24] rounded-[3px] flex flex-col items-center justify-center shadow-md">
                <span className="text-[5px] text-[#FFDE00] font-black">★</span>
              </div>
              <div className="absolute left-3.5 top-0 w-6 h-8 bg-[#FBBF24] rounded-[3px] flex items-center justify-center shadow-md">
                <span className="text-[7.5px] font-black text-slate-950">AO</span>
              </div>
            </div>
            <span className="text-xl font-black text-slate-950 font-display tracking-tight">
              LVA · Portal do Cidadão
            </span>
          </button>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
            Aceder à Sua Conta
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Consulte os seus bilhetes diários gratuitos e o estado dos seus sorteios de vistos.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleLogin} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Número de BI ou E-mail
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={biOrEmail}
                  onChange={(e) => setBiOrEmail(e.target.value)}
                  placeholder="ex: 006841209LA048 ou email@dominio.ao"
                  className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-400 transition-all font-mono"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Palavra-passe ou PIN Cívico
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="password"
                  value={pinOrPassword}
                  onChange={(e) => setPinOrPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-400 transition-all font-mono"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                <input type="checkbox" className="rounded border-slate-300 text-amber-500 focus:ring-amber-400" />
                <span>Lembrar-me</span>
              </label>
              <a href="#recuperar" onClick={(e) => { e.preventDefault(); alert('Instruções de recuperação enviadas para o contacto associado.'); }} className="font-bold text-amber-700 hover:text-amber-800 transition-colors">
                Esqueceu os dados?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3.5 px-6 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 transition-all duration-200 ease-in-out hover:scale-[1.01] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm disabled:opacity-50"
            >
              {isLoading ? (
                <span>A autenticar credenciais...</span>
              ) : (
                <>
                  <span>Entrar no Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              Ainda não tem conta ou bilhete registado?{' '}
              <button
                type="button"
                onClick={onBackToHome}
                className="font-bold text-amber-700 hover:text-amber-800 transition-colors underline cursor-pointer"
              >
                Emitir bilhete diário com BI
              </button>
            </p>
          </div>
        </div>

        {/* Security badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Autenticação segura protegida pelo Instituto de Supervisão de Jogos (ISJ)</span>
        </div>

      </Container>
    </div>
  );
};
