'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const links = [
    { href: '/', label: 'Inicio' },
    { href: '/projects', label: 'Proyectos' },
    { href: '/experience', label: 'Experiencia' },
    { href: '/about-me', label: 'Sobre mí' },
    { href: '/blog', label: 'Blog' },
    { href: '/creative-side', label: 'Lado Creativo' },
    { href: '/contact', label: 'Contacto' },
  ];

  export default function Navbar() {
    const pathname = usePathname();
  
    return (
      <nav className="bg-yellow-300 text-black px-6 py-4 border-b-4 border-black shadow-md sticky top-0 z-50">
        <ul className="flex flex-wrap justify-center gap-4 font-bold text-sm md:text-base">
          {links.map(({ href, label }) => (
            <motion.li key={href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={href}
                className={clsx(
                  'px-4 py-2 border-2 border-black rounded comic-button transition-all',
                  pathname === href ? 'bg-black text-yellow-300' : 'bg-white'
                )}
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    );
  }