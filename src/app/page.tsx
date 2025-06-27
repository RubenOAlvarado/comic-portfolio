import AnimatedSection from '@/components/homePage/AnimatedSection';
import SocialMedia from '@/components/homePage/SocialMedia';
import { AbstractIntlMessages, useTranslations } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata({params: { locale } }: { params: { locale: string } }) {
  const messages: AbstractIntlMessages = await getMessages({ locale });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const metadata = typeof messages.Metadata === 'object' && messages.Metadata !== null ? messages.Metadata as Record<string, any> : {};
  const title = metadata.home?.title;
  const description = metadata.home?.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://rubenoalvarado.com`,
      images: [
        {
          url: `https://rubenoalvarado.com/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <AnimatedSection>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 home-title">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-8 comic-text">
          {t('description')}
        </p>

        <SocialMedia />

        <button 
          className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded shadow-lg hover:bg-yellow-300 transition comic-button"
          aria-label={t('cta')}
        >
          <Link href="/contact">{t('cta')}</Link>
        </button>
      </AnimatedSection>
    </main>
  );
}
