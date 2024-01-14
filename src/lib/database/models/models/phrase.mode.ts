import { Schema, models, model, Types } from "mongoose";

interface IPhraseWord {
  word: Types.ObjectId;
  index: number;
}

export interface IPhrase {
  _id: string;
  tagalog: string;
  english: string;
  words: Types.DocumentArray<IPhraseWord>;
  audioUrl?: string;
}

const PhraseWordSchema = new Schema<IPhraseWord>(
  {
    word: {
      type: Schema.Types.ObjectId,
      ref: "Word",
      required: [true, "Phrase word must include the word"],
    },
    index: {
      type: Number,
      required: [true, "Phrase word must have an index"],
    },
  },
  {
    _id: false,
  }
);

const PhraseSchema = new Schema<IPhrase>({
  tagalog: {
    type: String,
    required: [true, "Phrase must have tagalog translation"],
  },
  english: {
    type: String,
    required: [true, "Phrase must have english translation"],
  },
  words: {
    type: [PhraseWordSchema],
    required: [true, "Phrase must have word references it uses"],
  },
  audioUrl: {
    type: String,
    unique: true,
  },
});

const Phrase = models.Phrase || model("Phrase", PhraseSchema);

export default Phrase;
