"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = end / 50;
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: MessageCircle, href: `https://wa.me/${personalInfo.whatsapp}`, label: "WhatsApp" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 pt-16"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-10 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left */}
        <div className="order-2 lg:order-1">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-7 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-300 text-sm font-semibold">Available for opportunities</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            Hi, I&apos;m<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-300">
              Habib Wafi
            </span>
          </motion.h1>

          <motion.div {...fadeUp(0.2)} className="mt-5 flex flex-wrap items-center gap-2">
            {(["Full Stack Developer", "Blockchain Engineer", "IT Professional"] as const).map((tag, i) => (
              <span
                key={tag}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold border backdrop-blur-sm ${
                  i === 0 ? "bg-blue-500/15 border-blue-500/30 text-blue-300"
                  : i === 1 ? "bg-violet-500/15 border-violet-500/30 text-violet-300"
                  : "bg-slate-500/15 border-slate-500/30 text-slate-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="mt-3 flex items-center gap-1.5 text-slate-400">
            <MapPin size={13} />
            <span className="text-sm">{personalInfo.location}</span>
          </motion.div>

          <motion.p {...fadeUp(0.3)} className="mt-5 text-slate-300 leading-relaxed max-w-xl text-base">
            {personalInfo.bio}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-7 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-full hover:opacity-90 transition-all shadow-xl shadow-blue-900/40 group"
            >
              View My Work
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-600 text-slate-200 font-bold rounded-full hover:border-blue-500 hover:text-blue-300 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="mt-7 flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">Find me</span>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.55 + i * 0.07, type: "spring" }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-colors"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
            {stats.map(({ label, value }) => {
              const num = parseInt(value);
              const suffix = value.replace(String(num), "");
              return (
                <div key={label}>
                  <p className="text-3xl font-extrabold text-white">
                    <CountUp end={num} suffix={suffix} />
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-medium">{label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 scale-110 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-violet-500/20 scale-[1.25] pointer-events-none"
            />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-indigo-700 flex items-center justify-center shadow-2xl shadow-blue-900/60 border border-white/10">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-400/20 to-violet-400/10 blur-xl" />
                <div className="relative text-center select-none">
                  <p className="text-6xl sm:text-8xl font-black text-white/20 leading-none">HW</p>
                  <p className="text-xs sm:text-sm text-blue-200 font-bold mt-2 tracking-widest uppercase">Habib Wafi</p>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 sm:-right-10 bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-2.5 border border-white/20 z-10"
              >
                <p className="text-[10px] text-slate-400 font-medium">Currently at</p>
                <p className="text-sm font-bold text-white">BPS Musi Rawas</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 sm:-left-10 bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-2.5 border border-white/20 z-10"
              >
                <p className="text-[10px] text-slate-400 font-medium">Expert in</p>
                <p className="text-sm font-bold text-white">Full Stack + Blockchain</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-500 text-xs font-medium"
        >
          <span>Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-slate-500 to-transparent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
