"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code, Smartphone, Cloud, Palette, Search, Wrench, ChevronRight, Star, Award } from "lucide-react";

const services = [
  { icon: Code, title: "Web Development", desc: "Website modern, cepat, dan responsive dengan teknologi terkini", color: "blue", bg: "bg-blue-50", border: "border-blue-100", icon_color: "text-blue-600" },
  { icon: Smartphone, title: "Mobile App", desc: "Aplikasi Android & iOS native atau cross-platform dengan React Native", color: "violet", bg: "bg-violet-50", border: "border-violet-100", icon_color: "text-violet-600" },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Infrastruktur cloud scalable, CI/CD pipeline, monitoring & security", color: "cyan", bg: "bg-cyan-50", border: "border-cyan-100", icon_color: "text-cyan-600" },
  { icon: Palette, title: "UI/UX Design", desc: "Desain antarmuka yang intuitif, modern, dan berfokus pada user experience", color: "pink", bg: "bg-pink-50", border: "border-pink-100", icon_color: "text-pink-600" },
  { icon: Search, title: "SEO & Digital", desc: "Optimasi mesin pencari, Google Ads, dan strategi digital marketing", color: "amber", bg: "bg-amber-50", border: "border-amber-100", icon_color: "text-amber-600" },
  { icon: Wrench, title: "Maintenance", desc: "Support teknis 24/7, update berkala, backup data, dan monitoring performa", color: "emerald", bg: "bg-emerald-50", border: "border-emerald-100", icon_color: "text-emerald-600" },
];

const team = [
  { name: "Rizky Pratama", role: "CEO & CTO", exp: "10+ Thn", specialty: "Full Stack" },
  { name: "Ayu Sari", role: "Lead Designer", exp: "8 Thn", specialty: "UI/UX" },
  { name: "Budi Santoso", role: "Cloud Architect", exp: "7 Thn", specialty: "DevOps" },
  { name: "Dewi Lestari", role: "Project Manager", exp: "6 Thn", specialty: "Agile" },
];

const milestones = [
  { year: "2015", title: "Berdiri", desc: "TechSolusi didirikan oleh tim 3 orang dari Bandung" },
  { year: "2017", title: "Klien 50+", desc: "Mencapai 50 klien aktif dan ekspansi ke Jakarta" },
  { year: "2019", title: "ISO 9001", desc: "Meraih sertifikasi ISO 9001 untuk quality management" },
  { year: "2021", title: "100+ Proyek", desc: "Milestone 100 proyek sukses di berbagai industri" },
  { year: "2023", title: "Best Startup", desc: "Menerima penghargaan Best Tech Startup dari Kemenkominfo" },
  { year: "2024", title: "200+ Klien", desc: "Melayani lebih dari 200 klien aktif di seluruh Indonesia" },
];

const clients = ["Pertamina", "Bank BRI", "Tokopedia", "Telkom", "Unilever", "Astra", "BCA", "Mandiri"];

const testimonials = [
  { name: "Hendra K.", company: "PT Maju Jaya", rating: 5, text: "TechSolusi mengerjakan website kami dengan sangat profesional. Hasilnya melebihi ekspektasi dan selesai tepat waktu." },
  { name: "Sarah L.", company: "Startup Fintech X", rating: 5, text: "Tim yang sangat responsive dan teknis. Aplikasi mobile kami berjalan smooth bahkan saat traffic tinggi." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

export default function CompanyProfilePage() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Demo Badge */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-amber-400 text-amber-900 text-xs font-bold text-center py-1.5">
        ✦ DEMO PREVIEW — Contoh Website Profil Perusahaan · Bukan website nyata
      </div>

      {/* Navbar */}
      <nav className="fixed top-7 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-violet-700 rounded-xl flex items-center justify-center shadow-md shadow-blue-200">
              <span className="text-white font-extrabold text-sm">TS</span>
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-sm">TechSolusi</p>
              <p className="text-[10px] text-blue-600">Indonesia</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            {["Layanan", "Tim", "Milestone", "Klien", "Kontak"].map((m) => (
              <a key={m} href="#" className="hover:text-blue-600 transition-colors">{m}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden sm:block px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
              Konsultasi Gratis
            </a>
            <Link href="/portfolio" className="flex items-center gap-1 text-slate-500 hover:text-blue-600 transition-colors text-sm">
              <ArrowLeft size={15} />
              <span className="hidden sm:inline">Kembali</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950 relative overflow-hidden">
        {/* Particles */}
        {[...Array(25)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: `${1 + Math.random() * 3}px`, height: `${1 + Math.random() * 3}px` }} />
        ))}
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-bold mb-5 tracking-widest">
              <Award size={12} /> IT Solutions Company Since 2015
            </span>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
              Wujudkan Ide Digital<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Bersama Kami</span>
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-2xl mx-auto">
              Solusi teknologi digital terpercaya untuk bisnis Anda. Web, mobile app, cloud, dan lebih dari 200 klien puas.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#layanan" className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-blue-900/50">
                Lihat Layanan
              </a>
              <a href="#" className="px-7 py-3.5 border-2 border-slate-600 text-white font-bold rounded-2xl hover:border-blue-500 hover:text-blue-400 transition-all flex items-center gap-2">
                Portfolio Kami <ChevronRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-12 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[["200+", "Klien Aktif"], ["10+", "Tahun Pengalaman"], ["98%", "Klien Puas"], ["24/7", "Support"]].map(([v, l], i) => (
            <motion.div key={l} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
              <p className="text-3xl font-extrabold text-blue-600">{v}</p>
              <p className="text-slate-500 text-sm mt-1">{l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Layanan Kami</h2>
            <p className="text-slate-500 mt-2">Solusi lengkap untuk transformasi digital bisnis Anda</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className={`bg-white rounded-3xl p-6 border-2 ${s.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
                  <div className={`w-12 h-12 ${s.bg} border ${s.border} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <s.icon size={22} className={s.icon_color} />
                  </div>
                  <h3 className="font-bold text-slate-900">{s.title}</h3>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    Pelajari lebih lanjut <ChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team with hover flip */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Tim Kami</h2>
            <p className="text-slate-500 mt-2">Hover kartu untuk melihat detail</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div key={member.name} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div
                  className="relative h-48 cursor-pointer"
                  style={{ perspective: "1000px" }}
                  onMouseEnter={() => setFlipped(i)}
                  onMouseLeave={() => setFlipped(null)}
                >
                  <motion.div
                    animate={{ rotateY: flipped === i ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative w-full h-full"
                  >
                    {/* Front */}
                    <div className="absolute inset-0 bg-white rounded-3xl border-2 border-slate-200 flex flex-col items-center justify-center p-4 text-center" style={{ backfaceVisibility: "hidden" }}>
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-blue-200">
                        <span className="text-white font-bold text-lg">{member.name[0]}</span>
                      </div>
                      <p className="font-bold text-slate-900 text-sm">{member.name}</p>
                      <p className="text-blue-600 text-xs mt-0.5 font-semibold">{member.role}</p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-700 rounded-3xl flex flex-col items-center justify-center p-4 text-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                      <div className="text-3xl mb-2">💼</div>
                      <p className="text-white font-bold text-sm">{member.specialty}</p>
                      <p className="text-blue-200 text-xs mt-1">{member.exp} pengalaman</p>
                      <button className="mt-3 px-4 py-1.5 bg-white/20 border border-white/30 rounded-xl text-white text-xs font-bold hover:bg-white/30 transition-colors">
                        LinkedIn →
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">Perjalanan Kami</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-blue-100" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div key={m.year} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex items-start gap-6">
                  <div className="w-24 flex-shrink-0 text-right">
                    <span className="font-extrabold text-blue-600">{m.year}</span>
                  </div>
                  <div className="relative">
                    <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-blue-100 -ml-2.5 mt-0.5 flex-shrink-0" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-md transition-shadow">
                    <p className="font-bold text-slate-900 text-sm">{m.title}</p>
                    <p className="text-slate-500 text-xs mt-1">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client logos marquee */}
      <section className="py-12 px-4 bg-slate-50 overflow-hidden">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-6">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Dipercaya oleh</p>
        </motion.div>
        <div className="flex gap-8 items-center" style={{ animation: "marquee 20s linear infinite" }}>
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="flex-shrink-0 bg-white border border-slate-200 rounded-2xl px-6 py-3 font-bold text-slate-400 text-sm hover:text-blue-600 hover:border-blue-200 transition-colors whitespace-nowrap">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-blue-950">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-white">Kata Klien</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, s) => <Star key={s} size={13} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-blue-400 text-xs">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center">
        <p className="font-bold text-white">TechSolusi Indonesia</p>
        <p className="text-sm mt-1">Jl. Asia Afrika No. 45, Bandung · hello@techsolusi.id</p>
        <div className="mt-4 pt-3 border-t border-slate-800">
          <Link href="/portfolio" className="text-xs text-blue-400 hover:underline">← Kembali ke Portfolio Habib Wafi</Link>
        </div>
      </footer>
    </div>
  );
}
