import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MonthlyPrizes } from './components/MonthlyPrizes';
import { WinnersWall } from './components/WinnersWall';
import { AboutUs } from './components/AboutUs';
import { LiveDrawRoom } from './components/LiveDrawRoom';
import { TicketChecker } from './components/TicketChecker';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { TicketPurchasePage } from './components/TicketPurchasePage';
import { MyTicketsPage } from './components/MyTicketsPage';
import { DigitalTicketPage } from './components/DigitalTicketPage';
import { LoadingScreen } from './components/LoadingScreen';
import { LoginPage } from './components/LoginPage';
import { AdminDashboard } from './components/AdminDashboard';
import { LOTTERY_DRAWS, INITIAL_USER_TICKETS } from './data/lotteries';
import { LotteryDraw, UserTicket } from './types/lottery';
import { Check } from 'lucide-react';

export default function App() {
  const [tickets, setTickets] = useState<UserTicket[]>(() => {
    try {
      const saved = localStorage.getItem('lva_lotaria_tickets');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_USER_TICKETS;
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash || '');
  const [selectedDrawForAction, setSelectedDrawForAction] = useState<LotteryDraw>(LOTTERY_DRAWS[0]);
  const [purchaseMode, setPurchaseMode] = useState<'buy' | 'free'>('buy');
  const [viewingTicket, setViewingTicket] = useState<UserTicket | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hash routing listener
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('lva_lotaria_tickets', JSON.stringify(tickets));
    } catch {
      // ignore
    }
  }, [tickets]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenPurchase = (draw?: LotteryDraw, mode: 'buy' | 'free' = 'buy') => {
    if (draw) setSelectedDrawForAction(draw);
    setPurchaseMode(mode);
    setViewingTicket(null);
    window.location.hash = '#comprar';
  };

  const handleOpenMyTickets = () => {
    setViewingTicket(null);
    window.location.hash = '#meus-bilhetes';
  };

  const handleSelectStep = (stepNumber: number) => {
    if (stepNumber === 1) {
      handleOpenPurchase(LOTTERY_DRAWS[0], 'free');
    } else if (stepNumber === 2) {
      handleOpenPurchase(LOTTERY_DRAWS[0], 'buy');
    } else if (stepNumber === 3) {
      if (window.location.hash) {
        window.location.hash = '';
      }
      setTimeout(() => {
        const el = document.getElementById('extracao-ao-vivo');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const handleTicketGenerated = (newTicket: UserTicket) => {
    setTickets((prev) => [newTicket, ...prev]);
    showToast(`Bilhete ${newTicket.ticketNumber} registado na LVA com sucesso!`);
  };

  const handleNavigate = (sectionId: string) => {
    if (window.location.hash) {
      window.location.hash = '';
    }
    setViewingTicket(null);
    setActiveSection(sectionId);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // 1. If authenticated as admin
  if (isAdmin) {
    return <AdminDashboard onLogout={() => setIsAdmin(false)} />;
  }

  // 2. If viewing a specific digital ticket certificate
  if (viewingTicket) {
    return (
      <DigitalTicketPage
        ticket={viewingTicket}
        onBack={() => setViewingTicket(null)}
        onGoToHome={() => {
          setViewingTicket(null);
          window.location.hash = '';
        }}
      />
    );
  }

  // 3. If hash is #login, render LoginPage
  if (currentHash === '#login') {
    return (
      <LoginPage
        onLoginSuccess={(name, id) => {
          if (id.toLowerCase() === 'admin' && name.toLowerCase() === 'admin') {
            setIsAdmin(true);
            window.location.hash = '';
          } else {
            showToast('Credenciais inválidas.');
          }
        }}
        onBackToHome={() => {
          window.location.hash = '';
        }}
      />
    );
  }

  // 4. Dedicated Ticket Purchase & Registration Page
  if (
    currentHash === '#comprar' ||
    currentHash === '#comprar-bilhete' ||
    currentHash === '#registo'
  ) {
    return (
      <TicketPurchasePage
        initialDraw={selectedDrawForAction}
        initialMode={purchaseMode}
        onBackToHome={() => {
          window.location.hash = '';
        }}
        onTicketCreated={handleTicketGenerated}
        onGoToMyTickets={() => {
          window.location.hash = '#meus-bilhetes';
        }}
      />
    );
  }

  // 5. Dedicated "Os Meus Bilhetes" Page
  if (currentHash === '#meus-bilhetes') {
    return (
      <MyTicketsPage
        tickets={tickets}
        onBackToHome={() => {
          window.location.hash = '';
        }}
        onGoToPurchase={() => {
          handleOpenPurchase(LOTTERY_DRAWS[0], 'buy');
        }}
        onSelectTicketToView={(t) => setViewingTicket(t)}
      />
    );
  }

  // 6. Public Landing Page
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#FACC15] selection:text-slate-950">
      {/* Loading Screen with official LVA dual passport logo symbol */}
      <LoadingScreen />

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111827] text-white px-5 py-3.5 rounded-2xl border-2 border-[#FACC15] shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-8 h-8 rounded-full bg-[#FACC15] text-[#0B0F19] flex items-center justify-center font-bold">
            <Check className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* LVA Top Bar Navigation */}
      <Navbar
        onOpenRegisterOrTicket={() => handleOpenPurchase(LOTTERY_DRAWS[0], 'buy')}
        onNavigate={handleNavigate}
        ticketCount={tickets.length}
        onOpenMyTickets={handleOpenMyTickets}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenParticipate={() => handleOpenPurchase(LOTTERY_DRAWS[0], 'buy')}
          onSelectStep={handleSelectStep}
        />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />

        {/* Prêmios do Mês (Draw Cards) */}
        <MonthlyPrizes
          onSelectDraw={(draw) => handleOpenPurchase(draw, 'buy')}
          onOpenTicket={() => handleOpenPurchase(LOTTERY_DRAWS[0], 'buy')}
        />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />

        {/* Testemunhos de Vencedores + Sorteio Ao Vivo Widget */}
        <WinnersWall
          onOpenLiveDraw={() => {
            const el = document.getElementById('extracao-ao-vivo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />

        {/* Consulta Pública de Bilhetes */}
        <TicketChecker
          userTickets={tickets}
          onSelectTicketToView={(t) => setViewingTicket(t)}
        />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />

        {/* Sala de Extração de Sorteio ao Vivo com Globo de Esferas */}
        <LiveDrawRoom />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />

        {/* Sobre Nós */}
        <AboutUs />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />

        {/* Perguntas Frequentes (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer matching reference image with ISJ seal and social icons */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTicket={() => handleOpenPurchase(LOTTERY_DRAWS[0], 'buy')}
      />
    </div>
  );
}
