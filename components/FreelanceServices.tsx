"use client";

import { motion } from "framer-motion";
import {
  Monitor, Briefcase, ShoppingCart, Code2,
  ArrowRight, CheckCircle2, Sparkles, Zap, MessageCircle,
} from "lucide-react";
import { personalInfo } from "@/lib/data";

const services = [
  {
    icon: Monitor,
    title: "Landing Page",
    desc: "Halaman promosi profesional yang menarik perhatian dan mengkonversi pengunjung menjadi pelanggan.",
    features: ["Desain responsif", "SEO-friendly", "Fast loading", "Revisi 3x"],
    badge: "Populer",
    badgeColor: "bg-emerald-400 text-emerald-900",
  },
  {
    icon: Briefcase,
    title: "Company Profile",
    desc: "Website perusahaan yang merepresentasikan brand kamu secara profesional dan terpercaya.",
    features: ["Multi-halaman", "CMS terintegrasi", "Animasi modern", "Domain & hosting"],
    badge: "Recommended",
    badgeColor: "bg-amber-400 text-amber-900",
  },
  {
    icon: Code2,
    title: "Web Application",
    desc: "Aplikasi web full stack custom sesuai kebutuhan bisnis, dari dashboard hingga sistem manajemen.",
    features: ["Custom fitur", "Database", "Authentication", "API integration"],
    badge: "Best Value",
    badgeColor: "bg-blue-300 text-blue-900",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Toko online lengkap dengan manajemen produk, keranjang belanja, dan integrasi pembayaran.",
    features: ["Payment gateway", "Manajemen produk", "Order tracking", "Admin panel"],
    badge: null,
    badgeColor: "",
  },
];

const FREELANCE_SITE_URL = "#";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FreelanceServices() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated glow blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-5 backdrop-blur-sm">
            <Sparkles size={13} className="text-amber-300" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Freelance Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Butuh Website<br />
            <span className="text-amber-300">Profesional?</span>
          </h2>
          <p className="mt-4 text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Saya menerima proyek pembuatan website untuk bisnis, startup, dan personal. Setiap website dibangun dengan teknologi modern, performa tinggi, dan desain yang menarik.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {services.map(({ icon: Icon, title, desc, features, badge, badgeColor }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -7, backgroundColor: "rgba(255,255,255,0.18)" }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group relative bg-white/10 border border-white/20 hover:border-white/40 rounded-2xl p-5 backdrop-blur-sm"
            >
              {badge && (
                <span className={`absolute -top-2.5 left-4 px-2.5 py-0.5 ${badgeColor} text-[10px] font-extrabold rounded-full`}>
                  {badge}
                </span>
              )}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4"
              >
                <Icon size={18} className="text-white" />
              </motion.div>
              <h3 className="text-white font-extrabold mb-2">{title}</h3>
              <p className="text-blue-200 text-xs leading-relaxed mb-4">{desc}</p>
              <ul className="space-y-1.5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-blue-100">
                    <CheckCircle2 size={12} className="text-emerald-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href={FREELANCE_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-blue-700 font-extrabold rounded-full hover:bg-blue-50 transition-all shadow-2xl shadow-blue-900/40 text-sm group"
            >
              <Zap size={16} className="text-amber-500" />
              Lihat Paket & Harga Lengkap
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href={`https://wa.me/${personalInfo.whatsapp}?text=Halo%20Habib%2C%20saya%20ingin%20konsultasi%20pembuatan%20website`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-extrabold rounded-full transition-all shadow-xl shadow-green-900/30 text-sm"
            >
              <MessageCircle size={16} />
              Konsultasi via WhatsApp
            </motion.a>
          </div>
          <p className="mt-4 text-blue-300/60 text-xs">
            Estimasi pengerjaan 3–14 hari kerja · Revisi termasuk · Garansi after-launch
          </p>
        </motion.div>
      </div>
    </section>
  );
}
