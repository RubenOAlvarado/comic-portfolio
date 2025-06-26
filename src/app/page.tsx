'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 home-title">
          ¡Hola! Soy Rubén ✨
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-8 comic-text">
          Desarrollador fullstack, narrador creativo y fanático de los cómics. Este sitio es una ventana a mi trabajo, mis ideas y mi pasión por contar historias.
        </p>
        <Link href="/projects" className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded shadow-lg hover:bg-yellow-300 transition comic-button">
          Ver Proyectos
        </Link>
      </motion.div>
    </main>
  );
}
