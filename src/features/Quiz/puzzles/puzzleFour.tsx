import React from "react";
import QuizCard from "../components/quizCard";
import { puzzles } from "../puzzle";

export const PuzzleFour: React.FC = () => {
    const puzzleOneData = puzzles.puzzles[3]

  return (
    <div className="h-[100vh] flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 p-4 text-white">
      <QuizCard
        correctAnswer={puzzleOneData.correct_answer}
        title={puzzleOneData.title}
        solution={puzzleOneData.solution}
        question={puzzleOneData.clue}
      />
    </div>
  );
};