import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import SectionCard from '@/components/SectionCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const SECTIONS = [
  {
    sectionName: 'Beginner: Foundation',
    href: '/beginner-foundation',
    sectionOverview:
      'In this section you will learn the alphabet, pronouns, simple greetings, and very commonly used words',
  },
  {
    sectionName: 'Beginner: Conversation',
    href: '',
    sectionOverview: 'In this section you will learn',
  },
  {
    sectionName: 'Intermediate: Conversation',
    href: '',
    sectionOverview: 'In this section you will learn',
  },
];

export default function Learn() {
  return (
    <div>
      <MaxWidthWrapper className="h-[90vh] flex flex-col items-center">
        <h1 className="uppercase font-righteous text-center text-5xl text-blue-200 py-8 sm:text-7xl">
          Start Learning
        </h1>

        <Carousel className="w-2/3">
          <CarouselContent className="gap-4">
            {SECTIONS.map(
              ({ sectionName, sectionOverview, href }, sectionIndex) => (
                <CarouselItem key={sectionIndex}>
                  <SectionCard
                    sectionName={sectionName}
                    sectionOverview={sectionOverview}
                    href={href}
                  />
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </MaxWidthWrapper>
    </div>
  );
}
