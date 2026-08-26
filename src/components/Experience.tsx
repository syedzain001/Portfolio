"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  "Built and deployed 8+ async REST API endpoints with FastAPI, cutting average response latency by 30% via asyncio refactoring on a live production application.",
  "Integrated Ollama / Qwen 2.5 into the inference pipeline, replacing external API calls and reducing AI running costs to $0/month while maintaining sub-2s response times.",
  "Built a RAG pipeline ingesting 3+ external sources concurrently with asyncio, improving context retrieval relevance for downstream LLM responses.",
  "Designed the data layer with PostgreSQL, Redis, and Celery across 4+ task queues for persistence, caching, and distributed background processing.",
];

const techUsed = [
  "FastAPI",
  "asyncio",
  "Ollama",
  "Qwen 2.5",
  "RAG",
  "PostgreSQL",
  "Redis",
  "Celery",
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: "80px 0", position: "relative" }}
    >
      <div className="divider" />

      <div className="section-container" style={{ paddingTop: "56px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "48px" }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-heading">Internship Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="card"
          style={{
            padding: "clamp(24px, 4vw, 40px)",
            borderLeft: "2px solid var(--border-hover)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "28px",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  color: "var(--text-primary)",
                  marginBottom: "6px",
                  letterSpacing: "-0.02em",
                }}
              >
                Python Backend Developer Intern — AI/ML
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                }}
              >
                PygenicArc · Bengaluru, India
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  padding: "5px 14px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: "999px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                Feb – May 2026
              </span>
              <span
                style={{
                  padding: "5px 14px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: "999px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                Full-time
              </span>
            </div>
          </div>

          {/* Highlights */}
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            {highlights.map((h, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    color: "var(--text-muted)",
                    marginTop: "8px",
                    flexShrink: 0,
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "var(--text-muted)",
                    display: "inline-block",
                  }}
                />
                {h}
              </li>
            ))}
          </ul>

          {/* Tech */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Tech Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {techUsed.map((t) => (
                <span
                  key={t}
                  className="skill-pill"
                  style={{ fontSize: "12px", padding: "4px 10px" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
