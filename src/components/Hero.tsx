"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: "64px",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "60px",
            alignItems: "center",
          }}
          className="hero-layout"
        >
          {/* Left: Text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: "16px",
              }}
            >
              Hi, I'm <span style={{ color: "var(--accent)" }}>Syed Zain</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              style={{
                fontSize: "24px",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                color: "var(--text-secondary)",
                marginBottom: "24px",
                letterSpacing: "-0.01em",
              }}
            >
              AI & Data Science Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              style={{
                maxWidth: "480px",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "var(--text-muted)",
                marginBottom: "32px",
              }}
            >
              B.E. in AI & Data Science with internship experience building RAG
              backends, local LLM inference pipelines, and real-time computer
              vision systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "24px",
              }}
            >
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ display: "flex", gap: "8px" }}
            >
              <a
                href="https://github.com/syedzain001"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
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
                href="https://linkedin.com/in/syed-zain-ai01"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:ynsyedzain007@gmail.com"
                className="icon-btn"
                aria-label="Email"
              >
                <svg
                  width="16"
                  height="16"
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
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="hero-photo-wrapper"
          >
            <div
              style={{
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                border: "4px solid #fff",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                background: "#fff",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Syed Zain Ull Abidin"
                width={360}
                height={360}
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                  width: "100%",
                  height: "100%",
                }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .hero-photo-wrapper {
            order: -1;
            display: flex;
            justifyContent: center;
          }
          .hero-photo-wrapper > div {
            width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
