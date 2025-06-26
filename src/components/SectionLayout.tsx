'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionLayout({ title, subtitle, children, className }: Props) {
  return (
    <main className={clsx('min-h-screen p-6 flex flex-col items-center justify-start', className || '')}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-yellow-100 text-black border-4 border-black rounded-xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8 comic-text"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold comic-title mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-neutral-800 mb-6">{subtitle}</p>}
        <div>{children}</div>
      </motion.div>
    </main>
  );
}
