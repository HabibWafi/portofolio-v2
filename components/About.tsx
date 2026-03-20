import { CheckCircle2, Code2, Brain, Link as LinkIcon } from "lucide-react";
import { personalInfo } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Membangun aplikasi web end-to-end dari frontend hingga backend dan database.",
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    desc: "Menerapkan machine learning dan analisis data untuk solusi bisnis yang cerdas.",
  },
  {
    icon: LinkIcon,
    title: "Blockchain Engineering",
    desc: "Mengembangkan smart contract dan aplikasi terdesentralisasi (dApps) di Ethereum.",
  },
];

const values = [
  "Clean, maintainable code architecture",
  "Data-driven decision making",
  "Continuous learning & improvement",
  "Collaborative team environment",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Avatar placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Background card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl rotate-3" />
              <div className="relative bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-4xl font-black text-white">HW</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {personalInfo.displayName}
                </h3>
                <p className="text-sm text-blue-600 font-medium mt-1">
                  Full Stack Developer
                </p>
                <p className="text-xs text-slate-500 mt-1">{personalInfo.location}</p>

                {/* Status badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs text-emerald-700 font-medium">Open to work</span>
                </div>

                {/* Divider */}
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2 text-left">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-blue-600 font-medium text-xs hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Location</span>
                    <span className="text-slate-700 font-medium text-xs">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="section-label">About Me</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Who am I?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Saya adalah{" "}
              <span className="font-semibold text-slate-800">
                Habibullah Hibatul Wafi
              </span>
              , seorang Full Stack Developer dan Blockchain Engineer yang berbasis di Jakarta, Indonesia.
              Lulusan D4 Komputasi Statistik dari Politeknik Statistika STIS, saya memiliki fondasi
              kuat dalam statistik dan pemrograman yang mendukung karir saya di bidang teknologi.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Saat ini bekerja sebagai Pranata Komputer Ahli Pertama di BPS Kabupaten Musi Rawas,
              saya aktif mengembangkan sistem informasi statistik dan terus mengasah keahlian di
              bidang AI, Web Development, dan Blockchain.
            </p>

            {/* Values */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-600">{value}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
