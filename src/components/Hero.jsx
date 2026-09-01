import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CardTilt from "./CardTilt";
import { getAssetUrl } from "../utils/assetPath";

const roles = ["Full-Stack & Systems Engineer", "GenAI & LLM Solutions", "Database Architect", "UI/UX Creative Developer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-surface-navy/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-accent" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent font-semibold">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bebas text-7xl md:text-9xl tracking-[0.02em] leading-[0.9] mb-8 uppercase text-text-primary"
          >
            SAVIO <br />
            <span className="text-white/90">MOHAN</span>
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-8 mb-8"
          >
            <span className="font-syne text-xl md:text-2xl text-text-muted italic">
              {displayText}
              <span className="inline-block w-1.5 h-6 ml-1 bg-accent/80 animate-pulse align-middle" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-text-muted leading-relaxed max-w-lg mb-12 relative pl-6 border-l border-accent/30 italic"
          >
            Transforming complex systems into high-performance human experiences. 
            Associate Software Engineer at Epsilon, specialized in GenAI and Database management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="#work"
              className="px-8 py-4 bg-accent text-background font-mono text-xs tracking-widest uppercase font-bold hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(200,169,110,0.2)]"
            >
              View Projects
            </a>
            <a
              href={getAssetUrl('assets/docs/resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-accent/30 text-accent font-mono text-xs tracking-widest uppercase font-bold hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Photo with Viewfinder Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <CardTilt maxTilt={10} className="w-full max-w-[450px]">
            <div className="relative w-full aspect-[4/5]">
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/60 -translate-x-4 -translate-y-4" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/60 translate-x-4 -translate-y-4" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/60 -translate-x-4 translate-y-4" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/60 translate-x-4 translate-y-4" />

              {/* Double Frame */}
              <div className="absolute -inset-4 border border-white/5 opacity-50 translate-x-2 translate-y-2 pointer-events-none" />
              
              <div className="w-full h-full p-2 bg-surface rounded-sm border border-white/10 shadow-2xl overflow-hidden relative group">
                <img
                  src={getAssetUrl('assets/images/profile-photo.jpg')}
                  alt="Savio Mohan"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>
          </CardTilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
