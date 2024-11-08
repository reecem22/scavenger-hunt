import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useReward } from "react-rewards";
import PuzzleOneHint from "../components/QuizHint";
import { useDispatch } from "react-redux";
import NextLocation from "../components/nextLocationCard";
import { incrementQuestion, updateQuizStage } from "../QuizSlice";

interface QuizCardProps {
  title: string;
  question: string;
  correctAnswer: number;
  solution: any;
}

export default function QuizCard({
  question,
  correctAnswer,
  title,
  solution,
}: QuizCardProps) {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("");
  const [hasSumit, setHasSubmit] = useState<boolean>(false);

  const { reward } = useReward("rewardId", "confetti");

  const dispatch = useDispatch();

  useEffect(() => {
    // This effect will run on component mount
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      );
    }

    // Clean up function to reset viewport on component unmount
    return () => {
      if (viewport) {
        viewport.setAttribute(
          "content",
          "width=device-width, initial-scale=1.0"
        );
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleNextPuzzle = () => {
    dispatch(incrementQuestion());
  };

  const handleSubmit = () => {
    const parsedAnswer = parseFloat(answer);
    if (parsedAnswer === correctAnswer) {
      reward();
      setIsCorrect(true);
    } else {
      console.log("here");
      setIsCorrect(false);
    }

    setHasSubmit(true);

    dispatch(
      updateQuizStage({ isCorrect: isCorrect, currentAnswer: parsedAnswer })
    );
  };

  return (
    <>
      <Card className="w-full max-w-md">
        {!isCorrect ? (
          <>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{title}</CardTitle>
              <CardDescription className="text-md mt-2">
                {question}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="my-4 flex flex-col items-center">
                <label htmlFor="answer" className="mb-2 font-medium">
                  Your Answer:
                </label>
                <span id="rewardId" />
                <Input
                  id="answer"
                  type="number"
                  value={answer}
                  onChange={handleChange}
                  className="mb-4 w-32 text-center"
                  placeholder="Enter answer"
                />
              </div>

              {hasSumit && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center space-y-2"
                >
                  {isCorrect ? (
                    <CheckCircle
                      id="rewardId"
                      className="text-green-500 w-8 h-8"
                    />
                  ) : (
                    <XCircle className="text-red-500 w-8 h-8" />
                  )}
                  <p
                    className={`text-lg font-semibold ${isCorrect ? "text-green-500" : "text-red-500"}`}
                  >
                    {isCorrect ? "Correct!" : "Incorrect. Try again!"}
                  </p>
                </motion.div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <PuzzleOneHint
                hintString={solution.hint}
                formula={solution.formula}
              />
              {isCorrect === false ? (
                <Button onClick={handleSubmit}>Submit Answer</Button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <Button onClick={handleNextPuzzle} variant="outline">
                    Next Question
                  </Button>
                </motion.div>
              )}
            </CardFooter>
          </>
        ) : (
          <NextLocation />
        )}
      </Card>
    </>
  );
}
