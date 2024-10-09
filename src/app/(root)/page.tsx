import Link from 'next/link';

import { MapPinned, Speech, BookOpen, HomeIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { cn } from '@/lib/utils';

// max-w-prose is good for <p>

const BULLET_INFO = [
  {
    name: 'Learn Casual Tagalog',
    Icon: Speech,
    description:
      'Although Easy Tagalog will teach a bit on how to speak formally, our goal is to have you speak like a normal Tagalog speaker and speak colloquial Tagalog.',
  },
  {
    name: 'Philippines Geography',
    Icon: MapPinned,
    description:
      "Each section and lesson will provide a little insight on different parts and provinces of the Philippines. While learning Tagalog, it's good to know some things about the country.",
  },
  {
    name: 'Philippines Culture',
    Icon: HomeIcon,
    description:
      'Every Tagalog speaker should be accustomed to some of the Filipino culture. That being traditions, holidays, clothing, and food.',
  },
  {
    name: 'Philippines History',
    Icon: BookOpen,
    description:
      'The Philippines has a rich history aswell, and it might be good to know how Tagalog was influenced by other countries and their languages.',
  },
];

const EXPLORE_LESSONS = [
  {
    name: 'Greetings',
    Icon: Speech,
    tagalog: 'Pagbati',
  },
  {
    name: 'Body',
    Icon: Speech,
    tagalog: 'Katawan',
  },
  {
    name: 'Weather',
    Icon: Speech,
    tagalog: 'Panahon',
  },
  {
    name: 'Feelings',
    Icon: Speech,
    tagalog: 'Damdamin',
  },
  {
    name: 'Food',
    Icon: Speech,
    tagalog: 'Pagkain',
  },
];

export default function Home() {
  return (
    <>
      <section className="h-[90vh]">
        <MaxWidthWrapper className="flex flex-col h-full items-center justify-center gap-8 text-center">
          <h1 className="font-fredoka flex flex-col">
            <span className="text-[4.5rem] font-righteous font-bold bg-gradient-to-r from-ph-blue via-ph-red to-ph-yellow text-transparent bg-clip-text sm:text-[7rem] md:text-[9rem] lg:text-[14rem]">
              TAGALOG
            </span>
            <span className="text-lg font-semibold text-ph-blue md:text-xl">
              Made Fun & Simple
            </span>
          </h1>

          <p className="text-base text-muted-foreground md:text-lg">
            Still in beta, new content coming soon!
          </p>

          <Link
            href="/learn"
            className={buttonVariants({ variant: 'destructive' })}
          >
            Start Learning
          </Link>
        </MaxWidthWrapper>
      </section>

      {/* Bulletpoint section */}
      <section className="bg-ph-blue py-4 h-screen">
        <MaxWidthWrapper className="h-full flex flex-col justify-around sm:px-4 md:px-0">
          {BULLET_INFO.map((info, i) => {
            // This flips the icon and description
            const isOdd = i % 2 !== 0;

            return (
              <div
                key={info.name}
                className={`text-left flex justify-around items-center max-w-6xl mx-auto md:gap-4 lg:justify-between ${
                  isOdd && 'flex-row-reverse'
                }`}
              >
                {/* This is the circle with icon */}
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-20 w-20 flex items-center justify-center rounded-full bg-blue-100 text-ph-blue">
                    {<info.Icon className="w-10 h-10 sm:w-1/2 sm:h-1/2" />}
                  </div>
                </div>

                <div className="max-w-xl p-4 md:ml-4 lg:ml-0">
                  <h3 className="font-righteous text-ph-yellow text-lg sm:text-xl">
                    {info.name}
                  </h3>
                  <p className="mt-3 text-sm text-ph-white md:text-base">
                    {info.description}
                  </p>
                </div>
              </div>
            );
          })}
        </MaxWidthWrapper>
      </section>

      {/* Explore Lessons section */}
      <section className="h-screen py-4">
        <MaxWidthWrapper className="h-full flex flex-col justify-center items-center">
          <h3 className="font-righteous text-ph-red text-2xl text-center">
            Explore Lessons
          </h3>

          {/* TODO: Create a Lesson Card component for singular lessons */}
          <div className="py-10 gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {EXPLORE_LESSONS.map((lessonData, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col mx-auto justify-around p-4 w-32 h-40 bg-ph-red text-ph-white rounded-md transition-all hover:cursor-pointer hover:bg-ph-blue hover:text-ph-yellow hover:-translate-y-2 hover:shadow-md md:w-48 md:h-60"
                >
                  <lessonData.Icon className="w-1/2 h-1/2 mx-auto" />

                  <div>
                    <p className="text-base md:text-lg">{lessonData.name}</p>
                    <p className="text-sm md:text-base">{lessonData.tagalog}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              href="/learn"
              className={buttonVariants({ variant: 'outline' })}
            >
              Explore More
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
