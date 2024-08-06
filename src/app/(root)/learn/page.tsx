'use client';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const SECTIONS_DATA = [
  {
    title: 'Beginner',
    vocab: ['Oo', 'Kamusta', 'Oo', 'Kamusta'],
    grammar: [],
    example_phrases: ['Salamat po', 'Magandang umaga'],
  },
  {
    title: 'Intermediate',
    vocab: ['Busog', 'Naranha'],
    grammar: [],
    example_phrases: ['Salamat po', 'Magandang umaga'],
  },
  {
    title: 'Advanced',
    vocab: ['Waw', 'Sana'],
    grammar: [],
    example_phrases: ['Salamat po', 'Magandang umaga'],
  },
];

export default function Learn() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center">
      <h1 className="pt-4 pb-20 text-6xl text-blue-100">Start Learning</h1>

      <Carousel className="w-2/3 mb-10 sm:w-5/6">
        <CarouselContent>
          {SECTIONS_DATA.map(
            ({ title, vocab, grammar, example_phrases }, sectionIndex) => {
              return (
                <CarouselItem
                  key={sectionIndex}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="flex gap-8 items-center">
                    <h2 className="text-3xl">{title}</h2>
                    <Link
                      className={buttonVariants({ variant: 'destructive' })}
                      href={`/${title}`}
                    >
                      Start
                    </Link>
                  </div>

                  <div>
                    <h3>New Vocab</h3>
                    {vocab.map((word, wordIndex) => (
                      <p key={wordIndex}>{word}</p>
                    ))}
                  </div>

                  <div>
                    <h3>Grammar</h3>
                    {grammar.map((gram, grammarIndex) => (
                      <p key={grammarIndex}>{gram}</p>
                    ))}
                  </div>

                  <div>
                    <h3>Example Phrases</h3>
                    {example_phrases.map((phrase, phraseIndex) => (
                      <p key={phraseIndex}>{phrase}</p>
                    ))}
                  </div>
                </CarouselItem>
              );
            }
          )}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </MaxWidthWrapper>
  );
}
