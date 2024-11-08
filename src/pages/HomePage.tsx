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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 p-4 text-white">
      <Card className="max-w-lg w-full shadow-lg rounded-lg bg-white text-black">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome to the Scavenger Hunt</CardTitle>
          <CardDescription className="text-lg mt-2">
            A journey through our memories, with puzzles leading to our most cherished milestones.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center mt-4 space-y-4">
          <p>
            Solve each puzzle at a special location and move closer to a life-changing question!
          </p>
          <Button
          onClick={handleNextPuzzle}
            className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Start the Adventure
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
