import { Mail, Github, Linkedin, Instagram, MapPin, Send, ExternalLink, MessageCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "+62 812-3456-7890",
    href: `https://wa.me/${personalInfo.whatsapp}?text=Halo%20Habib%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda`,
    bg: "bg-green-500 hover:bg-green-600",
    iconColor: "text-white",
    border: "border-green-400 hover:border-green-300",
    desc: "Chat langsung, respon cepat",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "HabibWafi",
    href: personalInfo.github,
    bg: "bg-slate-800 hover:bg-slate-700",
    iconColor: "text-white",
    border: "border-slate-700 hover:border-slate-500",
    desc: "Open source & projects",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Habibullah Hibatul Wafi",
    href: personalInfo.linkedin,
    bg: "bg-blue-600 hover:bg-blue-700",
    iconColor: "text-white",
    border: "border-blue-500 hover:border-blue-400",
    desc: "Professional network",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@habibwafi83",
    href: personalInfo.instagram,
    bg: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90",
    iconColor: "text-white",
    border: "border-pink-500/40 hover:border-pink-400",
    desc: "Personal updates",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="section-label">Contact</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
            Mari Berkolaborasi
          </h2>
          <p className="mt-3 text-slate-500 max-w-lg mx-auto leading-relaxed">
            Punya proyek menarik atau ingin berdiskusi tentang teknologi? Saya selalu terbuka untuk peluang baru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Email CTA */}
          <div className="flex flex-col justify-between gap-6">
            {/* Main email card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                <Mail size={22} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Kirim Email</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed mb-6">
                Cara paling langsung untuk menghubungi saya. Biasanya saya membalas dalam 1×24 jam.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-3 w-full justify-between bg-blue-600 hover:bg-blue-700 text-white px-5 py-3.5 rounded-2xl font-semibold text-sm transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-200"
              >
                <span className="truncate">{personalInfo.email}</span>
                <Send size={15} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Location + availability */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-emerald-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-slate-800 text-sm">{personalInfo.location}</p>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded-full text-[10px] font-semibold text-emerald-600">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Open to work
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tersedia untuk remote work worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right: Social links */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
              Temukan saya di
            </p>
            {socialLinks.map(({ icon: Icon, label, handle, href, bg, iconColor, border, desc }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Platform icon */}
                <div
                  className={`w-12 h-12 rounded-2xl ${bg} border ${border} flex items-center justify-center flex-shrink-0 transition-all`}
                >
                  <Icon size={20} className={iconColor} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-800 text-sm">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>

                {/* Handle + arrow */}
                <div className="text-right flex-shrink-0">
                  <p className="text-xs font-semibold text-slate-700">{handle}</p>
                  <ExternalLink
                    size={12}
                    className="text-slate-300 group-hover:text-blue-500 transition-colors mt-1 ml-auto"
                  />
                </div>
              </a>
            ))}

            {/* Quick note */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mt-auto">
              <p className="text-xs text-blue-700 leading-relaxed">
                <span className="font-bold">Freelance project?</span> Gunakan email atau kunjungi
                halaman <a href="#services" className="underline underline-offset-2 font-semibold">Freelance Services</a> di atas untuk informasi paket yang tersedia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
