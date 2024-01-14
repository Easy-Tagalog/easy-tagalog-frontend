import { Schema, Types, models, model } from "mongoose";

interface IConjugation {
  _id: string;
  tagalog: string;
  english: string;
  accents: Types.Array<number>;
  audioUrl?: string;
}

interface IConjugations {
  past: IConjugation;
  present: IConjugation;
  future: IConjugation;
}

export interface IWord {
  _id: string;
  tagalog: string;
  english: Types.Array<string>;
  accents: Types.Array<number>;
  root?: string;
  partOfSpeech: string;
  conjugations?: IConjugations;
  audioUrl: string;
  note?: string;
}

const ConjugationSchema = new Schema<IConjugation>({
  tagalog: {
    type: String,
    required: [true, "Conjugation must have tagalog translation"],
  },
  english: {
    type: String,
    required: [true, "Conjugation must have english translation"],
  },
  accents: {
    type: [Number],
    required: [true, "Conjugation must have accent indices"],
  },
  audioUrl: {
    type: String,
  },
});

const WordSchema = new Schema<IWord>({
  tagalog: {
    type: String,
    required: [true, "Word must have tagalog translation"],
  },
  english: {
    type: [String],
    required: [true, "Word must have english translation"],
  },
  accents: {
    type: [Number],
    default: [],
  },
  root: {
    type: String,
  },
  partOfSpeech: {
    type: String,
    enum: [
      "verb",
      "pronoun",
      "interrogative",
      "adverb",
      "adjective",
      "noun",
      "preposition",
      "interjection",
      "conjunction",
      "article",
      "particle",
    ],
    required: [true, "Word must have a Part Of Speech"],
  },
  conjugations: {
    type: {
      past: {
        type: ConjugationSchema,
        required: [true, "Conjugation must have a past tense"],
      },
      present: {
        type: ConjugationSchema,
        required: [true, "Conjugation must have a present tense"],
      },
      future: {
        type: ConjugationSchema,
        required: [true, "Conjugation must have a future tense"],
      },
    },
    required: function () {
      return this.partOfSpeech === "verb";
    },
  },
  audioUrl: {
    type: String,
    unique: true,
    required: [true, "Word must have an audio"],
    default: function () {
      return this.tagalog;
    },
  },
  note: String,
});

const Word = models.Word || model("Word", WordSchema);

export default Word;
