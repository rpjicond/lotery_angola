import React, { useState } from 'react';
import {
  LayoutDashboard,
  Radio,
  Ticket,
  ShieldCheck,
  Search,
  ExternalLink,
  LogOut,
  Download,
  Users,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Play,
  RotateCcw,
  FileText,
  Lock,
  Filter,
  CheckCircle2,
  XCircle,
  Eye,
  Hash,
  Shield,
  Award,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import { CountryFlag } from './CountryFlag';

interface AdminDashboardProps {
  onLogout: () => void;
}

// ----------------------------------------------------------------------
// DADOS OPERACIONAIS E ESTATÍSTICOS DA LVA ANGOLA
// ----------------------------------------------------------------------

const dailyTicketsTrend = [
  { dia: '01 Nov', total: 340, pagos: 220, gratis: 120 },
  { dia: '02 Nov', total: 420, pagos: 260, gratis: 160 },
  { dia: '03 Nov', total: 510, pagos: 320, gratis: 190 },
  { dia: '04 Nov', total: 680, pagos: 440, gratis: 240 },
  { dia: '05 Nov', total: 890, pagos: 580, gratis: 310 },
  { dia: '06 Nov', total: 1120, pagos: 710, gratis: 410 },
  { dia: '07 Nov', total: 980, pagos: 630, gratis: 350 },
  { dia: 'Hoje', total: 1250, pagos: 760, gratis: 490 },
];

const provinceParticipants = [
  { provincia: 'Luanda', total: 7200 },
  { provincia: 'Benguela', total: 2450 },
  { provincia: 'Huambo', total: 1680 },
  { provincia: 'Huíla', total: 1290 },
  { provincia: 'Cabinda', total: 980 },
  { provincia: 'Cuanza Sul', total: 680 },
];

const destinationShare = [
  { name: 'Portugal', value: 65, color: '#0F172A' },
  { name: 'França', value: 35, color: '#64748B' },
];

const ticketTypeShare = [
  { name: 'Pagos (500 Kz)', value: 62, color: '#0F172A' },
  { name: 'Grátis (BI)', value: 38, color: '#94A3B8' },
];

// Dados dos Sorteios Oficiais
interface DrawItem {
  id: string;
  code: string;
  title: string;
  destination: string;
  flag: string;
  vagas: number;
  totalBilhetes: number;
  dataSorteio: string;
  status: 'Ativo' | 'Extração Próxima' | 'Concluído';
  auditorISJ: string;
  rngHash: string;
}

const officialDrawsList: DrawItem[] = [
  {
    id: 'draw-pt-48',
    code: 'LVA-PT-2026-48',
    title: 'Sorteio Oficial Portugal: Vistos de Trabalho & Estudo',
    destination: 'Portugal (Lisboa, Porto, Coimbra)',
    flag: 'PT',
    vagas: 3,
    totalBilhetes: 9280,
    dataSorteio: 'Sexta-Feira, 20:00 (Hora de Luanda)',
    status: 'Extração Próxima',
    auditorISJ: 'Dr. Afonso Banza (Credencial ISJ #8812)',
    rngHash: '0x8f4c71a392e9bb20314f'
  },
  {
    id: 'draw-fr-26',
    code: 'LVA-FR-2026-26',
    title: 'Sorteio Oficial França: Vistos de Trabalho & Estudo',
    destination: 'França (Paris, Lyon, Marseille)',
    flag: 'FR',
    vagas: 2,
    totalBilhetes: 5000,
    dataSorteio: 'Quarta-Feira, 20:30 (Hora de Luanda)',
    status: 'Ativo',
    auditorISJ: 'Dra. Helena Massango (Credencial ISJ #9042)',
    rngHash: '0x3c990b71f92e01b7a941'
  }
];

// Base Completa de Bilhetes
interface TicketItem {
  id: string;
  cod: string;
  nome: string;
  bi: string;
  dest: string;
  mod: 'Grátis' | 'Pago';
  data: string;
  status: 'Válido' | 'Premiado' | 'Em Análise';
  contacto: string;
  provincia: string;
}

const verifiedTicketsList: TicketItem[] = [
  { id: '1', cod: 'LVA-2026-89104', nome: 'Jandira Mateus', bi: '006841209LA048', dest: 'Portugal (Porto)', mod: 'Grátis', data: 'Hoje, 11:24', status: 'Premiado', contacto: '+244 923 881 204', provincia: 'Luanda' },
  { id: '2', cod: 'LVA-2026-92144', nome: 'Mateus Diogo Afonso', bi: '007129381BA012', dest: 'Portugal (Lisboa)', mod: 'Pago', data: 'Hoje, 10:48', status: 'Válido', contacto: '+244 912 345 678', provincia: 'Benguela' },
  { id: '3', cod: 'LVA-2026-55291', nome: 'António Kapapelo', bi: '004739102HA031', dest: 'França (Paris)', mod: 'Pago', data: 'Hoje, 09:15', status: 'Válido', contacto: '+244 944 112 005', provincia: 'Huambo' },
  { id: '4', cod: 'LVA-2026-38290', nome: 'Esperança Van-Dúnem', bi: '009218273LA099', dest: 'Portugal (Coimbra)', mod: 'Grátis', data: 'Ontem, 22:30', status: 'Válido', contacto: '+244 931 990 123', provincia: 'Luanda' },
  { id: '5', cod: 'LVA-2026-19402', nome: 'Bernardo Tchipalanga', bi: '001928374BE052', dest: 'França (Lyon)', mod: 'Pago', data: 'Ontem, 20:12', status: 'Válido', contacto: '+244 924 883 190', provincia: 'Benguela' },
  { id: '6', cod: 'LVA-2026-11892', nome: 'Teresa Nzuzi Simão', bi: '008321094HU019', dest: 'Portugal (Lisboa)', mod: 'Grátis', data: 'Ontem, 18:40', status: 'Válido', contacto: '+244 991 445 102', provincia: 'Huíla' },
  { id: '7', cod: 'LVA-2026-77401', nome: 'Domingos Sebastião Muachifi', bi: '003291823BA074', dest: 'França (Paris)', mod: 'Pago', data: '06 Nov, 16:30', status: 'Válido', contacto: '+244 928 301 992', provincia: 'Benguela' },
  { id: '8', cod: 'LVA-2026-64023', nome: 'Cláudia Lukeni de Sousa', bi: '005492019LA022', dest: 'Portugal (Porto)', mod: 'Grátis', data: '06 Nov, 14:15', status: 'Válido', contacto: '+244 933 129 004', provincia: 'Luanda' },
  { id: '9', cod: 'LVA-2026-44021', nome: 'Manuel Francisco Dinis', bi: '001827364HA081', dest: 'Portugal (Lisboa)', mod: 'Pago', data: '05 Nov, 21:05', status: 'Válido', contacto: '+244 947 882 103', provincia: 'Huambo' },
  { id: '10', cod: 'LVA-2026-90312', nome: 'Helena Bartolomeu Kiala', bi: '009182734LA067', dest: 'França (Marseille)', mod: 'Grátis', data: '05 Nov, 17:50', status: 'Válido', contacto: '+244 922 710 338', provincia: 'Luanda' },
  { id: '11', cod: 'LVA-2026-31902', nome: 'Gabriel Samakuva Pires', bi: '007812903CA011', dest: 'Portugal (Lisboa)', mod: 'Pago', data: '05 Nov, 14:20', status: 'Válido', contacto: '+244 919 002 441', provincia: 'Cabinda' },
  { id: '12', cod: 'LVA-2026-88120', nome: 'Albertina Kassoma', bi: '002910394CS082', dest: 'França (Paris)', mod: 'Grátis', data: '04 Nov, 19:45', status: 'Válido', contacto: '+244 940 881 920', provincia: 'Cuanza Sul' }
];

// Registos do Log de Auditoria ISJ
interface AuditLogItem {
  id: string;
  data: string;
  hora: string;
  evento: string;
  tipo: 'Verificação' | 'Semente RNG' | 'Bloqueio' | 'Certificação';
  detalhe: string;
  status: 'Conforme' | 'Bloqueado' | 'Auditado';
  auditor: string;
}

const auditLogsList: AuditLogItem[] = [
  {
    id: 'log-1',
    data: 'Hoje',
    hora: '11:30:14',
    evento: 'Verificação Criptográfica SHA-256',
    tipo: 'Certificação',
    detalhe: 'Bloco de extração #48 validado com algoritmo NIST SP 800-90A',
    status: 'Auditado',
    auditor: 'Dr. Afonso Banza (ISJ)'
  },
  {
    id: 'log-2',
    data: 'Hoje',
    hora: '10:15:02',
    evento: 'Tentativa de Registo Duplicado',
    tipo: 'Bloqueio',
    detalhe: 'BI 006841209LA048 tentou gerar 2º bilhete grátis no mesmo dia',
    status: 'Bloqueado',
    auditor: 'Sistema LVA'
  },
  {
    id: 'log-3',
    data: 'Hoje',
    hora: '09:00:00',
    evento: 'Geração de Semente Pública',
    tipo: 'Semente RNG',
    detalhe: 'Seed: 0x9f88c12a883e... depositada nos servidores ISJ',
    status: 'Conforme',
    auditor: 'Dra. Helena Massango (ISJ)'
  },
  {
    id: 'log-4',
    data: 'Ontem',
    hora: '23:45:10',
    evento: 'Conciliação Financeira Multicaixa',
    tipo: 'Verificação',
    detalhe: 'Total de 1.250 transações de 500 Kz reconciliadas sem discrepâncias',
    status: 'Auditado',
    auditor: 'Supervisão Financeira'
  },
  {
    id: 'log-5',
    data: 'Ontem',
    hora: '18:20:33',
    evento: 'Bloqueio de IP com padrão de automação',
    tipo: 'Bloqueio',
    detalhe: '14 requisições consecutivas fora de Angola foram suspensas',
    status: 'Bloqueado',
    auditor: 'Firewall de Segurança'
  }
];

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'visao_geral' | 'sorteios' | 'bilhetes' | 'auditoria'>('visao_geral');
  const [searchFilter, setSearchFilter] = useState('');
  const [filterType, setFilterType] = useState<'todos' | 'Grátis' | 'Pago'>('todos');
  const [selectedDrawDetails, setSelectedDrawDetails] = useState<DrawItem | null>(null);

  const CustomWhiteTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-800 text-white p-2.5 text-xs shadow-md">
          <p className="font-semibold text-slate-200 mb-1">{label}</p>
          {payload.map((item: any, i: number) => (
            <p key={i} className="flex justify-between gap-4 text-slate-300">
              <span className="text-slate-400">{item.name || 'Valor'}:</span>
              <strong className="font-mono text-white">
                {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
              </strong>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const filteredTickets = verifiedTicketsList.filter((t) => {
    const query = searchFilter.toLowerCase().trim();
    const matchesSearch =
      !query ||
      t.cod.toLowerCase().includes(query) ||
      t.nome.toLowerCase().includes(query) ||
      t.bi.toLowerCase().includes(query) ||
      t.provincia.toLowerCase().includes(query);
    const matchesType = filterType === 'todos' || t.mod === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex font-sans antialiased">
      {/* Sidebar Corporativa Enterprise: Cinza Escuro (#0F172A) */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between shrink-0 border-r border-slate-800">
        <div>
          {/* Header Marca */}
          <div className="h-16 px-6 border-b border-slate-800 flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="relative flex items-center shrink-0 w-7 h-6">
                <div className="absolute left-0 top-0 w-4 h-5 bg-[#0B2C69] border border-[#FBBF24] rounded-[1px] rotate-[-8deg] flex items-center justify-center">
                  <span className="text-[5px] text-[#FFDE00] font-bold">★</span>
                </div>
                <div className="absolute left-2 top-0 w-4 h-5 bg-[#FBBF24] rounded-[1px] rotate-[8deg] flex items-center justify-center">
                  <span className="text-[5px] font-bold text-slate-950">AO</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-tight">LVA Angola</span>
                <span className="text-[10px] text-slate-400 font-mono">Consola de Gestão</span>
              </div>
            </a>
          </div>

          {/* Menus Oficiais */}
          <nav className="p-3 space-y-1">
            <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Módulos Principais
            </div>

            <button
              onClick={() => setActiveTab('visao_geral')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-medium transition-colors cursor-pointer border-l-2 ${
                activeTab === 'visao_geral'
                  ? 'bg-slate-800/80 text-white border-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40 border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-4 h-4 stroke-[1.5]" />
                <span>Visão Geral</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('sorteios')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-medium transition-colors cursor-pointer border-l-2 ${
                activeTab === 'sorteios'
                  ? 'bg-slate-800/80 text-white border-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40 border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <Radio className="w-4 h-4 stroke-[1.5]" />
                <span>Sorteios Oficiais</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">2</span>
            </button>

            <button
              onClick={() => setActiveTab('bilhetes')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-medium transition-colors cursor-pointer border-l-2 ${
                activeTab === 'bilhetes'
                  ? 'bg-slate-800/80 text-white border-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40 border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <Ticket className="w-4 h-4 stroke-[1.5]" />
                <span>Base de Bilhetes</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">14.2k</span>
            </button>

            <button
              onClick={() => setActiveTab('auditoria')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-medium transition-colors cursor-pointer border-l-2 ${
                activeTab === 'auditoria'
                  ? 'bg-slate-800/80 text-white border-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40 border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                <span>Auditoria ISJ</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </button>
          </nav>
        </div>

        {/* Rodapé do Administrador */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/40">
          <div className="flex items-center justify-between mb-2 text-xs">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Administrador</span>
              <span className="text-[10px] text-slate-400 font-mono">admin@lva.ao</span>
            </div>
            <span className="text-[10px] px-1.5 py-0.5 bg-slate-800 text-slate-300 font-mono border border-slate-700">
              ISJ-OP
            </span>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 py-1.5 text-xs text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>Terminar Sessão</span>
          </button>
        </div>
      </aside>

      {/* Conteúdo Principal Enterprise */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-slate-100">
        {/* Barra Superior Header */}
        <header className="h-16 px-8 border-b border-slate-200 flex items-center justify-between shrink-0 bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-bold text-slate-900 tracking-tight">
              {activeTab === 'visao_geral' && 'Visão Geral Operacional'}
              {activeTab === 'sorteios' && 'Sorteios Oficiais Abertos'}
              {activeTab === 'bilhetes' && 'Base Completa de Bilhetes Registados'}
              {activeTab === 'auditoria' && 'Painel Regulatório & Auditoria ISJ'}
            </h1>
            <span className="text-slate-300">/</span>
            <span className="text-xs text-slate-500">
              {activeTab === 'visao_geral' && 'Estatísticas Gerais'}
              {activeTab === 'sorteios' && 'Extrações e Parcerias'}
              {activeTab === 'bilhetes' && 'Validações com BI'}
              {activeTab === 'auditoria' && 'Instituto de Supervisão de Jogos'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Campo de Pesquisa Rápida */}
            <div className="relative w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Pesquisar BI, nome ou código..."
                className="w-full pl-9 pr-6 py-1.5 bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
              />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Dourado Exclusivo para Ação Primária */}
            <a
              href="#hero"
              onClick={() => {
                window.location.hash = '';
              }}
              className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Ver Site Público</span>
              <ExternalLink className="w-3 h-3 stroke-[2]" />
            </a>
          </div>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* PÁGINA 1: VISÃO GERAL                                              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'visao_geral' && (
          <div className="p-8 max-w-7xl w-full mx-auto space-y-6">
            {/* 4 KPIs Superiores Enterprise com Borda Rígida */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Total de Bilhetes Emitidos
                </span>
                <p className="text-3xl font-bold text-slate-900 mt-2 font-mono">14.280</p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Bilhetes diários grátis + extras</span>
                  <span className="font-mono text-emerald-600 font-medium">+12.4%</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Participantes com BI
                </span>
                <p className="text-3xl font-bold text-slate-900 mt-2 font-mono">8.450</p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Cidadãos registados no sistema</span>
                  <span className="font-mono text-emerald-600 font-medium">+5.8%</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Volume Arrecadado
                </span>
                <p className="text-3xl font-bold text-slate-900 mt-2 font-mono">
                  4.715.000 <span className="text-xs font-sans text-slate-500 font-normal">Kz</span>
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Taxa de 500 Kz / bilhete adicional</span>
                  <span className="font-mono text-slate-400">EMIS</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 shadow-xs">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Sorteios em Curso
                </span>
                <p className="text-3xl font-bold text-slate-900 mt-2 font-mono">2</p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>3 vagas Portugal · 2 França</span>
                  <span className="font-mono text-slate-700 font-medium">ISJ-Ativo</span>
                </div>
              </div>
            </div>

            {/* 2 Gráficos Robustos em Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Gráfico 1: Emissão Diária */}
              <div className="bg-white border border-slate-200 p-6 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Emissão Diária de Bilhetes
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Série temporal dos últimos 8 dias</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="text-slate-700 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-slate-900" /> Total
                    </span>
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-slate-400" /> Grátis (BI)
                    </span>
                  </div>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={dailyTicketsTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="dia" fontSize={11} tickLine={false} axisLine={false} tick={{ fill: '#64748B' }} />
                      <YAxis fontSize={11} tickLine={false} axisLine={false} tick={{ fill: '#64748B' }} />
                      <Tooltip content={<CustomWhiteTooltip />} />
                      <Area type="monotone" dataKey="total" name="Total Emitido" stroke="#0F172A" strokeWidth={1.5} fill="#E2E8F0" />
                      <Area type="monotone" dataKey="gratis" name="Bilhetes Grátis" stroke="#64748B" strokeWidth={1.5} strokeDasharray="3 3" fill="transparent" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Gráfico 2: Participantes por Província */}
              <div className="bg-white border border-slate-200 p-6 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Participantes por Província
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Distribuição territorial em Angola</p>
                  </div>
                  <span className="text-xs font-mono text-slate-500">6 Principais</span>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={provinceParticipants} layout="vertical" margin={{ top: 5, right: 25, left: 10, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                      <XAxis type="number" fontSize={11} tickLine={false} axisLine={false} tick={{ fill: '#64748B' }} />
                      <YAxis dataKey="provincia" type="category" width={80} fontSize={11} tickLine={false} axisLine={false} tick={{ fill: '#334155', fontWeight: 500 }} />
                      <Tooltip content={<CustomWhiteTooltip />} cursor={{ fill: '#F1F5F9' }} />
                      <Bar dataKey="total" name="Participantes" fill="#0F172A" barSize={12} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Tabela Resumo */}
            <div className="bg-white border border-slate-200 shadow-xs">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Últimos Bilhetes Registados
                  </h3>
                  <p className="text-xs text-slate-500">Acompanhamento contínuo da validação de identidades</p>
                </div>
                <button
                  onClick={() => setActiveTab('bilhetes')}
                  className="text-xs font-medium text-slate-700 hover:text-slate-950 flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver base completa</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[10px] uppercase font-mono tracking-wider">
                      <th className="py-2.5 px-4 font-semibold">Nº Bilhete</th>
                      <th className="py-2.5 px-4 font-semibold">Participante</th>
                      <th className="py-2.5 px-4 font-semibold">Nº de BI</th>
                      <th className="py-2.5 px-4 font-semibold">Destino</th>
                      <th className="py-2.5 px-4 font-semibold">Modalidade</th>
                      <th className="py-2.5 px-4 text-right font-semibold">Data / Hora</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredTickets.slice(0, 5).map((t) => (
                      <tr key={t.id} className="hover:bg-slate-50/60">
                        <td className="py-3 px-4 font-mono font-bold text-slate-900">{t.cod}</td>
                        <td className="py-3 px-4 font-medium text-slate-800">{t.nome}</td>
                        <td className="py-3 px-4 font-mono text-slate-500 text-[11px]">{t.bi}</td>
                        <td className="py-3 px-4 text-slate-700">{t.dest}</td>
                        <td className="py-3 px-4 text-slate-600 font-mono text-[11px]">{t.mod}</td>
                        <td className="py-3 px-4 text-right text-slate-500 font-mono text-[11px]">{t.data}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* PÁGINA 2: SORTEIOS OFICIAIS                                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'sorteios' && (
          <div className="p-8 max-w-7xl w-full mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-base font-bold text-slate-900">Sorteios Oficiais Abertos</h2>
                <p className="text-xs text-slate-500">
                  Gestão das salas de sorteio, lotação de bilhetes e ligação com o motor de extração ISJ
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 font-mono text-xs font-semibold">
                  2 Sorteios Ativos
                </span>
                <a
                  href="#extracao-ao-vivo"
                  onClick={() => {
                    window.location.hash = '';
                  }}
                  className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Aceder à Sala de Extração ao Vivo</span>
                </a>
              </div>
            </div>

            {/* Cartões dos Sorteios Ativos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {officialDrawsList.map((draw) => (
                <div key={draw.id} className="bg-white border border-slate-200 p-6 shadow-xs space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <CountryFlag code={draw.flag} className="w-8 h-5.5 rounded" />
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                          {draw.code}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 leading-snug">{draw.title}</h3>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-mono border border-slate-200 bg-slate-50 text-slate-700">
                      {draw.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 border border-slate-100 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase">Vagas Patrocinadas</span>
                      <strong className="text-slate-900 font-semibold">{draw.vagas} Vistos</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase">Bilhetes Inscritos</span>
                      <strong className="text-slate-900 font-mono">{draw.totalBilhetes.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase">Data de Extração</span>
                      <strong className="text-slate-900 text-[11px]">{draw.dataSorteio}</strong>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Auditor Responsável:</span>
                      <strong className="text-slate-800">{draw.auditorISJ}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Semente Criptográfica RNG:</span>
                      <code className="bg-slate-100 px-2 py-0.5 text-[11px] text-slate-700 font-mono border border-slate-200">
                        {draw.rngHash}
                      </code>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Certificado e Aprovado pelo ISJ
                    </span>
                    <button
                      onClick={() => setSelectedDrawDetails(draw)}
                      className="px-3 py-1.5 text-xs font-medium text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer border border-slate-200"
                    >
                      Ver Detalhes do Sorteio
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Painel Integrado de Detalhes do Sorteio (Sem Modal Flutuante) */}
            {selectedDrawDetails && (
              <div className="bg-white border-2 border-slate-300 p-6 shadow-sm space-y-4 rounded-xl">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <CountryFlag code={selectedDrawDetails.flag} className="w-8 h-5.5 rounded" />
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">{selectedDrawDetails.code}</span>
                      <h3 className="text-base font-bold text-slate-900">{selectedDrawDetails.title}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDrawDetails(null)}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-md cursor-pointer border border-slate-200"
                  >
                    Ocultar Detalhes
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                  <div>
                    <span className="text-slate-500 block">Destino do Visto:</span>
                    <strong className="text-slate-900">{selectedDrawDetails.destination}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Vagas Oficiais:</span>
                    <strong className="text-slate-900">{selectedDrawDetails.vagas} Contemplados</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Bilhetes Registados:</span>
                    <strong className="text-slate-900 font-mono">{selectedDrawDetails.totalBilhetes.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Supervisão ISJ:</span>
                    <strong className="text-slate-900">{selectedDrawDetails.auditorISJ}</strong>
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-slate-500 block">Hash SHA-256 do Globo Criptográfico:</span>
                    <span className="font-mono text-[11px] text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 inline-block">{selectedDrawDetails.rngHash}</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 text-xs text-amber-900 rounded-lg">
                  <strong>Norma Regulatória:</strong> Este sorteio é público e transmitido em tempo real. Os números vencedores são extraídos através de um gerador de números aleatórios auditado e carimbado pelo ISJ.
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* PÁGINA 3: BASE DE BILHETES                                         */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'bilhetes' && (
          <div className="p-8 max-w-7xl w-full mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-base font-bold text-slate-900">Base Completa de Bilhetes Registados</h2>
                <p className="text-xs text-slate-500">
                  Pesquise, filtre e audite bilhetes emitidos com Bilhete de Identidade (BI) nacional
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1.5">
                  {filteredTickets.length} de 14.280 Registos
                </span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 cursor-pointer">
                  <Download className="w-3.5 h-3.5" />
                  <span>Exportar CSV</span>
                </button>
              </div>
            </div>

            {/* Barra de Filtros */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white border border-slate-200">
              <div className="flex items-center gap-3 flex-1 min-w-[280px]">
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    placeholder="Filtrar por Código, Nome, Província ou BI..."
                    className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-slate-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Modalidade:</span>
                <select
                  value={filterType}
                  onChange={(e: any) => setFilterType(e.target.value)}
                  className="bg-white border border-slate-200 text-xs text-slate-700 py-1.5 px-3 focus:outline-none font-medium"
                >
                  <option value="todos">Todos os Bilhetes</option>
                  <option value="Pago">Apenas Pagos (500 Kz)</option>
                  <option value="Grátis">Apenas Gratuitos (BI)</option>
                </select>
              </div>
            </div>

            {/* Tabela Completa de Bilhetes */}
            <div className="bg-white border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[10px] uppercase font-mono tracking-wider">
                      <th className="py-2.5 px-4 font-semibold">Nº Bilhete</th>
                      <th className="py-2.5 px-4 font-semibold">Cidadão Participante</th>
                      <th className="py-2.5 px-4 font-semibold">Nº de BI</th>
                      <th className="py-2.5 px-4 font-semibold">Província</th>
                      <th className="py-2.5 px-4 font-semibold">Destino</th>
                      <th className="py-2.5 px-4 font-semibold">Modalidade</th>
                      <th className="py-2.5 px-4 font-semibold">Estado</th>
                      <th className="py-2.5 px-4 text-right font-semibold">Data e Hora</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredTickets.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{t.cod}</td>
                        <td className="py-2.5 px-4 font-medium text-slate-800">{t.nome}</td>
                        <td className="py-2.5 px-4 font-mono text-slate-500 text-[11px]">{t.bi}</td>
                        <td className="py-2.5 px-4 text-slate-600">{t.provincia}</td>
                        <td className="py-2.5 px-4 text-slate-700">{t.dest}</td>
                        <td className="py-2.5 px-4 font-mono text-[11px] text-slate-600">{t.mod}</td>
                        <td className="py-2.5 px-4">
                          <span className="text-[11px] text-slate-700 font-medium">
                            {t.status}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-right text-slate-500 font-mono text-[11px]">{t.data}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* PÁGINA 4: AUDITORIA ISJ                                            */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'auditoria' && (
          <div className="p-8 max-w-7xl w-full mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-base font-bold text-slate-900">Painel de Auditoria & Conformidade ISJ</h2>
                <p className="text-xs text-slate-500">
                  Supervisão oficial em conformidade com o Decreto Presidencial sobre Jogos Sociais e Lotarias de Angola
                </p>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-xs text-slate-700 font-mono font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Auditoria Ativa · Sem Discrepâncias</span>
              </div>
            </div>

            {/* 3 Cartões de Certificação Regulatória */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200 p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-slate-700" />
                  <span>Certificação de Algoritmo RNG</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Algoritmo gerador de números aleatórios auditado segundo a norma NIST SP 800-90A. Cada extração gera um hash público imutável.
                </p>
                <div className="pt-2 text-[10px] font-mono text-slate-500 font-medium">
                  Status: 100% Auditado
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                  <Users className="w-4 h-4 text-slate-700" />
                  <span>Validação com o Registo Civil</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Garantia de 1 bilhete diário grátis por número de BI válido de cidadão angolano. O sistema bloqueia duplicados automaticamente.
                </p>
                <div className="pt-2 text-[10px] font-mono text-slate-500 font-medium">
                  890 Duplicados Bloqueados
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                  <DollarSign className="w-4 h-4 text-slate-700" />
                  <span>Reconciliação Financeira Multicaixa</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Taxas de 500 Kz processadas via EMIS / Multicaixa Express reconciliadas diretamente com a conta de custódia oficial.
                </p>
                <div className="pt-2 text-[10px] font-mono text-slate-500 font-medium">
                  4.715.000 Kz Reconciliados
                </div>
              </div>
            </div>

            {/* Registos de Eventos de Auditoria */}
            <div className="bg-white border border-slate-200 shadow-xs space-y-4">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Registo Oficial de Eventos de Auditoria
                </h3>
                <span className="text-xs font-mono text-slate-400">Tempo Real</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[10px] uppercase font-mono tracking-wider">
                      <th className="py-2.5 px-4 font-semibold">Horário</th>
                      <th className="py-2.5 px-4 font-semibold">Tipo de Evento</th>
                      <th className="py-2.5 px-4 font-semibold">Descrição do Evento</th>
                      <th className="py-2.5 px-4 font-semibold">Auditor / Agente</th>
                      <th className="py-2.5 px-4 text-right font-semibold">Resultado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {auditLogsList.map((log) => (
                      <tr key={log.id} className="hover:bg-slate-50/60">
                        <td className="py-3 px-4 font-mono text-slate-500 text-[11px] whitespace-nowrap">
                          {log.data}, {log.hora}
                        </td>
                        <td className="py-3 px-4 font-medium text-slate-900">{log.evento}</td>
                        <td className="py-3 px-4 text-slate-600 max-w-md">{log.detalhe}</td>
                        <td className="py-3 px-4 text-slate-700 font-medium">{log.auditor}</td>
                        <td className="py-3 px-4 text-right">
                          <span className="text-xs font-mono text-slate-700">
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
