"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Globe, TrendingUp, Package, CheckCircle, ChevronDown, Send } from "lucide-react";

const commodities = [
  { emoji: "🌴", name: "Crude Palm Oil (CPO)", origin: "Sumatera, Kalimantan", volume: "2.5 Juta Ton/Thn", countries: ["🇨🇳", "🇮🇳", "🇵🇰"], tag: "Unggulan" },
  { emoji: "⛏️", name: "Batubara Termal", origin: "Kalimantan, Sumatera", volume: "80 Juta Ton/Thn", countries: ["🇯🇵", "🇰🇷", "🇮🇳"], tag: "Volume Tinggi" },
  { emoji: "🌿", name: "Karet Alam (RSS)", origin: "Sumatera Selatan", volume: "500 Ribu Ton/Thn", countries: ["🇺🇸", "🇩🇪", "🇨🇳"], tag: null },
  { emoji: "☕", name: "Kopi Arabika & Robusta", origin: "Aceh, Flores, Toraja", volume: "750 Ribu Ton/Thn", countries: ["🇺🇸", "🇩🇪", "🇯🇵"], tag: "Premium" },
  { emoji: "🌶️", name: "Rempah Nusantara", origin: "Maluku, NTT, Jawa", volume: "200 Ribu Ton/Thn", countries: ["🇪🇺", "🇺🇸", "🇦🇺"], tag: null },
  { emoji: "📦", name: "Tekstil & Garmen", origin: "Jawa Barat, Jawa Tengah", volume: "1,2 Miliar USD/Thn", countries: ["🇺🇸", "🇬🇧", "🇦🇺"], tag: null },
];

const processSteps = [
  { step: 1, title: "Konsultasi & Inquiry", desc: "Diskusi kebutuhan, negara tujuan, volume, dan spesifikasi produk" },
  { step: 2, title: "Penawaran & Kontrak", desc: "Proposal harga kompetitif, negosiasi terms, penandatanganan kontrak" },
  { step: 3, title: "Persiapan Dokumen", desc: "L/C, Certificate of Origin, Phytosanitary, Bill of Lading" },
  { step: 4, title: "Produksi & QC", desc: "Produksi sesuai spesifikasi, quality control ketat, inspeksi pra-pengiriman" },
  { step: 5, title: "Pengiriman & Tracking", desc: "Loading kapal, real-time tracking, notifikasi status pengiriman" },
];

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = end / 60;
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 25);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ExportImportPage() {
  const [activeCommodity, setActiveCommodity] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [lang, setLang] = useState<"ID" | "EN">("ID");
  const [formState, setFormState] = useState({ name: "", company: "", commodity: "", message: "", submitted: false });

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Demo Badge */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-400 text-amber-900 text-xs font-bold text-center py-1.5">
        ✦ DEMO PREVIEW — Contoh Website Ekspor Impor · Bukan website nyata
      </div>

      {/* Navbar */}
      <nav className="fixed top-7 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe size={22} className="text-amber-400" />
            <div>
              <p className="font-extrabold text-white text-sm">Nusantara Global</p>
              <p className="text-[10px] text-slate-400">Trade Co.</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {(lang === "ID" ? ["Beranda", "Komoditas", "Proses", "Kontak"] : ["Home", "Commodities", "Process", "Contact"]).map((m) => (
              <a key={m} href="#" className="hover:text-amber-400 transition-colors">{m}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setLang(lang === "ID" ? "EN" : "ID")} className="flex items-center gap-1 border border-slate-600 rounded-xl px-3 py-1.5 text-slate-300 hover:border-amber-400 hover:text-amber-400 transition-colors text-xs font-bold">
              {lang === "ID" ? "🇮🇩 ID" : "🇬🇧 EN"}
              <ChevronDown size={10} />
            </button>
            <Link href="/portfolio" className="flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors text-sm">
              <ArrowLeft size={15} />
              <span className="hidden sm:inline">Kembali</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
        {/* Animated world map */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            <circle cx="200" cy="200" r="3" fill="#F59E0B" className="animate-ping" style={{ animationDelay: "0s" }} />
            <circle cx="400" cy="300" r="3" fill="#F59E0B" className="animate-ping" style={{ animationDelay: "0.5s" }} />
            <circle cx="700" cy="250" r="3" fill="#F59E0B" className="animate-ping" style={{ animationDelay: "1s" }} />
            <circle cx="900" cy="350" r="3" fill="#F59E0B" className="animate-ping" style={{ animationDelay: "1.5s" }} />
            <line x1="200" y1="200" x2="700" y2="250" stroke="#F59E0B" strokeWidth="1" strokeDasharray="5,10" />
            <line x1="400" y1="300" x2="900" y2="350" stroke="#F59E0B" strokeWidth="1" strokeDasharray="5,10" />
          </svg>
        </div>
        <div className="absolute top-10 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
            <span className="inline-block px-3 py-1.5 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-xs font-bold mb-5 tracking-widest">
              🌏 GLOBAL TRADE PARTNER
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Menghubungkan<br />
              <span className="text-amber-400">Indonesia</span> ke Dunia
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-2xl mx-auto">
              Mitra ekspor-impor terpercaya sejak 2008. Kami menghubungkan komoditas terbaik Indonesia dengan buyer global di 30+ negara.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#komoditas" className="px-7 py-3.5 bg-amber-400 text-slate-900 font-bold rounded-2xl hover:bg-amber-300 transition-all shadow-lg shadow-amber-900/20">
                Lihat Komoditas
              </a>
              <a href="#kontak" className="px-7 py-3.5 border-2 border-slate-600 text-white font-bold rounded-2xl hover:border-amber-400 hover:text-amber-400 transition-all">
                Inquiry Sekarang
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: 500, suffix: "+", label: "Mitra Buyer Global" },
              { value: 30, suffix: "+", label: "Negara Tujuan" },
              { value: 15, suffix: " Thn", label: "Pengalaman" },
              { value: 98, suffix: "%", label: "On-Time Delivery" },
            ].map(({ value, suffix, label }) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                <p className="text-3xl font-extrabold text-amber-400">
                  <CountUp end={value} suffix={suffix} />
                </p>
                <p className="text-slate-400 text-sm mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commodities */}
      <section id="komoditas" className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900">Komoditas Unggulan</h2>
            <p className="text-slate-500 mt-2">Klik komoditas untuk melihat detail</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commodities.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <button
                  onClick={() => setActiveCommodity(activeCommodity === i ? null : i)}
                  className={`w-full text-left bg-white rounded-3xl p-5 border-2 transition-all hover:shadow-lg ${activeCommodity === i ? "border-amber-400 shadow-lg shadow-amber-100" : "border-slate-200 hover:border-amber-200"}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{c.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-slate-900 text-sm">{c.name}</h3>
                        {c.tag && <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">{c.tag}</span>}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{c.origin}</p>
                    </div>
                  </div>

                  {activeCommodity === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-xs mb-2">
                        <TrendingUp size={12} className="text-green-600" />
                        <span className="font-semibold text-slate-700">Volume: {c.volume}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Package size={12} className="text-blue-600" />
                        <span className="text-slate-600">Tujuan Utama: </span>
                        <div className="flex gap-1">{c.countries.map((f) => <span key={f}>{f}</span>)}</div>
                      </div>
                      <button className="mt-3 w-full py-2 bg-amber-400 text-amber-900 text-xs font-bold rounded-xl hover:bg-amber-300 transition-colors">
                        Inquiry Komoditas Ini
                      </button>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-white">Proses Ekspor</h2>
            <p className="text-slate-400 mt-2">5 langkah mudah untuk memulai transaksi</p>
          </motion.div>

          <div className="space-y-3">
            {processSteps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <button
                  onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${activeStep === i ? "bg-amber-400/10 border-amber-400" : "bg-white/5 border-slate-700 hover:border-slate-500"}`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm flex-shrink-0 transition-all ${activeStep === i ? "bg-amber-400 text-slate-900" : "bg-slate-700 text-slate-300"}`}>
                    {s.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold text-sm ${activeStep === i ? "text-amber-400" : "text-white"}`}>{s.title}</p>
                    {activeStep === i && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-slate-400 text-xs mt-1">{s.desc}</motion.p>
                    )}
                  </div>
                  {activeStep === i && <CheckCircle size={18} className="text-amber-400 flex-shrink-0" />}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="kontak" className="py-16 px-4 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">Kirim Inquiry</h2>
            <p className="text-slate-500 mt-2 text-sm">Tim kami akan merespons dalam 1×24 jam</p>
          </motion.div>

          {formState.submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-green-900">Inquiry Terkirim!</h3>
              <p className="text-green-700 text-sm mt-2">Tim kami akan menghubungi {formState.name} dari {formState.company} dalam 24 jam.</p>
              <button onClick={() => setFormState({ name: "", company: "", commodity: "", message: "", submitted: false })} className="mt-4 px-6 py-2.5 bg-slate-800 text-white font-bold rounded-xl text-sm hover:bg-slate-900 transition-colors">
                Kirim Inquiry Baru
              </button>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  { label: "Nama Lengkap", key: "name", placeholder: "John Doe" },
                  { label: "Perusahaan", key: "company", placeholder: "PT. Example Co." },
                ].map(({ label, key, placeholder }) => (
                  <div key={key}>
                    <label className="text-xs font-bold text-slate-600 mb-1.5 block">{label}</label>
                    <input
                      value={formState[key as keyof typeof formState] as string}
                      onChange={(e) => setFormState((f) => ({ ...f, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400 text-slate-700"
                    />
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label className="text-xs font-bold text-slate-600 mb-1.5 block">Komoditas yang Diminati</label>
                <select value={formState.commodity} onChange={(e) => setFormState((f) => ({ ...f, commodity: e.target.value }))} className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400 text-slate-700">
                  <option value="">Pilih komoditas</option>
                  {commodities.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
              </div>
              <div className="mb-5">
                <label className="text-xs font-bold text-slate-600 mb-1.5 block">Pesan / Pertanyaan</label>
                <textarea rows={3} value={formState.message} onChange={(e) => setFormState((f) => ({ ...f, message: e.target.value }))} placeholder="Deskripsikan kebutuhan Anda..." className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-amber-400 text-slate-700 resize-none" />
              </div>
              <button
                onClick={() => formState.name && formState.company && setFormState((f) => ({ ...f, submitted: true }))}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all ${formState.name && formState.company ? "bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-md" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`}
              >
                <Send size={15} /> Kirim Inquiry
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center">
        <p className="font-bold text-white">Nusantara Global Trade Co.</p>
        <p className="text-sm mt-1">Gedung Trade Center Lt. 12, Jakarta · +62 21 555-8888</p>
        <div className="mt-4 pt-3 border-t border-slate-800">
          <Link href="/portfolio" className="text-xs text-amber-400 hover:underline">← Kembali ke Portfolio Habib Wafi</Link>
        </div>
      </footer>
    </div>
  );
}
