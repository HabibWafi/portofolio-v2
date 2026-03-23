"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Star, Wifi, Car, Utensils, Waves, Dumbbell, Sparkles, ChevronLeft, ChevronRight, X, Users, Calendar } from "lucide-react";

const rooms = [
  {
    id: 1, name: "Deluxe Room", size: "35 m²", bed: "King Bed", view: "Garden View", price: 850000,
    features: ["Free WiFi", "AC", "Smart TV", "Minibar", "Bathtub"],
    emoji: "🛏️", color: "from-teal-500 to-teal-700", available: 8,
  },
  {
    id: 2, name: "Junior Suite", size: "55 m²", bed: "King Bed", view: "Pool View", price: 1400000,
    features: ["Free WiFi", "AC", "Smart TV", "Minibar", "Jacuzzi", "Lounge Area"],
    emoji: "🌊", color: "from-emerald-500 to-teal-700", available: 4,
  },
  {
    id: 3, name: "Presidential Suite", size: "120 m²", bed: "Super King", view: "Ocean View", price: 3500000,
    features: ["Private Pool", "Butler Service", "Fine Dining", "Jacuzzi", "2 Bedrooms", "Kitchen"],
    emoji: "👑", color: "from-amber-500 to-orange-600", available: 2,
  },
];

const facilities = [
  { icon: Waves, label: "Infinity Pool", desc: "Kolam renang premium 25m" },
  { icon: Sparkles, label: "Spa & Wellness", desc: "Treatment tubuh & relaksasi" },
  { icon: Utensils, label: "Restaurant", desc: "Fine dining & breakfast" },
  { icon: Dumbbell, label: "Fitness Center", desc: "Gym 24 jam lengkap" },
  { icon: Wifi, label: "Free WiFi", desc: "Internet cepat di semua area" },
  { icon: Car, label: "Airport Shuttle", desc: "Antar-jemput bandara" },
];

const reviews = [
  { name: "Jessica T.", country: "🇸🇬", rating: 5, text: "Absolutely stunning! The Presidential Suite exceeded all expectations. Service was impeccable." },
  { name: "Michael R.", country: "🇦🇺", rating: 5, text: "The infinity pool view at sunset is breathtaking. Will definitely come back!" },
  { name: "Siti N.", country: "🇮🇩", rating: 5, text: "Honeymoon terbaik! Staff sangat ramah dan kamarnya luar biasa. Highly recommended." },
];

export default function HotelPage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [booking, setBooking] = useState({ checkin: "", checkout: "", guests: "2", submitted: false });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Demo Badge */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-400 text-amber-900 text-xs font-bold text-center py-1.5">
        ✦ DEMO PREVIEW — Contoh Website Hotel & Resort · Bukan website nyata
      </div>

      {/* Navbar */}
      <nav className={`fixed top-7 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-md border-b border-teal-100" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-teal-700 rounded-full flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">SR</span>
            </div>
            <div>
              <p className={`font-extrabold text-sm leading-none transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>Seruni Resort</p>
              <p className={`text-[10px] transition-colors ${scrolled ? "text-teal-600" : "text-teal-200"}`}>& Spa · Bali</p>
            </div>
          </div>
          <div className={`hidden md:flex items-center gap-6 text-sm font-medium transition-colors ${scrolled ? "text-slate-600" : "text-white/90"}`}>
            {["Kamar", "Fasilitas", "Ulasan", "Kontak"].map((m) => (
              <a key={m} href="#" className="hover:text-teal-500 transition-colors">{m}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#booking" className={`hidden sm:block px-4 py-2 rounded-xl text-sm font-bold transition-all ${scrolled ? "bg-teal-700 text-white hover:bg-teal-800" : "bg-white/20 text-white border border-white/30 hover:bg-white/30"}`}>
              Book Now
            </a>
            <Link href="/portfolio" className={`flex items-center gap-1 text-sm transition-colors ${scrolled ? "text-slate-500" : "text-white/80"} hover:text-teal-500`}>
              <ArrowLeft size={15} />
              <span className="hidden sm:inline">Kembali</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen min-h-[600px] bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white/30" style={{ width: `${2 + Math.random() * 4}px`, height: `${2 + Math.random() * 4}px`, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }} />
          ))}
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />

        <div className="relative w-full max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-bold mb-6 tracking-widest uppercase">
              ✦ Luxury Resort & Spa
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Seruni<br />
              <span className="text-teal-300">Resort & Spa</span>
            </h1>
            <p className="mt-5 text-teal-100 text-lg max-w-lg mx-auto">
              Nikmati ketenangan surga tropis Bali. Kemewahan yang tak terlupakan menanti Anda.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              {["⭐ 5-Star Resort", "🏊 Private Pool", "🍽️ Fine Dining", "💆 Luxury Spa"].map((b) => (
                <span key={b} className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium backdrop-blur-sm">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-teal-300 text-xs font-semibold flex flex-col items-center gap-2">
            <span>Scroll</span>
            <div className="w-0.5 h-8 bg-teal-400/50 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 px-4 bg-teal-50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-teal-900">Cek Ketersediaan Kamar</h2>
          </motion.div>
          {booking.submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-8 text-center shadow-lg border border-teal-100">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-bold text-teal-900 text-lg">Reservasi Berhasil!</h3>
              <p className="text-teal-600 mt-2 text-sm">Check-in: {booking.checkin} · Check-out: {booking.checkout} · {booking.guests} Tamu</p>
              <button onClick={() => setBooking({ checkin: "", checkout: "", guests: "2", submitted: false })} className="mt-5 px-6 py-2.5 bg-teal-700 text-white font-bold rounded-xl text-sm hover:bg-teal-800 transition-colors">
                Buat Reservasi Lain
              </button>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-teal-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-teal-700 mb-1.5 block flex items-center gap-1"><Calendar size={12} /> Check-In</label>
                  <input type="date" value={booking.checkin} onChange={(e) => setBooking((b) => ({ ...b, checkin: e.target.value }))} className="w-full border-2 border-teal-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-teal-400 text-slate-700" />
                </div>
                <div>
                  <label className="text-xs font-bold text-teal-700 mb-1.5 block flex items-center gap-1"><Calendar size={12} /> Check-Out</label>
                  <input type="date" value={booking.checkout} onChange={(e) => setBooking((b) => ({ ...b, checkout: e.target.value }))} className="w-full border-2 border-teal-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-teal-400 text-slate-700" />
                </div>
                <div>
                  <label className="text-xs font-bold text-teal-700 mb-1.5 block flex items-center gap-1"><Users size={12} /> Tamu</label>
                  <select value={booking.guests} onChange={(e) => setBooking((b) => ({ ...b, guests: e.target.value }))} className="w-full border-2 border-teal-100 rounded-xl px-3 py-3 text-sm outline-none focus:border-teal-400 text-slate-700">
                    {["1", "2", "3", "4"].map((g) => <option key={g} value={g}>{g} Tamu</option>)}
                  </select>
                </div>
              </div>
              <button
                onClick={() => booking.checkin && booking.checkout && setBooking((b) => ({ ...b, submitted: true }))}
                className={`mt-4 w-full py-4 rounded-2xl font-bold text-sm transition-all ${booking.checkin && booking.checkout ? "bg-teal-700 text-white hover:bg-teal-800 shadow-md shadow-teal-200" : "bg-teal-100 text-teal-400 cursor-not-allowed"}`}
              >
                Cek Ketersediaan
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Tipe Kamar</h2>
            <p className="text-slate-500 mt-2">Setiap kamar dirancang untuk kenyamanan maksimal</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {rooms.map((room, i) => (
              <motion.div key={room.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`h-44 bg-gradient-to-br ${room.color} flex items-center justify-center relative`}>
                    <span className="text-6xl">{room.emoji}</span>
                    <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full border border-white/30">
                      {room.available} tersisa
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-extrabold text-slate-900">{room.name}</h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                      <span>{room.size}</span>
                      <span>·</span>
                      <span>{room.bed}</span>
                      <span>·</span>
                      <span>{room.view}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {room.features.slice(0, 3).map((f) => (
                        <span key={f} className="bg-teal-50 text-teal-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-teal-100">{f}</span>
                      ))}
                      {room.features.length > 3 && <span className="bg-slate-100 text-slate-500 text-[10px] font-semibold px-2 py-0.5 rounded-full">+{room.features.length - 3}</span>}
                    </div>
                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <p className="text-xs text-slate-500">mulai dari</p>
                        <p className="font-extrabold text-teal-700 text-lg">Rp {room.price.toLocaleString("id")}</p>
                        <p className="text-[10px] text-slate-400">per malam</p>
                      </div>
                      <button onClick={() => setSelectedRoom(room)} className="bg-teal-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-teal-800 transition-all hover:scale-105">
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Fasilitas Resort</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <div className="bg-white rounded-3xl p-5 text-center border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <f.icon size={20} className="text-teal-600" />
                  </div>
                  <p className="font-bold text-slate-800 text-sm">{f.label}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials carousel */}
      <section className="py-16 px-4 bg-teal-900">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-white">Ulasan Tamu</h2>
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div key={reviewIdx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(reviews[reviewIdx].rating)].map((_, s) => <Star key={s} size={18} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-teal-100 text-base leading-relaxed italic">"{reviews[reviewIdx].text}"</p>
              <p className="text-amber-400 font-bold mt-4">{reviews[reviewIdx].name} {reviews[reviewIdx].country}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-3 mt-6">
            <button onClick={() => setReviewIdx((r) => (r - 1 + reviews.length) % reviews.length)} className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all">
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2 items-center">
              {reviews.map((_, i) => <button key={i} onClick={() => setReviewIdx(i)} className={`w-2 h-2 rounded-full transition-all ${reviewIdx === i ? "bg-amber-400 w-6" : "bg-white/30"}`} />)}
            </div>
            <button onClick={() => setReviewIdx((r) => (r + 1) % reviews.length)} className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Room detail modal */}
      <AnimatePresence>
        {selectedRoom && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedRoom(null)} className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed inset-4 sm:inset-10 lg:inset-20 bg-white z-50 rounded-3xl overflow-auto shadow-2xl">
              <div className={`h-48 bg-gradient-to-br ${selectedRoom.color} flex items-center justify-center relative`}>
                <span className="text-7xl">{selectedRoom.emoji}</span>
                <button onClick={() => setSelectedRoom(null)} className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all">
                  <X size={18} />
                </button>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-extrabold text-slate-900">{selectedRoom.name}</h2>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">
                  <span>📐 {selectedRoom.size}</span>
                  <span>🛏️ {selectedRoom.bed}</span>
                  <span>🌄 {selectedRoom.view}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedRoom.features.map((f) => (
                    <span key={f} className="bg-teal-50 text-teal-700 text-sm font-semibold px-3 py-1.5 rounded-xl border border-teal-100">✓ {f}</span>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm">Harga per malam</p>
                    <p className="text-3xl font-extrabold text-teal-700">Rp {selectedRoom.price.toLocaleString("id")}</p>
                  </div>
                  <button className="px-8 py-4 bg-teal-700 text-white font-bold rounded-2xl hover:bg-teal-800 transition-all shadow-lg">
                    Pesan Kamar Ini
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="bg-teal-900 text-teal-200 py-8 px-4 text-center">
        <p className="font-bold text-white">Seruni Resort & Spa</p>
        <p className="text-sm mt-1">Jl. Pantai Seminyak, Bali · +62 361-555-0001</p>
        <div className="mt-4 pt-3 border-t border-teal-800">
          <Link href="/portfolio" className="text-xs text-amber-400 hover:underline">← Kembali ke Portfolio Habib Wafi</Link>
        </div>
      </footer>
    </div>
  );
}
