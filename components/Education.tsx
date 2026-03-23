"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { education } from "@/lib/data";

const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const listItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-label">Education</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">Academic Background</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto leading-relaxed">
            Fondasi akademis yang kuat dalam komputasi statistik dan sistem informasi.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-white border border-slate-100 rounded-3xl shadow-sm p-7 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 border border-blue-100"
                >
                  <GraduationCap size={26} className="text-blue-600" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">{edu.institution}</h3>
                      <p className="text-xs text-slate-400 mt-0.5 italic">{edu.institutionEn}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 text-slate-500 text-sm bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 flex-shrink-0"
                    >
                      <Calendar size={12} />
                      <span className="text-xs font-medium">{edu.period}</span>
                    </motion.div>
                  </div>

                  <div className="mt-3">
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-bold rounded-full">
                      {edu.degree}
                    </span>
                  </div>
                  <p className="mt-2 text-blue-600 font-semibold text-sm">{edu.field}</p>

                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <motion.ul
                      variants={listStagger}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      {edu.highlights.map((h) => (
                        <motion.li key={h} variants={listItem} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600 leading-relaxed">{h}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
