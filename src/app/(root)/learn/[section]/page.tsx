'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const LESSONS_DATA = [
  {
    lessonTitle: 'Greetings',
  },
  {
    lessonTitle: ' ',
  },
];

interface SectionProps {
  params: {
    section: string;
  };
}

export default function Section({ params }: SectionProps) {
  return (
    <MaxWidthWrapper>
      <h2>{params.section}</h2>
    </MaxWidthWrapper>
  );
}
