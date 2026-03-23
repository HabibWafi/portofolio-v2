"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

const listStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const listItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-label">Experience</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">Work History</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto leading-relaxed">
            Pengalaman profesional dalam pengembangan sistem informasi dan teknologi pemerintahan.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-slate-200 space-y-0">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pb-10 last:pb-0">
                {/* Animated dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                  className="timeline-dot"
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="ml-4 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-extrabold text-slate-900">{exp.position}</h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-700">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Briefcase size={13} className="text-blue-600" />
                        <span className="text-blue-600 font-bold text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 text-slate-500 text-sm bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 flex-shrink-0"
                    >
                      <Calendar size={12} />
                      <span className="text-xs font-medium">{exp.period}</span>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <motion.ul
                      variants={listStagger}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-40px" }}
                      className="space-y-2.5"
                    >
                      {exp.description.map((desc, i) => (
                        <motion.li key={i} variants={listItem} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600 leading-relaxed">{desc}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
