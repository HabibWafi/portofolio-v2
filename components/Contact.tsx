import { Github, Linkedin, Instagram, Mail, MapPin, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      desc: "Send me an email",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/HabibWafi",
      href: personalInfo.github,
      desc: "Check my code",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Habib Wafi",
      href: personalInfo.linkedin,
      desc: "Connect professionally",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@habibwafi83",
      href: personalInfo.instagram,
      desc: "Follow me",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-blue-400 tracking-[0.2em] uppercase">
            Contact
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white leading-tight">
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto leading-relaxed">
            Saya terbuka untuk peluang kerja baru, kolaborasi proyek, atau sekadar berdiskusi tentang teknologi.
            Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contactLinks.map(({ icon: Icon, label, value, href, desc }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:bg-slate-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-700 group-hover:bg-blue-600 flex items-center justify-center transition-colors mb-4">
                <Icon size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs text-slate-500 font-medium">{label}</p>
              <p className="text-sm text-white font-semibold mt-0.5 truncate">{value}</p>
              <div className="mt-3 flex items-center gap-1 text-xs text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>{desc}</span>
                <ArrowRight size={11} />
              </div>
            </a>
          ))}
        </div>

        {/* Location note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={14} />
            <span>Based in {personalInfo.location} — Available for remote work worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
