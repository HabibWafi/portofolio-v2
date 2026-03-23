"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Search, MapPin, Bed, Bath, Square, Star, Phone, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const properties = [
  { id: 1, title: "Rumah Modern Minimalis", location: "Serpong, Tangerang Selatan", price: "Rp 1,8 M", type: "Dijual", beds: 4, baths: 3, area: 200, rating: 4.9, tag: "Unggulan", color: "bg-blue-100" },
  { id: 2, title: "Apartemen City View", location: "Sudirman, Jakarta Pusat", price: "Rp 8,5 Jt/bln", type: "Disewa", beds: 2, baths: 1, area: 65, rating: 4.7, tag: "Baru", color: "bg-indigo-100" },
  { id: 3, title: "Ruko 3 Lantai Strategis", location: "Bekasi Barat, Bekasi", price: "Rp 3,2 M", type: "Dijual", beds: 0, baths: 2, area: 150, rating: 4.8, tag: null, color: "bg-sky-100" },
  { id: 4, title: "Villa Exclusive Cluster", location: "Cibubur, Depok", price: "Rp 4,5 M", type: "Dijual", beds: 5, baths: 4, area: 350, rating: 4.9, tag: "Premium", color: "bg-violet-100" },
  { id: 5, title: "Kos Eksklusif AC Full", location: "Margonda, Depok", price: "Rp 2,2 Jt/bln", type: "Disewa", beds: 1, baths: 1, area: 24, rating: 4.6, tag: null, color: "bg-cyan-100" },
  { id: 6, title: "Kantor CBD Premium", location: "SCBD, Jakarta Selatan", price: "Rp 45 Jt/bln", type: "Disewa", beds: 0, baths: 3, area: 500, rating: 4.8, tag: "Hot", color: "bg-blue-100" },
];

const agents = [
  { name: "Budi Santoso", specialty: "Properti Residensial", listings: 48, rating: 4.9 },
  { name: "Dewi Rahayu", specialty: "Properti Komersial", listings: 35, rating: 4.8 },
  { name: "Ahmad Fauzi", specialty: "Apartemen & Kos", listings: 62, rating: 4.7 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function PropertyAgentPage() {
  const [filter, setFilter] = useState("Semua");
  const [liked, setLiked] = useState<number[]>([]);
  const [searchType, setSearchType] = useState("Dijual");

  const filtered = filter === "Semua" ? properties : properties.filter((p) => p.type === filter);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Demo Badge */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-400 text-amber-900 text-xs font-bold text-center py-1.5">
        ✦ DEMO PREVIEW — Contoh Website Agen Property · Bukan website nyata
      </div>

      {/* Navbar */}
      <nav className="fixed top-7 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">PR</span>
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-sm leading-none">Prime Realty</p>
              <p className="text-[10px] text-slate-500">Indonesia</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {["Beranda", "Properti", "Agen", "Tentang", "Kontak"].map((m) => (
              <a key={m} href="#" className="hover:text-blue-700 transition-colors">{m}</a>
            ))}
          </div>
          <Link href="/portfolio" className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft size={15} />
            <span className="hidden sm:inline">Kembali</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
          ))}
        </div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-bold mb-4">
              🏆 Agen Properti Terpercaya #1 di Indonesia
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Temukan Properti<br />
              <span className="text-amber-400">Impian Anda</span>
            </h1>
            <p className="mt-4 text-blue-200 text-lg max-w-xl mx-auto">
              Lebih dari 500 properti pilihan siap untuk Anda. Rumah, apartemen, ruko, dan kavling.
            </p>
          </motion.div>

          {/* Search form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 bg-white rounded-3xl p-4 shadow-2xl max-w-3xl mx-auto"
          >
            <div className="flex gap-2 mb-4">
              {["Dijual", "Disewa"].map((t) => (
                <button
                  key={t}
                  onClick={() => setSearchType(t)}
                  className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                    searchType === t ? "bg-blue-700 text-white shadow" : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-3 hover:border-blue-400 transition-colors">
                <MapPin size={16} className="text-slate-400" />
                <input className="flex-1 text-sm outline-none placeholder-slate-400" placeholder="Lokasi, kota, atau area" />
              </div>
              <select className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-600 outline-none focus:border-blue-400 hover:border-blue-400 transition-colors">
                <option>Semua Tipe</option>
                <option>Rumah</option>
                <option>Apartemen</option>
                <option>Ruko</option>
                <option>Villa</option>
              </select>
              <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors shadow-md">
                <Search size={16} />
                Cari
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-10"
          >
            {[["500+", "Listing Properti"], ["200+", "Agen Berpengalaman"], ["5000+", "Transaksi Sukses"], ["15+", "Kota Tersedia"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="text-3xl font-extrabold text-amber-400">{v}</p>
                <p className="text-blue-200 text-sm">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Properti Unggulan</h2>
              <p className="text-slate-500 text-sm mt-1">Pilihan terbaik dari tim kami</p>
            </div>
            <div className="flex gap-2">
              {["Semua", "Dijual", "Disewa"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                    filter === f ? "bg-blue-700 text-white border-blue-700" : "bg-white text-slate-600 border-slate-200 hover:border-blue-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.id} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  {/* Image placeholder */}
                  <div className={`relative h-48 ${p.color} flex items-center justify-center`}>
                    <div className="text-5xl opacity-60">🏠</div>
                    {p.tag && (
                      <span className="absolute top-3 left-3 bg-blue-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {p.tag}
                      </span>
                    )}
                    <span className={`absolute top-3 right-12 px-2.5 py-1 rounded-full text-[10px] font-bold ${p.type === "Dijual" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                      {p.type}
                    </span>
                    <button
                      onClick={() => setLiked((prev) => prev.includes(p.id) ? prev.filter((x) => x !== p.id) : [...prev, p.id])}
                      className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
                    >
                      <Heart size={14} className={liked.includes(p.id) ? "text-red-500 fill-red-500" : "text-slate-400"} />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{p.title}</h3>
                      <div className="flex items-center gap-0.5 flex-shrink-0">
                        <Star size={11} className="text-amber-400 fill-amber-400" />
                        <span className="text-xs font-semibold text-slate-700">{p.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-xs mb-3">
                      <MapPin size={11} />
                      <span>{p.location}</span>
                    </div>

                    <div className="flex items-center gap-4 text-slate-500 text-xs mb-4">
                      {p.beds > 0 && <span className="flex items-center gap-1"><Bed size={12} />{p.beds} KT</span>}
                      {p.baths > 0 && <span className="flex items-center gap-1"><Bath size={12} />{p.baths} KM</span>}
                      <span className="flex items-center gap-1"><Square size={12} />{p.area} m²</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="font-extrabold text-blue-700 text-base">{p.price}</p>
                      <button className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-white hover:bg-blue-700 border border-blue-200 hover:border-blue-700 px-3 py-1.5 rounded-xl transition-all">
                        <Phone size={11} />
                        Hubungi
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-slate-900">Agen Terbaik Kami</h2>
            <p className="text-slate-500 mt-2 text-sm">Tim profesional siap membantu Anda</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {agents.map((a, i) => (
              <motion.div key={a.name} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="bg-slate-50 rounded-3xl p-6 text-center border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{a.name[0]}</span>
                  </div>
                  <h3 className="font-bold text-slate-900">{a.name}</h3>
                  <p className="text-slate-500 text-xs mt-1">{a.specialty}</p>
                  <div className="mt-3 flex justify-center items-center gap-1">
                    {[...Array(5)].map((_, s) => <Star key={s} size={12} className="text-amber-400 fill-amber-400" />)}
                    <span className="text-xs font-bold text-slate-700 ml-1">{a.rating}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">{a.listings} Listing Aktif</p>
                  <button className="mt-4 w-full py-2 border-2 border-blue-700 text-blue-700 text-sm font-bold rounded-xl hover:bg-blue-700 hover:text-white transition-all">
                    Hubungi
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-200 py-10 px-4 text-center">
        <p className="font-bold text-white text-lg mb-1">Prime Realty Indonesia</p>
        <p className="text-sm">Jl. Sudirman No. 123, Jakarta Pusat · (021) 555-1234</p>
        <p className="mt-4 text-xs text-blue-400">© 2024 Prime Realty Indonesia. All rights reserved.</p>
        <div className="mt-4 pt-4 border-t border-blue-800">
          <Link href="/portfolio" className="text-xs text-amber-400 hover:underline">← Kembali ke Portfolio Habib Wafi</Link>
        </div>
      </footer>
    </div>
  );
}
