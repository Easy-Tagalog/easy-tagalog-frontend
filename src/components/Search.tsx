"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

interface SearchProps {
  className?: string;
}

const ICON_WIDTH = 18;

export default function Search({ className }: SearchProps) {
  return (
    <div className={cn("flex w-full max-w-md items-center", className)}>
      <Input
        type="text"
        placeholder="Find a word..."
        className="border-r-0 rounded-r-none focus-visible:ring-0"
      />
      <Button type="button" className="rounded-l-none" variant="destructive">
        <SearchIcon width={ICON_WIDTH} />
      </Button>
    </div>
  );
}
