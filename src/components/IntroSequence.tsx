import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Globe, ShieldCheck } from 'lucide-react';

interface IntroSequenceProps {
  onComplete: () => void;
}

export const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [skipped, setSkipped] = useState(false);

  // Optimized lightweight 60fps canvas particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = (canvas.width = window.innerWidth * dpr);
    let height = (canvas.height = window.innerHeight * dpr);

    const handleResize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
    };
    window.addEventListener('resize', handleResize);

    // Lightweight 3D particle nodes (35 items for maximum performance)
    const nodeCount = 35;
    const nodes: { x: number; y: number; z: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 160 + Math.random() * 60;
      nodes.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let animationFrameId: number;
    let angleY = 0;

    const render = () => {
      // Fast solid clear background
      ctx.fillStyle = '#07120D';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      angleY += 0.008; // Smooth steady spin

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Fast projection calculation
      const projected = nodes.map((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (Math.abs(node.x) > 260) node.vx *= -1;
        if (Math.abs(node.y) > 260) node.vy *= -1;

        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;
        const fov = 350 * dpr;
        const scale = fov / (fov + z1 + 220);

        return {
          px: cx + x1 * scale,
          py: cy + node.y * scale,
          scale,
          alpha: Math.min(1, Math.max(0.15, (z1 + 200) / 380)),
        };
      });

      // Draw connecting lines with high-performance batching (NO shadowBlur)
      ctx.lineWidth = 0.7 * dpr;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = (85 * dpr) * (85 * dpr);

          if (distSq < maxDistSq) {
            const alpha = (1 - Math.sqrt(distSq) / (85 * dpr)) * 0.25 * p1.alpha;
            ctx.strokeStyle = `rgba(255, 181, 27, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes without heavy shadowBlur property
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.px, p.py, 3 * p.scale * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${p.alpha * 0.9})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Progress bar ticker (completes in ~3.2s)
    const startTime = Date.now();
    const duration = 3200;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 200);
      }
    }, 30);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setSkipped(true);
    onComplete();
  };

  if (skipped) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#07120D] text-[#F5F0E5] overflow-hidden select-none"
    >
      {/* Background Fast 60FPS Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Decorative Radial Ambient Glows (GPU Accelerated CSS) */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FFB51B]/10 blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#053225]/40 blur-[90px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />

      {/* Main Glassmorphism Welcome Card */}
      <div className="relative z-10 w-full max-w-2xl mx-4 p-8 md:p-12 rounded-3xl bg-[#0C1D15]/80 border border-[#FFB51B]/20 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-center flex flex-col items-center space-y-6">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFB51B]/10 border border-[#FFB51B]/30 text-[#FFB51B] text-xs font-medium tracking-widest uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FFB51B] animate-pulse" />
          <span>RESEARCH & PUBLIC HEALTH LABORATORY</span>
        </motion.div>

        {/* Large Prominent WELCOME Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-1"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5DC] via-[#FFB51B] to-[#F5B21A] drop-shadow-md">
            WELCOME
          </h1>
          <p className="text-lg md:text-2xl font-serif italic text-[#F5F0E5]/90 font-light">
            "Hello & Welcome, I'm Aima Nawaz here."
          </p>
        </motion.div>

        {/* Short Personal Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-md text-xs md:text-sm text-[#F5F0E5]/80 font-sans leading-relaxed space-y-2 border-y border-[#FFB51B]/15 py-4 my-2"
        >
          <p className="font-medium text-[#F5F0E5]">
            Public Health Researcher & Data Specialist
          </p>
          <p className="text-[#F5F0E5]/70 text-xs">
            Transforming primary healthcare data, maternal-child health metrics, and WHO community insights into evidence-based solutions.
          </p>
        </motion.div>

        {/* Progress & Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full space-y-4 pt-2"
        >
          {/* Progress Bar Container */}
          <div className="w-full flex items-center space-x-3">
            <div className="flex-1 h-1.5 rounded-full bg-[#07120D] overflow-hidden p-0.5 border border-[#FFB51B]/20">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#F5B21A] to-[#FFD700] shadow-[0_0_10px_#FFB51B]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-[#FFB51B] w-10 text-right font-bold">
              {progress}%
            </span>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={handleSkip}
              className="group relative inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FFB51B] to-[#E6A000] text-[#07120D] text-sm font-semibold tracking-wider uppercase hover:shadow-[0_0_25px_rgba(255,181,27,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>ENTER PORTFOLIO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Top Right Quick Skip Label */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full border border-[#FFB51B]/30 bg-[#0C1D15]/60 text-xs font-sans tracking-widest text-[#F5F0E5]/80 hover:text-[#FFB51B] hover:border-[#FFB51B] transition-all duration-300 backdrop-blur-md cursor-pointer"
      >
        SKIP INTRO →
      </button>
    </motion.div>
  );
};
