'use client';

import { sendContactEmail } from '@/actions/sendEmail';
import SocialMedia from '@/components/homePage/SocialMedia';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactoPage() {
  const t = useTranslations('ContactPage');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    const res = await sendContactEmail({...form, token: token || '' });
    if(res.success) {
      setResult({ success: true, message: t('form.success') });
      setForm({ name: '', email: '', message: '' });
    } else {
      setResult({ success: false, message: t('form.error') });
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-black mb-4 comic-text text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('title')}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-neutral-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {t('subtitle')}
      </motion.p>

      <SocialMedia />

      <motion.form
        className="w-full max-w-lg space-y-6 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-bold text-yellow-400">
            {t('form.name')}
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-neutral-800 text-white border-2 border-transparent focus:border-yellow-400 focus:outline-none"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-yellow-400">
            {t('form.email')}
          </label>
          <input
            type="email"
            className="w-full p-3 rounded-lg bg-neutral-800 text-white border-2 border-transparent focus:border-yellow-400 focus:outline-none"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-yellow-400">
            {t('form.message')}
          </label>
          <textarea
            className="w-full p-3 rounded-lg bg-neutral-800 text-white border-2 border-transparent focus:border-yellow-400 focus:outline-none"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          size="invisible"
          ref={recaptchaRef}
        />
        <motion.button
          type="submit"
          className="bg-yellow-400 text-black px-6 py-3 font-bold rounded-lg shadow-md hover:shadow-yellow-500/70 transition hover:scale-105 comic-button"
          whileHover={{ scale: 1.05, rotate: -1 }}
        >
          {loading ? 'Sending...' : t('form.submit')}
        </motion.button>
      </motion.form>

      {result && (
        <p className={`mt-6 text-sm ${result.success ? 'text-green-400' : 'text-red-400'}`}>
          {result.message}
        </p>
      )}

      <div className="mt-10 text-neutral-400 text-sm">
        {t('reachme')}{' '}
        <span className="text-yellow-400 font-bold">rubenoalvarado@gmail.com</span>
      </div>
    </main>
  );
}
  