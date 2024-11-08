// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import quizReducer from '../features/Quiz/QuizSlice';

const rootReducer = combineReducers({
  quiz: quizReducer,
  // Add other slices here if needed
});

export default rootReducer;
