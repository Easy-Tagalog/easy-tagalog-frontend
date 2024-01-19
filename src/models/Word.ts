import { Schema, Types, models, model } from "mongoose";

export interface IWord {
  _id: string;
  tagalog: string;
  tagalogWithNG?: string;
  tagalogAlternateSpelling?: string;
  english: Types.Array<string>;
  accents: Types.Array<number>;
  root?: string;
  partOfSpeech: string;
  isInfinitive: boolean;
  infinitive: Types.ObjectId;
  audioUrl: string;
  note?: string;
}

const WordSchema = new Schema<IWord>({
  tagalog: {
    type: String,
    required: [true, "Word must have tagalog translation"],
  },
  tagalogWithNG: {
    type: String,
  },
  tagalogAlternateSpelling: {
    type: String,
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
  isInfinitive: {
    type: Boolean,
    required: function () {
      // Only required if the word is a verb
      return this.partOfSpeech === "verb";
    },
  },
  infinitive: {
    type: Schema.Types.ObjectId,
    ref: "Word",
    required: function () {
      // Only required if the word is a verb and is a conjugated verb
      return this.partOfSpeech === "verb" && !this.isInfinitive;
    },
  },
  audioUrl: {
    type: String,
    unique: true,
    required: [true, "Word must have an audio"],
    default: function () {
      return `${this.tagalog}.mp3`;
    },
  },
  note: {
    type: String,
  },
});

const Word = models.Word || model("Word", WordSchema);

export default Word;
