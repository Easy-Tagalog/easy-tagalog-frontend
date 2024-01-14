import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Search from "@/components/Search";
import React from "react";

export default function Translate() {
  return (
    <>
      <MaxWidthWrapper className="flex flex-col justify-center items-center gap-4 mt-4">
        <h2 className="text-3xl">Find Your English-Tagalog Translation</h2>
        <p>
          Translations include example phrases, audio clips, and emphasized
          letters
        </p>
        <p>
          Our dictionary continues to grow everyday, if you can't find the word
          you're looking for, it may be added soon!
        </p>
        <Search />
      </MaxWidthWrapper>
    </>
  );
}
