import React, { useState } from 'react';

interface Question {
  question: string;
  choices: string[];
}

interface QuizCompoProps {
  questions: Question[];
}

const QuizCompo: React.FC<QuizCompoProps> = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));

  const handleSelect = (questionIndex: number, choiceIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = choiceIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    console.log('Selected answers:', selectedAnswers);
  };

  return (
    <div className="p-4">
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="mb-6">
          <h1 className="text-2xl mb-4">{question.question}</h1>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {question.choices.map((choice, cIndex) => (
              <div
                key={cIndex}
                className={`p-2 text-black text-lg rounded text-center cursor-pointer ${
                  selectedAnswers[qIndex] === cIndex ? 'bg-purple-700 text-white' : 'bg-white hover:bg-purple-100'
                }`}
                onClick={() => handleSelect(qIndex, cIndex)}
              >
                {choice}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        className="mt-4 px-2 py-1 text-lg font-medium w-full bg-purple-700 hover:bg-purple-500 text-white rounded-full"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default QuizCompo;
