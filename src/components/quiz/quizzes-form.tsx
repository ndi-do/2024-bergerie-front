import { useState } from 'react';
import QuizForm from './quiz-form';

interface QuizzesFormProps {
    quizzes: {
        question: string;
        answers: { title: string; isCorrect: boolean }[];
        resultMessage: {
            success: string;
            failure: string;
        };
    }[];
    allowShuffleQuiz: boolean;
    allowShuffleAnswers: boolean;
}

export default function QuizzesForm({ quizzes, allowShuffleQuiz, allowShuffleAnswers }: QuizzesFormProps) {
    const [points, setPoints] = useState<number>(0);
    const [quizIndex, setQuizIndex] = useState(0);

    const shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
        }
        return array;
    };

    const shuffledQuizzes = allowShuffleQuiz ? shuffleArray([...quizzes]) : quizzes;

    const shuffledQuizWithAnswers = shuffledQuizzes.map((quiz) => ({
        ...quiz,
        answers: allowShuffleAnswers ? shuffleArray([...quiz.answers]) : quiz.answers,
    }));

    const handleNextQuiz = () => {
        setQuizIndex((prev) => prev + 1);
    };

    return (
        shuffledQuizWithAnswers.length <= quizIndex ? (
            <div className='text-black'>
                <h2 className="text-2xl font-bold my-6">Bravo !</h2>
                <p>Vous avez terminé le quiz avec un total de <span className='text-[#635BFF]'>{points}</span>/{shuffledQuizWithAnswers.length} points.</p>
            </div>
        ) : (
            <QuizForm
                key={quizIndex}
                stage={`${quizIndex + 1}/${shuffledQuizWithAnswers.length}`}
                question={shuffledQuizWithAnswers[quizIndex].question}
                answers={shuffledQuizWithAnswers[quizIndex].answers}
                resultMessage={shuffledQuizWithAnswers[quizIndex].resultMessage}
                onUpdatePoints={(p: number) => setPoints(prev => prev + p)}
                handleNextQuiz={handleNextQuiz}
            />
        )
    );
}