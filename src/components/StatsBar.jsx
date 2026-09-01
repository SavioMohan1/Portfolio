import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "01+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Tech Skills", value: "25+" },
  { label: "Companies", value: "02" },
];

const StatsBar = () => {
  return (
    <section className="py-20 border-y border-accent/20 bg-surface/20 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 * idx, duration: 0.8 }}
            className="text-center group"
          >
            <div className="font-bebas text-7xl md:text-8xl text-accent mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
              {stat.value}
            </div>
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-text-muted font-bold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
