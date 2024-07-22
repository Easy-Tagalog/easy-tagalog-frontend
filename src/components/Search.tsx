"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";

import { useRouter } from "next/navigation";

interface SearchProps {
  className?: string;
}

const ICON_WIDTH = 22;

export default function Search({ className }: SearchProps) {
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If there is no text, then no need to search
    if (searchText === "") return;

    // Show in translate page
    router.push(`/translate/${searchText}`);
  };

  return (
    <form
      className={cn("flex w-full h-14 max-w-md items-center", className)}
      onSubmit={handleOnSubmit}
    >
      <Input
        type="text"
        placeholder="Find a word..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border-r-0 border-black rounded-r-none focus-visible:ring-0 h-full text-base"
      />
      <Button
        type="button"
        className="rounded-l-none h-full w-20"
        variant="destructive"
      >
        <SearchIcon width={ICON_WIDTH} />
      </Button>
    </form>
  );
}
