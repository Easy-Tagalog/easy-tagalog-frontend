import PauseButton from '@/components/PauseButton';
import { Progress } from '@/components/ui/progress';

const FILIPINO_ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'Ñ',
  'NG',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const ABAKADA_ALPHABET = [
  'A',
  'B',
  'K',
  'D',
  'E',
  'G',
  'H',
  'I',
  'L',
  'M',
  'N',
  'NG',
  'O',
  'P',
  'R',
  'S',
  'T',
  'U',
  'W',
  'Y',
];

const ALPHABET_QUESTIONS = [
  {
    alphabet: FILIPINO_ALPHABET,
    content:
      'The Filipino alphabet contains all letters from the english alphabet with the addition of 2 letters',
  },
  {
    alphabet: ABAKADA_ALPHABET,
  },
];

export default function AlphabetPage() {
  return (
    <>
      <div className="flex my-6 w-full items-center gap-2 px-2 sm:gap-4">
        <PauseButton />
        <Progress value={56} />
      </div>

      <div className="flex flex-wrap gap-4 p-2 justify-center">
        {FILIPINO_ALPHABET.map((letter: string, letterIndex) => (
          <p
            key={letterIndex}
            className={`text-base p-2 bg-slate-200 rounded-md md:text-4xl ${
              letter === 'Ñ' || letter === 'NG' ? 'text-ph-red' : 'text-black'
            }`}
          >
            {letter}
          </p>
        ))}
      </div>
    </>
  );
}
