"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Star, Clock, MapPin, Phone, ShoppingCart, Plus, Minus, X } from "lucide-react";

const menuCategories = ["Makanan", "Minuman", "Dessert"];

const menuItems = {
  Makanan: [
    { id: 1, name: "Nasi Goreng Serai Special", desc: "Nasi goreng dengan bumbu serai, udang, dan ayam kampung", price: 45000, rating: 4.9, emoji: "🍳", popular: true },
    { id: 2, name: "Soto Betawi Creamy", desc: "Soto betawi dengan santan kental, daging sapi, dan pelengkap", price: 55000, rating: 4.8, emoji: "🍲", popular: true },
    { id: 3, name: "Rendang Daging Sapi", desc: "Rendang slow-cooked 6 jam dengan rempah pilihan Minang", price: 75000, rating: 5.0, emoji: "🥩", popular: false },
    { id: 4, name: "Gado-Gado Jakarta", desc: "Sayuran segar dengan bumbu kacang khas Jakarta", price: 35000, rating: 4.7, emoji: "🥗", popular: false },
  ],
  Minuman: [
    { id: 5, name: "Es Teh Serai Mint", desc: "Teh segar dengan serai dan daun mint", price: 18000, rating: 4.8, emoji: "🍵", popular: true },
    { id: 6, name: "Jus Alpukat Kental", desc: "Alpukat pilihan blended dengan susu dan cokelat", price: 28000, rating: 4.9, emoji: "🥑", popular: false },
    { id: 7, name: "Es Kelapa Muda", desc: "Kelapa muda segar langsung dari petani lokal", price: 22000, rating: 4.7, emoji: "🥥", popular: false },
  ],
  Dessert: [
    { id: 8, name: "Klepon Pandan Premium", desc: "Klepon isi gula merah dengan balutan kelapa parut", price: 25000, rating: 4.8, emoji: "🟢", popular: true },
    { id: 9, name: "Es Campur Pelangi", desc: "Es campur dengan 10 topping pilihan dan kuah segar", price: 32000, rating: 4.9, emoji: "🍧", popular: false },
  ],
};

const testimonials = [
  { name: "Budi K.", rating: 5, text: "Rendangnya mantap banget! Beneran slow-cooked, empuk dan bumbu meresap sempurna." },
  { name: "Sari M.", rating: 5, text: "Tempatnya nyaman, pelayanan ramah. Soto betawinya jadi favorit keluarga kami." },
  { name: "Reza F.", rating: 5, text: "Konsep earthy-nya unik. Dessert klepon pandan-nya unexpectedly enak!" },
];

type CartItem = { id: number; name: string; price: number; qty: number };

export default function RestaurantPage() {
  const [activeTab, setActiveTab] = useState("Makanan");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [reservasi, setReservasi] = useState({ tanggal: "", waktu: "", tamu: "2", submitted: false });

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) return prev.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((c) => c.id !== id));
  const totalCart = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const currentMenu = menuItems[activeTab as keyof typeof menuItems];

  return (
    <div className="min-h-screen bg-[#fdf6ec] font-sans">
      {/* Demo Badge */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-400 text-amber-900 text-xs font-bold text-center py-1.5">
        ✦ DEMO PREVIEW — Contoh Website Restoran · Bukan website nyata
      </div>

      {/* Navbar */}
      <nav className="fixed top-7 left-0 right-0 z-50 bg-[#fdf6ec]/95 backdrop-blur-sm border-b border-amber-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-extrabold text-sm">SK</span>
            </div>
            <div>
              <p className="font-extrabold text-green-900 text-sm leading-none">Serai Kitchen</p>
              <p className="text-[10px] text-amber-700">Masakan Nusantara</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-amber-900">
            {["Menu", "Reservasi", "Galeri", "Tentang"].map((m) => (
              <a key={m} href="#" className="hover:text-green-800 transition-colors">{m}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-green-900 transition-colors"
            >
              <ShoppingCart size={15} />
              Pesanan
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-400 text-amber-900 text-[10px] font-extrabold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <Link href="/portfolio" className="flex items-center gap-1 text-sm text-amber-700 hover:text-green-800 transition-colors">
              <ArrowLeft size={15} />
              <span className="hidden sm:inline">Kembali</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-green-900 via-green-800 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-8xl flex flex-wrap gap-8 p-10 pointer-events-none">
          {["🌿", "🍃", "🌾", "🌿", "🍃", "🌾"].map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-bold">
                🟢 Buka Sekarang
              </span>
              <span className="flex items-center gap-1 text-amber-300 text-xs font-semibold">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                4.9 (1.2k ulasan Google)
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              Cita Rasa <span className="text-amber-400">Nusantara</span><br />Hadir di Meja Anda
            </h1>
            <p className="mt-4 text-green-200 max-w-lg mx-auto">
              Masakan otentik Indonesia dengan bahan-bahan segar pilihan dan bumbu tradisional turun-temurun.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="#menu" className="px-7 py-3.5 bg-amber-400 text-amber-900 font-bold rounded-2xl hover:bg-amber-300 transition-all shadow-lg shadow-amber-900/30">
                Lihat Menu
              </a>
              <a href="#reservasi" className="px-7 py-3.5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                Buat Reservasi
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-green-200">
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-amber-400" />10:00 – 22:00 WIB</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-amber-400" />Jl. Kemang Raya 45, Jakarta</span>
              <span className="flex items-center gap-1.5"><Phone size={14} className="text-amber-400" />(021) 789-1234</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-green-900">Menu Pilihan</h2>
            <p className="text-amber-700 mt-2">Dibuat fresh setiap hari dengan bahan lokal terbaik</p>
          </motion.div>

          <div className="flex justify-center gap-3 mb-8">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold border-2 transition-all ${
                  activeTab === cat
                    ? "bg-green-800 text-white border-green-800 shadow-lg"
                    : "border-amber-300 text-amber-800 hover:border-green-800 hover:text-green-800 bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {currentMenu.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="bg-white rounded-3xl p-5 border border-amber-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex gap-4 group">
                    <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-green-900 text-sm">{item.name}</h3>
                          {item.popular && (
                            <span className="inline-block bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5">⭐ Populer</span>
                          )}
                        </div>
                        <div className="flex items-center gap-0.5 flex-shrink-0 text-xs">
                          <Star size={10} className="text-amber-400 fill-amber-400" />
                          <span className="font-semibold text-slate-600">{item.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-amber-700 mt-1 leading-relaxed line-clamp-2">{item.desc}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="font-extrabold text-green-800">Rp {item.price.toLocaleString("id")}</p>
                        <button
                          onClick={() => addToCart(item)}
                          className="flex items-center gap-1 bg-green-800 text-white text-xs font-bold px-3 py-1.5 rounded-xl hover:bg-green-900 transition-all hover:scale-105"
                        >
                          <Plus size={11} /> Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 px-4 bg-green-900">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-white">Kata Pelanggan</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-5 border border-white/10">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, s) => <Star key={s} size={13} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-green-100 text-sm leading-relaxed italic">"{t.text}"</p>
                  <p className="text-amber-400 font-bold text-sm mt-3">— {t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservasi */}
      <section id="reservasi" className="py-16 px-4 bg-[#fdf6ec]">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-green-900">Buat Reservasi</h2>
            <p className="text-amber-700 mt-2 text-sm">Pesan meja sekarang, nikmati tanpa antri</p>
          </motion.div>
          {reservasi.submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-green-900 text-lg">Reservasi Berhasil!</h3>
              <p className="text-green-700 mt-2 text-sm">Meja untuk {reservasi.tamu} orang telah dipesan pada {reservasi.tanggal} pukul {reservasi.waktu}.</p>
              <button onClick={() => setReservasi({ tanggal: "", waktu: "", tamu: "2", submitted: false })} className="mt-4 px-6 py-2.5 bg-green-800 text-white font-bold rounded-xl text-sm hover:bg-green-900 transition-colors">
                Buat Reservasi Lain
              </button>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-xs font-bold text-amber-800 mb-1.5 block">Tanggal</label>
                  <input
                    type="date"
                    value={reservasi.tanggal}
                    onChange={(e) => setReservasi((r) => ({ ...r, tanggal: e.target.value }))}
                    className="w-full border border-amber-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-green-700 text-slate-700"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-amber-800 mb-1.5 block">Waktu</label>
                  <select
                    value={reservasi.waktu}
                    onChange={(e) => setReservasi((r) => ({ ...r, waktu: e.target.value }))}
                    className="w-full border border-amber-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-green-700 text-slate-700"
                  >
                    <option value="">Pilih waktu</option>
                    {["11:00", "12:00", "13:00", "17:00", "18:00", "19:00", "20:00"].map((t) => (
                      <option key={t} value={t}>{t} WIB</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-amber-800 mb-1.5 block">Jumlah Tamu</label>
                  <select
                    value={reservasi.tamu}
                    onChange={(e) => setReservasi((r) => ({ ...r, tamu: e.target.value }))}
                    className="w-full border border-amber-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-green-700 text-slate-700"
                  >
                    {["1", "2", "3", "4", "5", "6", "7", "8+"].map((t) => (
                      <option key={t} value={t}>{t} Orang</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={() => reservasi.tanggal && reservasi.waktu && setReservasi((r) => ({ ...r, submitted: true }))}
                className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all ${reservasi.tanggal && reservasi.waktu ? "bg-green-800 text-white hover:bg-green-900 shadow-md" : "bg-amber-100 text-amber-400 cursor-not-allowed"}`}
              >
                Konfirmasi Reservasi
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartOpen(false)} className="fixed inset-0 bg-black/40 z-50" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-5 border-b border-amber-100">
                <h3 className="font-bold text-green-900">Pesanan Kamu ({totalItems})</h3>
                <button onClick={() => setCartOpen(false)} className="p-1.5 hover:bg-slate-100 rounded-xl"><X size={18} /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-3">
                {cart.length === 0 ? (
                  <p className="text-center text-amber-600 text-sm py-10">Belum ada pesanan</p>
                ) : cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 bg-amber-50 rounded-2xl p-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-green-900 text-sm truncate">{item.name}</p>
                      <p className="text-amber-700 text-xs">Rp {item.price.toLocaleString("id")}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => item.qty === 1 ? removeFromCart(item.id) : setCart((prev) => prev.map((c) => c.id === item.id ? { ...c, qty: c.qty - 1 } : c))} className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center hover:bg-amber-300"><Minus size={10} /></button>
                      <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                      <button onClick={() => addToCart(item)} className="w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center hover:bg-green-800"><Plus size={10} /></button>
                    </div>
                  </div>
                ))}
              </div>
              {cart.length > 0 && (
                <div className="p-5 border-t border-amber-100">
                  <div className="flex justify-between font-bold text-green-900 mb-3">
                    <span>Total</span>
                    <span>Rp {totalCart.toLocaleString("id")}</span>
                  </div>
                  <button className="w-full py-3.5 bg-green-800 text-white font-bold rounded-2xl hover:bg-green-900 transition-colors">
                    Pesan Sekarang
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="bg-green-900 text-green-200 py-8 px-4 text-center">
        <p className="font-bold text-white">Serai Kitchen</p>
        <p className="text-sm mt-1">Jl. Kemang Raya 45 · (021) 789-1234 · Buka 10:00–22:00</p>
        <div className="mt-4 pt-3 border-t border-green-800">
          <Link href="/portfolio" className="text-xs text-amber-400 hover:underline">← Kembali ke Portfolio Habib Wafi</Link>
        </div>
      </footer>
    </div>
  );
}
