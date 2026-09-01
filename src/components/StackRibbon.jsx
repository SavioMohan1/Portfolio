import React from "react";
import { motion } from "framer-motion";

const primarySkills = ["Python", "SQL", "Gen AI", "AWS Bedrock", "Snaplogic", "Machine Learning"];
const secondarySkills = ["Java", "Docker", "Kubernetes", "UI Path", "Power Automate", "n8n", "Linux", "Data Structures"];

const StackRibbon = () => {
  const allSkills = [...primarySkills, ...secondarySkills, ...primarySkills]; // Duplicate for endless loop

  return (
    <section id="stack" className="w-full bg-surface/50 border-y border-white/5 py-10 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 flex items-center gap-4">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-text-muted">
          STACK —
        </span>
        <div className="flex-1 h-[1px] bg-white/5" />
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-8 pr-8 items-center"
        >
          {allSkills.map((skill, idx) => {
            const isPrimary = primarySkills.includes(skill);
            return (
              <div
                key={`${skill}-${idx}`}
                className={`px-8 py-3 rounded-sm font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
                  isPrimary
                    ? "border-accent text-accent bg-accent/5"
                    : "border-white/10 text-text-muted bg-white/5"
                }`}
              >
                {skill}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StackRibbon;
