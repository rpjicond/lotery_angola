import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Home,
  BookOpen,
  Award,
  Trophy,
  Search,
  Radio,
  HelpCircle,
  ShieldCheck,
  Phone,
  CheckCircle2,
} from 'lucide-react';

interface NavbarProps {
  onOpenRegisterOrTicket: () => void;
  onNavigate: (sectionId: string) => void;
  ticketCount: number;
  onOpenMyTickets: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegisterOrTicket,
  onNavigate,
  ticketCount,
  onOpenMyTickets,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'como-funciona', label: 'Como Funciona' },
    { id: 'premios', label: 'Prêmios' },
    { id: 'duvidas', label: 'Perguntas Frequentes (FAQ)' },
    { id: 'sobre-nos', label: 'Sobre Nós' },
    { id: 'contactos', label: 'Contactos' },
  ];

  const mobileNavItems = [
    { id: 'hero', label: 'Início', icon: Home },
    { id: 'como-funciona', label: 'Como Funciona', icon: BookOpen },
    { id: 'premios', label: 'Prêmios', icon: Award },
    { id: 'vencedores', label: 'Vencedores', icon: Trophy },
    { id: 'verificador', label: 'Consultar Bilhete', icon: Search },
    { id: 'extracao-ao-vivo', label: 'Sorteio Ao Vivo', icon: Radio },
    { id: 'duvidas', label: 'Perguntas Frequentes', icon: HelpCircle },
    { id: 'sobre-nos', label: 'Sobre Nós', icon: ShieldCheck },
    { id: 'contactos', label: 'Contactos', icon: Phone },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 pointer-events-auto ${
        isScrolled
          ? 'bg-[#050914]/90 backdrop-blur-md shadow-sm border-b border-slate-800/80'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="flex items-center justify-between h-[76px] bg-transparent">
          
          {/* Brand Logo Zone: Exactly matching image_bc95a419.png */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group py-1 shrink-0 bg-transparent"
            title="LVA – Lotaria de Vistos Angola"
          >
            {/* Tilted Passports (Blue with star & Yellow with AO) */}
            <div className="relative flex items-center shrink-0 w-11 h-9">
              {/* Blue Passport */}
              <div className="absolute left-0 top-0.5 w-6 h-8 bg-[#0B2C69] border border-[#FBBF24] rounded-[3px] flex flex-col items-center justify-center shadow-md rotate-[-9deg] transition-transform group-hover:rotate-[-12deg]">
                <div className="w-2.5 h-2.5 rounded-full border border-[#FFDE00] flex items-center justify-center text-[5px] text-[#FFDE00] font-black leading-none">
                  ★
                </div>
                <div className="w-3.5 h-[1.5px] bg-[#FFDE00] mt-0.5 opacity-90" />
              </div>
              {/* Yellow Passport with AO */}
              <div className="absolute left-3.5 top-0 w-6 h-8 bg-[#FBBF24] border border-amber-300 rounded-[3px] flex items-center justify-center shadow-md rotate-[9deg] transition-transform group-hover:rotate-[12deg]">
                <span className="text-[7.5px] font-black text-slate-950 tracking-tighter">AO</span>
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col justify-center select-none bg-transparent">
              <div className="flex items-baseline gap-1 sm:gap-1.5 leading-none bg-transparent">
                <span className="text-xl min-[360px]:text-2xl sm:text-[26px] font-black tracking-tight text-white font-display">
                  LVA
                </span>
                <span className="text-[11px] min-[360px]:text-xs sm:text-sm font-bold text-white tracking-tight whitespace-nowrap">
                  – Lotaria de Vistos Angola
                </span>
              </div>
              <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs text-[#FFDE00] italic font-normal tracking-wide mt-0.5 whitespace-nowrap">
                O Seu Passaporte Para o Mundo!
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links matching exact items in screenshot */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-xs sm:text-sm font-medium text-slate-200 bg-transparent">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap bg-transparent ${
                    isActive
                      ? 'text-[#FFDE00] font-semibold'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#FFDE00] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 bg-transparent xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white bg-transparent hover:bg-white/10 active:bg-white/15 focus:outline-none flex items-center justify-center cursor-pointer transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#FFDE00]" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Matching Screenshots Capture_d__cran_2026-11-04_211930 & 211946 */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#0a275f]/80 bg-[#040C1D]/98 backdrop-blur-md shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-3.5">
            
            {/* Card 1: Official Draw Banner matching screenshot */}
            <div className="bg-[#0B2C69] border-2 border-[#FBBF24] rounded-2xl p-4 text-white shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-[11px] font-black text-[#FBBF24] uppercase tracking-wide">
                    SORTEIO OFICIAL ABERTO
                  </span>
                </div>
                <span className="text-[10px] font-black text-slate-950 bg-[#FBBF24] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Apenas 500 Kz
                </span>
              </div>

              <h4 className="text-sm font-extrabold text-white leading-snug">
                Concorra a Visto 100% Gratuito, MIREX e Passagens Aéreas!
              </h4>

              <button
                type="button"
                onClick={() => {
                  onOpenRegisterOrTicket();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 rounded-full text-xs font-black text-slate-950 bg-[#FFDE00] hover:bg-[#F3B700] active:bg-amber-500 shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight"
              >
                <span>QUERO PARTICIPAR AGORA!</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-200 pt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>1 Bilhete Grátis Diário por BI</span>
              </div>
            </div>

            {/* Card 2: Ver Meus Bilhetes Registados matching screenshot */}
            <button
              type="button"
              onClick={() => {
                onOpenMyTickets();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 px-4 rounded-2xl text-xs font-bold text-white bg-[#0B2C69] border border-[#2353A2] shadow-md flex items-center justify-between cursor-pointer hover:bg-[#103780] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center shrink-0 w-6 h-5">
                  <div className="absolute left-0 top-0 w-4 h-5 bg-[#0B2C69] border border-[#FBBF24] rounded-[2px] rotate-[-9deg]" />
                  <div className="absolute left-2 top-0 w-4 h-5 bg-[#FBBF24] rounded-[2px] rotate-[9deg] flex items-center justify-center">
                    <span className="text-[5px] font-black text-slate-950">AO</span>
                  </div>
                </div>
                <span className="text-sm font-bold text-white">Ver Meus Bilhetes Registados</span>
              </div>
              <span className="bg-[#FFDE00] text-slate-950 font-black w-6 h-6 rounded-full text-xs flex items-center justify-center shrink-0">
                {ticketCount > 0 ? ticketCount : 2}
              </span>
            </button>

            {/* Card 3: Mobile Navigation List matching screenshot */}
            <div className="bg-[#071F4A] rounded-2xl border border-[#133A7C] p-2 space-y-1 shadow-xl">
              {mobileNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left py-3 px-3.5 rounded-xl text-xs font-semibold flex items-center justify-between cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-[#0E387D] text-[#FFDE00] font-bold shadow-sm'
                        : 'text-slate-200 hover:bg-[#0B2C69] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#FFDE00]' : 'text-slate-300'}`} />
                      <span className={isActive ? 'text-[#FFDE00] font-bold' : 'text-white'}>
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
