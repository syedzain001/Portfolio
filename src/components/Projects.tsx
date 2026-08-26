"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Intelligent Pothole Detection & Drive Mode System",
    category: "Computer Vision",
    year: "2025",
    award: "3rd Place, 2025",
    description:
      "Engineered a real-time road hazard detection system using YOLOv8 trained on a custom 4,200-image dataset, achieving 87% mAP on live 30 FPS video streams — outperforming SSD MobileNet baseline by 9 percentage points.",
    highlights: [
      "87% mAP on live 30 FPS video streams",
      "9 pp improvement over SSD MobileNet baseline",
      "6-tier severity classification with 22% fewer false positives",
      "Random Forest Classifier for adaptive drive mode decisions",
      "Flask dashboard with live video streaming & analytics",
    ],
    tech: [
      "YOLOv8",
      "OpenCV",
      "Random Forest",
      "Flask",
      "Python",
      "Custom Dataset",
    ],
    github: "https://github.com/syedzain001/Intelligent-Pothole-Detection-Drive-Mode-System",
  },
  {
    title: "AI Scholar (LLM Evaluation Framework)",
    category: "NLP · Automation",
    year: "2025",
    award: null,
    description:
      "AI-powered academic assessment platform using LangGraph and Google Gemini for automated subjective-answer grading. Cuts manual grading time by an estimated 80% with structured output and Human-in-the-Loop verification.",
    highlights: [
      "Automated subjective-answer grading using LangGraph and Google Gemini",
      "500+ responses graded per batch",
      "Human-in-the-Loop review for score verification",
      "Structured output for dashboard integration",
    ],
    tech: [
      "Gemini API",
      "LangGraph",
      "Pandas",
      "Python",
      "NLP",
    ],
    github: "https://github.com/syedzain001/AI-Scholar",
  },
  {
    title: "DeepWhale AI",
    category: "FinTech · Full Stack AI",
    year: "2026",
    award: null,
    description:
      "An advanced AI-powered stock market platform for real-time data ingestion, predictive modeling, and statistical arbitrage. Features a modern React UI, FastAPI microservices, FinBERT sentiment analysis, and a RAG chatbot.",
    highlights: [
      "Real-time market data ingestion and predictive modeling",
      "FinBERT integration for financial sentiment analysis",
      "RAG-powered chatbot for dynamic stock insights",
      "Microservices architecture with FastAPI and React",
    ],
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "FinBERT",
      "RAG",
    ],
    github: "https://github.com/syedzain001/DeepWhale-Ai",
  },
  {
    title: "Diabetes Health Intelligence",
    category: "Machine Learning · Healthcare",
    year: "2025",
    award: null,
    description:
      "AI-powered diabetes risk assessment platform using machine learning and LLMs to estimate risk, explain key factors, and provide personalized health insights.",
    highlights: [
      "Machine learning models for diabetes risk estimation",
      "LLM integration to explain key health factors",
      "Personalized, data-driven health insights",
    ],
    tech: [
      "Machine Learning",
      "LLMs",
      "Python",
    ],
    github: "https://github.com/syedzain001/Diabetes-Health-Intelligence",
    demo: "https://diabetes-health-intelligence.streamlit.app/",
  },
  {
    title: "Streamlit Chatbot with Conversational Memory",
    category: "LLM",
    year: "2024",
    award: null,
    description:
      "Built a multi-turn AI chatbot using LangChain with full conversation memory and context retention across dialogue sessions, enabling coherent long-form interactions with custom prompt engineering.",
    highlights: [
      "Full conversation memory across multi-turn sessions",
      "Custom prompt templates: clarification → answer → validation",
      "SentenceTransformers for semantic embedding",
      "Vector-based similarity search over conversation history",
      "Clean Streamlit interface with session state management",
    ],
    tech: [
      "LangChain",
      "Streamlit",
      "SentenceTransformers",
      "FAISS",
    ],
    github: "https://github.com/syedzain001/LLM---chatbot--Engineering-Portfolio",
  },
  {
    title: "CNN vs Transfer Learning (ResNet50)",
    category: "Computer Vision · Deep Learning",
    year: "2024",
    award: null,
    description:
      "CNN image classification on Cats vs Dogs — comparing a custom-built CNN with Global Average Pooling against ResNet50 transfer learning, including full training, evaluation, and metric comparison.",
    highlights: [
      "Custom-built CNN with Global Average Pooling",
      "ResNet50 transfer learning for image classification",
      "Comprehensive metric comparison between custom and pre-trained models",
      "End-to-end training and evaluation pipeline",
    ],
    tech: [
      "CNN",
      "ResNet50",
      "Transfer Learning",
      "Deep Learning",
      "Python",
    ],
    github: "https://github.com/syedzain001/cnn-vs-transfer-learning",
  },
  {
    title: "Uber Dashboard",
    category: "Data Visualization",
    year: "2025",
    award: null,
    description:
      "Interactive data visualization dashboard analyzing Uber ride statistics, trends, and key performance metrics.",
    highlights: [
      "Data visualization for ride statistics and trends",
      "Interactive interface for exploring key performance metrics",
    ],
    tech: [
      "Data Visualization",
      "Dashboarding",
    ],
    github: "https://github.com/syedzain001/UBER-DASHBOARD",
  },
];


function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="project-card"
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <div style={{ flex: 1, minWidth: "200px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "8px",
            }}
          >
            <span className="project-tag">{project.category}</span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-muted)",
              }}
            >
              {project.year}
            </span>
            {project.award && (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  padding: "2px 10px",
                  background: "var(--accent-muted)",
                  borderRadius: "999px",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                🏆 {project.award}
              </span>
            )}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "clamp(17px, 2.5vw, 20px)",
              color: "var(--text-primary)",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexShrink: 0 }}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: "6px 12px",
                fontSize: "12px",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            style={{ flexShrink: 0 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source
          </a>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.75,
          color: "var(--text-secondary)",
          marginBottom: "20px",
        }}
      >
        {project.description}
      </p>

      {/* Highlights */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          marginBottom: "24px",
        }}
      >
        {project.highlights.map((h) => (
          <li
            key={h}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              fontSize: "13px",
              color: "var(--text-muted)",
              lineHeight: 1.6,
            }}
          >
            <span
              style={{
                color: "var(--text-muted)",
                marginTop: "7px",
                flexShrink: 0,
                width: "3px",
                height: "3px",
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tech.map((t) => (
          <span
            key={t}
            className="skill-pill"
            style={{ fontSize: "12px", padding: "4px 10px" }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} style={{ padding: "80px 0" }}>
      <div className="divider" />
      <div className="section-container" style={{ paddingTop: "56px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "48px" }}
        >
          <span className="section-label">Projects</span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <h2 className="section-heading">Featured Work</h2>
            <a
              href="https://github.com/syedzain001"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              style={{
                color: "var(--text-secondary)",
                fontSize: "13px",
                textDecoration: "none",
              }}
            >
              View all on GitHub →
            </a>
          </div>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
