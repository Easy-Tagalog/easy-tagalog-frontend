// Made it a Union so we can add future question types in the future without changing
// the entier Lesson object. Each question type will have its own unique structure.

export enum QuestionType {
  TRANSLATE_WORD = 'translate word',
  TRANSLATE_PHRASE = 'translate phrase',
  BUILD_PHRASE = 'build phrase',
}

export interface Question {
  type: QuestionType;
  tagalog: string;
  correctAnswer: string[];
  options: string[];
  helpInfo?: string;
}

export interface Lesson {
  id: number;
  questions: Question[];
}
