import React from 'react';
import { ShieldCheck, FileCheck, DollarSign, Globe, Plane, HeartPulse, Building2, CheckCircle2 } from 'lucide-react';

export const PackageBenefits: React.FC = () => {
  const pillars = [
    {
      icon: DollarSign,
      title: 'Taxas Consulares & Agendamento 100% Pagos',
      description: 'Isenção total de custos no VFS Global, Consulado Geral de Portugal em Luanda, IRCC Canadá ou Embaixadas Europeias. Não precisa pagar intermediários nem correr riscos.',
    },
    {
      icon: FileCheck,
      title: 'Montagem Jurídica Completa do Dossiê',
      description: 'Nossa equipa de advogados especializados em direito migratório redige cartas de motivação, declarações de alojamento, termos e organiza toda a documentação comprobatória.',
    },
    {
      icon: Building2,
      title: 'Legalizações no MIREX & Registo Criminal',
      description: 'Apoiamos e cobrimos todas as taxas de autenticação e carimbos consulares no Ministério das Relações Exteriores (MIREX) em Luanda e no Registo Criminal do SIC.',
    },
    {
      icon: Globe,
      title: 'Tradução Juramentada Oficial',
      description: 'Para destinos como Canadá ou Alemanha, financiamos integralmente a tradução de certificados, diplomas e históricos escolares por tradutores públicos ajuramentados.',
    },
    {
      icon: Plane,
      title: 'Passagem Aérea Internacional Garantida',
      description: 'Bilhete aéreo internacional de ida emitido pela TAAG Linhas Aéreas de Angola ou companhias aéreas parceiras, já com 2 malas de porão incluídas.',
    },
    {
      icon: HeartPulse,
      title: 'Seguro de Viagem & Apoio Financeiro',
      description: 'Apólice de seguro de saúde internacional exigida pelo Espaço Schengen (30.000€ de cobertura) mais um subsídio inicial de instalação entregue ao vencedor.',
    },
  ];

  return (
    <section id="pacote-completo" className="py-16 lg:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 mb-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>O Significado de "Tudo Pago"</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            O Que Está Incluído no Tratamento de Visto Gratuito
          </h2>

          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Muitos angolanos perdem dinheiro com burlas e agendamentos falsos. Na KambaVisto, o contemplado tem a garantia de um processo 100% legal, transparente e com todos os custos absorvidos pelo nosso fundo de mobilidade internacional.
          </p>
        </div>

        {/* 6 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Coberto pela KambaVisto</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Showcase Banner Section with Destinations image */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="p-8 sm:p-10 lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Destinos Estruturados para Angolanos
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Portugal, Canadá, Brasil e Espaço Schengen Europeu
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trabalhamos exclusivamente com embaixadas e consulados oficiais acreditados em Luanda. Nossos acordos garantem canais transparentes de submissão documental para estudantes, trabalhadores qualificados e famílias.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span>✓ Sem taxas ocultas</span>
              <span>✓ Acompanhamento presencial</span>
              <span>✓ Auditoria em Luanda</span>
            </div>
          </div>

          <div className="lg:col-span-6 h-64 sm:h-80 lg:h-full relative overflow-hidden">
            <img
              src="/src/assets/images/visa_destinations_showcase_1793810573404.jpg"
              alt="Destinos globais de visto: Lisboa, Toronto, Berlim e Brasil"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
