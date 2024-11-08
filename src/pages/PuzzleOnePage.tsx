import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectActiveQuestionIndex,
  selectQuestionComplete,
} from '@/features/Quiz/QuizSlice';

type PuzzleContainerProps = {
  puzzleComponent: React.ComponentType;
  puzzleStage: number
};

const PuzzleContainer: React.FC<PuzzleContainerProps> = ({ puzzleComponent: PuzzleComponent, puzzleStage }) => {
  const questions = useSelector(selectQuestionComplete);
  const activeQuestionIndex = useSelector(selectActiveQuestionIndex);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(activeQuestionIndex, puzzleStage)
    console.log('active', activeQuestionIndex)
    console.log('puzzleStage', puzzleStage)
    if (activeQuestionIndex !== puzzleStage) {
      navigate('/');
    }
  }, [activeQuestionIndex, questions, navigate]);

  return <PuzzleComponent />;
};

export default PuzzleContainer;
