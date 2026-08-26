"use client";

import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Mouse tracking
    let mouse = {
      x: -1000,
      y: -1000,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    // Configuration
    const particleCount = 75; // Adjust for density
    const connectionDistance = 160; // Max distance to draw a line between nodes
    const mouseConnectionDistance = 200; // Max distance to connect to mouse
    const particleSpeed = 0.6;

    // Use a color that matches the theme's accent color (Purple #8b5cf6 -> 139, 92, 246)
    const accentColor = "139, 92, 246";

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.radius = Math.random() * 2 + 1; // 1px to 3px radius
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentColor}, 0.5)`; // Node color
        // Add a slight glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${accentColor}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for lines
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.forEach((p) => p.update(canvas.width, canvas.height));

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        // Connect to mouse
        const dxMouse = particles[i].x - mouse.x;
        const dyMouse = particles[i].y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseConnectionDistance) {
          const opacity = (1 - distMouse / mouseConnectionDistance) * 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${accentColor}, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Connect to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Opacity decreases as distance increases
            const opacity = (1 - distance / connectionDistance) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${accentColor}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes after lines so they appear on top
      particles.forEach((p) => p.draw(ctx));

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Keep it behind all content
        pointerEvents: "none", // Prevent it from blocking clicks
        background: "transparent", // Let the page background show through
      }}
    />
  );
}
