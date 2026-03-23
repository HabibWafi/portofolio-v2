"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, ArrowRight, Layout } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

const projectColors = [
  { gradient: "from-blue-600 to-indigo-700", light: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" },
  { gradient: "from-violet-600 to-purple-700", light: "bg-violet-50", text: "text-violet-700", border: "border-violet-100" },
  { gradient: "from-amber-500 to-orange-600", light: "bg-amber-50", text: "text-amber-700", border: "border-amber-100" },
  { gradient: "from-emerald-500 to-teal-700", light: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-label">Projects</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">Recent Work</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto leading-relaxed">
            Proyek-proyek yang menunjukkan kemampuan dalam full stack development, AI, dan blockchain.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => {
            const color = projectColors[i % projectColors.length];
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -7, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group bg-white border border-slate-200 rounded-3xl overflow-hidden"
              >
                {/* Color header */}
                <div className={`h-28 bg-gradient-to-br ${color.gradient} relative overflow-hidden flex items-end p-5`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                  <div className="absolute top-3 right-4 text-white/20 text-7xl font-black select-none leading-none">{i + 1}</div>
                  <div className="relative flex items-center justify-between w-full">
                    <h3 className="text-lg font-extrabold text-white group-hover:text-white/90 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-400 rounded-full text-xs font-bold text-amber-900 flex-shrink-0">
                        <Star size={10} fill="currentColor" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>

                  {/* Tech chips */}
                  <motion.div
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-4 flex flex-wrap gap-1.5"
                  >
                    {project.tech.map((t) => (
                      <motion.span
                        key={t}
                        variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                        className={`px-2.5 py-1 ${color.light} ${color.border} border rounded-full text-xs font-semibold ${color.text}`}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 font-medium transition-colors"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                    <a
                      href={project.live}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm ${color.text} font-bold transition-colors group/link`}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                      >
                        ↗
                      </motion.span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={`https://github.com/HabibWafi`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-600 font-semibold rounded-full hover:border-slate-400 hover:text-slate-800 transition-all"
          >
            <Github size={16} />
            View All on GitHub
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-full hover:opacity-90 transition-all shadow-lg shadow-blue-200 group"
            >
              <Layout size={15} />
              Lihat Portfolio Freelance
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
