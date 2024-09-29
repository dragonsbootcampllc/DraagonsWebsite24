import React, { useState } from 'react';
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
    questionsProp ? questionsProp.map((question) => ({ ...question, userAnswer: "" })) : []
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [validationResults, setValidationResults] = useState<ValidateResponse[]>([]);
  const [showResultsModal, setShowResultsModal] = useState(false);

  const handleSelect = (choice: string) => {
    if (submitted) return;

    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[currentQuestionIndex].userAnswer = choice;
      return newQuestions;
    });
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      await handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/blogSystem/validate-answers', {
        category,
        blog,
        answers: questions.map(({ question, userAnswer }) => ({ question, answer: userAnswer })),
      });

      const results = response.data;
      setValidationResults(results || []);
      setSubmitted(true);
      setShowResultsModal(true); // Show the results modal
    } catch (error) {
      console.error('Error validating answers:', error);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="p-2">
      {submitted ? (
        <>
          {/* Modal for quiz results */}
          {showResultsModal && (
            <div className="fixed flex justify-center inset-0 z-50">
              <div className="bg-white p-8 rounded-3xl flex flex-col no-scrollbar justify-center items-center overflow-y-auto max-w-3xl w-full">
                <h1 className="text-2xl mb-4">Quiz Results</h1>
                {questions.map((question, index) => {
                  const isCorrect = validationResults[index]?.correct;
                  const correctAnswer = validationResults[index]?.rightAnswer;

                  return (
                    <div key={index} className="mb-4 text-start w-full">
                      <h2 className="text-lg text-black font-bold">{question.question}</h2>
                      <p className={`font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        Your Answer: {question.userAnswer || 'No answer selected'}
                      </p>
                      {!isCorrect && correctAnswer && (
                        <p className="text-yellow-600">
                          Correct Answer: {correctAnswer}
                        </p>
                      )}
                    </div>
                  );
                })}
                <button
                  className="mt-4 px-4 py-2 bg-purple-700 text-white rounded"
                  onClick={() => setShowResultsModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

        </>
      ) : (
        <>
          {currentQuestion && (
            <div className="mb-6">
              <h1 className="text-2xl mb-4">{currentQuestion.question}</h1>
              <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                {currentQuestion.choices.map((choice, cIndex) => {
                  let bgColor = 'bg-white hover:bg-purple-100';
                  const correctAnswer = validationResults[currentQuestionIndex]?.rightAnswer;
                  const isCorrect = validationResults[currentQuestionIndex]?.correct;

                  if (submitted) {
                    if (isCorrect && currentQuestion.userAnswer === choice) {
                      bgColor = 'bg-green-600 text-white';
                    } else if (!isCorrect) {
                      if (currentQuestion.userAnswer === choice) {
                        bgColor = 'bg-red-600 text-white';
                      } else if (correctAnswer === choice) {
                        bgColor = 'bg-yellow-600 text-white';
                      }
                    }
                  } else if (currentQuestion.userAnswer === choice) {
                    bgColor = 'bg-purple-700 text-white';
                  }

                  return (
                    <div
                      key={cIndex}
                      className={`p-2 text-black text-lg rounded-md text-center cursor-pointer transition-all ${bgColor}`}
                      onClick={() => handleSelect(choice)}
                      style={{ pointerEvents: submitted ? 'none' : 'auto' }}
                    >
                      {choice}
                    </div>
                  );
                })}
              </div>
              {submitted && (
                <div className="mt-2 text-lg">
                  {currentQuestion.correctAnswer && (
                    <div>
                      <strong>Correct Answer:</strong> {currentQuestion.correctAnswer}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <button
            className={`mt-4 px-2 py-1 text-lg font-medium w-full ${submitted ? 'bg-gray-400' : 'bg-purple-700 hover:bg-purple-500'} text-white rounded-full`}
            onClick={handleNextQuestion}
            disabled={submitted}
          >
            {isLastQuestion ? 'Submit' : 'Next Question'}
          </button>
        </>
      )}
    </div>
  );
}
