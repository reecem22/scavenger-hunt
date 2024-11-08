import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

//Define a type for quiz stage
type QuizStage = {
  currentAnswer: number | null;
  isCorrect: boolean;
};
// Define a type for the slice state
interface QuizState {
  currentQuestion: QuizStage | null;
  activeQuestionIndex: number | null;
  questionsCompleted: QuizStage[];
  hasCompleted: boolean;
}

const emptyQuestion: QuizStage = {
  isCorrect: false,
  currentAnswer: null,
};

// Define the initial state using that type
const initialState: QuizState = {
  currentQuestion: emptyQuestion,
  activeQuestionIndex: null,
  questionsCompleted: [],
  hasCompleted: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementQuestion: (state) => {
      if (state.activeQuestionIndex === null) {
        state.activeQuestionIndex = 1;
      } else {
        state.activeQuestionIndex += 1;
      }

      if (state.currentQuestion) {
        state.questionsCompleted.push(state.currentQuestion);
      }
      state.currentQuestion = emptyQuestion;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateQuizStage: (state, action: PayloadAction<QuizStage>) => {
      state.currentQuestion = action.payload;
    },
    resetQuiz: () => initialState,
  },
});

export const { incrementQuestion, resetQuiz, updateQuizStage } =
  quizSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const currentQuestion = (state: RootState) => state.quiz.currentQuestion;

export const selectActiveQuestionIndex = (state: RootState) =>
  state.quiz.activeQuestionIndex;

export const selectQuestionComplete = (state: RootState ) => state.quiz.questionsCompleted

export default quizSlice.reducer;
