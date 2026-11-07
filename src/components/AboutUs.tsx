import React from 'react';
import { ShieldCheck, Target, Building2 } from 'lucide-react';
import { Container } from './Container';

export const AboutUs: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-14 sm:py-20 bg-white border-b border-slate-200 text-slate-900">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
            Institucional · LVA
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Sobre a Lotaria de Vistos Angola
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Iniciativa regulada criada para quebrar as barreiras burocráticas e financeiras que impedem cidadãos angolanos de realizarem os seus projetos de formação e trabalho no exterior.
          </p>
        </div>

        {/* 3 Pillars Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-200 ease-in-out space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold transition-transform duration-200 ease-in-out group-hover:scale-110">
              <Target className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-base font-bold text-slate-900 transition-colors duration-200 ease-in-out group-hover:text-amber-600">Missão Cívica</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Permitir que qualquer cidadão angolano, independentemente da sua condição financeira, tenha a oportunidade real de obter tratamento consular de primeira classe, com agendamentos transparentes e custos 100% patrocinados.
            </p>
          </div>

          <div className="group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-200 ease-in-out space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold transition-transform duration-200 ease-in-out group-hover:scale-110">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="text-base font-bold text-slate-900 transition-colors duration-200 ease-in-out group-hover:text-emerald-700">Transparência & Auditoria</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Todos os bilhetes possuem semente criptográfica única e imutável. As extrações das esferas são públicas, acompanhadas por comissão independente e registradas segundo as normas de integridade do ISJ.
            </p>
          </div>

          <div className="group bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-200 ease-in-out space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold transition-transform duration-200 ease-in-out group-hover:scale-110">
              <Building2 className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="text-base font-bold text-slate-900 transition-colors duration-200 ease-in-out group-hover:text-blue-700">Assessoria Jurídica</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Advogados especialistas em direito migratório e parcerias com entidades empregadoras em Portugal e França para assegurar que cada dossiê atenda aos mais rigorosos critérios consulares.
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
};
