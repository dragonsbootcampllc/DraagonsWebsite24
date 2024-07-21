import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface QuizQuestion {
    question: string;
    options: string[];
    _answer: string;
}

interface QuizData {
    quiz: QuizQuestion[];
}

interface UserAnswer {
    question: string;
    answer: string;
}

async function getQuizData(categoryPath: string, blog: string): Promise<QuizData | undefined> {
    const filePath = path.join(categoryPath, `${blog}.json`);
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        return JSON.parse(data) as QuizData;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

function validateAnswers(userAnswers: UserAnswer[], quizData: QuizData): { correct: boolean; rightAnswer?: string }[] {
    const results: { correct: boolean; rightAnswer?: string }[] = [];
    for (const userAnswer of userAnswers) {
        const matchingQuestion = quizData.quiz.find(
            (question) => question.question === userAnswer.question
        );
        if (!matchingQuestion) {
            results.push({ correct: false, rightAnswer: undefined });
            continue;
        }
        results.push({
            correct: matchingQuestion._answer === userAnswer.answer,
            rightAnswer: matchingQuestion._answer,
        });
    }
    return results;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { category, blog, answers } = req.body;
        if (!category || !blog || !Array.isArray(answers)) {
            return res.status(400).json({ message: 'Invalid request body' });
        }

        const categoryPath = path.join(process.cwd(), 'db', 'content', category as string);
        const quizData = await getQuizData(categoryPath, blog as string);
        if (!quizData) {
            return res.status(404).json({ message: 'Blog or category not found' });
        }

        const validationResults = validateAnswers(answers, quizData);
        res.status(200).json(validationResults);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
