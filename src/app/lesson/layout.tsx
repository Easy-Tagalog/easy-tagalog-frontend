import { ReactNode } from 'react';

import Logo from '@/components/Logo';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function LessonLayout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex flex-col items-center">
      {children}
    </MaxWidthWrapper>
  );
}
