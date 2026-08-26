"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "30%", label: "Latency Reduction", sub: "FastAPI asyncio refactor" },
  { value: "$0", label: "AI Running Cost", sub: "Ollama local inference" },
  { value: "87%", label: "mAP Detection", sub: "YOLOv8 on 30 FPS stream" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "80px 0", position: "relative" }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: "56px" }}
        >
          <span className="section-label">About</span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              alignItems: "start",
            }}
            className="about-grid"
          >
            <h2 className="section-heading">
              Building AI systems
              <br />
              that ship to production
            </h2>
            <div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                  marginBottom: "12px",
                }}
              >
                B.E. graduate in AI & Data Science with production internship experience
                building RAG-based backends using FastAPI, local LLMs, and async Python pipelines.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.75,
                  color: "var(--text-muted)",
                }}
              >
                I care about performance, cost-efficiency, and systems that work
                under real-world constraints. Targeting AI/ML Engineer, Data
                Scientist, and Data Analyst roles.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
          className="metrics-grid"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{
                background: "var(--bg-card)",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <span
                className="metric-value"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 36px)",
                  color: "var(--accent)",
                }}
              >
                {m.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "var(--text-primary)",
                }}
              >
                {m.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  lineHeight: 1.4,
                }}
              >
                {m.sub}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .metrics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
