"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} style={{ padding: "80px 0" }}>
      <div className="divider" />
      <div className="section-container" style={{ paddingTop: "56px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "48px" }}
        >
          <span className="section-label">Education</span>
          <h2 className="section-heading">Academic Background</h2>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: "999px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  marginBottom: "16px",
                }}
              >
                2022 — 2026
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                  letterSpacing: "-0.02em",
                }}
              >
                B.E. in Artificial Intelligence & Data Science
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                  marginBottom: "4px",
                }}
              >
                K S School of Engineering and Management
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  marginBottom: "24px",
                }}
              >
                Bengaluru, India
              </p>

              <div
                style={{
                  display: "inline-flex",
                  padding: "14px 20px",
                  background: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  gap: "8px",
                  alignItems: "baseline",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "4px",
                    }}
                  >
                    CGPA
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "22px",
                      color: "var(--text-primary)",
                      lineHeight: 1,
                    }}
                  >
                    8.15
                    <span
                      style={{
                        fontSize: "14px",
                        color: "var(--text-muted)",
                        fontWeight: 500,
                      }}
                    >
                      /10
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
