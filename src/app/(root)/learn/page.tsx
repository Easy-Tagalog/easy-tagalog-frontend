import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const SECTIONS = [
  {
    name: 'Beginner: Foundation',
  },
];

export default function Learn() {
  return (
    <div>
      <MaxWidthWrapper className="h-[90vh]">
        <h1 className="uppercase font-righteous text-7xl text-center text-blue-200">
          Start Learning
        </h1>

        {SECTIONS.map(({ name }, sectionIndex) => (
          <div key={sectionIndex}>{name}</div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
}
