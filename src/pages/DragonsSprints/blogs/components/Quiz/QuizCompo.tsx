import React, { useState } from 'react';
import axios from 'axios';

export interface Question {
  question: string;
  choices: string[];
}

interface QuizCompoProps {
  questions: Question[];
  category: string;
  blog: string;
}

const QuizCompo: React.FC<QuizCompoProps> = ({ questions, category, blog }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string | null>>({});

  const handleSelect = (questionText: string, choice: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionText]: choice,
    }));
  };

  const handleSubmit = async () => {
    try {
      const answers = Object.entries(selectedAnswers).map(([question, answer]) => ({
        question,
        answer,
      }));

      const response = await axios.post('/api/blogSystem/validate-answers', {
        category,
        blog,
        answers,
      });

      const validationResults = response.data;
      console.log('Validation results:', validationResults);
    } catch (error) {
      console.error('Error validating answers:', error);
    }
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
                  selectedAnswers[question.question] === choice ? 'bg-purple-700 text-white' : 'bg-white hover:bg-purple-100'
                }`}
                onClick={() => handleSelect(question.question, choice)}
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
