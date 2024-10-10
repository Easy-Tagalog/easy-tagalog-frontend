import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';

import { Pause } from 'lucide-react';
import BackButton from './BackButton';

export default function PauseButton() {
  return (
    <Dialog>
      <DialogTrigger className="transition-all hover:text-ph-red">
        <Pause />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Lesson Paused</DialogTitle>
          <DialogDescription className="flex flex-col gap-4">
            <p>If you want to quit your lesson, progress will not be saved.</p>

            <div className="flex items-center gap-4">
              <Switch />
              <p>Enable Audio</p>
            </div>

            <BackButton type="quit" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
