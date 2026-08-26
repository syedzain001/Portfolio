"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(9, 9, 11, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "16px",
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          sz<span style={{ color: "var(--text-muted)" }}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${activeSection === link.href.slice(1) ? " active" : ""}`}
              style={{ textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: GitHub + CTA */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          className="hidden-mobile"
        >
          <a
            href="https://github.com/syedzain001"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub"
            style={{ width: "32px", height: "32px" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="#contact" className="nav-cta">
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            padding: "8px",
          }}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                height: "1.5px",
                background: "currentColor",
                borderRadius: "1px",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(45deg) translate(4.5px, 4.5px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: "1.5px",
                background: "currentColor",
                borderRadius: "1px",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: "1.5px",
                background: "currentColor",
                borderRadius: "1px",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(-45deg) translate(4.5px, -4.5px)"
                  : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: "var(--bg-primary)",
              borderTop: "1px solid var(--border)",
              padding: "12px 20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "14px 0",
                  color:
                    activeSection === link.href.slice(1)
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "15px",
                  borderBottom: "1px solid var(--border)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "16px",
              }}
            >
              <a
                href="https://github.com/syedzain001"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="GitHub"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="#contact"
                className="nav-cta"
                style={{ flex: 1, justifyContent: "center", padding: "10px" }}
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
