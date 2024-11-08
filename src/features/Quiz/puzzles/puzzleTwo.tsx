import React from "react";
import QuizCard from "../components/quizCard";
import { puzzles } from "../puzzle";

export const PuzzleTwo: React.FC = () => {
    const puzzleOneData = puzzles.puzzles[1]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-400 p-4 text-white">
      <QuizCard
        correctAnswer={puzzleOneData.correct_answer}
        title={puzzleOneData.title}
        solution={puzzleOneData.solution}
        question={puzzleOneData.clue}
      />
    </div>
  );
};