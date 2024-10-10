'use client';

import { useRouter } from 'next/navigation';
import { ArrowBigLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';

const ICON_SIZE = 22;

interface IBackButtonProps {
  type?: 'back' | 'quit';
}

export default function BackButton({ type = 'back' }: IBackButtonProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className={cn(
        'flex gap-1 px-4 mt-4 mb-8 sm:my-4',
        buttonVariants({ variant: type === 'back' ? 'outline' : 'destructive' })
      )}
    >
      <ArrowBigLeft size={ICON_SIZE} />
      <span>{type === 'back' ? 'Back' : 'Quit Lesson'}</span>
    </Button>
  );
}
