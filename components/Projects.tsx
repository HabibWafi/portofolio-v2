import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Projects</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
            Recent Work
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Beberapa proyek yang menunjukkan kemampuan dalam full stack development, AI, dan blockchain.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500" />

              <div className="p-6">
                {/* Title + featured */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-600 flex-shrink-0">
                      <Star size={10} fill="currentColor" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    <Github size={15} />
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="mt-10 text-center">
          <a
            href={`https://github.com/HabibWafi`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-200 text-slate-700 font-medium rounded-full hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
