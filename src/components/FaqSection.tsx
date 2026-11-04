import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'É mesmo 100% gratuito ou vou ter que pagar taxas na embaixada?',
      a: 'É 100% gratuito para os bilhetes contemplados. A KambaVisto e o seu fundo de mobilidade internacional cobrem integralmente todas as despesas: taxa consular oficial, taxa de agendamento no VFS Global Luanda, certidões e autenticações no MIREX, seguro de saúde internacional obrigatório, passagem aérea internacional e o subsídio inicial de instalação entregue ao vencedor.',
    },
    {
      q: 'Como funciona o Bilhete Grátis Diário?',
      a: 'Como iniciativa de cidadania e acesso universal a oportunidades, todo cidadão angolano tem direito a emitir 1 bilhete diário gratuito registando o seu nome, número de Bilhete de Identidade (BI) e província. Pode voltar ao site todos os dias e garantir uma nova entrada sem pagar nada.',
    },
    {
      q: 'E se o meu passaporte ainda estiver em tratamento no SME?',
      a: 'Pode participar perfeitamente com o seu BI. Caso o seu bilhete seja sorteado, o seu prêmio fica reservado por até 90 dias enquanto a nossa assessoria em Luanda auxilia na aceleração da emissão do seu passaporte junto do Serviço de Migração e Estrangeiros (SME).',
    },
    {
      q: 'Posso participar a partir de qualquer província de Angola?',
      a: 'Sim! A KambaVisto atende angolanos de todas as 18 províncias (Luanda, Benguela, Huambo, Huíla, Cabinda, Uíge, Cuanza Sul, etc.). Para os vencedores que residem fora de Luanda, providenciamos também o transporte e alojamento na capital durante os dias de recolha biométrica no consulado.',
    },
    {
      q: 'Como é garantida a transparência e honestidade dos sorteios?',
      a: 'Os sorteios utilizam tecnologia de semente criptográfica verificável e pública. Cada bilhete possui um código hash único. A extração das esferas é transmitida ao vivo na nossa Sala de Sorteio e os resultados são arquivados com número de processo, nome do titular e província.',
    },
    {
      q: 'Para que servem os bilhetes adicionais pagos em Kwanzas?',
      a: 'Além do bilhete diário gratuito (garantido para todos), os participantes que desejam multiplicar as suas probabilidades de vencer no sorteio de cada semana podem adquirir bilhetes adicionais via Multicaixa Express (MCX), Referência Bancária (BAI/BFA) ou Unitel Money a partir de 1.000 AOA.',
    },
  ];

  return (
    <section id="duvidas" className="py-16 bg-[#051330] border-t border-[#0a275f] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FBBF24] bg-[#FBBF24]/10 border border-[#FBBF24]/30 px-3 py-1 rounded-full mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>Perguntas Frequentes & Transparência</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FBBF24] tracking-tight font-display">
            Tudo o que Precisa de Saber Sobre a Lotaria
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Respostas claras para as dúvidas mais comuns dos cidadãos angolanos.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#133A7C] rounded-2xl overflow-hidden transition-all bg-[#081F4A]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left font-bold text-sm text-white flex items-center justify-between gap-4 cursor-pointer hover:bg-[#0c2a63] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#FBBF24] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-[#133A7C]/60 bg-[#071b40]">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-[#081F4A] border border-[#FBBF24]/30 rounded-2xl flex items-center gap-3 text-xs text-slate-200">
          <ShieldCheck className="w-5 h-5 text-[#FBBF24] shrink-0" />
          <p>
            Tem mais alguma dúvida? A nossa equipa de apoio atende presencialmente em Luanda (Talatona) e pelo WhatsApp oficial de segunda a sábado das 08h às 18h.
          </p>
        </div>
      </div>
    </section>
  );
};
