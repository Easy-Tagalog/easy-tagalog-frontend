import { Schema, Types, model, models } from "mongoose";

/*
  QUESTIONS TYPES:
  - Translate word: Given an english word, choose the correct tagalog translation
  - Translate phrase: Given an english phrase, choose the correct tagalog translation
  - Make phrase: Given an english phrase, build the phrase in tagalog
  - Conjugate: Given a tagalog verb, conjugate correctly
  - Fill blank: Given a phrase with a word missing, choose the correct tagalog word
  - Answer phrase: Given a tagalog phrase, choose the correct tagalog phrase that answers
  - Make formal phrase: Given a scenario to be polite, build the correct sentence
*/

interface IQuestion {
  questionType: string;
  word?: Types.ObjectId;
  phrase?: Types.ObjectId;
  wordOptions?: Types.Array<Types.ObjectId>;
  phraseOptions?: Types.Array<Types.ObjectId>;
  multipleChoiceAnswer?: number;
}

export interface ILesson {
  title: string;
  questions: Types.DocumentArray<IQuestion>;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    questionType: {
      type: String,
      enum: [
        "translate-word",
        "translate-phrase",
        "make-phrase",
        "make-formal-phrase",
        "conjugate",
        "fill-blank",
        "answer-phrase",
      ],
      required: [true, "Question must have a question type"],
    },
    word: {
      type: Schema.Types.ObjectId,
      ref: "Word",
      required: function () {
        // Only required for question types that focuses on a word
        return (
          this.questionType === "translate-word" ||
          this.questionType === "conjugate"
        );
      },
    },
    phrase: {
      type: Schema.Types.ObjectId,
      ref: "Phrase",
      required: function () {
        // Only required for question types that focuses on a phrase
        return (
          this.questionType !== "translate-word" &&
          this.questionType !== "conjugate"
        );
      },
    },
    wordOptions: {
      type: [Schema.Types.ObjectId],
      ref: "Word",
      required: function () {
        // Only required for question types that need word options
        return (
          this.questionType !== "answer-phrase" &&
          this.questionType !== "translate-phrase"
        );
      },
    },
    phraseOptions: {
      type: [Schema.Types.ObjectId],
      ref: "Phrase",
      required: function () {
        // Only required for question types that need phrase options
        return (
          this.questionType === "translate-phrase" ||
          this.questionType === "answer-phrase"
        );
      },
    },
    multipleChoiceAnswer: {
      type: Number,
      required: function () {
        // Only required for multiple choice questions
        return (
          this.questionType === "translate-phrase" ||
          this.questionType === "answer-phrase" ||
          this.questionType === "translate-word" ||
          this.questionType === "fill-blank"
        );
      },
    },
  },
  { _id: false }
);

const LessonSchema = new Schema<ILesson>({
  title: {
    type: String,
    required: [true, "Lesson must have a title"],
  },
  questions: {
    type: [QuestionSchema],
    required: [true, "Lesson must have questions"],
  },
});

const Lesson = models.Lesson || model("Lesson", LessonSchema);

export default Lesson;
