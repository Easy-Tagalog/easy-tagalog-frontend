import { IWord } from "@/models/Word";
import { PlayCircle } from "lucide-react";

import AccentedWord from "@/components/AccentedWord";

async function getWordsBySearchQuery(word: string) {
  const res = await fetch(`http://localhost:3000/api/words/${word}`, {
    method: "GET",
  });

  return res.json();
}

export default async function TranslateWord({
  params,
}: {
  params: { word: string };
}) {
  const data = await getWordsBySearchQuery(params.word);

  return (
    <>
      {data.words.length === 0 ? (
        <div>No results</div>
      ) : (
        <ul className="w-full sm:max-w-lg">
          {data.words.map((word: IWord, idx: number) => (
            <li key={idx} className="bg-muted shadow-md p-4 rounded-md">
              <div className="flex gap-2 items-center">
                <AccentedWord
                  word={word.tagalog}
                  accents={word.accents}
                  className="font-bold text-xl"
                />
                <button>
                  <PlayCircle />
                </button>
                <p>({word.partOfSpeech})</p>
              </div>

              <div className="flex gap-4 text-ph-red text-lg">
                {word.english.map((eng, idx) => (
                  <div key={idx} className="flex gap-4">
                    <p>{eng}</p>
                    {idx < word.english.length - 1 && "|"}
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <p>Root: {word.root}</p>
                {word.tagalogAlternateSpelling && (
                  <p>Also spelled: {word.tagalogAlternateSpelling}</p>
                )}
                {word.tagalogWithNG && <p>-ng: {word.tagalogWithNG}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
