import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { RotateCcw } from 'lucide-react';

const ICON_SIZE = 18;

export default function RestartButton() {
  return (
    <Button
      onClick={() => {}}
      className={cn(
        'flex gap-1 w-full',
        buttonVariants({ variant: 'default' })
      )}
    >
      <RotateCcw size={ICON_SIZE} />
      <span>Restart</span>
    </Button>
  );
}
