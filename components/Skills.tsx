import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">My Skills</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">
            Technical Expertise
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Kombinasi keahlian dari latar belakang statistik, pengembangan web full stack, dan
            blockchain engineering.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${skillGroup.dotClass} flex-shrink-0`}
                />
                <h3 className="font-bold text-slate-800">{skillGroup.category}</h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className={`skill-chip ${skillGroup.bgClass} ${skillGroup.textClass} ${skillGroup.borderClass}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
