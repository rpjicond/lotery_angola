import React from 'react';
import { Ticket, Users, TrendingUp, ShieldCheck } from 'lucide-react';
import { Container } from './Container';

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  // Mock data for dashboard
  const stats = [
    { title: 'Total Bilhetes Emitidos', value: '14.280', icon: Ticket, trend: '+12% esta semana' },
    { title: 'Utilizadores Registados', value: '8.450', icon: Users, trend: '+5% esta semana' },
    { title: 'Sorteios em Curso', value: '2', icon: TrendingUp, trend: 'Auditados' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-black text-slate-950 font-display">
            Painel de Administração · LVA
          </h1>
          <button
            onClick={onLogout}
            className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-950 bg-white border border-slate-200 rounded-xl transition-all hover:bg-slate-50 cursor-pointer"
          >
            Terminar Sessão
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-amber-100 text-amber-800 rounded-xl">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {stat.title}
                </h3>
              </div>
              <p className="text-3xl font-black text-slate-950 font-mono mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {stat.trend}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <ShieldCheck className="w-10 h-10 text-emerald-600" />
          <div>
            <h4 className="text-sm font-bold text-slate-950">Sistema de Auditoria ISJ Ativo</h4>
            <p className="text-xs text-slate-600">O motor de sorteio está a funcionar sob as normas de transparência aprovadas pelo Instituto de Supervisão de Jogos.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
