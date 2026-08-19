"use client";

import { animate } from "animejs";
import { useEffect, useRef } from "react";

type VisualKind = "nebula" | "fractal" | "waveform";

type CardVisualProps = {
  kind: VisualKind;
};

const violet = "168, 85, 247";
const pink = "255, 79, 195";
const cyan = "125, 226, 209";

export function BiotechPromptCardVisual({ kind }: CardVisualProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawNebula = () => {
      ctx.fillStyle = "rgba(13,7,25,0.16)";
      ctx.fillRect(0, 0, width, height);
      const cx = width * 0.5;
      const cy = height * 0.52;

      for (let i = 0; i < 115; i++) {
        const p = i / 115;
        const angle = p * Math.PI * 13 + time * 0.012;
        const radius = 8 + p * Math.min(width, height) * 0.43;
        const pulse = Math.sin(time * 0.035 + i * 0.4) * 10;
        const x = cx + Math.cos(angle) * (radius + pulse);
        const y = cy + Math.sin(angle * 0.74) * (radius * 0.48 + pulse);
        const alpha = 0.16 + Math.sin(time * 0.025 + i) * 0.12;

        ctx.beginPath();
        ctx.shadowBlur = 14;
        ctx.shadowColor = `rgba(${violet},0.65)`;
        ctx.fillStyle = i % 9 === 0 ? `rgba(${pink},0.8)` : `rgba(${violet},${alpha + 0.22})`;
        ctx.arc(x, y, i % 9 === 0 ? 2.8 : 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const branch = (x: number, y: number, angle: number, length: number, depth: number) => {
      if (depth > 8 || length < 4) return;
      const sway = Math.sin(time * 0.018 + depth) * 0.16;
      const endX = x + Math.cos(angle + sway) * length;
      const endY = y + Math.sin(angle + sway) * length;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.lineWidth = Math.max(0.7, 2.8 - depth * 0.25);
      ctx.strokeStyle = depth % 3 === 0 ? `rgba(${pink},${0.42 - depth * 0.03})` : `rgba(${violet},${0.5 - depth * 0.035})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${violet},0.35)`;
      ctx.stroke();

      branch(endX, endY, angle - 0.34, length * 0.77, depth + 1);
      branch(endX, endY, angle + 0.32, length * 0.75, depth + 1);
    };

    const drawFractal = () => {
      ctx.fillStyle = "rgba(13,7,25,0.2)";
      ctx.fillRect(0, 0, width, height);
      branch(width * 0.5, height * 0.96, -Math.PI / 2, height * 0.22, 0);
      ctx.shadowBlur = 0;
    };

    const drawWaveform = () => {
      ctx.fillStyle = "rgba(13,7,25,0.2)";
      ctx.fillRect(0, 0, width, height);

      for (let line = 0; line < 18; line++) {
        const yBase = height * (0.22 + line * 0.032);
        ctx.beginPath();
        for (let x = 0; x <= width; x += 7) {
          const wave =
            Math.sin(x * 0.035 + time * 0.035 + line * 0.55) * 13 +
            Math.cos(x * 0.07 + time * 0.02 + line) * 5;
          const y = yBase + wave + line * 4.2;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = line % 5 === 0 ? `rgba(${pink},0.42)` : `rgba(${cyan},0.26)`;
        ctx.lineWidth = 1.4;
        ctx.shadowBlur = 9;
        ctx.shadowColor = `rgba(${violet},0.32)`;
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
    };

    const draw = () => {
      time += 1;
      if (kind === "nebula") drawNebula();
      if (kind === "fractal") drawFractal();
      if (kind === "waveform") drawWaveform();
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [kind]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const scan = root.querySelector("[data-card-scan]");
    if (!scan) return;

    const animation = animate(scan, {
      translateX: ["-120%", "120%"],
      opacity: [0, 0.8, 0],
      duration: 2600,
      ease: "inOutSine",
      loop: true
    });

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative mb-8 h-52 overflow-hidden border border-white/10 bg-[#0d0719] transition duration-300 group-hover:border-plasma/40 group-hover:shadow-[0_18px_70px_rgba(168,85,247,0.22)] sm:h-56">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(168,85,247,0.28),transparent_38%),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:auto,22px_22px,22px_22px]" />
      <div data-card-scan className="absolute inset-y-0 z-20 w-20 rotate-12 bg-gradient-to-r from-transparent via-white/24 to-transparent" />
      <canvas ref={canvasRef} className="relative z-10 h-full w-full" aria-hidden="true" />
    </div>
  );
}
