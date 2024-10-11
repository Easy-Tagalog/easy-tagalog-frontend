'use client';

import { ReactNode, useState } from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ReadyPrompt from '@/components/ReadyPrompt';

export default function LessonLayout({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  const handleSetReady = () => setIsReady(true);

  return (
    <MaxWidthWrapper className="flex flex-col items-center">
      {isReady ? (
        <>{children}</>
      ) : (
        <ReadyPrompt handleSetReady={handleSetReady} />
      )}
    </MaxWidthWrapper>
  );
}
