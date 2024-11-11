import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin } from "lucide-react";
import { useDispatch } from "react-redux";
import { incrementQuestion } from "../QuizSlice";
import QRCodeScannerCard from "./scanLocation";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectActiveQuestionIndex } from "../QuizSlice";

export default function NextLocation() {
  const dispatch = useDispatch();
  const handleNextPuzzle = () => {
    dispatch(incrementQuestion());
  };

  const activeQuestionIndex = useSelector(selectActiveQuestionIndex);

  const [showAlert, setShowAlert] = useState(false);
  const [QRError, setQRError] = useState(false)

  const checkRaw = (text: string) => {
    const parsedAnswer = parseFloat(text);
    if (activeQuestionIndex) {
      if (parsedAnswer === activeQuestionIndex + 1) {
        return true;
      } else {
        setQRError(true)
        return false;
      }
    }

    return false;
  };

  const handleQRcodefound = (raw: string) => {
    setShowAlert(checkRaw(raw));
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Scan Next Location <span>skip</span></CardTitle>
        <CardDescription className="text-md mt-2">
          You answered correctly! Now, it’s time to continue your journey. Click
          the link below to reveal the location of your next QR code. Use
          What3Words to navigate to the exact spot – switching to satellite view
          can help you find it faster. Scan the code there to unlock your next
          question. Happy hunting!
        </CardDescription>
      </CardHeader>

      <CardContent>
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Alert className="border-green-500 bg-green-50 dark:bg-green-900 dark:border-green-700">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle className="text-green-800 dark:text-green-200">
                  Success!
                </AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-300">
                  Your action was completed successfully.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
          {QRError && !showAlert && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Alert variant="destructive" className="border-red-500 bg-red-50 dark:bg-red-900 dark:border-red-700">
                <CheckCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                <AlertTitle className="text-red-800 dark:text-red-200">
                  Ooops!!
                </AlertTitle>
                <AlertDescription className="text-red-700 dark:text-red-300">
                  That what the wrong QR code would you like to skip?
                </AlertDescription>

              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        <QRCodeScannerCard handleCodeFound={handleQRcodefound} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() =>
            window.open(
              `https://what3words.com/troublesome.ants.glum`,
              "_blank"
            )
          }
          className=" flex items-center justify-center space-x-2"
        >
          <MapPin className="w-4 h-4" />
          <span>View Next Location</span>
        </Button>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-2"
          >
            <Button onClick={handleNextPuzzle} variant="outline">Next Question</Button>
          </motion.div>
        )}
      </CardFooter>
    </>
  );
}
