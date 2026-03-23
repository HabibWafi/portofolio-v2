"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Home, ChevronRight } from "lucide-react";
import { portfolioItems, personalInfo } from "@/lib/data";

const categories = ["Semua", "Landing Page", "Company Profile", "E-Commerce", "Web Application"];

const categoryColors: Record<string, string> = {
  "Landing Page": "bg-blue-100 text-blue-700 border-blue-200",
  "Company Profile": "bg-violet-100 text-violet-700 border-violet-200",
  "E-Commerce": "bg-rose-100 text-rose-700 border-rose-200",
  "Web Application": "bg-amber-100 text-amber-700 border-amber-200",
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar strip */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold group-hover:bg-blue-700 transition-colors">
              HW
            </span>
            <span className="font-semibold text-slate-900 hidden sm:block text-sm">
              {personalInfo.displayName}
            </span>
          </Link>

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home size={14} />
              <span className="hidden sm:inline">Beranda</span>
            </Link>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="text-slate-800 font-medium">Portfolio</span>
          </div>

          <Link
            href="/#contact"
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors shadow-sm"
          >
            Hire Me
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              ✦ Portfolio Freelance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Contoh Website yang{" "}
              <span className="text-blue-600">Bisa Dibuat</span>
            </h1>
            <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Setiap website dibuat dengan desain modern, animasi halus, dan teknologi terkini.
              Klik demo untuk merasakan langsung tampilan dan fitur website-nya.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex flex-wrap justify-center gap-8"
          >
            {[
              { value: "7+", label: "Kategori Website" },
              { value: "100%", label: "Custom Design" },
              { value: "Mobile", label: "Responsive" },
              { value: "SEO", label: "Friendly" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-blue-600">{s.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((item) => (
                <motion.div key={item.id} variants={cardVariants} layout>
                  <Link href={`/portfolio/${item.id}`} className="group block h-full">
                    <div className="h-full bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                      {/* Visual preview */}
                      <div
                        className={`relative h-48 bg-gradient-to-br ${item.accentColor} flex items-center justify-center overflow-hidden`}
                      >
                        {/* Decorative circles */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full" />
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-xl" />

                        {/* Browser mockup */}
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-52 h-32 overflow-hidden border border-white/30">
                          <div className="bg-slate-100 px-3 py-1.5 flex items-center gap-1.5 border-b border-slate-200">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <div className="flex-1 bg-white rounded-full h-3 ml-2 border border-slate-200 flex items-center px-2">
                              <span className="text-slate-400 text-[7px] truncate">
                                {item.subtitle.toLowerCase().replace(/\s+/g, "")}.com
                              </span>
                            </div>
                          </div>
                          <div className="p-3 flex flex-col gap-1.5">
                            <div className={`h-2 rounded-full bg-gradient-to-r ${item.accentColor} w-3/4`} />
                            <div className="h-1.5 rounded-full bg-slate-200 w-full" />
                            <div className="h-1.5 rounded-full bg-slate-200 w-5/6" />
                            <div className="mt-1 flex gap-1.5">
                              <div className={`h-8 rounded-lg bg-gradient-to-br ${item.accentColor} flex-1`} />
                              <div className={`h-8 rounded-lg bg-gradient-to-br ${item.accentColor} opacity-60 flex-1`} />
                              <div className={`h-8 rounded-lg bg-gradient-to-br ${item.accentColor} opacity-30 flex-1`} />
                            </div>
                          </div>
                        </div>

                        {/* Icon badge */}
                        <div className="absolute top-4 right-4 text-3xl">{item.icon}</div>
                      </div>

                      {/* Card content */}
                      <div className="flex-1 p-6 flex flex-col">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                                categoryColors[item.category] || "bg-slate-100 text-slate-600 border-slate-200"
                              } mb-2`}
                            >
                              {item.category}
                            </span>
                            <h3 className="font-bold text-slate-900 text-lg leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-400 mt-0.5 font-medium">{item.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-sm text-slate-500 leading-relaxed flex-1">
                          {item.description}
                        </p>

                        {/* Tech chips */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {item.tech.map((t) => (
                            <span
                              key={t}
                              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${item.bgColor} ${item.textColor} ${item.borderColor}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div
                          className={`mt-5 flex items-center gap-2 text-sm font-semibold ${item.textColor} group-hover:gap-3 transition-all`}
                        >
                          <ExternalLink size={14} />
                          Lihat Demo
                          <ArrowRight size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-blue-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ingin website seperti ini?
          </h2>
          <p className="mt-4 text-blue-100 text-lg leading-relaxed">
            Saya siap membuatkan website impian Anda dengan desain modern, performa tinggi,
            dan harga yang terjangkau.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://wa.me/${personalInfo.whatsapp}?text=Halo%20Habib%2C%20saya%20mau%20buat%20website`}
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              💬 Chat via WhatsApp
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
            >
              Lihat Paket & Harga
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-sm text-slate-400 border-t border-slate-100">
        <p>
          © 2024 {personalInfo.name} · Portfolio Freelance
        </p>
      </footer>
    </div>
  );
}
