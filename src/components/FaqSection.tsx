import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Container } from './Container';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'É mesmo 100% gratuito ou terei de pagar taxas na embaixada?',
      a: 'É 100% financiado para os bilhetes contemplados. A Lotaria de Vistos Angola (LVA) e o seu fundo de mobilidade internacional cobrem integralmente todas as despesas: taxa consular oficial, taxa de agendamento no VFS Global / Capago Luanda, certidões e autenticações no MIREX, seguro de saúde internacional obrigatório de 30.000€, passagem aérea internacional e o subsídio inicial de instalação entregue ao contemplado.',
    },
    {
      q: 'Como funciona o Bilhete Grátis Diário?',
      a: 'Como iniciativa de cidadania e acesso universal a oportunidades, todo cidadão angolano tem direito a emitir 1 bilhete diário gratuito registando o seu nome, número de Bilhete de Identidade (BI) e província. Pode regressar à plataforma todos os dias e garantir uma nova entrada sem qualquer custo.',
    },
    {
      q: 'E se o meu passaporte ainda estiver em tratamento no SME?',
      a: 'Pode participar perfeitamente com o seu BI. Caso o seu bilhete seja sorteado, o seu prêmio fica reservado por até 90 dias enquanto a assessoria jurídica em Luanda auxilia na tramitação prioritária do passaporte junto do Serviço de Migração e Estrangeiros (SME).',
    },
    {
      q: 'Posso participar a partir de qualquer província de Angola?',
      a: 'Sim. A LVA atende cidadãos de todas as 18 províncias (Luanda, Benguela, Huambo, Huíla, Cabinda, Uíge, Cuanza Sul, etc.). Para os vencedores residentes fora de Luanda, é assegurado o transporte e alojamento na capital durante os dias de recolha biométrica no consulado.',
    },
    {
      q: 'Como é garantida a transparência e integridade dos sorteios?',
      a: 'Os sorteios utilizam tecnologia de semente criptográfica verificável e pública sob regulamentação e supervisão direta do Instituto de Supervisão de Jogos (ISJ) de Angola. Cada bilhete possui um código hash único e as extrações das esferas são públicas e transmitidas ao vivo.',
    },
    {
      q: 'Para que servem os bilhetes adicionais pagos em Kwanzas?',
      a: 'Além do bilhete diário gratuito, os cidadãos que desejem aumentar as suas probabilidades nas extrações semanais podem adquirir bilhetes adicionais no valor de 500 Kz via Multicaixa Express (MCX), Referência Bancária ou Unitel Money.',
    },
  ];

  return (
    <section id="duvidas" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200 text-slate-900">
      <Container className="max-w-4xl">
        
        {/* Header da Secção */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
            Dúvidas & Esclarecimentos
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Consulte os procedimentos oficiais, regras de patrocínio e requisitos de participação.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-colors hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
