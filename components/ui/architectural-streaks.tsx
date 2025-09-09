"use client";
import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  intervalMs?: number; // how often to add new streaks
  batch?: number; // streaks per tick
};

export default function ArchitecturalStreaks({
  className,
  intervalMs = 700,
  batch = 2,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const setSize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const onResize = () => {
      // Debounce resize a bit with rAF
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(setSize);
    };
    window.addEventListener("resize", onResize);

    const drawStreak = () => {
      const { width, height } = canvas;
      const cw = width / (window.devicePixelRatio || 1);
      const ch = height / (window.devicePixelRatio || 1);

      // Pick a base orientation: mostly horizontal/diagonal
      const angle = (Math.random() * Math.PI) / 6 - Math.PI / 12; // ~ -15° to 15°
      const isDiag = Math.random() < 0.35;
      const finalAngle = isDiag ? angle + (Math.random() < 0.5 ? Math.PI / 4 : -Math.PI / 4) : angle;

      const len = cw * (0.2 + Math.random() * 0.45); // 20% - 65% width
      const x = Math.random() * cw;
      const y = Math.random() * ch;
      const thickness = 0.6 + Math.random() * 1.2; // 0.6 - 1.8 px
      const alpha = 0.04 + Math.random() * 0.04; // faint

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(finalAngle);
      ctx.beginPath();
      ctx.moveTo(-len / 2, 0);
      ctx.lineTo(len / 2, 0);
      ctx.lineWidth = thickness;
      ctx.strokeStyle = `rgba(0,0,0,${alpha})`;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.restore();
    };

    // Periodically add new streaks
    intervalRef.current = window.setInterval(() => {
      for (let i = 0; i < batch; i++) drawStreak();
    }, intervalMs) as unknown as number;

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [intervalMs, batch]);

  return (
    <canvas
      ref={canvasRef}
      className={[
        "absolute inset-0 w-full h-full pointer-events-none select-none",
        className || "",
      ].join(" ")}
    />
  );
}
