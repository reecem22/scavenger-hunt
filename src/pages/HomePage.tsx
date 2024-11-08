import React from 'react';

import { Button} from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { incrementQuestion } from '@/features/Quiz/QuizSlice';

const HomePage: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleNextPuzzle = () => {
    navigate('/puzzle_1');
    dispatch(incrementQuestion())
  };

  return (
    <div className="h-[100vh] flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 p-2 text-white">
      <Card className="w-full max-w-[95%] sm:max-w-md shadow-lg rounded-lg bg-white text-black flex flex-col">
        <CardHeader className="text-center p-4 flex-shrink-0">
          <CardTitle className="text-xl sm:text-2xl font-bold leading-tight">Welcome to the Scavenger Hunt</CardTitle>
        </CardHeader>
        <CardContent className="text-center p-4 flex flex-col justify-between flex-grow">
          <div className="space-y-2 mb-4">
            <p className="text-sm sm:text-base font-medium">
              A journey through our memories, with puzzles leading to our most cherished milestones.
            </p>
            <p className="text-xs sm:text-sm">
              Solve each puzzle at a special location and move closer to a life-changing question!
            </p>
          </div>
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
