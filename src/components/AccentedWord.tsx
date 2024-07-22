import { cn } from "@/lib/utils";

interface AccentedWordProps {
  word: string;
  accents: number[];
  className?: string;
}

const letterNeedsToBeAccented = (idx: number) => {};

export default function AccentedWord({
  word,
  accents,
  className,
}: AccentedWordProps) {
  const splitWord = word.split("");

  return (
    <p className={cn("font-bold flex", className)}>
      {splitWord.map((letter, idx) => (
        <span key={idx}>{letter}</span>
      ))}
    </p>
  );
}
