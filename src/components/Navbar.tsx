'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import NavigationLink from './NavigationLink';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const [locale, setLocale] = useState('en');
  const t = useTranslations('Navigation');
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    }else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `NEXT_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale};`;
    router.refresh();
  }

  const languages = [
    { code: 'en', name: 'EN' },
    { code: 'es', name: 'ES' }
  ];
  
  return (
    <nav className="bg-yellow-300 text-black px-6 py-4 border-b-4 border-black shadow-md sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between">
        <ul className="flex flex-wrap justify-center gap-4 font-bold text-sm md:text-base flex-1">
          <motion.li key="/" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavigationLink href="/">
              {t('home')}
            </NavigationLink>
          </motion.li>
          <motion.li key="/projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavigationLink href="/projects">
              {t('projects')}
            </NavigationLink>
          </motion.li>
          <motion.li key="/experience" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavigationLink href="/experience">
              {t('experience')}
            </NavigationLink>
          </motion.li>
          <motion.li key="/about-me" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavigationLink href="/about-me">
              {t('about-me')}
            </NavigationLink>
          </motion.li>
          <motion.li key="/blog" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavigationLink href="/blog">
              {t('blog')}
            </NavigationLink>
          </motion.li>
          <motion.li key="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavigationLink href="/contact">
              {t('contact')}
            </NavigationLink>
          </motion.li>
        </ul>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => changeLocale(lang.code)}
              className={clsx(
                'w-8 h-6 rounded border-2 transition-all duration-300 shadow-md',
                locale === lang.code 
                  ? 'border-red-500 shadow-lg transform scale-110' 
                  : 'border-gray-300 hover:border-gray-400'
              )}
              aria-label={`Switch to ${lang.name}`}
              title={lang.name}
            >
              {lang.code === 'en' ? (
                <svg viewBox="0 0 60 30" className="w-full h-full rounded">
                  <rect fill="#B22234" width="60" height="30"/>
                  <rect fill="#FFFFFF" y="2.3" width="60" height="2.3"/>
                  <rect fill="#FFFFFF" y="6.9" width="60" height="2.3"/>
                  <rect fill="#FFFFFF" y="11.5" width="60" height="2.3"/>
                  <rect fill="#FFFFFF" y="16.1" width="60" height="2.3"/>
                  <rect fill="#FFFFFF" y="20.7" width="60" height="2.3"/>
                  <rect fill="#FFFFFF" y="25.3" width="60" height="2.3"/>
                  <rect fill="#3C3B6E" width="24" height="16.1"/>
                </svg>
              ) : (
                <svg viewBox="0 0 60 40" className="w-full h-full rounded">
                  <rect fill="#AA151B" width="60" height="40"/>
                  <rect fill="#F1BF00" width="60" height="13.33"/>
                  <rect fill="#AA151B" y="26.67" width="60" height="13.33"/>
                </svg>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}