import Link from 'next/link';

import Logo from './Logo';
import MaxWidthWrapper from './MaxWidthWrapper';

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
      {
        text: 'Lessons',
        url: '/lessons',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-yellow-100">
      <MaxWidthWrapper className="flex flex-col justify-around items-center gap-8 px-2 py-10 md:flex-row md:h-64">
        <Link href="/">
          <Logo size={200} />
        </Link>

        <div className="flex flex-col gap-20 sm:flex-row">
          {FOOTER_LINKS.map(({ header, pages }, i) => (
            <div key={i}>
              <h3 className="text-xl font-righteous">{header}</h3>

              <div className="flex flex-col">
                {pages.map(({ text, url }, footerLinkIndex) => (
                  <Link
                    href={url}
                    key={footerLinkIndex}
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

      <p className="text-sm text-center p-2 bg-ph-yellow">
        2024 Easy Tagalog. All rights reserved.
      </p>
    </footer>
  );
}
