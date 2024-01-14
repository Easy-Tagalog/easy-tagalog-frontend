import { Schema, Types, models, model } from "mongoose";

type Accents = number | number[] | null;

interface IConjugation {
  tagalog: string;
  english: string;
  accents: Accents;
  audioUrl?: string;
}

interface IConjugations {
  past: IConjugation;
  present: IConjugation;
  future: IConjugation;
}

interface IWord {
  tagalog: string;
  english: string | string[];
  root: string;
  partOfSpeech: string;
  conjugations: IConjugations;
  audioUrl: string;
  note: string;
  accents?: Accents;
  examples?: string[];
}

const ConjugationSchema = new Schema<IConjugation>({
  tagalog: {
    type: String,
    required: true,
  },
  english: {
    type: String,
    required: true,
  },
  accents: {
    type: Schema.Types.Mixed,
    required: true,
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
    type: Schema.Types.Mixed,
    required: [true, "Word must have english translation"],
  },
  root: {
    type: String,
    required: [true, "Word must have a root"],
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
    required: this.partOfSpeech === "verb",
  },
  audioUrl: {
    type: String,
    unique: true,
    required: [true, "Word must have an audio"],
    default: () => this.tagalog,
  },
  note: String,
  accents: Schema.Types.Mixed,
  examples: {
    type: [Types.ObjectId],
    ref: "Phrase",
    default: [],
  },
});

const Word = models.Word || model("Word", WordSchema);
export default Word;
