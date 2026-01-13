"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <main className="min-h-screen bg-black select-none">
      {/* Custom Creative Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: mousePos.x - 24, y: mousePos.y - 24 }}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
      />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-[18vw] font-black uppercase tracking-tighter leading-none"
        >
          Geventure
        </motion.h1>
      </section>

      {/* Content Grid */}
      <section className="p-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-[600px] bg-zinc-900 flex items-center justify-center border border-zinc-800 hover:border-white transition-all">
          <span className="text-2xl font-bold italic underline">PHOTOGRAPHY</span>
        </div>
        <div className="h-[600px] bg-zinc-900 flex items-center justify-center border border-zinc-800 hover:border-white transition-all">
          <span className="text-2xl font-bold italic underline">DESIGN</span>
        </div>
        <div className="h-[600px] bg-zinc-900 md:col-span-2 flex items-center justify-center border border-zinc-800 hover:border-white transition-all">
          <span className="text-2xl font-bold italic underline">VIDEO CONTENT</span>
        </div>
      </section>
      
      <footer className="p-20 text-center opacity-30">
        GEVENTURE © 2026
      </footer>
    </main>
  );
}
