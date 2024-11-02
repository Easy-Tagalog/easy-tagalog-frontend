import { PartOfSpeech, Word } from '@/types/wordType';

export enum QuestionType {
  SINGLE_ANSWER = 'singleAnswer',
  MULTIPLE_ANSWER = 'multipleAnswer',
}

export interface ILessonQuestion {
  questionType: QuestionType;
  word: Word;
  options: string[];
  answer: string[];
}

export const LESSON_QUESTIONS = [
  {
    questionType: QuestionType.SINGLE_ANSWER,
    word: {
      id: 1,
      tagalog: 'oo',
      english: [
        {
          id: 1,
          meaning: 'yes',
        },
      ],
      root: 'oo',
      accents: 0,
      partOfSpeech: PartOfSpeech.ADV,
      alternateSpelling: null,
      isIrregularVerb: null,
      note: null,
      audioUrl: 'oo.mp3',
      conjugations: [],
      linkedWord: null,
    },
    options: ['oo', 'hindi', 'kamusta', 'ako'],
    answer: ['oo'],
  },
];
