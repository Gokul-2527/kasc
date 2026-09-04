"use client";

import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <main className="min-h-screen bg-white p-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        Empowering Minds.
      </motion.h1>
    </main>
  );
}
