export interface ILessonContent {
  alphabet: string[];
  content: string;
}

export enum QuestionType {
  SINGLE_ANSWER = 'singleAnswer',
  MULTIPLE_ANSWER = 'multipleAnswer',
}

export interface ILessonQuestion {
  question: string;
  options: string[];
  answer: string[];
  questionType: QuestionType;
}

export const FILIPINO_ALPHABET = [
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

export const ABAKADA_ALPHABET = [
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

export const LESSON_CONTENT = [
  {
    alphabet: FILIPINO_ALPHABET,
    content:
      'The Filipino alphabet contains all letters from the english alphabet with the addition of 2 letters.',
  },
  {
    alphabet: [FILIPINO_ALPHABET[14], FILIPINO_ALPHABET[15]],
    content:
      'Since Tagalog uses some spanish words, you will see the letter "Ñ" comes from the spanish alphabet and "NG" is a unique Filipino/Tagalog letter.',
  },
  {
    alphabet: ABAKADA_ALPHABET,
    content:
      'The modern tagalog alphabet (also known as the abakada) follows a different order with some missing english letters.',
  },
];

export const LESSON_QUESTIONS = [
  {
    question: 'Which letter came from spain?',
    options: ['Ñ', 'X', 'G', 'R'],
    answer: ['Ñ'],
    questionType: QuestionType.SINGLE_ANSWER,
  },
  {
    question: 'Which two letters are not in the english alphabet?',
    options: ['Ñ', 'NG', 'A', 'L'],
    answer: ['Ñ', 'NG'],
    questionType: QuestionType.MULTIPLE_ANSWER,
  },
];
