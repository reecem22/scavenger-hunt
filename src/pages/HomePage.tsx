import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementQuestion } from "@/features/Quiz/QuizSlice";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showTips, setShowTips] = useState(true);

  const handleNextPuzzle = () => {
    navigate("/puzzle_1");
    dispatch(incrementQuestion());
  };

  const handleShowTips = () => {
    setShowTips(!showTips);
  };

  return (
    <div className="h-[100vh] flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 p-2 text-white">
      <Card className="w-full max-w-[95%] sm:max-w-md shadow-lg rounded-lg bg-white text-black flex flex-col">
        <CardHeader className="p-4 flex-shrink-0">
          <CardTitle className=" text-center text-xl sm:text-2xl font-bold leading-tight">
            Come and find me Sarah ❤️
          </CardTitle>
        </CardHeader>
        <CardContent className=" p-4 flex flex-col justify-between flex-grow">
          {showTips ? (
            <div className="space-y-2 mb-4">
              <p className="text-sm sm:text-base font-medium">
                Welcome to the Mathematical Scavenger Hunt, a journey through
                our milestones, blending love, logic, and a bit of adventure!
                Here's how it works:
              </p>
              <p className="text-xs sm:text-sm">
                Solve four mathematical equations inspired by special milestones
                in our relationship. Each correct answer brings you one step
                closer to a life-changing question! Every solution unlocks a
                unique location, where you'll find a QR code that reveals the
                next challenge
              </p>
            </div>
          ) : (
            <div>
              <ol className="mb-4 ">
                <li className="ml-4 mb-2">
                  <div />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-md font-semibold">Find the Location</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      After solving the first equation, you'll unlock a
                      What3Words link. Follow this link to discover the precise
                      location of the next clue.
                    </p>
                  </div>
                </li>
                <li className="ml-4 mb-2">
                  <div />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-md font-semibold">Scan the QR Code </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      At each location, look around for a QR code. Once found,
                      scan it with your phone to unlock the next math challenge.
                    </p>
                  </div>
                </li>
                <li className="ml-4 mb-2">
                  <div />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-md font-semibold">Repeat</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Solve the new equation, follow the next What3Words link,
                      and head to the next location.
                    </p>
                  </div>
                </li>
                <li className="ml-4 mb-2">
                  <div />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-md font-semibold">Final Destination</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      After completing all four challenges, the last QR code
                      will lead you to a meaningful place where the ultimate
                      surprise awaits. 💍✨
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          )}

          <Button
            onClick={handleShowTips}
            className="w-full mb-4"
            variant="ghost"
          >
            {showTips ? " Show Instructions 🤔" : "Hide Instructions 🙈"}
          </Button>

          <Button
            onClick={handleNextPuzzle}
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm sm:text-base"
          >
            Start the Adventure
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
