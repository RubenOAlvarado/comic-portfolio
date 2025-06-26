import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rubén Alvarado | Software Developer & Comic Enthusiast',
  description: 'Portafolio personal de Rubén Alvarado: desarrollador fullstack, escritor creativo y amante de los cómics.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-neutral-900 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
