"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-label">My Skills</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Technical Expertise
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto leading-relaxed">
            Kombinasi keahlian dari latar belakang statistik, pengembangan web full stack, dan blockchain engineering.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white border-2 border-slate-100 rounded-3xl p-6 hover:border-slate-200 transition-colors duration-200 cursor-default"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <motion.span
                  whileHover={{ scale: 1.6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`w-3 h-3 rounded-full ${skillGroup.dotClass} flex-shrink-0`}
                />
                <h3 className="font-extrabold text-slate-800">{skillGroup.category}</h3>
              </div>

              {/* Chip items */}
              <motion.div
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skillGroup.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
                    }}
                    whileHover={{ scale: 1.08 }}
                    className={`skill-chip ${skillGroup.bgClass} ${skillGroup.textClass} ${skillGroup.borderClass}`}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
