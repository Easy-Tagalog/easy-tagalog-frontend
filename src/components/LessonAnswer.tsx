interface ILessonAnswerProps {
  isUserCorrect: boolean | null;
  answer: string[];
  hasMultipleAnswers: boolean;
}

export default function LessonAnswer({
  isUserCorrect,
  answer,
  hasMultipleAnswers = false,
}: ILessonAnswerProps) {
  return (
    <div
      className={`absolute flex flex-col items-center top-0 text-white p-4 rounded-md ${
        isUserCorrect ? 'bg-green-700' : 'bg-red-700'
      }`}
    >
      <h1 className="text-lg">{isUserCorrect ? 'Correct!' : 'Incorrect'}</h1>

      <h3 className="text-sm">
        {isUserCorrect
          ? ''
          : hasMultipleAnswers
          ? 'The correct answers are: '
          : 'The correct answer is: '}
      </h3>
      <div className="flex justify-around w-full">
        {answer.map((ans, ansKey) => (
          <p key={ansKey}>{ans}</p>
        ))}
      </div>
    </div>
  );
}
