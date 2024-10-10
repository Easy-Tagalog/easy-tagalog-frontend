'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from './ui/button';

interface ISectionCardProps {
  sectionName: string;
  sectionOverview: string;
  href: string;
}

export default function SectionCard({
  sectionName,
  sectionOverview,
  href,
}: ISectionCardProps) {
  const current_path = usePathname();

  return (
    <div className="h-[60vh] p-4 bg-ph-yellow rounded-md">
      <div className="flex flex-col gap-1 md:flex-row md:gap-4 md:items-center">
        <h2 className="font-righteous text-2xl">{sectionName}</h2>
        <Link
          href={current_path + href}
          className={buttonVariants({ variant: 'default' })}
        >
          Start
        </Link>
      </div>

      <p className="mt-4">{sectionOverview}</p>
    </div>
  );
}
