'use client';

import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { RotateCcw, LogOut, Pause } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Button, buttonVariants } from './ui/button';

const ICON_SIZE = 22;

interface ILessonPauseMenuProps {
  handleRestart: () => void;
}

export default function LessonPauseMenu({
  handleRestart,
}: ILessonPauseMenuProps) {
  const router = useRouter();

  const quitLesson = () => {
    router.back();
  };

  return (
    <Dialog>
      <DialogTrigger className="transition-all hover:text-ph-red">
        <Pause />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Lesson Paused</DialogTitle>
          <DialogDescription className="flex flex-col gap-4">
            <span>
              If you want to quit your lesson, progress will not be saved.
            </span>

            <div className="flex items-center gap-4">
              <Switch />
              <span>Enable Audio</span>
            </div>

            <div className="flex items-center w-full gap-8">
              <Button
                className={cn(
                  buttonVariants({ variant: 'destructive' }),
                  'flex gap-1 w-full'
                )}
                onClick={quitLesson}
              >
                <LogOut size={ICON_SIZE} />
                <span>Quit Lesson</span>
              </Button>

              <Button className="flex gap-1 w-full" onClick={handleRestart}>
                <RotateCcw size={ICON_SIZE} />
                <span>Restart</span>
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
