import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import clsx from 'clsx';
import { ReactNode } from 'react';


const inter = Inter({ subsets: ['latin'] });


export default async function LocaleLayout({ children }: Readonly<{ children: ReactNode }>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={clsx(inter.className, `bg-neutral-900 text-white`)}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
