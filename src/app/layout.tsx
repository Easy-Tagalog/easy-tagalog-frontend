import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';
import { cn } from '@/lib/utils';

import './globals.css';

const fredoka = Fredoka({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Easy Tagalog',
  description: 'Learn Tagalog Easily',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn('relative h-full antialiased', fredoka.className)}>
        <main className="relative flex flex-col min-h-screen">{children}</main>
      </body>
    </html>
  );
}
