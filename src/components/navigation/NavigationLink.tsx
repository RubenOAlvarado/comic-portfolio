'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
        aria-current={isActive ? 'page' : undefined}
        className={clsx(
            'px-4 py-2 border-2 border-black rounded comic-button transition-all',
            pathname === href ? 'bg-black text-yellow-300' : 'bg-white'
        )}
        href={href}
        {...rest}
    />
  );
}