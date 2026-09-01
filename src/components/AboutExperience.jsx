import React from "react";
import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, Sparkles } from "lucide-react";
import CardTilt from "./CardTilt";

const experiences = [
  {
    company: "Epsilon",
    logo: "/assets/images/companies/company-1.jpg",
    role: "Associate Software Engineer",
    dates: "Feb 2025 — Present",
    location: "Bengaluru, India",
    bullets: [
      "Managing, optimizing, and developing high-throughput database queries for enterprise client operations.",
      "Architected and deployed 14 SnapLogic ETL pipelines across Development and UAT environments handling scheduled mission-critical jobs.",
      "Integrated GenAI tools and Amazon Q within Microsoft Teams and operational workflows to accelerate internal delivery.",
    ],
  },
  {
    company: "Cochin Shipyard Ltd",
    logo: "/assets/images/companies/company-2.svg",
    role: "IT & Automation Intern",
    dates: "April 2024 — June 2024",
    location: "Kochi, India",
    bullets: [
      "Developed end-to-end automation pipelines using UiPath and GenAI to extract and analyze 300+ ship purchase invoices in under 30 minutes.",
      "Collaborated in architecture and security review sessions to ensure compliance with shipyard IT infrastructure standards.",
    ],
  },
];

const certifications = [
  { name: "AWS Cloud Practitioner (Learner)", issuer: "Amazon Web Services", icon: "☁️" },
  { name: "Cybersecurity Professional", issuer: "Coursera / Industry", icon: "🔒" },
  { name: "Networking Essentials", issuer: "Cisco Systems", icon: "🌐" },
];

const AboutExperience = () => {
  return (
    <section id="about" className="py-28 bg-background border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left Column: Personality Photo + Story + Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.0 }}
        >
          <div className="relative group mb-12">
            <div className="absolute -inset-4 border border-accent/20 translate-x-3 translate-y-3 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-700" />
            <div className="aspect-square w-full sm:w-[500px] overflow-hidden rounded-sm relative grayscale hover:grayscale-0 transition-all duration-1000 bg-surface">
              <img
                src="/assets/images/about-photo.jpg"
                alt="About Savio Mohan"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-accent inline-block" />
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase font-bold">
              02 / STORY & BACKGROUND
            </span>
          </div>

          <h3 className="font-bebas text-5xl mb-6 tracking-wide text-text-primary uppercase">
            ENGINEERING WITH <span className="text-accent">PURPOSE</span>
          </h3>

          <p className="font-syne text-lg text-text-muted leading-relaxed mb-6 italic">
            "Software engineering isn't just about code syntax—it's about engineering resilient systems that handle the weight of real-world scale."
          </p>

          <p className="font-syne text-text-muted leading-relaxed mb-10 opacity-85">
            B.Tech Information Technology honors graduate (AI/ML) from Christ University, Bangalore. Experienced across enterprise database engineering, GenAI automation (Amazon Q, Bedrock, LangChain), and full-stack product development.
          </p>

          {/* Education Card */}
          <CardTilt maxTilt={6} className="p-6 bg-surface/50 border border-white/10 rounded-lg mb-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 text-accent rounded-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-bold">
                  June 2021 — June 2025
                </span>
                <h4 className="font-bebas text-2xl text-white mt-1">
                  Christ University, Bangalore
                </h4>
                <p className="font-syne text-sm text-text-muted">
                  B.Tech in Information Technology with Honors in AI/ML <span className="text-accent font-bold">(GPA: 3.2 / 4.0)</span>
                </p>
                <p className="font-mono text-[11px] text-text-muted/80 mt-2">
                  Student Head of Industry Institute Interaction Cell (IIIC) & ASCII Club Coordinator
                </p>
              </div>
            </div>
          </CardTilt>

          {/* Manager Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="p-8 border-l-2 border-accent bg-surface/40 rounded-r-lg backdrop-blur-md shadow-xl"
          >
            <p className="font-syne italic text-text-primary mb-4 leading-relaxed text-sm md:text-base">
              "Savio is an amazing individual who handles engineering challenges and extracurricular initiatives with extraordinary poise and execution."
            </p>
            <div className="font-mono text-[11px] tracking-widest uppercase">
              <span className="text-accent font-bold">Noor Ahmed Mulla</span>
              <span className="text-text-muted block mt-0.5">Manager at CJ, Epsilon</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Experience Timeline & Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.0 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-accent inline-block" />
            <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase font-bold">
              03 / CAREER JOURNEY
            </span>
          </div>

          <h3 className="font-bebas text-5xl mb-12 tracking-wide text-text-primary uppercase">
            PROFESSIONAL <span className="text-white/40">EXPERIENCE</span>
          </h3>

          <div className="space-y-10 relative pl-8 border-l border-white/10 mb-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.15 * idx }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[37px] top-6 w-4 h-4 rounded-full border-2 border-accent bg-background group-hover:bg-accent transition-colors duration-300 shadow-[0_0_12px_rgba(200,169,110,0.4)]" />

                <CardTilt maxTilt={6} className="bg-surface/50 backdrop-blur-md p-8 rounded-lg border border-white/10 hover:border-accent/50 transition-all shadow-xl">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-md bg-white overflow-hidden p-2 flex items-center justify-center">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-bebas text-2xl tracking-wide uppercase text-text-primary">
                          {exp.role}
                        </h4>
                        <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-text-muted py-1 px-3 border border-white/10 rounded-full">
                      {exp.dates}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-text-muted leading-relaxed font-syne opacity-90">
                        <span className="text-accent font-bold">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardTilt>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="p-8 bg-surface/30 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-accent" />
              <h4 className="font-bebas text-2xl text-white uppercase tracking-wider">
                Certifications & Accreditations
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 bg-white/5 border border-white/10 rounded-md hover:border-accent/40 transition-colors"
                >
                  <span className="text-xl mb-2 block">{cert.icon}</span>
                  <p className="font-syne font-bold text-xs text-white mb-1">
                    {cert.name}
                  </p>
                  <p className="font-mono text-[10px] text-text-muted">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutExperience;
