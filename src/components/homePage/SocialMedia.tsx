'use client';

import { socialLinks } from '@/data/socialMedia';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function SocialMedia() {
  const t = useTranslations('HomePage');

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            whileHover={{
              scale: 1.1,
              rotate: -3,
              boxShadow: '0px 10px 20px rgba(234, 179, 8, 0.4)',
            }}
            className={`
              group relative p-4 bg-neutral-800 
              rounded-2xl transition-colors duration-300 
              ${social.color} social-comic-button
            `}
            aria-label={`${t('social')} ${social.name}`}
          >
            {/* Icon */}
            <div className="text-white group-hover:text-yellow-400 transition-colors duration-300 z-10 relative">
              {social.icon}
            </div>

            {/* Overlay label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-2xl z-10"
            >
              <span className="text-white font-bold text-sm">{social.name}</span>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
