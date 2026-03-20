import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Education</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
            Academic Background
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Fondasi akademis yang kuat dalam komputasi statistik dan sistem informasi.
          </p>
        </div>

        {/* Education cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <GraduationCap size={26} className="text-blue-600" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {edu.institution}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 italic">
                        {edu.institutionEn}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 flex-shrink-0">
                      <Calendar size={12} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Degree */}
                  <div className="mt-3">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {edu.degree}
                    </span>
                  </div>

                  <p className="mt-2 text-blue-600 font-semibold text-sm">
                    {edu.field}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    {edu.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-blue-500 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-slate-600 leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
