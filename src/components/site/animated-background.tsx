"use client";

import { motion } from "framer-motion";

type AnimatedBackgroundProps = {
  variant?: "hero" | "section" | "dots" | "leaves";
  className?: string;
};

export function AnimatedBackground({
  variant = "hero",
  className = "",
}: AnimatedBackgroundProps) {
  if (variant === "dots") {
    return (
      <div
        className={`absolute inset-0 opacity-[0.05] pointer-events-none ${className}`}
        style={{
          backgroundImage:
            "radial-gradient(circle, #0d4f1c 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    );
  }

  if (variant === "leaves") {
    return (
      <div
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      >
        {["🌿", "🍃", "🌱", "🪴", "🌿", "🍃"].map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${(i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>
    );
  }

  // hero / section — animated gradient orbs
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-green-bright/15 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl"
        animate={{
          x: [-30, 30, -30],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
