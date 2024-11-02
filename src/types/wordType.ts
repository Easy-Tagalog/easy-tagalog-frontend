// TODO 10/24: Match frontend and backend types for all entities

export enum Tense {
  PAST = "past",
  PRESENT = "present",
  FUTURE = "future",
}

export enum PartOfSpeech {
  N = "noun",
  V = "verb",
  ADJ = "adjective",
  ADV = "adverb",
  PRON = "pronoun",
  PREP = "preposition",
  CONJ = "conjunction",
  INTERJ = "interjection",
  INTERR = "interrogative",
  ART = "article",
  PART = "particle",
  PRE = "prefix",
}

export interface Conjugation {
  tagalog: string;
  root: string;
  accents: number[];
  audioUrl?: string;
  english: string;
  tense: Tense;
}

export interface LinkedWord {
  tagalog: string;
  audioUrl?: string;
}

export interface English {
  uuid: string;
  meaning: string;
}

export interface Word {
  uuid: string;
  tagalog: string;
  english: English[];
  root: string;
  accents?: number[];
  partOfSpeech: PartOfSpeech;
  alternativeSpelling?: string;
  isIrregularVerb?: boolean;
  note?: string;
  conjugations?: Conjugation[];
  linkedWord?: LinkedWord;
  audioUrl?: string;
}
