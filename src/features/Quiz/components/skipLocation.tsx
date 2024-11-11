import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { incrementQuestion } from "../QuizSlice";

export function SkipQRScan() {
    const dispatch = useDispatch();
    const handleNextPuzzle = () => {
        dispatch(incrementQuestion())
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="secondary"
                    onClick={handleNextPuzzle}
                    className="bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full"
                >
                    <InfoIcon /> skip?
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Hey are you sure Sarah?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This is a fallback for if can't find the clue at the what three word location.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
