'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import LessonHeader from '@/components/LessonHeader';

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

const LESSON_CONTENT = [
  {
    alphabet: FILIPINO_ALPHABET,
    content:
      'The Filipino alphabet contains all letters from the english alphabet with the addition of 2 letters.',
  },
  {
    alphabet: ABAKADA_ALPHABET,
    content:
      'The modern tagalog alphabet (also known as the abakada) follows a different order with some missing english letters.',
  },
  {
    alphabet: [FILIPINO_ALPHABET[14], FILIPINO_ALPHABET[15]],
    content:
      'Since Tagalog uses some spanish words, you will see the letter "Ñ" comes from the spanish alphabet and "NG" is a unique Filipino/Tagalog letter.',
  },
];

const LESSON_QUESTIONS = [
  {
    question: 'Which letter came from spain?',
    options: ['Ñ', 'X', 'G', 'R'],
  },
  {
    question: 'Which two letters are not in the english alphabet?',
    options: ['Ñ', 'NG', 'A', 'L'],
  },
];

const DEFAULT_QUESTION_INDEX = 0;

export default function AlphabetPage() {
  const [questionIndex, setQuestionIndex] = useState(DEFAULT_QUESTION_INDEX);

  const onNextButtonClicked = () => {
    setQuestionIndex((prev) => prev + 1);
  };

  const handleResetLesson = () => {
    setQuestionIndex(DEFAULT_QUESTION_INDEX);
  };

  return (
    <>
      <LessonHeader
        className="my-6 px-2"
        value={
          (questionIndex * 100) /
          (LESSON_CONTENT.length + LESSON_QUESTIONS.length)
        }
      />

      <div className="mt-[20vh] px-4">
        {/* Displaying lesson content for user to learn first */}
        {questionIndex < LESSON_CONTENT.length &&
          LESSON_CONTENT.map(({ alphabet, content }, lessonContentIndex) => (
            <div
              key={lessonContentIndex}
              className={`flex flex-col gap-4 items-center ${
                lessonContentIndex === questionIndex ? 'block' : 'hidden'
              }`}
            >
              <h3 className="text-lg">{content}</h3>

              <ul className="flex flex-wrap gap-2 p-2 justify-center">
                {alphabet.map((letter: string, letterIndex) => (
                  <li
                    key={letterIndex}
                    className={`text-base p-2 bg-slate-200 rounded-md md:text-4xl ${
                      letter === 'Ñ' || letter === 'NG'
                        ? 'text-ph-red'
                        : 'text-black'
                    }`}
                  >
                    {letter}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        {/* TODO: FIX THE LESSON QUESTIONS */}
        {/* Displaying questions about the lesson content */}
        {questionIndex >= LESSON_CONTENT.length &&
          questionIndex < LESSON_CONTENT.length + LESSON_QUESTIONS.length &&
          LESSON_QUESTIONS.map(({ question, options }, lessonQuestionIndex) => (
            <div
              className={`${
                lessonQuestionIndex + LESSON_CONTENT.length - 1 ===
                questionIndex
                  ? 'block'
                  : 'hidden'
              }`}
              key={lessonQuestionIndex}
            >
              <h3 className="text-lg">{question}</h3>

              <ul className="flex gap-4 ">
                {options.map((letter, optionIndex) => (
                  <li
                    className="p-2 text-2xl bg-slate-200 rounded-md"
                    key={optionIndex}
                  >
                    {letter}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        {/* Final prompt for when user finishes */}
        {questionIndex === LESSON_CONTENT.length + LESSON_QUESTIONS.length && (
          <div>FINISHED</div>
        )}
      </div>

      <Button className="mt-20" onClick={onNextButtonClicked}>
        Next
      </Button>
    </>
  );
}
