// TODO 10/24: Match frontend and backend types for all entities

export enum Tense {
  PAST = 'past',
  PRESENT = 'present',
  FUTURE = 'future',
}

export enum PartOfSpeech {
  N = 'noun',
  V = 'verb',
  ADJ = 'adjective',
  ADV = 'adverb',
  PRON = 'pronoun',
  PREP = 'preposition',
  CONJ = 'conjunction',
  INTERJ = 'interjection',
  INTERR = 'interrogative',
  ART = 'article',
  PART = 'particle',
  PRE = 'prefix',
}

export interface Conjugation {
  id: number;
  tagalog: string;
  root: string;
  accents: string;
  audioUrl?: string;
  english: string;
  tense: Tense;
}

export interface LinkedWord {
  id: number;
  tagalog: string;
  audioUrl?: string;
}

export interface English {
  id: number;
  meaning: string;
}

export interface Word {
  id: number;
  tagalog: string;
  english: English[];
  root: string;
  accents?: string;
  partOfSpeech: PartOfSpeech;
  alternativeSpelling?: string;
  isIrregularVerb?: boolean;
  note?: string;
  audioUrl?: string;
  conjugations: Conjugation[];
  linkedWord?: LinkedWord;
}
