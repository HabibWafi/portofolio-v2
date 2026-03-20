import { Github, Linkedin, Instagram, Mail, ArrowRight, MapPin } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: personalInfo.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-slate-50 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left: Content */}
        <div className="order-2 lg:order-1">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-700 text-sm font-medium">
              Available for opportunities
            </span>
          </div>

          {/* Greeting + Name */}
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Hi, I&apos;m
            <br />
            <span className="text-blue-600">Habib Wafi</span>
          </h1>

          {/* Title */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xl font-semibold text-slate-700">
              Full Stack Developer
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            <span className="text-xl font-semibold text-slate-500">
              Blockchain Engineer
            </span>
          </div>

          {/* Location */}
          <div className="mt-3 flex items-center gap-1.5 text-slate-500">
            <MapPin size={14} />
            <span className="text-sm">{personalInfo.location}</span>
          </div>

          {/* Bio */}
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 group"
            >
              View My Work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 font-medium rounded-full hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-sm text-slate-400 font-medium">Find me on</span>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-[3px] border-blue-100 scale-110" />
            <div className="absolute inset-0 rounded-full border border-blue-50 scale-125" />

            {/* Avatar */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 flex items-center justify-center shadow-2xl shadow-blue-100">
              <div className="text-center select-none">
                <p className="text-6xl sm:text-8xl font-black text-blue-600/50 leading-none">
                  HW
                </p>
                <p className="text-xs sm:text-sm text-blue-500 font-semibold mt-2 tracking-wide">
                  HABIB WAFI
                </p>
              </div>
            </div>

            {/* Floating badge — Company */}
            <div className="absolute -top-2 -right-4 sm:-right-8 bg-white shadow-lg rounded-2xl px-3 sm:px-4 py-2 border border-slate-100 z-10">
              <p className="text-[10px] text-slate-400 font-medium">Currently at</p>
              <p className="text-xs sm:text-sm font-bold text-slate-800">BPS Musi Rawas</p>
            </div>

            {/* Floating badge — Specialty */}
            <div className="absolute -bottom-2 -left-4 sm:-left-8 bg-white shadow-lg rounded-2xl px-3 sm:px-4 py-2 border border-slate-100 z-10">
              <p className="text-[10px] text-slate-400 font-medium">Expert in</p>
              <p className="text-xs sm:text-sm font-bold text-slate-800">Full Stack + Blockchain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
