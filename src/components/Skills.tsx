"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  SiPython, SiMysql, SiPostgresql, SiPytorch, SiTensorflow, SiNumpy, SiPandas, 
  SiFastapi, SiFlask, SiRedis, SiGit, SiGithub, SiScikitlearn, SiOpencv, SiStreamlit, SiCelery
} from "react-icons/si";
import { FaBrain, FaRobot, FaEye, FaComments, FaDatabase, FaNetworkWired, FaCode, FaChartBar } from "react-icons/fa6";
import { TbMessageLanguage } from "react-icons/tb";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "RAG Pipelines", icon: FaNetworkWired },
      { name: "LLM Integration", icon: FaRobot },
      { name: "Generative AI", icon: FaBrain },
      { name: "Deep Learning", icon: FaNetworkWired },
      { name: "Computer Vision", icon: FaEye },
      { name: "NLP", icon: TbMessageLanguage },
      { name: "FAISS", icon: FaDatabase },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Matplotlib", icon: FaCode },
      { name: "Power BI", icon: FaChartBar },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
      { name: "Async Python", icon: SiPython },
      { name: "Celery", icon: SiCelery },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "LangChain", icon: FaCode },
      { name: "Ollama", icon: FaRobot },
      { name: "OpenAI API", icon: FaRobot },
      { name: "SentenceTransformers", icon: FaNetworkWired },
      { name: "YOLOv8", icon: FaEye },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Streamlit", icon: SiStreamlit },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} style={{ padding: "80px 0" }}>
      <div className="divider" />
      <div className="section-container" style={{ paddingTop: "56px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "48px" }}
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="section-heading">What I Work With</h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
          className="skills-grid"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.06, duration: 0.5 }}
              className="card"
              style={{ padding: "24px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cat.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                  }}
                >
                  {cat.skills.length}
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-pill"
                    style={{ 
                      fontSize: "12px", 
                      padding: "4px 10px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <skill.icon style={{ fontSize: "14px", color: "var(--accent)" }} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
