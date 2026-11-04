import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Lock,
  ArrowRight,
} from 'lucide-react';

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
    <footer id="contactos" className="bg-[#030C1E] text-white border-t border-[#0D2F6B] pt-12 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#0d347c]/60">
          
          {/* Column 1: Brand & Logo (LVA) */}
          <div className="lg:col-span-4 space-y-4">
            {/* LVA Official Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('hero');
              }}
              className="flex items-center gap-3 group shrink-0 inline-flex"
            >
              {/* Tilted Passports Logo */}
              <div className="relative flex items-center shrink-0 w-11 h-9">
                <div className="absolute left-0 top-0.5 w-6 h-8 bg-[#0B2C69] border border-[#FBBF24] rounded-[3px] flex flex-col items-center justify-center shadow-md rotate-[-9deg]">
                  <div className="w-2.5 h-2.5 rounded-full border border-[#FFDE00] flex items-center justify-center text-[5px] text-[#FFDE00] font-black">
                    ★
                  </div>
                  <div className="w-3.5 h-[1.5px] bg-[#FFDE00] mt-0.5 opacity-90" />
                </div>
                <div className="absolute left-3.5 top-0 w-6 h-8 bg-[#FBBF24] border border-amber-300 rounded-[3px] flex items-center justify-center shadow-md rotate-[9deg]">
                  <span className="text-[7.5px] font-black text-slate-950 tracking-tighter">AO</span>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-baseline gap-1.5 leading-none">
                  <span className="text-2xl font-black tracking-tight text-white font-display">
                    LVA
                  </span>
                  <span className="text-xs font-bold text-white tracking-tight">
                    – Lotaria de Vistos Angola
                  </span>
                </div>
                <span className="text-xs text-[#FFDE00] italic font-normal tracking-wide mt-0.5">
                  O Seu Passaporte Para o Mundo!
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Plataforma oficial de incentivo à mobilidade internacional e financiamento de vistos para Portugal, Europa, Canadá e Brasil.
            </p>

            <div className="flex items-center gap-2 p-2.5 bg-[#071D45] rounded-xl border border-[#133A7C] text-xs text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Entidade auditada e regulada pelo Instituto de Supervisão de Jogos (ISJ).</span>
            </div>
          </div>

          {/* Column 2: Navegação Rápida */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-black text-[#FFDE00] uppercase tracking-wider font-display">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#FFDE00] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#FFDE00]" />
                  <span>Início</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('como-funciona')}
                  className="hover:text-[#FFDE00] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#FFDE00]" />
                  <span>Como Funciona</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('premios')}
                  className="hover:text-[#FFDE00] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#FFDE00]" />
                  <span>Prêmios a Ganhar</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vencedores')}
                  className="hover:text-[#FFDE00] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#FFDE00]" />
                  <span>Vencedores</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('duvidas')}
                  className="hover:text-[#FFDE00] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3 h-3 text-[#FFDE00]" />
                  <span>Perguntas Frequentes (FAQ)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Destinos de Vistos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-[#FFDE00] uppercase tracking-wider font-display">
              Destinos Financiados
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-base">🇵🇹</span>
                <span className="font-semibold text-white">Portugal · Vistos CPLP, D2, D7 e Procura de Trabalho</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base">🇫🇷</span>
                <span className="font-semibold text-white">França · Vistos Schengen, Estudos (Campus France) e Talent Passport</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base">🇨🇦</span>
                <span>Canadá · Express Entry e Visto de Estudos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-base">🇧🇷</span>
                <span>Brasil · Visto de Residência CPLP e Trabalho</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Apoio ao Cidadão & Contacto */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-[#FFDE00] uppercase tracking-wider font-display">
              Apoio ao Cidadão
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFDE00] shrink-0 mt-0.5" />
                <span>Avenida 4 de Fevereiro, Marginal de Luanda, Angola</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFDE00] shrink-0" />
                <span>+244 923 000 000 · Linha Direta LVA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFDE00] shrink-0" />
                <span>suporte@lotariavistosangola.ao</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Validação Automática por Número de BI</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenTicket}
                className="w-full py-2.5 px-4 text-xs font-black text-slate-950 bg-[#FFDE00] hover:bg-[#F3B700] rounded-xl transition-all shadow-md cursor-pointer uppercase tracking-tight"
              >
                Emitir Bilhete Grátis com BI
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-300">
          
          {/* Legal Links & Copyright */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300 font-medium">
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
              <span>·</span>
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
              <span>·</span>
              <button
                onClick={() => onNavigate('sobre-nos')}
                className="hover:text-[#FFDE00] transition-colors cursor-pointer"
              >
                Supervisão do ISJ
              </button>
            </div>

            <p className="text-[11px] text-slate-400">
              Copyright © 2026 Lotaria de Vistos Angola. Todos os direitos reservados.
            </p>
          </div>

          {/* Social Icons & Official Regulator Seal */}
          <div className="flex items-center justify-center md:justify-end gap-3.5 shrink-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs font-bold shadow-md hover:scale-110 transition-transform"
              aria-label="Facebook Oficial"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#405DE6] text-white flex items-center justify-center text-xs font-bold shadow-md hover:scale-110 transition-transform"
              aria-label="Instagram Oficial"
            >
              ig
            </a>
            <a
              href="https://wa.me/244923000000"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs font-bold shadow-md hover:scale-110 transition-transform"
              aria-label="WhatsApp Suporte"
            >
              wa
            </a>

            {/* Official Regulator Seal */}
            <div className="pl-2 border-l border-slate-700">
              <img
                src="/assets/lva/regulator_emblem.png"
                alt="Regulador Nacional de Jogos e Apostas - Angola"
                className="h-9 w-auto object-contain"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Legal terms modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#07245A] border-2 border-[#FFDE00] text-white max-w-lg w-full p-6 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-lg font-black text-[#FFDE00] mb-3 font-display">
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
