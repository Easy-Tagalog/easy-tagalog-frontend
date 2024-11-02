export enum QuestionType {
  TRANSLATE_WORD = "translate word",
  TRANSLATE_PHRASE = "translate phrase",
  BUILD_PHRASE = "build phrase",
}

export interface QuestionEntity {
  uuid: string;
  tagalog: string;
}

export interface Question {
  type: QuestionType;
  word?: QuestionEntity;
  phrase?: QuestionEntity;
  wordOptions?: QuestionEntity[];
  phraseOptions?: QuestionEntity[];
  correctAnswer?: string;
  correctAnswerOrder?: string[];
  helpInfo?: string;
}

export interface Lesson {
  uuid: string;
  title: string;
  questions: Question[];
}
