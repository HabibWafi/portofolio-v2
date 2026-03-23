"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Heart, MessageCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: MessageCircle, href: `https://wa.me/${personalInfo.whatsapp}`, label: "WhatsApp" },
    { icon: Instagram, href: personalInfo.instagram, label: "Instagram" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-slate-950 border-t border-slate-800 py-8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + copyright */}
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md flex items-center justify-center text-white text-xs font-bold">
              HW
            </span>
            <p className="text-slate-500 text-sm">
              © {year}{" "}
              <span className="text-slate-300 font-medium">{personalInfo.displayName}</span>
            </p>
          </div>

          {/* Built with */}
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with{" "}
            <Heart size={11} className="text-rose-500 fill-rose-500 mx-0.5" />
            using Next.js, Tailwind & Framer Motion
          </p>

          {/* Social */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
