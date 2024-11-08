import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useDispatch } from "react-redux";
import { incrementQuestion } from "../QuizSlice";
import { motion } from "framer-motion";
import QRCodeScannerCard from "./scanLocation";

export default function NextLocation() {
  const dispatch = useDispatch();
  const handleNextPuzzle = () => {
    dispatch(incrementQuestion());
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Scan Next Location</CardTitle>
        <CardDescription className="text-md mt-2">
          Test description
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-center font-medium">
          Great job! Here's your next location:
        </p>
        <Button
          onClick={() =>
            window.open(`https://what3words.com/pools.bought.firm`, "_blank")
          }
          variant="outline"
          className="w-full flex items-center justify-center space-x-2"
        >
          <MapPin className="w-4 h-4" />
          <span>View Next Location</span>
        </Button>
        <QRCodeScannerCard/>
      </CardContent>
      <CardFooter className="flex justify-between">
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
      </CardFooter>
    </>
  );
}
