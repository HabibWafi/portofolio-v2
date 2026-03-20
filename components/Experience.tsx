import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Experience</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
            Work History
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Pengalaman profesional dalam pengembangan sistem informasi dan teknologi pemerintahan.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-slate-200 space-y-0">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pb-10 last:pb-0">
                {/* Timeline dot */}
                <div className="timeline-dot" />

                {/* Card */}
                <div className="ml-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900">
                          {exp.position}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-semibold text-emerald-700">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 mt-1">
                        <Briefcase size={13} className="text-blue-600" />
                        <span className="text-blue-600 font-semibold text-sm">
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-500 text-sm bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <ul className="space-y-2.5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
