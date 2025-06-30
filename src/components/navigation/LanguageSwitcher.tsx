import { languages } from "@/data/languages";
import clsx from "clsx";
import { motion } from 'framer-motion';
import { useTranslations } from "next-intl";

export default function LanguageSwitcher({ changeLocale, locale }: {
    changeLocale: (locale: string) => void;
    locale: string;
}) {
    const t = useTranslations('Navigation');
    return (
        <div className="flex gap-1">
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
                aria-label={t('language-alt')}
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
    );
}