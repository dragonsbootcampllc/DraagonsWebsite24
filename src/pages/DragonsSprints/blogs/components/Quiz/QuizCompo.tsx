import React, { useEffect, useState } from 'react';
import axios from 'axios';

export interface Question {
  question: string;
  choices: string[];
  correctAnswer?: string;
  userAnswer?: string;
  correct?: boolean;
}

interface QuizCompoProps {
  questions: Question[];
  category: string;
  blog: string;
}

interface ValidateResponse {
  correct: boolean;
  rightAnswer: string;
}

export default function QuizCompo({ questions: questionsProp, category, blog }: QuizCompoProps) {
  const [questions, setQuestions] = useState(
    questionsProp.map((question) => ({ ...question, userAnswer: "" }))
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index: number, choice: string) => {
    if (submitted) return; // Prevent modification if submitted

    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[index].userAnswer = choice;
      return newQuestions;
    });
  };

  useEffect(() => {
    console.log(JSON.stringify(questions.map(({ question, userAnswer }) => ({ question, userAnswer })), null, 4));
  }, [questions]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/blogSystem/validate-answers', {
        category,
        blog,
        answers: questions.map(({ question, userAnswer }) => ({ question, answer: userAnswer })),
      });

      const validationResults = response.data;
      setQuestions(validationResults.map(({ correct, rightAnswer }: ValidateResponse, index: number) => ({
        ...questions[index],
        correct: correct,
        correctAnswer: rightAnswer
      })));
      setSubmitted(true); // Mark quiz as submitted
    } catch (error) {
      console.error('Error validating answers:', error);
    }
  };

  return (
    <div className="p-4">
      {questions.map(({ question, choices, correct, userAnswer, correctAnswer }, qIndex) => (
        <div key={qIndex} className="mb-6">
          <h1 className="text-2xl mb-4">{question}</h1>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {choices.map((choice, cIndex) => {
              let bgColor = 'bg-white hover:bg-purple-100';
              if (correct !== undefined) {
                if (correct && userAnswer === choice) {
                  bgColor = 'bg-green-600 text-white';
                } else if (!correct) {
                  if (userAnswer === choice) {
                    bgColor = 'bg-red-600 text-white';
                  } else if (correctAnswer === choice) {
                    bgColor = 'bg-yellow-600 text-white';
                  }
                }
              } else if (userAnswer === choice) {
                bgColor = 'bg-purple-700 text-white';
              }

              return (
                <div
                  key={cIndex}
                  className={`p-2 text-black text-lg rounded text-center cursor-pointer transition-all ${bgColor}`}
                  onClick={() => handleSelect(qIndex, choice)}
                  style={{ pointerEvents: submitted ? 'none' : 'auto' }} // Disable choice selection after submission
                >
                  {choice}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      {!submitted && (
        <button
          className="mt-4 px-2 py-1 text-lg font-medium w-full bg-purple-700 hover:bg-purple-500 text-white rounded-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
}
