import PauseButton from './PauseButton';
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';

interface ILessonHeaderProps {
  className?: string;
  value: number;
}

export default function LessonHeader({
  className = '',
  value,
}: ILessonHeaderProps) {
  return (
    <div className={cn('flex w-full items-center gap-2 sm:gap-4', className)}>
      <PauseButton />
      <Progress value={value} />
    </div>
  );
}
