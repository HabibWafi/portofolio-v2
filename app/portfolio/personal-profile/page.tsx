"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MapPin, Star, CheckCircle, ChevronDown, Send, BookOpen, Video } from "lucide-react";

const schedule = [
  { day: "Senin", time: "08:00 – 15:00", location: "RSIA Bunda Jakarta", type: "Offline" },
  { day: "Selasa", time: "16:00 – 20:00", location: "Klinik Pratama Sehat", type: "Offline" },
  { day: "Rabu", time: "08:00 – 12:00", location: "RSIA Bunda Jakarta", type: "Offline" },
  { day: "Kamis", time: "13:00 – 18:00", location: "Online Konsultasi", type: "Online" },
  { day: "Jumat", time: "08:00 – 15:00", location: "RSIA Bunda Jakarta", type: "Offline" },
  { day: "Sabtu", time: "09:00 – 13:00", location: "Klinik Pratama Sehat", type: "Offline" },
];

const services_list = [
  { emoji: "🩺", title: "Konsultasi & Pemeriksaan", desc: "Pemeriksaan kehamilan rutin, USG kandungan, dan konsultasi kesehatan reproduksi wanita." },
  { emoji: "🔬", title: "USG 4D & 3D", desc: "Pemeriksaan ultrasonografi 4D untuk melihat kondisi janin secara detail dan real-time." },
  { emoji: "💉", title: "Vaksinasi HPV & Hepatitis", desc: "Program vaksinasi lengkap untuk perlindungan kesehatan wanita jangka panjang." },
  { emoji: "🏥", title: "Persalinan Normal & SC", desc: "Penanganan persalinan normal dan sesar dengan prosedur keamanan tertinggi." },
];

const articles = [
  { emoji: "🤱", title: "Nutrisi Penting di Trimester Pertama", date: "15 Feb 2024", readTime: "5 mnt", tag: "Kehamilan" },
  { emoji: "💊", title: "Kapan Harus Mulai Vaksin HPV?", date: "28 Jan 2024", readTime: "4 mnt", tag: "Kesehatan" },
  { emoji: "🧘", title: "Olahraga Aman Selama Hamil", date: "10 Jan 2024", readTime: "6 mnt", tag: "Tips" },
];

const reviews = [
  { name: "Rina S.", rating: 5, text: "Dr. Aditya sangat ramah dan sabar menjelaskan. USG 4D-nya detail sekali, kami bisa melihat wajah bayi dengan jelas." },
  { name: "Nita K.", rating: 5, text: "Sudah 2x melahirkan dengan Dr. Aditya. Profesional dan sangat perhatian pada pasien. Highly recommended!" },
  { name: "Sinta M.", rating: 5, text: "Konsultasi online-nya sangat memudahkan. Bisa tanya-tanya kapan saja, balasannya cepat dan informatif." },
];

export default function PersonalProfilePage() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", date: "", complaint: "", type: "Offline", submitted: false });

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Demo Badge */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-400 text-amber-900 text-xs font-bold text-center py-1.5">
        ✦ DEMO PREVIEW — Contoh Website Profil Dokter / Profesional · Bukan website nyata
      </div>

      {/* Navbar */}
      <nav className="fixed top-7 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-emerald-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-emerald-700 rounded-full flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">dr</span>
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-sm leading-none">dr. Aditya Pratama</p>
              <p className="text-[10px] text-emerald-600">Sp.OG · Dokter Kandungan</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {["Profil", "Jadwal", "Layanan", "Artikel", "Kontak"].map((m) => (
              <a key={m} href="#" className="hover:text-emerald-600 transition-colors">{m}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#janji" className="hidden sm:block px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-colors">
              Buat Janji
            </a>
            <Link href="/portfolio" className="flex items-center gap-1 text-slate-500 hover:text-emerald-600 transition-colors text-sm">
              <ArrowLeft size={15} />
              <span className="hidden sm:inline">Kembali</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="flex-shrink-0 relative">
              <div className="w-44 h-44 bg-gradient-to-br from-emerald-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-200">
                <span className="text-7xl">👨‍⚕️</span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Online
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 text-xs font-bold mb-3">
                Konsultasi Online Tersedia
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                dr. Aditya Pratama, Sp.OG
              </h1>
              <p className="text-emerald-600 font-semibold mt-1">Spesialis Obstetri & Ginekologi</p>
              <p className="text-slate-500 mt-3 max-w-md leading-relaxed">
                Dokter spesialis kandungan berpengalaman 12 tahun dalam bidang kehamilan, persalinan, dan kesehatan reproduksi wanita.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                {["🏥 RSIA Bunda Jakarta", "🎓 FK UI", "⭐ 4.9 (800+ ulasan)"].map((b) => (
                  <span key={b} className="px-3 py-1.5 bg-white border border-emerald-100 rounded-full text-sm text-slate-600 font-medium shadow-sm">
                    {b}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="#janji" className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200">
                  Buat Janji Temu
                </a>
                <a href="#" className="flex items-center gap-2 px-6 py-3 border-2 border-emerald-200 text-emerald-700 font-bold rounded-2xl hover:border-emerald-400 transition-all">
                  <Video size={15} />
                  Konsultasi Online
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">Layanan</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services_list.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="text-3xl mb-3">{s.emoji}</div>
                  <h3 className="font-bold text-slate-900">{s.title}</h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">Jadwal Praktek</h2>
            <p className="text-slate-500 mt-2 text-sm">Klik hari untuk melihat detail lokasi</p>
          </motion.div>
          <div className="space-y-3">
            {schedule.map((s, i) => (
              <motion.div key={s.day} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <button
                  onClick={() => setExpandedDay(expandedDay === s.day ? null : s.day)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${expandedDay === s.day ? "bg-white border-emerald-400 shadow-md" : "bg-white border-emerald-100 hover:border-emerald-300"}`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 text-xs font-extrabold transition-all ${expandedDay === s.day ? "bg-emerald-600 text-white" : "bg-emerald-100 text-emerald-700"}`}>
                    {s.day.slice(0, 3)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-bold text-slate-900 text-sm">{s.day}</p>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.type === "Online" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"}`}>
                        {s.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-0.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Clock size={10} />{s.time}</span>
                    </div>
                  </div>
                  <ChevronDown size={16} className={`text-slate-400 transition-transform ${expandedDay === s.day ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {expandedDay === s.day && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className="mx-4 mb-2 px-5 py-4 bg-emerald-50 border border-emerald-100 rounded-b-2xl">
                        <div className="flex items-start gap-2 text-sm">
                          <MapPin size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-slate-800">{s.location}</p>
                            {s.type === "Online" ? (
                              <p className="text-slate-500 text-xs mt-1">Konsultasi via Zoom/WhatsApp. Booking 1 jam sebelumnya.</p>
                            ) : (
                              <p className="text-slate-500 text-xs mt-1">Daftar antrian di loket atau via telepon RS.</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">Artikel Kesehatan</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {articles.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white border border-slate-200 rounded-3xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
                  <div className="text-3xl mb-3">{a.emoji}</div>
                  <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full mb-2">{a.tag}</span>
                  <h3 className="font-bold text-slate-900 text-sm leading-tight group-hover:text-emerald-700 transition-colors">{a.title}</h3>
                  <div className="flex items-center gap-3 mt-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Calendar size={10} />{a.date}</span>
                    <span className="flex items-center gap-1"><BookOpen size={10} />{a.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-14 px-4 bg-emerald-900">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-white">Ulasan Pasien</h2>
            <div className="flex justify-center items-center gap-2 mt-2">
              <div className="flex gap-0.5">{[...Array(5)].map((_, s) => <Star key={s} size={16} className="text-amber-400 fill-amber-400" />)}</div>
              <span className="text-amber-300 font-bold">4.9</span>
              <span className="text-emerald-300 text-sm">(800+ ulasan)</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white/10 border border-white/10 rounded-3xl p-5 backdrop-blur-sm">
                  <div className="flex gap-0.5 mb-3">{[...Array(r.rating)].map((_, s) => <Star key={s} size={12} className="text-amber-400 fill-amber-400" />)}</div>
                  <p className="text-emerald-100 text-sm italic leading-relaxed">"{r.text}"</p>
                  <p className="text-amber-400 font-bold text-sm mt-3">— {r.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment form */}
      <section id="janji" className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">Buat Janji Temu</h2>
            <p className="text-slate-500 mt-2 text-sm">Konfirmasi akan dikirim via WhatsApp</p>
          </motion.div>

          {form.submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center">
              <CheckCircle size={48} className="text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold text-emerald-900 text-lg">Janji Berhasil Dibuat!</h3>
              <p className="text-emerald-700 mt-2 text-sm">Atas nama {form.name} pada {form.date}. Konfirmasi akan dikirim segera.</p>
              <button onClick={() => setForm({ name: "", date: "", complaint: "", type: "Offline", submitted: false })} className="mt-5 px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-700 transition-colors">
                Buat Janji Baru
              </button>
            </motion.div>
          ) : (
            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 shadow-sm">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 mb-1.5 block">Nama Lengkap</label>
                  <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Masukkan nama lengkap" className="w-full border-2 border-emerald-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-emerald-400 text-slate-700" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 mb-1.5 block">Tanggal Janji</label>
                  <input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className="w-full border-2 border-emerald-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-emerald-400 text-slate-700" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 mb-1.5 block">Tipe Konsultasi</label>
                  <div className="flex gap-3">
                    {["Offline", "Online"].map((t) => (
                      <button key={t} onClick={() => setForm((f) => ({ ...f, type: t }))}>
                        <span className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all cursor-pointer ${form.type === t ? "bg-emerald-600 text-white border-emerald-600" : "border-emerald-200 text-slate-600 hover:border-emerald-400"}`}>
                          {t === "Online" ? <><Video size={13} />{t}</> : t}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 mb-1.5 block">Keluhan / Keperluan</label>
                  <textarea rows={3} value={form.complaint} onChange={(e) => setForm((f) => ({ ...f, complaint: e.target.value }))} placeholder="Deskripsikan keluhan atau keperluan Anda..." className="w-full border-2 border-emerald-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-emerald-400 text-slate-700 resize-none" />
                </div>
                <button
                  onClick={() => form.name && form.date && setForm((f) => ({ ...f, submitted: true }))}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold transition-all ${form.name && form.date ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`}
                >
                  <Send size={15} /> Konfirmasi Janji
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-emerald-900 text-emerald-200 py-8 px-4 text-center">
        <p className="font-bold text-white">dr. Aditya Pratama, Sp.OG</p>
        <p className="text-sm mt-1">RSIA Bunda Jakarta · Klinik Pratama Sehat · (021) 555-2222</p>
        <div className="mt-4 pt-3 border-t border-emerald-800">
          <Link href="/portfolio" className="text-xs text-amber-400 hover:underline">← Kembali ke Portfolio Habib Wafi</Link>
        </div>
      </footer>
    </div>
  );
}
