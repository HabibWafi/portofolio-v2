"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Heart, Plus, Minus, X, MessageCircle, Star, Search } from "lucide-react";

const categories = ["Semua", "Kain Batik", "Pakaian", "Aksesori"];

const products = [
  { id: 1, name: "Batik Tulis Mega Mendung", category: "Kain Batik", price: 450000, originalPrice: 550000, rating: 4.9, reviews: 128, emoji: "🎨", badge: "Bestseller", desc: "Batik tulis premium motif mega mendung Cirebon, pewarna alami" },
  { id: 2, name: "Dress Batik Modern Cut", category: "Pakaian", price: 380000, originalPrice: null, rating: 4.8, reviews: 76, emoji: "👗", badge: "Baru", desc: "Dress batik modern untuk acara formal dan semi-formal" },
  { id: 3, name: "Kain Batik Cap Kawung", category: "Kain Batik", price: 180000, originalPrice: 220000, rating: 4.7, reviews: 203, emoji: "🌸", badge: null, desc: "Batik cap motif kawung Jogja, tersedia berbagai warna" },
  { id: 4, name: "Kemeja Batik Slim Fit", category: "Pakaian", price: 275000, originalPrice: null, rating: 4.8, reviews: 94, emoji: "👔", badge: "Populer", desc: "Kemeja batik slim fit untuk pria, cocok untuk kantor" },
  { id: 5, name: "Tas Batik Tote Premium", category: "Aksesori", price: 195000, originalPrice: 240000, rating: 4.6, reviews: 58, emoji: "👜", badge: null, desc: "Tote bag kanvas dengan aplikasi batik tulis" },
  { id: 6, name: "Set Sarimbit Couple", category: "Pakaian", price: 650000, originalPrice: null, rating: 5.0, reviews: 45, emoji: "💑", badge: "❤️ Couple", desc: "Set batik couple untuk pasangan, bahan premium nyaman" },
];

type CartItem = { id: number; name: string; price: number; qty: number };

export default function UMKMPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [liked, setLiked] = useState<number[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [checkoutDone, setCheckoutDone] = useState(false);

  const filtered = products.filter((p) => {
    const catMatch = activeCategory === "Semua" || p.category === activeCategory;
    const searchMatch = p.name.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  const addToCart = (p: (typeof products)[0]) => setCart((prev) => {
    const ex = prev.find((c) => c.id === p.id);
    return ex ? prev.map((c) => c.id === p.id ? { ...c, qty: c.qty + 1 } : c) : [...prev, { id: p.id, name: p.name, price: p.price, qty: 1 }];
  });
  const removeFromCart = (id: number) => setCart((prev) => prev.filter((c) => c.id !== id));
  const totalCart = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);

  return (
    <div className="min-h-screen bg-[#faf7f4] font-sans">
      {/* Demo Badge */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-400 text-amber-900 text-xs font-bold text-center py-1.5">
        ✦ DEMO PREVIEW — Contoh Website UMKM & Toko Online · Bukan website nyata
      </div>

      {/* Navbar */}
      <nav className="fixed top-7 left-0 right-0 z-50 bg-[#faf7f4]/95 backdrop-blur-sm border-b border-amber-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-rose-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-extrabold text-xs">BSN</span>
            </div>
            <div>
              <p className="font-extrabold text-rose-900 text-sm leading-none">Batik Sekar</p>
              <p className="text-[10px] text-amber-700">Nusantara</p>
            </div>
          </div>

          <div className="flex-1 max-w-xs mx-4 hidden sm:flex items-center gap-2 bg-white border border-amber-200 rounded-xl px-3 py-2 focus-within:border-rose-400 transition-colors">
            <Search size={14} className="text-amber-400" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 text-sm outline-none bg-transparent placeholder-amber-300 text-slate-700" placeholder="Cari produk..." />
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setCartOpen(true)} className="relative flex items-center gap-2 bg-rose-800 text-white px-3 py-2 rounded-xl text-sm font-bold hover:bg-rose-900 transition-colors">
              <ShoppingCart size={15} />
              <span className="hidden sm:inline">Keranjang</span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-amber-400 text-amber-900 text-[10px] font-extrabold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <Link href="/portfolio" className="flex items-center gap-1 text-sm text-amber-700 hover:text-rose-800 transition-colors">
              <ArrowLeft size={15} />
              <span className="hidden sm:inline">Kembali</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-rose-900 via-rose-800 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 text-9xl text-center flex items-center justify-center pointer-events-none">🌸</div>
        <div className="absolute top-10 right-20 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-rose-400/20 rounded-full blur-2xl" />
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 py-1.5 bg-amber-400/20 border border-amber-400/40 rounded-full text-amber-300 text-xs font-bold mb-4">🌺 Batik Nusantara Authentic</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Keindahan<br /><span className="text-amber-400">Batik Asli</span><br />Indonesia
              </h1>
              <p className="mt-4 text-rose-200 max-w-md">
                Produk batik tulis dan cap berkualitas tinggi dari pengrajin lokal Jogja dan Cirebon. Setiap helai menceritakan kisah budaya.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="#produk" className="px-6 py-3 bg-amber-400 text-amber-900 font-bold rounded-2xl hover:bg-amber-300 transition-all shadow-lg">Belanja Sekarang</a>
                <a href="#about" className="px-6 py-3 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">Cerita Kami</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-5 justify-center lg:justify-start text-sm text-rose-200">
                {[["1200+", "Produk Terjual"], ["4.8★", "Rating Rata-rata"], ["500+", "Pelanggan Puas"]].map(([v, l]) => (
                  <div key={l}><p className="font-extrabold text-amber-400">{v}</p><p className="text-xs">{l}</p></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex-shrink-0">
              <div className="w-56 h-56 bg-white/10 border-2 border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-8xl">🎨</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produk" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-rose-900">Koleksi Produk</h2>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-2xl text-sm font-bold border-2 transition-all ${activeCategory === cat ? "bg-rose-800 text-white border-rose-800 shadow" : "border-amber-200 text-amber-800 bg-white hover:border-rose-400"}`}>
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                  <div className="bg-white rounded-3xl overflow-hidden border border-amber-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative h-44 bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center">
                      <span className="text-5xl">{p.emoji}</span>
                      {p.badge && <span className="absolute top-3 left-3 bg-rose-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">{p.badge}</span>}
                      <button onClick={() => setLiked((prev) => prev.includes(p.id) ? prev.filter((x) => x !== p.id) : [...prev, p.id])} className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                        <Heart size={14} className={liked.includes(p.id) ? "text-red-500 fill-red-500" : "text-slate-400"} />
                      </button>
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] font-bold text-amber-600 mb-1">{p.category}</p>
                      <h3 className="font-bold text-rose-900 text-sm leading-tight">{p.name}</h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{p.desc}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Star size={11} className="text-amber-400 fill-amber-400" />
                        <span className="text-xs font-semibold text-slate-700">{p.rating}</span>
                        <span className="text-xs text-slate-400">({p.reviews} ulasan)</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div>
                          <p className="font-extrabold text-rose-800 text-base">Rp {p.price.toLocaleString("id")}</p>
                          {p.originalPrice && <p className="text-xs text-slate-400 line-through">Rp {p.originalPrice.toLocaleString("id")}</p>}
                        </div>
                        <button onClick={() => addToCart(p)} className="flex items-center gap-1 bg-rose-800 text-white text-xs font-bold px-3 py-2 rounded-xl hover:bg-rose-900 transition-all hover:scale-105">
                          <Plus size={11} /> Keranjang
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

      {/* About section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-shrink-0">
            <div className="w-48 h-48 bg-gradient-to-br from-rose-200 to-amber-200 rounded-3xl flex items-center justify-center shadow-xl">
              <span className="text-7xl">🏭</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Cerita Kami</span>
            <h2 className="text-2xl font-extrabold text-rose-900 mt-2">Warisan Budaya, Kualitas Terjaga</h2>
            <p className="text-amber-800 mt-3 leading-relaxed">
              Batik Sekar Nusantara berdiri sejak 2010, bermitra langsung dengan 50+ pengrajin batik di Jogja dan Cirebon. Setiap produk melewati quality control ketat dan menggunakan pewarna ramah lingkungan.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {[["50+", "Pengrajin Mitra"], ["14 Thn", "Pengalaman"], ["100%", "Bahan Alami"]].map(([v, l]) => (
                <div key={l} className="text-center bg-white rounded-2xl p-3 border border-rose-100">
                  <p className="font-extrabold text-rose-800 text-lg">{v}</p>
                  <p className="text-xs text-amber-700">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WA Float Button */}
      <motion.a
        href="#"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-green-500/40 hover:bg-green-600 transition-all hover:scale-105"
      >
        <MessageCircle size={18} />
        <span className="text-sm font-bold">Order via WA</span>
      </motion.a>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartOpen(false)} className="fixed inset-0 bg-black/40 z-50" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 flex flex-col shadow-2xl">
              <div className="flex items-center justify-between p-5 border-b">
                <h3 className="font-bold text-rose-900">Keranjang ({totalItems})</h3>
                <button onClick={() => setCartOpen(false)} className="p-1.5 hover:bg-slate-100 rounded-xl"><X size={18} /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-3">
                {cart.length === 0 ? <p className="text-center text-amber-600 text-sm py-10">Keranjang kosong</p> :
                  cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 bg-rose-50 rounded-2xl p-3 border border-rose-100">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-rose-900 text-sm truncate">{item.name}</p>
                        <p className="text-amber-700 text-xs">Rp {item.price.toLocaleString("id")}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => item.qty === 1 ? removeFromCart(item.id) : setCart((prev) => prev.map((c) => c.id === item.id ? { ...c, qty: c.qty - 1 } : c))} className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center hover:bg-amber-300"><Minus size={10} /></button>
                        <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                        <button onClick={() => addToCart(products.find((p) => p.id === item.id)!)} className="w-6 h-6 bg-rose-700 text-white rounded-full flex items-center justify-center hover:bg-rose-800"><Plus size={10} /></button>
                      </div>
                    </div>
                  ))}
              </div>
              {cart.length > 0 && (
                <div className="p-5 border-t">
                  <div className="flex justify-between font-bold text-rose-900 mb-3">
                    <span>Total</span>
                    <span>Rp {totalCart.toLocaleString("id")}</span>
                  </div>
                  {checkoutDone ? (
                    <div className="text-center py-2">
                      <p className="text-green-600 font-bold text-sm">✅ Pesanan Diterima!</p>
                      <button onClick={() => { setCart([]); setCheckoutDone(false); setCartOpen(false); }} className="mt-2 text-xs text-slate-500 underline">Reset</button>
                    </div>
                  ) : (
                    <button onClick={() => setCheckoutDone(true)} className="w-full py-3.5 bg-rose-800 text-white font-bold rounded-2xl hover:bg-rose-900 transition-colors">Checkout</button>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="bg-rose-900 text-rose-200 py-8 px-4 text-center">
        <p className="font-bold text-white">Batik Sekar Nusantara</p>
        <p className="text-sm mt-1">Kp. Batik No. 7, Yogyakarta · WA: 0812-xxxx-xxxx</p>
        <div className="mt-4 pt-3 border-t border-rose-800">
          <Link href="/portfolio" className="text-xs text-amber-400 hover:underline">← Kembali ke Portfolio Habib Wafi</Link>
        </div>
      </footer>
    </div>
  );
}
