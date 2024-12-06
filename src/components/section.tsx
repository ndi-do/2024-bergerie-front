import { motion } from 'framer-motion';
import './Section.css';
import { useState } from 'react';
import Popup from './popup';
import QuizForm from './quiz-form';

export interface SectionProps {
    title: string;
    content: string;
    quiz?: {
        question: string;
        answers: { title: string, isCorrect: boolean }[];
        resultMessage: { success: string, failure: string };
    }
}

export default function Section({ title, content, quiz }: SectionProps) {
    const [showQuestions, setShowQuestions] = useState(false);

    return (
        <motion.div
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2>{title}</h2>
            <p>{content}</p>
            {
                quiz && (
                    <>
                    <button
                        onClick={() => setShowQuestions(true)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                    >Question</button>

                    <Popup isOpen={showQuestions} onClose={() => setShowQuestions(false)}>
                        <QuizForm
                            question={quiz.question}
                            answers={quiz.answers}
                            resultMessage={quiz.resultMessage}
                        />
                    </Popup>
                    </>
                )
            }
        </motion.div>
    );
}