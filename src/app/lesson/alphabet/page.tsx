'use client';

import { useEffect, useReducer, useState } from 'react';

import { Button } from '@/components/ui/button';
import LessonHeader from '@/components/LessonHeader';
import { shuffleArray } from '@/lib/utils';

import {
  ILessonContent,
  ILessonQuestion,
  LESSON_CONTENT,
  LESSON_QUESTIONS,
} from './constants';

const DEFAULT_QUESTION_INDEX = 0;

enum ActionType {
  START = 'start',
  ANSWERING = 'clicked',
  CHECK = 'check',
  CONTENT_NEXT = 'content next',
  QUESTION_NEXT = 'question next',
}

enum StageType {
  NOT_READY = 'not ready',
  CONTENT = 'content',
  QUESTIONS = 'questions',
  FINISHED = 'finished',
}

interface Action {
  type: ActionType;
  payload: number[]; // Chosen options from the user
}

interface State {
  content: ILessonContent[];
  questions: ILessonQuestion[];
  stage: StageType;
  contentIndex: number;
  questionIndex: number;
  selectedOptions: number[];
}

const INITIAL_STATE: State = {
  content: [],
  questions: [],
  stage: StageType.NOT_READY,
  contentIndex: 0,
  questionIndex: 0,
  selectedOptions: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        content: LESSON_CONTENT,
        questions: LESSON_QUESTIONS,
        stage: StageType.CONTENT,
      };

    case 'clicked':
      return {
        ...state,
        selectedOptions: action.payload,
      };

    case 'check':
      break;

    case 'content next':
      return {
        ...state,
        contentIndex: state.contentIndex + 1,
        stage:
          state.contentIndex === LESSON_CONTENT.length - 1 &&
          StageType.QUESTIONS,
      };

    case 'question next':
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        stage:
          state.contentIndex === LESSON_QUESTIONS.length - 1 &&
          StageType.FINISHED,
      };

    default:
      throw new Error('Unknown action type');
  }
};

export default function AlphabetPage() {
  const [isAnswering, setIsAnswering] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [answer, setAnswer] = useState<string | string[]>();
  const [lessonIndex, setLessonIndex] = useState({
    content: 0,
    questions: 0,
  });

  useEffect(() => {
    setAnswer(LESSON_QUESTIONS[0].answer);
  }, []);

  const onNextButtonClicked = () => {
    // Incrementing the content index
    if (lessonIndex.content < LESSON_CONTENT.length) {
      setLessonIndex((prev) => ({ ...prev, content: prev.content + 1 }));
    }

    if (lessonIndex.content === LESSON_CONTENT.length - 1) {
      setIsAnswering(true);
    }

    // Incrementing the questions index
    if (
      lessonIndex.content === LESSON_CONTENT.length &&
      lessonIndex.questions < LESSON_QUESTIONS.length
    ) {
      setLessonIndex((prev) => ({ ...prev, questions: prev.questions + 1 }));
      setIsAnswering(true);
    }
  };

  const handleOptionClicked = (optionIndex: number, questionType: string) => {
    if (questionType === 'singleAnswer') {
      setSelectedOptions([optionIndex]);
      return;
    }

    if (questionType === 'multipleAnswers') {
      switch (selectedOptions.length) {
        case 0:
          setSelectedOptions([optionIndex]);
          break;

        case 1:
          setSelectedOptions([...selectedOptions, optionIndex]);
          break;

        case 2:
          setSelectedOptions([selectedOptions[1], optionIndex]);
          break;
      }
    }
  };

  //   const handleResetLesson = () => {
  //     setQuestionIndex(DEFAULT_QUESTION_INDEX);
  //   };

  {
    /* TODO: FIX LESSON QUESTION HANDLING ANSWERS */
  }
  const handleCheckAnswer = () => {
    setIsAnswering(false);

    if (
      LESSON_QUESTIONS[lessonIndex.questions].questionType === 'singleAnswer'
    ) {
    } else console.log('nah');
  };

  return (
    <>
      <LessonHeader
        className="my-6 px-2"
        value={
          ((lessonIndex.content + lessonIndex.questions) * 100) /
          (LESSON_CONTENT.length + LESSON_QUESTIONS.length)
        }
      />

      <div className="h-[60vh] px-4 flex flex-col justify-center items-center relative">
        {/* Displaying lesson content for user to learn first */}
        {lessonIndex.content < LESSON_CONTENT.length &&
          LESSON_CONTENT.map(({ alphabet, content }, lessonContentIndex) => (
            <div
              key={lessonContentIndex}
              className={`flex flex-col gap-4 items-center ${
                lessonContentIndex === lessonIndex.content ? 'block' : 'hidden'
              }`}
            >
              <h3 className="text-lg">{content}</h3>

              <ul className="flex flex-wrap gap-2 p-2 justify-center">
                {alphabet.map((letter: string, letterIndex) => (
                  <li
                    key={letterIndex}
                    className={`text-base p-2 bg-slate-200 rounded-md cursor-default transition-all hover:-translate-y-2 hover:shadow-md md:text-4xl ${
                      letter === 'Ñ' || letter === 'NG'
                        ? 'text-ph-red'
                        : 'text-black'
                    }`}
                  >
                    {letter}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        {/* Displaying questions AFTER content about the lesson content */}
        {lessonIndex.content === LESSON_CONTENT.length &&
          lessonIndex.questions < LESSON_QUESTIONS.length &&
          LESSON_QUESTIONS.map(
            (
              { question, options, answer, questionType },
              lessonQuestionIndex
            ) => (
              <div
                className={`${
                  lessonQuestionIndex === lessonIndex.questions
                    ? 'block'
                    : 'hidden'
                }`}
                key={lessonQuestionIndex}
              >
                <h3 className="text-lg">{question}</h3>

                <div className="flex gap-4 justify-center mt-4">
                  {options.map((letter, optionIndex) => (
                    <Button
                      key={optionIndex}
                      className={`text-black p-4 text-2xl bg-ph-yellow rounded-md hover:bg-ph-blue transition-all hover:text-ph-white hover:-translate-y-1 hover:shadow-md ${
                        selectedOptions.includes(optionIndex) &&
                        'bg-ph-blue transition-all text-ph-white -translate-y-1'
                      }`}
                      onClick={() =>
                        handleOptionClicked(optionIndex, questionType)
                      }
                    >
                      {letter}
                    </Button>
                  ))}
                </div>
              </div>
            )
          )}

        {/* Final prompt for when user finishes */}
        {lessonIndex.content === LESSON_CONTENT.length &&
          lessonIndex.questions === LESSON_QUESTIONS.length && (
            <div>Nice! You finished this lesson!</div>
          )}

        <div className="mt-20 absolute bottom-0 text-lg">
          {isAnswering ? (
            <Button onClick={handleCheckAnswer}>Check</Button>
          ) : lessonIndex.questions < LESSON_QUESTIONS.length ? (
            <Button onClick={onNextButtonClicked}>Next</Button>
          ) : (
            <Button onClick={() => {}}>Finish</Button>
          )}
        </div>
      </div>
    </>
  );
}
