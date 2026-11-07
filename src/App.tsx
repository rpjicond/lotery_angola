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
import { FreeTicketModal } from './components/FreeTicketModal';
import { BuyTicketModal } from './components/BuyTicketModal';
import { DigitalTicketView } from './components/DigitalTicketView';
import { MyTicketsModal } from './components/MyTicketsModal';
import { LoadingScreen } from './components/LoadingScreen';
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
  const [freeModalOpen, setFreeModalOpen] = useState(false);
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [myTicketsOpen, setMyTicketsOpen] = useState(false);
  const [selectedDrawForAction, setSelectedDrawForAction] = useState<LotteryDraw>(LOTTERY_DRAWS[0]);
  const [viewingTicket, setViewingTicket] = useState<UserTicket | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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

  const handleOpenRegisterOrTicket = () => {
    setSelectedDrawForAction(LOTTERY_DRAWS[0]);
    setBuyModalOpen(true);
  };

  const handleOpenFreeModal = (draw?: LotteryDraw) => {
    if (draw) setSelectedDrawForAction(draw);
    setFreeModalOpen(true);
  };

  const handleSelectStep = (stepNumber: number) => {
    if (stepNumber === 1) {
      setFreeModalOpen(true);
    } else if (stepNumber === 2) {
      setBuyModalOpen(true);
    } else if (stepNumber === 3) {
      const el = document.getElementById('extracao-ao-vivo');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTicketGenerated = (newTicket: UserTicket) => {
    setTickets((prev) => [newTicket, ...prev]);
    showToast(`Bilhete ${newTicket.ticketNumber} registado na LVA com sucesso!`);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        onOpenRegisterOrTicket={handleOpenRegisterOrTicket}
        onNavigate={handleNavigate}
        ticketCount={tickets.length}
        onOpenMyTickets={() => setMyTicketsOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Hero Section matching LVA reference image */}
        <Hero
          onOpenParticipate={handleOpenRegisterOrTicket}
          onSelectStep={handleSelectStep}
        />

        {/* Prêmios do Mês (Green Icon Row & Draw Cards) */}
        <MonthlyPrizes
          onSelectDraw={(draw) => {
            setSelectedDrawForAction(draw);
            setBuyModalOpen(true);
          }}
          onOpenTicket={handleOpenRegisterOrTicket}
        />

        {/* Testemunhos de Vencedores + Sorteio Ao Vivo Widget */}
        <WinnersWall
          onOpenLiveDraw={() => {
            const el = document.getElementById('extracao-ao-vivo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Consulta Pública de Bilhetes */}
        <TicketChecker
          userTickets={tickets}
          onSelectTicketToView={(t) => setViewingTicket(t)}
        />

        {/* Sala de Extração de Sorteio ao Vivo com Globo de Esferas */}
        <LiveDrawRoom />

        {/* Sobre Nós */}
        <AboutUs />

        {/* Perguntas Frequentes (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer matching reference image with ISJ seal and social icons */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTicket={handleOpenRegisterOrTicket}
      />

      {/* Modals */}
      <FreeTicketModal
        isOpen={freeModalOpen}
        onClose={() => setFreeModalOpen(false)}
        selectedDraw={selectedDrawForAction}
        onTicketGenerated={handleTicketGenerated}
      />

      <BuyTicketModal
        isOpen={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
        draw={selectedDrawForAction}
        onTicketPurchased={handleTicketGenerated}
      />

      <DigitalTicketView
        ticket={viewingTicket}
        onClose={() => setViewingTicket(null)}
      />

      <MyTicketsModal
        isOpen={myTicketsOpen}
        onClose={() => setMyTicketsOpen(false)}
        tickets={tickets}
        onSelectTicket={(t) => setViewingTicket(t)}
        onOpenFreeTicket={() => handleOpenFreeModal()}
      />
    </div>
  );
}
