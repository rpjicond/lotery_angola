import React from 'react';
import { ShieldCheck, Target, Building2 } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-14 sm:py-20 bg-[#050914] border-b border-slate-800/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FACC15] block">
            Institucional · LVA
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Sobre a Lotaria de Vistos Angola
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
            Iniciativa regulada criada para quebrar as barreiras burocráticas e financeiras que impedem cidadãos angolanos de realizarem os seus projetos de formação e trabalho no exterior.
          </p>
        </div>

        {/* 3 Pillars Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0F172A] p-6 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-800 text-[#FACC15] flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Missão Cívica</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Permitir que qualquer cidadão angolano, independentemente da sua condição financeira, tenha a oportunidade real de obter tratamento consular de primeira classe, com agendamentos transparentes e custos 100% patrocinados.
            </p>
          </div>

          <div className="bg-[#0F172A] p-6 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-800 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Transparência & Auditoria</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Todos os bilhetes possuem semente criptográfica única e imutável. As extrações das esferas são públicas, acompanhadas por comissão independente e registradas segundo as normas de integridade do ISJ.
            </p>
          </div>

          <div className="bg-[#0F172A] p-6 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-800 text-sky-400 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Assessoria Jurídica</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Advogados especialistas em direito migratório e parcerias com entidades empregadoras em Portugal e França para assegurar que cada dossiê atenda aos mais rigorosos critérios consulares.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
