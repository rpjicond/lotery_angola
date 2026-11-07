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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 text-slate-900'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="flex items-center justify-between h-[74px] bg-transparent">
          
          {/* Brand Logo Zone */}
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
                <span className="text-xl min-[360px]:text-2xl sm:text-[26px] font-black tracking-tight text-slate-900 font-display">
                  LVA
                </span>
                <span className="text-[11px] min-[360px]:text-xs sm:text-sm font-bold text-slate-700 tracking-tight whitespace-nowrap">
                  – Lotaria de Vistos Angola
                </span>
              </div>
              <span className="text-[10px] min-[360px]:text-[11px] sm:text-xs text-amber-600 font-semibold italic tracking-wide mt-0.5 whitespace-nowrap">
                O Seu Passaporte Para o Mundo!
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 text-xs sm:text-sm font-semibold text-slate-700 bg-transparent">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap bg-transparent ${
                    isActive
                      ? 'text-slate-950 font-bold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#FACC15] rounded-full" />
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
              className="p-2 rounded-xl text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 focus:outline-none flex items-center justify-center cursor-pointer transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Light Theme */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-80px)] overflow-y-auto text-slate-900">
          <div className="px-4 py-4 space-y-3.5">
            
            {/* Card 1: Official Draw Banner */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-[11px] font-black text-[#FACC15] uppercase tracking-wide">
                    SORTEIO OFICIAL ABERTO
                  </span>
                </div>
                <span className="text-[10px] font-black text-slate-950 bg-[#FACC15] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Apenas 500 Kz
                </span>
              </div>

              <h4 className="text-sm font-bold text-white leading-snug">
                Concorra a Visto 100% Gratuito, MIREX e Passagens Aéreas!
              </h4>

              <button
                type="button"
                onClick={() => {
                  onOpenRegisterOrTicket();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 rounded-xl text-xs font-black text-slate-950 bg-[#FACC15] hover:bg-yellow-400 active:bg-yellow-500 shadow flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight"
              >
                <span>QUERO PARTICIPAR AGORA!</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300 pt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>1 Bilhete Grátis Diário por BI</span>
              </div>
            </div>

            {/* Card 2: Ver Meus Bilhetes Registados */}
            <button
              type="button"
              onClick={() => {
                onOpenMyTickets();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 px-4 rounded-2xl text-xs font-bold text-slate-900 bg-slate-100 border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-200 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center shrink-0 w-6 h-5">
                  <div className="absolute left-0 top-0 w-4 h-5 bg-[#0B2C69] border border-[#FBBF24] rounded-[2px] rotate-[-9deg]" />
                  <div className="absolute left-2 top-0 w-4 h-5 bg-[#FBBF24] rounded-[2px] rotate-[9deg] flex items-center justify-center">
                    <span className="text-[5px] font-black text-slate-950">AO</span>
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-900">Ver Meus Bilhetes Registados</span>
              </div>
              <span className="bg-[#FACC15] text-slate-950 font-black w-6 h-6 rounded-full text-xs flex items-center justify-center shrink-0">
                {ticketCount > 0 ? ticketCount : 2}
              </span>
            </button>

            {/* Card 3: Mobile Navigation List */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-2 space-y-1 shadow-sm">
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
                        ? 'bg-white text-slate-950 font-bold shadow-sm border border-slate-200'
                        : 'text-slate-700 hover:bg-slate-200/60 hover:text-slate-950'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-amber-600' : 'text-slate-500'}`} />
                      <span className={isActive ? 'text-slate-950 font-bold' : 'text-slate-800'}>
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
