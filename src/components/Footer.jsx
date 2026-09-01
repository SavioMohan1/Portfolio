import React from "react";

const GithubIcon = ({size, className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = ({size, className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const MailIcon = ({size, className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const socials = [
  { Icon: GithubIcon, href: "https://github.com/SavioMohan1/", label: "Github" },
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/savio-m-626488256/", label: "Linkedin" },
  { Icon: MailIcon, href: "mailto:saviomohan2002@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2 group">
          <span className="font-bebas text-2xl tracking-widest text-text-primary uppercase group-hover:scale-110 transition-transform duration-500">
            SAVIO<span className="text-accent">.</span>
          </span>
          <span className="font-mono text-[9px] text-text-muted uppercase tracking-[0.4em] opacity-40 ml-4 group-hover:opacity-100 transition-opacity">
            EST. 2025
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { label: "Work", href: "#work" },
            { label: "UI/UX", href: "#ui-ux" },
            { label: "About", href: "#about" },
            { label: "Stack", href: "#stack" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-widest text-text-muted hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={16} className="" />
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-white/5">
        <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted opacity-40 text-center hover:opacity-100 transition-opacity">
          © 2026 Savio Mohan. Crafted in Bangalore.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
