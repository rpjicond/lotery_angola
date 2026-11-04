import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (id: string) => void;
  onOpenTicket: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenTicket,
}) => {
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);

  const openLegalModal = (title: string, body: string) => {
    setModalContent({ title, body });
  };

  return (
    <footer id="contactos" className="bg-[#071F4A] text-white border-t border-[#0d347c] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout matching exact reference image */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          
          {/* Left: Navigation links and Copyright */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-[13px] text-slate-200 font-medium">
              <button
                onClick={() => onNavigate('sobre-nos')}
                className="hover:text-[#FFDE00] transition-colors cursor-pointer"
              >
                Links Úteis
              </button>
              <button
                onClick={() =>
                  openLegalModal(
                    'Termos e Condições da Lotaria de Vistos Angola (LVA)',
                    'A participação na LVA está sujeita aos regulamentos estabelecidos pelo Instituto de Supervisão de Jogos (ISJ) de Angola. Os bilhetes têm o valor de 500 Kz e cada cidadão tem direito a 1 bilhete diário gratuito registado com o seu Número de Identificação Nacional (BI). Os prêmios incluem custeamento total de taxas consulares, assessoria jurídica documental no MIREX e emissão de passagens aéreas internacionais.'
                  )
                }
                className="hover:text-[#FFDE00] transition-colors cursor-pointer"
              >
                Termos e Condições
              </button>
              <button
                onClick={() =>
                  openLegalModal(
                    'Política de Privacidade e Proteção de Dados',
                    'Todos os dados civis (Nome Completo, Número de BI e Telefone) recolhidos pela Lotaria de Vistos Angola são protegidos e utilizados estritamente para o registro e validação legal dos bilhetes e verificação dos contemplados perante o regulador nacional e os consulados internacionais.'
                  )
                }
                className="hover:text-[#FFDE00] transition-colors cursor-pointer"
              >
                Política de Privacidade
              </button>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-300">
              Copyright © 2024 Loteria de Vistos Angola. Todos os direitos reservados.
            </p>
          </div>

          {/* Right: Social Media Icons + Regulatory Seal */}
          <div className="flex items-center justify-center md:justify-end gap-3.5 sm:gap-4 shrink-0">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md hover:scale-110 transition-transform"
              aria-label="Facebook Oficial"
            >
              f
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#405DE6] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-md hover:scale-110 transition-transform"
              aria-label="Instagram Oficial"
            >
              ig
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/244923000000"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs font-bold shadow-md hover:scale-110 transition-transform"
              aria-label="WhatsApp Suporte"
            >
              wa
            </a>

            {/* Official Regulator Seal Image */}
            <div className="pl-1 sm:pl-2">
              <img
                src="/assets/lva/regulator_emblem.png"
                alt="Regulador Nacional de Jogos e Apostas - Angola"
                className="h-7 sm:h-9 w-auto object-contain"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Legal terms modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#07245A] border-2 border-[#FFDE00] text-white max-w-lg w-full p-6 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-lg font-black text-[#FFDE00] mb-3">
              {modalContent.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
              {modalContent.body}
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="px-5 py-2 rounded-xl bg-[#FFDE00] text-slate-950 font-bold text-xs uppercase cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
