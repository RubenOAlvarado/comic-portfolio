'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { navigationItems } from '@/data/navigation-items';
import LanguageSwitcher from './LanguageSwitcher';
import NavigationLink from './NavigationLink';

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
  
  return (
    <nav className="bg-yellow-300 text-black px-6 py-4 border-b-4 border-black shadow-md sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between">
        <ul className="flex flex-wrap justify-center gap-4 font-bold text-sm md:text-base flex-1">
          {navigationItems.map(item => (
            <motion.li key={item.key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <NavigationLink href={item.href}>
                {t(item.key)}
              </NavigationLink>
            </motion.li>
          ))}
        </ul>
        <div className="flex items-center space-x-3">
          <LanguageSwitcher
            changeLocale={changeLocale}
            locale={locale}
          />
        </div>
      </div>
    </nav>
  );
}