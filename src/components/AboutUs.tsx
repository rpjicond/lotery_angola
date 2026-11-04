import React from 'react';
import { ShieldCheck, Target, Building2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-16 bg-[#040C1D] border-b border-[#0a275f] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FBBF24] bg-[#FBBF24]/10 border border-[#FBBF24]/30 px-3 py-1 rounded-full">
            Institucional · LVA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FBBF24] tracking-tight mt-3 font-display">
            Sobre a Lotaria de Vistos Angola
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Criada para quebrar as barreiras burocráticas e financeiras que impedem os angolanos de realizarem os seus sonhos de estudar e trabalhar no exterior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#081F4A] p-6 rounded-2xl border border-[#133A7C] shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FBBF24]/10 border border-[#FBBF24]/30 text-[#FBBF24] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Nossa Missão</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Permitir que qualquer cidadão angolano, independentemente da sua condição financeira, tenha a oportunidade real de obter tratamento consular de primeira classe, com agendamentos transparentes e custos 100% patrocinados.
            </p>
          </div>

          <div className="bg-[#081F4A] p-6 rounded-2xl border border-[#133A7C] shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Transparência Total</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Todos os bilhetes possuem semente criptográfica única. As extrações das esferas são públicas, acompanhadas por comissão independente e registradas segundo as diretrizes de integridade de Angola.
            </p>
          </div>

          <div className="bg-[#081F4A] p-6 rounded-2xl border border-[#133A7C] shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Equipa Jurídica Própria</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Advogados especialistas em mobilidade internacional cuidam de cada dossiê individualmente, tratando agendamentos oficiais VFS e certidões no MIREX sem intermediários informais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
