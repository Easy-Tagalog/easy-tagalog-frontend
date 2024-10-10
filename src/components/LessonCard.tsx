import { LucideIcon } from 'lucide-react';

interface ILessonCardProps {
  Icon: LucideIcon;
  englishLessonName: string;
  tagalogLessonName: string;
}

export default function LessonCard({
  Icon,
  englishLessonName,
  tagalogLessonName,
}: ILessonCardProps) {
  return (
    <div className="flex flex-col group border-4 border-ph-blue mx-auto justify-around w-32 h-40 text-ph-blue rounded-md transition-all hover:text-ph-yellow hover:bg-ph-blue hover:border-ph-yellow hover:cursor-pointer hover:-translate-y-2 hover:shadow-lg md:w-48 md:h-60">
      <Icon className="w-1/2 h-1/2 mx-auto" />

      <div className="px-2 md:px-4">
        <p className="text-base md:text-xl">{englishLessonName}</p>
        <p className="text-sm text-ph-yellow invisible group-hover:visible md:text-base">
          {tagalogLessonName}
        </p>
      </div>
    </div>
  );
}
