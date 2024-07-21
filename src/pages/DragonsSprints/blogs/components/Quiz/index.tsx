import React from 'react';
import QuizCompo from './QuizCompo';

const questions = [
  {
    question: 'What is the capital of France?',
    choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
  },
  {
    question: 'What is 2 + 2?',
    choices: ['3', '4', '5', '6'],
  },
  {
    question: 'What is the color of the sky?',
    choices: ['Green', 'Blue', 'Red', 'Yellow'],
  },
];

const Quiz: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <QuizCompo questions={questions} />
    </div>
  );
};

export default Quiz;
