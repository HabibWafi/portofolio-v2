"use client";

import { useState } from "react";
import {
  BarChart2,
  Users,
  Home,
  Briefcase,
  TrendingUp,
  Map,
  Settings,
  Bell,
  Download,
  ChevronDown,
  Activity,
  FileText,
  Menu,
  X,
} from "lucide-react";

const kecamatanData = [
  { name: "Muara Beliti", penduduk: 52341, ruta: 13123, lpe: 1.2, miskin: 8.4 },
  { name: "Tugumulyo", penduduk: 48234, ruta: 12056, lpe: 0.8, miskin: 9.1 },
  { name: "Megang Sakti", penduduk: 45678, ruta: 11432, lpe: 1.5, miskin: 7.8 },
  { name: "Muara Kelingi", penduduk: 41234, ruta: 10345, lpe: 0.9, miskin: 11.2 },
  { name: "Sumber Harta", penduduk: 36789, ruta: 9234, lpe: 1.1, miskin: 10.5 },
  { name: "BTS Ulu", penduduk: 32456, ruta: 8134, lpe: 0.5, miskin: 12.3 },
  { name: "Rawas Ulu", penduduk: 28901, ruta: 7234, lpe: 0.3, miskin: 13.6 },
  { name: "Ulu Rawas", penduduk: 24123, ruta: 6034, lpe: 0.2, miskin: 14.1 },
];

const trendData = [
  { year: "2018", value: 295123 },
  { year: "2019", value: 302456 },
  { year: "2020", value: 318234 },
  { year: "2021", value: 326789 },
  { year: "2022", value: 336012 },
  { year: "2023", value: 345234 },
];

function LineChart() {
  const w = 500, h = 160, padX = 50, padY = 20;
  const values = trendData.map((d) => d.value);
  const minV = Math.min(...values) - 5000;
  const maxV = Math.max(...values) + 5000;
  const range = maxV - minV;

  const pts = trendData.map((d, i) => ({
    x: padX + (i / (trendData.length - 1)) * (w - padX * 2),
    y: padY + ((maxV - d.value) / range) * (h - padY * 2),
    ...d,
  }));

  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${pts[pts.length - 1].x} ${h - padY} L ${pts[0].x} ${h - padY} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[0.25, 0.5, 0.75, 1].map((r) => (
        <line
          key={r}
          x1={padX}
          y1={padY + r * (h - padY * 2)}
          x2={w - padX}
          y2={padY + r * (h - padY * 2)}
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      ))}
      {/* Area fill */}
      <path d={areaPath} fill="url(#areaGrad)" />
      {/* Line */}
      <path d={linePath} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Points */}
      {pts.map((p) => (
        <g key={p.year}>
          <circle cx={p.x} cy={p.y} r="5" fill="#3b82f6" />
          <circle cx={p.x} cy={p.y} r="3" fill="white" />
          <text x={p.x} y={h - 4} textAnchor="middle" fontSize="10" fill="#94a3b8">
            {p.year}
          </text>
        </g>
      ))}
      {/* Y labels */}
      {[minV + range * 0.25, minV + range * 0.5, minV + range * 0.75, maxV - 5000].map((v, i) => (
        <text key={i} x={padX - 4} y={padY + (1 - (v - minV) / range) * (h - padY * 2) + 4} textAnchor="end" fontSize="9" fill="#94a3b8">
          {(v / 1000).toFixed(0)}K
        </text>
      ))}
    </svg>
  );
}

function BarChart() {
  const maxVal = Math.max(...kecamatanData.map((d) => d.penduduk));
  const chartH = 180;
  const barW = 50;
  const gap = 24;
  const totalW = kecamatanData.length * (barW + gap);

  return (
    <svg viewBox={`0 0 ${totalW} ${chartH + 30}`} className="w-full h-full">
      {kecamatanData.map((d, i) => {
        const barH = (d.penduduk / maxVal) * chartH;
        const x = i * (barW + gap) + gap / 2;
        const y = chartH - barH;
        return (
          <g key={d.name}>
            <rect x={x} y={y} width={barW} height={barH} rx="4" fill="#3b82f6" opacity="0.85" />
            <text
              x={x + barW / 2}
              y={chartH + 12}
              textAnchor="middle"
              fontSize="8.5"
              fill="#64748b"
            >
              {d.name.split(" ")[0]}
            </text>
            <text
              x={x + barW / 2}
              y={chartH + 22}
              textAnchor="middle"
              fontSize="8"
              fill="#94a3b8"
            >
              {d.name.split(" ").slice(1).join(" ")}
            </text>
            <text x={x + barW / 2} y={y - 4} textAnchor="middle" fontSize="8" fill="#3b82f6" fontWeight="600">
              {(d.penduduk / 1000).toFixed(1)}K
            </text>
          </g>
        );
      })}
    </svg>
  );
}

const navItems = [
  { icon: BarChart2, label: "Dashboard", active: true },
  { icon: Users, label: "Kependudukan" },
  { icon: TrendingUp, label: "Ekonomi" },
  { icon: Activity, label: "Sosial" },
  { icon: Map, label: "Peta Tematik" },
  { icon: FileText, label: "Laporan" },
  { icon: Settings, label: "Pengaturan" },
];

export default function BpsDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"penduduk" | "ekonomi">("penduduk");

  const totalPenduduk = kecamatanData.reduce((s, d) => s + d.penduduk, 0);
  const totalRuta = kecamatanData.reduce((s, d) => s + d.ruta, 0);

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-56" : "w-16"
        } bg-[#1e3a5f] flex flex-col transition-all duration-300 flex-shrink-0`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center gap-3 px-4 border-b border-white/10">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-[#1e3a5f] text-xs font-black">BPS</span>
          </div>
          {sidebarOpen && (
            <div>
              <p className="text-white font-bold text-xs leading-tight">BPS Musi Rawas</p>
              <p className="text-white/50 text-[9px]">Statistik Daerah</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 space-y-1 px-2">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveNav(label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                activeNav === label
                  ? "bg-blue-500 text-white"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={16} className="flex-shrink-0" />
              {sidebarOpen && <span className="text-xs font-medium">{label}</span>}
            </button>
          ))}
        </nav>

        {/* Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="m-3 p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all flex justify-center"
        >
          {sidebarOpen ? <X size={14} /> : <Menu size={14} />}
        </button>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
          <div>
            <h1 className="text-sm font-bold text-slate-800">Dashboard Statistik Daerah</h1>
            <p className="text-xs text-slate-500">Kabupaten Musi Rawas — Update: Januari 2024</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors relative">
              <Bell size={16} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors">
              <Download size={12} />
              Export Data
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                HW
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-slate-800">Habib Wafi</p>
                <p className="text-[10px] text-slate-500">Pranata Komputer</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Penduduk", value: totalPenduduk.toLocaleString("id"), icon: Users, color: "blue", delta: "+1.2%" },
              { label: "Rumah Tangga", value: totalRuta.toLocaleString("id"), icon: Home, color: "emerald", delta: "+0.9%" },
              { label: "Jumlah Perusahaan", value: "1,342", icon: Briefcase, color: "violet", delta: "+3.4%" },
              { label: "Tingkat Kemiskinan", value: "10.7%", icon: TrendingUp, color: "amber", delta: "-0.5%" },
            ].map(({ label, value, icon: Icon, color, delta }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-${color}-50`}>
                    <Icon size={17} className={`text-${color}-600`} />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${delta.startsWith("+") ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                    {delta}
                  </span>
                </div>
                <p className="mt-3 text-xl font-bold text-slate-900">{value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Line chart */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm font-bold text-slate-800">Tren Pertumbuhan Penduduk</h2>
                  <p className="text-xs text-slate-500">2018 – 2023</p>
                </div>
                <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                  +17% (5 thn)
                </span>
              </div>
              <div className="h-44">
                <LineChart />
              </div>
            </div>

            {/* Stats summary */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <h2 className="text-sm font-bold text-slate-800 mb-4">Indikator Utama 2023</h2>
              <div className="space-y-3">
                {[
                  { label: "Laju Pertumbuhan Ekonomi", value: "5.34%", bar: 53 },
                  { label: "Indeks Pembangunan Manusia", value: "68.21", bar: 68 },
                  { label: "Pengangguran Terbuka", value: "3.8%", bar: 38 },
                  { label: "Gini Ratio", value: "0.312", bar: 31 },
                ].map(({ label, value, bar }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">{label}</span>
                      <span className="font-semibold text-slate-800">{value}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${bar}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bar chart + Table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Bar chart */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-slate-800">Distribusi Penduduk per Kecamatan</h2>
                <div className="flex items-center gap-1 bg-slate-50 rounded-lg p-0.5 text-xs">
                  <button
                    onClick={() => setActiveTab("penduduk")}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${activeTab === "penduduk" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"}`}
                  >
                    Penduduk
                  </button>
                  <button
                    onClick={() => setActiveTab("ekonomi")}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${activeTab === "ekonomi" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"}`}
                  >
                    LPE
                  </button>
                </div>
              </div>
              <div className="h-52 overflow-x-auto">
                <div className="min-w-[400px] h-full">
                  <BarChart />
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <h2 className="text-sm font-bold text-slate-800 mb-4">Data per Kecamatan</h2>
              <div className="overflow-auto max-h-52">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="text-left py-2 text-slate-500 font-medium">Kecamatan</th>
                      <th className="text-right py-2 text-slate-500 font-medium">Penduduk</th>
                      <th className="text-right py-2 text-slate-500 font-medium">Kemiskinan</th>
                      <th className="text-right py-2 text-slate-500 font-medium">LPE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kecamatanData.map((d) => (
                      <tr key={d.name} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="py-2 font-medium text-slate-700">{d.name}</td>
                        <td className="py-2 text-right text-slate-600">{d.penduduk.toLocaleString("id")}</td>
                        <td className="py-2 text-right">
                          <span className={`px-2 py-0.5 rounded-full font-medium ${d.miskin > 12 ? "bg-red-50 text-red-600" : d.miskin > 10 ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"}`}>
                            {d.miskin}%
                          </span>
                        </td>
                        <td className="py-2 text-right text-slate-600">{d.lpe}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
