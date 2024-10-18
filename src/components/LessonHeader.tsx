import LessonPauseMenu from './LessonPauseMenu';
import { Progress } from './ui/progress';

interface ILessonHeaderProps {
  className?: string;
  value: number;
  handleRestart: () => void;
}

export default function LessonHeader({
  className = '',
  value,
  handleRestart,
}: ILessonHeaderProps) {
  return (
    <div className="flex w-full my-6 px-2 items-center gap-2 sm:gap-4">
      <LessonPauseMenu handleRestart={handleRestart} />
      <Progress value={value} />
    </div>
  );
}
