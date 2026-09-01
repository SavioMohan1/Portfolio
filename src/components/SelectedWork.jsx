import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import CardTilt from "./CardTilt";

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const primaryProjects = [
  {
    id: "01",
    featured: "LIVE PRODUCTION & DEALFLOW BILLBOARD",
    title: "OutbidIndie",
    subtitle: "Real-Time Indian Startup Dealflow Billboard",
    description:
      "India's #1 open-auction dealflow platform where breakout startups bid to claim Rank #1 and capture angel investor discovery. Engineered with dynamic INR bidding, automated 18% GST calculation, Dodo Payments (Merchant of Record) UPI/Cards checkout, dynamic SVG badge backlink generation, and Supabase PostgreSQL backend.",
    tech: ["Vanilla JS", "Dodo Payments API", "Supabase PostgreSQL", "Serverless Edge", "Svix HMAC", "Dynamic SVG Badge"],
    image: "/assets/images/projects/outbidindie.jpg",
    liveUrl: "https://outbidindie.tech",
    githubUrl: "https://github.com/SavioMohan1/outbidindie-tech",
    badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
  },
  {
    id: "02",
    featured: "PEER REFERRAL & TALENT MARKETPLACE",
    title: "ReferKaro",
    subtitle: "Centralized Verified Referral Network",
    description:
      "A transparent, verified job referral marketplace connecting ambitious candidates directly with company insiders. Built with token-based application escrow, candidate verification pipelines, and automated trust and safety systems.",
    tech: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Google OAuth", "TailwindCSS"],
    image: "/assets/images/projects/referkaro.jpg",
    liveUrl: "https://referkaro-rose.vercel.app",
    githubUrl: "https://github.com/SavioMohan1/ReferKaro",
    badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
  },
  {
    id: "03",
    featured: "GENAI CANDIDATE EVALUATION",
    title: "Redrob Candidate Discovery",
    subtitle: "Intelligent Candidate Discovery & Evaluation Engine",
    description:
      "An intelligent AI-powered candidate discovery pipeline. Parses unstructured resumes, calculates multidimensional skill matrices, and computes candidate-job semantic alignment using NLP transformers and predictive ranking algorithms.",
    tech: ["Python", "GenAI", "NLP", "FastAPI", "Transformers", "Vector Search"],
    image: "/assets/images/projects/redrob.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/SavioMohan1/redrob-intelligent-candidate-discovery",
    badgeColor: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30",
  },
];

const uiUxProjects = [
  {
    id: "04",
    title: "Hari Om Bhature Wale",
    category: "Culinary Brand & Video Experience",
    description:
      "High-converting digital storefront featuring a smooth canvas/video scrubber timeline, interactive menu, and direct WhatsApp ordering system.",
    tech: ["HTML5", "Canvas Video Scrubber", "WhatsApp API", "Vercel"],
    image: "/assets/images/projects/hari-om.jpg",
    liveUrl: "https://hari-om-bhature-wale.vercel.app",
    githubUrl: "https://github.com/SavioMohan1/hari-om-bhature-wale",
  },
  {
    id: "05",
    title: "The Awadh Express",
    category: "Royal Nawabi Pure-Veg Restaurant",
    description:
      "Luxury dark-themed gastronomic website celebrating Awadhi culinary heritage with gold glassmorphism, categorized menu, and reservation dialing.",
    tech: ["HTML5", "Luxury CSS Tokens", "Google Maps API", "Vercel"],
    image: "/assets/images/projects/awadh-express.png",
    liveUrl: "https://the-awadh-express.vercel.app",
    githubUrl: "https://github.com/SavioMohan1/the-awadh-express",
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-28 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent inline-block" />
              <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase font-bold">
                01 / FEATURED PORTFOLIO
              </span>
            </div>
            <h2 className="font-bebas text-6xl md:text-8xl tracking-tight leading-[0.95] uppercase">
              HIGHLIGHTED <br />
              <span className="text-white/40">PROJECTS</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 pb-2">
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-text-muted">
              Interactive 3D Cards • Live Systems
            </span>
          </div>
        </div>

        {/* Top 3 Highlighted Projects */}
        <div className="space-y-16 mb-28">
          {primaryProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: 0.1 * idx, duration: 0.8 }}
            >
              <CardTilt
                maxTilt={6}
                scale={1.01}
                className="group relative bg-surface/50 backdrop-blur-md rounded-lg border border-white/10 hover:border-accent/60 transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {/* Ambient Card Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/15 transition-all duration-700" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-10">
                  {/* Image Column */}
                  <div className="lg:col-span-6 overflow-hidden rounded-md border border-white/10 relative aspect-[16/10] bg-black/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                    
                    {/* Live Indicator Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest font-bold uppercase backdrop-blur-md border bg-gradient-to-r ${project.badgeColor}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {project.featured}
                      </span>
                    </div>
                  </div>

                  {/* Text Details Column */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-xs text-accent font-bold tracking-[0.25em]">
                          PROJECT // {project.id}
                        </span>
                      </div>

                      <h3 className="font-bebas text-4xl md:text-5xl text-white group-hover:text-accent transition-colors tracking-wide leading-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="font-syne text-sm text-accent/90 italic mb-4 font-semibold">
                        {project.subtitle}
                      </p>
                      <p className="font-syne text-sm md:text-base leading-relaxed text-text-muted opacity-90 mb-6">
                        {project.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] uppercase tracking-wider text-text-muted px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(200,169,110,0.3)] hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Production
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
                        >
                          <GithubIcon className="w-4 h-4" />
                          Repository
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardTilt>
            </motion.div>
          ))}
        </div>

        {/* UI/UX & Client Websites Section */}
        <div id="ui-ux" className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase font-bold block mb-2">
                CLIENT ENGINEERING & BRAND DESIGN
              </span>
              <h3 className="font-bebas text-4xl md:text-6xl text-white uppercase tracking-tight">
                UI/UX <span className="text-white/40">& Production Work</span>
              </h3>
            </div>
            <p className="font-syne text-sm text-text-muted max-w-md">
              High-impact digital brand storefronts crafted with bespoke design systems and micro-interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {uiUxProjects.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ delay: 0.15 * idx, duration: 0.7 }}
              >
                <CardTilt
                  maxTilt={8}
                  className="group bg-surface/40 backdrop-blur-sm rounded-lg border border-white/10 hover:border-accent/50 transition-all p-6 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden rounded-md border border-white/10 mb-6 relative bg-black/40">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] text-accent tracking-widest uppercase font-bold">
                        {item.category}
                      </span>
                      <span className="font-mono text-[10px] text-text-muted">
                        UI/UX • LIVE
                      </span>
                    </div>

                    <h4 className="font-bebas text-3xl text-white group-hover:text-accent transition-colors mb-3">
                      {item.title}
                    </h4>
                    <p className="font-syne text-sm text-text-muted leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] uppercase tracking-wider text-text-muted px-2 py-0.5 bg-white/5 border border-white/10 rounded-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 bg-white/10 hover:bg-accent hover:text-background font-mono text-[11px] font-bold uppercase tracking-wider transition-all rounded-sm flex items-center justify-center gap-1.5"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      View Live Site
                    </a>
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 border border-white/10 hover:border-accent hover:text-accent transition-all rounded-sm"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </CardTilt>
              </motion.div>
            ))}
          </div>

          {/* GitHub Repositories Banner */}
          <div className="p-8 md:p-12 rounded-lg border border-accent/30 bg-gradient-to-r from-accent/10 via-surface/80 to-accent/5 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
                  OPEN SOURCE & SYSTEMS REPOSITORY
                </span>
              </div>
              <h4 className="font-bebas text-3xl md:text-4xl text-white uppercase">
                Explore More Projects on GitHub
              </h4>
              <p className="font-syne text-sm text-text-muted max-w-xl">
                Browse all machine learning, GenAI pipelines, full-stack web applications, and backend systems on my GitHub profile.
              </p>
            </div>
            <a
              href="https://github.com/SavioMohan1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent text-background font-mono text-xs font-bold tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_25px_rgba(200,169,110,0.3)] whitespace-nowrap hover:scale-105"
            >
              View GitHub Repositories →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
