'use client';

import { useRouter } from 'next/navigation';
import { ArrowBigLeft, LogOut } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';

const ICON_SIZE = 22;

interface IBackButtonProps {
  className?: string;
  type?: 'back' | 'quit';
}

export default function BackQuitButton({
  className = '',
  type = 'back',
}: IBackButtonProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className={cn(
        className,
        'flex gap-1 w-full',
        `${type === 'back' ? 'w-fit' : 'w-full'}`,
        buttonVariants({ variant: type === 'back' ? 'outline' : 'destructive' })
      )}
    >
      {type === 'back' ? (
        <ArrowBigLeft size={ICON_SIZE} />
      ) : (
        <LogOut size={ICON_SIZE} />
      )}
      <span>{type === 'back' ? 'Back' : 'Quit Lesson'}</span>
    </Button>
  );
}
