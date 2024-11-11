import React from "react";
import QuizCard from "../components/quizCard";
import { puzzles } from "../puzzle";

export const PuzzleOne: React.FC = () => {
    const puzzleOneData = puzzles.puzzles[0]

  return (
    <div className="h-[100vh] flex items-center justify-center bg-gradient-to-br from-pink-500 to-red-400 p-4 text-white">
      <QuizCard
        correctAnswer={puzzleOneData.correct_answer}
        title={puzzleOneData.title}
        solution={puzzleOneData.solution}
        question={puzzleOneData.clue}
        location={puzzleOneData.location}
      />
    </div>
  );
};