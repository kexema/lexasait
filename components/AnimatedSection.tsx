"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren } from "react";

export function AnimatedSection({ children, className = "", ...props }: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
