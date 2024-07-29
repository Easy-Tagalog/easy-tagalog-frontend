'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface SearchBarProps {
  className?: string;
}

const ICON_WIDTH = 16;

export default function SearchBar({ className }: SearchBarProps) {
  const [inputText, setInputText] = useState('');

  return (
    <div className="relative">
      <Input
        className={cn('relative rounded-3xl focus-visible:ring-0', className)}
        placeholder="Search dictionary..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button className="absolute right-0 top-0 rounded-full h-8 w-8 p-1 m-1">
        <SearchIcon width={ICON_WIDTH} />
      </Button>
    </div>
  );
}
