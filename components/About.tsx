"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Brain, Link as LinkIcon, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Membangun aplikasi web end-to-end dari frontend hingga backend dan database.",
    color: "blue",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconColor: "text-blue-600",
    hoverBorder: "hover:border-blue-300",
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    desc: "Menerapkan machine learning dan analisis data untuk solusi bisnis yang cerdas.",
    color: "violet",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconColor: "text-violet-600",
    hoverBorder: "hover:border-violet-300",
  },
  {
    icon: LinkIcon,
    title: "Blockchain Engineering",
    desc: "Mengembangkan smart contract dan aplikasi terdesentralisasi (dApps) di Ethereum.",
    color: "amber",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconColor: "text-amber-600",
    hoverBorder: "hover:border-amber-300",
  },
];

const values = [
  "Clean, maintainable code architecture",
  "Data-driven decision making",
  "Continuous learning & improvement",
  "Collaborative team environment",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-violet-100 rounded-3xl"
                initial={{ rotate: 3 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.4 }}
              />
              <div className="relative bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-violet-700 flex items-center justify-center mx-auto shadow-2xl shadow-blue-200">
                  <span className="text-4xl font-black text-white/30">HW</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">{personalInfo.displayName}</h3>
                <p className="text-sm text-blue-600 font-semibold mt-1">Full Stack Developer</p>
                <p className="text-xs text-slate-500 mt-0.5">{personalInfo.location}</p>

                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs text-emerald-700 font-semibold">Open to work</span>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-left">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2.5 text-sm group">
                    <Mail size={14} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                    <span className="text-blue-600 hover:underline text-xs truncate">{personalInfo.email}</span>
                  </a>
                  <div className="flex items-center gap-2.5 text-sm">
                    <MapPin size={14} className="text-slate-400" />
                    <span className="text-slate-600 text-xs">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="section-label">About Me</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Who am I?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Saya adalah{" "}
              <span className="font-bold text-slate-800">Habibullah Hibatul Wafi</span>
              , seorang Full Stack Developer dan Blockchain Engineer yang berbasis di Jakarta, Indonesia.
              Lulusan D4 Komputasi Statistik dari Politeknik Statistika STIS dengan fondasi kuat dalam statistik dan pemrograman.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Saat ini bekerja sebagai Pranata Komputer Ahli Pertama di BPS Kabupaten Musi Rawas, aktif mengembangkan sistem informasi statistik dan terus mengasah keahlian di bidang AI, Web Development, dan Blockchain.
            </p>

            {/* Values */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2"
            >
              {values.map((value) => (
                <motion.div key={value} variants={item} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600">{value}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-8 space-y-3"
            >
              {highlights.map(({ icon: Icon, title, desc, bg, border, iconColor, hoverBorder }) => (
                <motion.div
                  key={title}
                  variants={item}
                  whileHover={{ x: 5 }}
                  className={`flex items-start gap-4 p-4 bg-white rounded-2xl border ${border} ${hoverBorder} hover:shadow-md transition-all duration-200 cursor-default`}
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={iconColor} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
