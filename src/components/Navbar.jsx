import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WORK", href: "#work" },
    { name: "UI/UX", href: "#ui-ux" },
    { name: "ABOUT", href: "#about" },
    { name: "STACK", href: "#stack" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center gap-1"
        >
          <span className="font-bebas text-3xl tracking-wider text-text-primary group-hover:scale-105 transition-transform duration-300">
            SAVIO<span className="text-accent">.</span>
          </span>
          {/* Easter egg: hidden animation on hover */}
          <div className="hidden group-hover:block transition-all absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full duration-500" />
        </motion.a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="font-mono text-[11px] font-medium tracking-[0.2em] text-text-muted hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-surface/50 backdrop-blur-md"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-primary">
            Open to work
          </span>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
