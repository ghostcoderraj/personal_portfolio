"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

const FOUNDERS = [
  {
    name: "CodeMasti",
    category: "Education Platform",
    url: "https://www.codemasti.com/",
    desc: "A coding education platform for school students (Class 5–10) with logic-first teaching and project-based learning.",
  },
  {
    name: "Upgradex Agency",
    category: "Digital Agency",
    url: "https://www.upgradexagency.in/",
    desc: "Helping businesses grow through modern digital solutions, branding, and high-converting web experiences.",
  },
] as const;

function mshot(url: string, width = 1200) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      id="founder"
      className="relative min-h-screen flex items-center justify-center py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
    >
      {/* Background Glow with parallax */}
      <motion.div
        style={{ y: glowY }}
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[900px] lg:h-[900px] -translate-x-1/2 -translate-y-1/2 bg-purple-500/20 blur-[60px] md:blur-[80px] rounded-full pointer-events-none will-change-transform -z-10"
      />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
        >
          Founder
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-16"
        >
          Building products and brands with a focus on learning, growth, and high-converting web experiences.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FOUNDERS.map((item, index) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/80 group"
            >
              <div className="relative h-64 sm:h-72">
                {/* Use an auto site preview so you don't need screenshots right now */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={mshot(item.url, 1400)}
                  alt={item.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-2xl sm:text-3xl font-semibold truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-cyan-400 font-medium mt-1">
                      {item.category}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition font-medium"
                >
                  <FiExternalLink size={18} />
                  Visit Website
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

