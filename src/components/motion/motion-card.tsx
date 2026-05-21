"use client";

import { motion, useReducedMotion } from "motion/react";

type MotionCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function MotionCard({ children, className = "" }: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
