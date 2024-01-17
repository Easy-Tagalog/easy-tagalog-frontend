"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

interface SearchProps {
  className?: string;
}

const ICON_WIDTH = 22;

export default function Search({ className }: SearchProps) {
  return (
    <div className={cn("flex w-full h-14 max-w-md items-center", className)}>
      <Input
        type="text"
        placeholder="Find a word..."
        className="border-r-0 border-black rounded-r-none focus-visible:ring-0 h-full text-base"
      />
      <Button
        type="button"
        className="rounded-l-none h-full w-20"
        variant="destructive"
      >
        <SearchIcon width={ICON_WIDTH} />
      </Button>
    </div>
  );
}
