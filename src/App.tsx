// src/App.tsx

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";
import HomePage from "./pages/HomePage";
import PuzzleContainer from "./pages/PuzzleOnePage";

import { ResetQuizBtn } from "./features/Quiz/components/resetQuiz";

import { useSelector } from "react-redux";
import { selectActiveQuestionIndex } from "./features/Quiz/QuizSlice";
import { PuzzleOne } from "./features/Quiz/puzzles/puzzleOne";
import { PuzzleTwo } from "./features/Quiz/puzzles/puzzleTwo";
import { PuzzleFour } from "./features/Quiz/puzzles/puzzleFour";
import { PuzzleThree } from "./features/Quiz/puzzles/puzzleThree";


const AppRoutes = () => {
  const navigate = useNavigate();
  const activeQuestionIndex = useSelector(selectActiveQuestionIndex);

  useEffect(() => {
    if (activeQuestionIndex) {
      navigate(`/puzzle_${activeQuestionIndex}`);
    }
  }, [activeQuestionIndex]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/puzzle_1" element={<PuzzleContainer puzzleComponent={PuzzleOne} puzzleStage={1} />} />
      <Route path="/puzzle_2" element={<PuzzleContainer puzzleComponent={PuzzleTwo} puzzleStage={2}/>} />
      <Route path="/puzzle_3" element={<PuzzleContainer puzzleComponent={PuzzleThree} puzzleStage={3}/>} />
      <Route path="/puzzle_4" element={<PuzzleContainer puzzleComponent={PuzzleFour} puzzleStage={4}/>} />
      {/* Redirect to Home if an unknown route is accessed */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App = () => {



  return (

    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <ResetQuizBtn />
        <AppRoutes />
      </Router>
    </ThemeProvider>

  );
};

export default App;
