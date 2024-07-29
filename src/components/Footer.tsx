import Link from 'next/link';
import Logo from './Logo';
import MaxWidthWrapper from './MaxWidthWrapper';

import { Righteous } from 'next/font/google';
import { cn } from '@/lib/utils';
const righteous = Righteous({ subsets: ['latin'], weight: '400' });

const FOOTER_LINKS = [
  {
    header: 'Company',
    pages: [
      {
        text: 'About Us',
        url: '/about-us',
      },
      {
        text: 'Contact Us',
        url: '/contact-us',
      },
    ],
  },
  {
    header: 'Get Started',
    pages: [
      {
        text: 'Learn',
        url: '/learn',
      },
      {
        text: 'Translate',
        url: '/translate',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-yellow-100">
      <MaxWidthWrapper className="flex flex-col justify-around items-center gap-8 px-2 py-10 md:flex-row">
        <Link href="/">
          <Logo />
        </Link>

        <div className="flex flex-col gap-20 sm:flex-row">
          {FOOTER_LINKS.map(({ header, pages }, i) => (
            <div key={i}>
              <h3 className={cn('text-xl', righteous.className)}>{header}</h3>
              <div className="flex flex-col">
                {pages.map(({ text, url }, j) => (
                  <Link
                    href={url}
                    key={j}
                    className="transition-all hover:text-ph-red"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>

      <p className="text-xs text-center p-1 bg-ph-yellow sm:text-sm">
        2024 Easy Tagalog. All rights reserved.
      </p>
    </footer>
  );
}
