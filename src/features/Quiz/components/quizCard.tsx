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
import { useDispatch, useSelector } from "react-redux";
import NextLocation from "../components/nextLocationCard";
import { selectActiveQuestionIndex, updateQuizStage } from "../QuizSlice";
import FinalLocation from "./FinalLocationCard";

interface QuizCardProps {
  title: string;
  question: string;
  correctAnswer: number;
  solution: any;
  location: string
}

export default function QuizCard({
  question,
  correctAnswer,
  title,
  solution,
  location
}: QuizCardProps) {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("");
  const [hasSubmit, setHasSubmit] = useState<boolean>(false);
  const [didContinue, setDidContine] = useState<boolean>(false);
  const { reward } = useReward("rewardId", "confetti");

  const [isFinal, setIsFinal] = useState<boolean>(false)

  const dispatch = useDispatch();


  const activeQuestionIndex = useSelector(selectActiveQuestionIndex);

  useEffect(() => {

    if (activeQuestionIndex === 4) {
      setIsFinal(true)
    }

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
    setIsCorrect(false)
    setHasSubmit(false)
  };

  const handleNextLocation = () => {
    setDidContine(true);
  };

  const handleSubmit = () => {
    const parsedAnswer = parseFloat(answer);
    if (parsedAnswer === correctAnswer) {
      reward();
      setIsCorrect(true);
    } else {
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
        {didContinue ? (
          <>
            {isFinal ? (<FinalLocation/>) : (<NextLocation locationString={location} />)}
          </>

        ) : (
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

              {hasSubmit && (
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
                  <Button onClick={handleNextLocation} variant="outline">
                    Next Location
                  </Button>
                </motion.div>
              )}
            </CardFooter>
          </>
        )}
      </Card>
    </>
  );
}
