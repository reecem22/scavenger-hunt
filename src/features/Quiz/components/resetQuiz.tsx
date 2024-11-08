import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useDispatch } from "react-redux";
import { resetQuiz } from "../QuizSlice";
import { useNavigate } from "react-router-dom";
import React from "react";

export const ResetQuizBtn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleReset = () => {
    dispatch(resetQuiz());
    navigate("/");
  };

  return (
    <Button
      variant="default"
      size="icon"
      className="fixed top-4 left-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 group"
      onClick={handleReset}
      aria-label="Reset Quiz"
    >
      <RefreshCw className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:rotate-180 group-focus:rotate-180" />
      <span className="sr-only">Reset Quiz</span>
    </Button>
  );
};
