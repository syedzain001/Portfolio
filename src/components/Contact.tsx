"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactLinks = [
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "ynsyedzain007@gmail.com",
    href: "mailto:ynsyedzain007@gmail.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "syed-zain-ai01",
    href: "https://linkedin.com/in/syed-zain-ai01",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "syedzain001",
    href: "https://github.com/syedzain001",
  },
  {
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 89718 47507",
    href: "tel:+918971847507",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} style={{ padding: "80px 0 60px" }}>
      <div className="divider" />
      <div className="section-container" style={{ paddingTop: "56px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "48px" }}
        >
          <span className="section-label">Contact</span>
          <h2
            className="section-heading"
            style={{ marginBottom: "12px" }}
          >
            Get in Touch
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-secondary)",
              maxWidth: "460px",
              lineHeight: 1.7,
            }}
          >
            Open to AI/ML Engineer, Data Scientist, and Data Analyst roles.
            Reach out — I respond promptly.
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px",
            marginBottom: "48px",
          }}
          className="contact-grid"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.label === "Email" || link.label === "Phone" ? "/" : link.href}
              onClick={(e) => {
                if (link.label === "Email") {
                  e.preventDefault();
                  window.location.href = "mailto:" + "ynsyedzain007" + "@" + "gmail.com";
                } else if (link.label === "Phone") {
                  e.preventDefault();
                  window.location.href = "tel:" + "+91" + "8971847507";
                }
              }}
              target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
              rel={link.label === "Email" || link.label === "Phone" ? undefined : "noopener noreferrer"}
              className="contact-link"
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <div
                  style={{
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.08em",
                      marginBottom: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {link.value}
                  </div>
                </div>
              </div>
              <span
                style={{
                  color: "var(--text-muted)",
                  fontSize: "14px",
                  transition: "transform 0.2s",
                }}
              >
                →
              </span>
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            © 2026 Syed Zain Ull Abidin
          </p>
          <a
            href="#home"
            className="nav-link"
            style={{ fontSize: "13px" }}
          >
            Back to top ↑
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
