import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syed Zain Ull Abidin — AI/ML Engineer",
  description:
    "Portfolio of Syed Zain Ull Abidin — Final-year AI & Data Science engineer specializing in RAG pipelines, LLM integration, computer vision, and async Python backends. Open to AI/ML Engineer, Data Scientist, and Data Analyst roles.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "RAG Pipeline",
    "LLM",
    "Computer Vision",
    "FastAPI",
    "YOLOv8",
    "Python",
    "Data Scientist",
    "Bengaluru",
  ],
  authors: [{ name: "Syed Zain Ull Abidin" }],
  openGraph: {
    title: "Syed Zain Ull Abidin — AI/ML Engineer",
    description:
      "Building intelligent AI systems end-to-end — from RAG backends to computer vision.",
    type: "website",
  },
};

import NetworkBackground from "@/components/NetworkBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NetworkBackground />
        {children}
      </body>
    </html>
  );
}
