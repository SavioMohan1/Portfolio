import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const GithubIcon = ({size, className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = ({size, className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

// Replace with your Web3Forms access key
// Get one free at https://web3forms.com (just enter your email)
const WEB3FORMS_ACCESS_KEY = "594b0731-fcee-4806-b3c2-18970b2a5360";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: ${formData.name}`,
          from_name: "Savio Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="font-bebas text-6xl md:text-8xl tracking-tight leading-none mb-4 uppercase"
          >
            LET'S BUILD <br />
            <span className="text-accent underline decoration-white/10 underline-offset-8">SOMETHING.</span>
          </motion.h2>
          <p className="font-syne text-text-muted text-lg tracking-wide opacity-80 uppercase">
            Available for freelance and full-stack collaborations.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-text-muted">NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full bg-surface/50 border border-white/10 p-4 font-syne text-text-primary focus:border-accent outline-none transition-all duration-300 placeholder:text-text-muted/20 disabled:opacity-50"
              placeholder="YOUR GOOD NAME"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-text-muted">EMAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full bg-surface/50 border border-white/10 p-4 font-syne text-text-primary focus:border-accent outline-none transition-all duration-300 placeholder:text-text-muted/20 disabled:opacity-50"
              placeholder="YOU@EMAIL.COM"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-text-muted">MESSAGE</label>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "loading"}
              className="w-full bg-surface/50 border border-white/10 p-4 font-syne text-text-primary focus:border-accent outline-none transition-all duration-300 placeholder:text-text-muted/20 resize-none disabled:opacity-50"
              placeholder="LET'S DISCUSS A PROJECT"
            />
          </div>

          {/* Status feedback */}
          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:col-span-2 flex items-center justify-center gap-3 py-4 px-6 bg-green-500/10 border border-green-500/20 rounded-sm"
              >
                <CheckCircle size={18} className="text-green-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-green-400">
                  Message sent successfully. I'll get back to you soon!
                </span>
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:col-span-2 flex items-center justify-center gap-3 py-4 px-6 bg-red-500/10 border border-red-500/20 rounded-sm"
              >
                <AlertCircle size={18} className="text-red-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-red-400">
                  {errorMsg}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="group px-12 py-5 bg-accent text-background font-mono text-sm tracking-widest uppercase font-bold hover:bg-white transition-all duration-500 hover:scale-105 flex items-center gap-3 disabled:opacity-60 disabled:hover:scale-100 disabled:hover:bg-accent"
            >
              {status === "loading" ? (
                <>
                  SENDING...
                  <Loader2 size={16} className="animate-spin" />
                </>
              ) : status === "success" ? (
                <>
                  SENT!
                  <CheckCircle size={16} />
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <Send size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                </>
              )}
            </button>
          </div>
        </motion.form>

        <div className="flex justify-center gap-12 border-t border-white/5 pt-12">
          {[
            { Icon: GithubIcon, href: "https://github.com/SavioMohan1/", label: "Github" },
            { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/savio-m-626488256/", label: "Linkedin" },
            { Icon: Mail, href: "mailto:saviomohan2002@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="group flex flex-col items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                <Icon size={20} className="text-text-muted group-hover:text-accent transition-colors duration-500" />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-text-muted group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all duration-500">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
