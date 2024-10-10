'use client';

import LessonCard from '@/components/LessonCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import SectionLessonCard from '@/components/SectionLessonCard';

const TEST_SECTION_LESSON_DATA = {
  sectionName: 'Beginner: Foundation',
  sectionLessons: [
    {
      lessonTitle: 'Alphabet',
      href: '',
      progress: 100,
    },
    {
      lessonTitle: 'Simple Greetings',
      href: '',
      progress: 75,
    },
    {
      lessonTitle: 'Personal Pronouns',
      href: '',
      progress: 25,
    },
    {
      lessonTitle: 'Simple Phrases',
      href: '',
      progress: 0,
    },
  ],
};

interface ISectionProps {
  params: {
    section: string;
  };
}

export default function Section({ params }: ISectionProps) {
  return (
    <div className="mb-12">
      <MaxWidthWrapper>
        <h2 className="font-righteous text-3xl text-center py-12">
          {TEST_SECTION_LESSON_DATA.sectionName}
        </h2>

        <div className="flex flex-col gap-8 items-center">
          {TEST_SECTION_LESSON_DATA.sectionLessons.map(
            ({ lessonTitle, href, progress }, sectionLessonIndex) => (
              <SectionLessonCard
                lessonTitle={lessonTitle}
                progress={progress}
                href={href}
                key={sectionLessonIndex}
              />
            )
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
