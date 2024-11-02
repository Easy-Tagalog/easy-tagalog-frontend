import { useReducer } from 'react';

const DEFAULT_START_INDEX = 0;

enum ActionType {
  START = 'start',
  CLICKED = 'clicked',
  CHECK = 'check',
  QUESTION_NEXT = 'question next',
  RESTART = 'restart',
}

enum StageType {
  NOT_READY = 'not ready',
  ANSWERING = 'answering',
  CHECKED = 'checked',
  FINISHED = 'finished',
}

type Action =
  | { type: ActionType.START }
  | { type: ActionType.CLICKED; payload: number } // Only clicked will need a payload
  | { type: ActionType.CHECK }
  | { type: ActionType.QUESTION_NEXT }
  | { type: ActionType.RESTART };

interface State {
  stage: StageType;
  contentIndex: number;
  questionIndex: number;
  selectedOptions: number[];
  isUserCorrect: boolean | null;
}

const INITIAL_STATE: State = {
  stage: StageType.NOT_READY,
  contentIndex: DEFAULT_START_INDEX,
  questionIndex: DEFAULT_START_INDEX,
  selectedOptions: [],
  isUserCorrect: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.START:
      return {
        ...state,
        stage: StageType.ANSWERING,
      };

    case ActionType.CLICKED:
      return {
        ...state,
        stage: StageType.ANSWERING,
      };

    case ActionType.CHECK:
      return {
        ...state,
        stage: StageType.CHECKED,
      };

    case ActionType.QUESTION_NEXT:
      return {
        ...state,
        stage: StageType.ANSWERING,
      };

    case ActionType.RESTART:
      return INITIAL_STATE;

    default:
      throw new Error('Unknown action type');
  }
};

// TODO 10/24: FIX LESSON REDUCER

export function useLessonReducer() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
}
