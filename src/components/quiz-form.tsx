import { useState } from 'react';

interface QuizFormProps {
    question: string;
    answers: { title: string; isCorrect: boolean }[];
    resultMessage: {
        success: string;
        failure: string;
    };
}

export default function QuizForm({ question, answers, resultMessage }: QuizFormProps) {
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);

    const allowMultipleAnswers = answers.filter((answer) => answer.isCorrect).length > 1;

    const handleAnswerChange = (index: number) => {
        if (showResult) return;

        if (allowMultipleAnswers) {
            if (selectedAnswers.includes(index)) {
                setSelectedAnswers((prev) => prev.filter((i) => i !== index));
            } else {
                setSelectedAnswers((prev) => [...prev, index]);
            }
        } else {
            setSelectedAnswers([index]);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (selectedAnswers.length > 0) {
            setShowResult(true);
        }
    };

    const isAllCorrect = () => {
        const correctIndexes = answers
            .map((answer, index) => (answer.isCorrect ? index : -1))
            .filter((index) => index !== -1);

        return (
            selectedAnswers.length === correctIndexes.length &&
            selectedAnswers.every((index) => correctIndexes.includes(index))
        );
    };

    return (
        <form className="flex flex-col items-center gap-6 mt-6 text-black" onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg">{question}</h3>
            <p className="text-sm text-left w-full max-w-[500px]">
                {allowMultipleAnswers
                    ? "Plusieurs réponses sont attendues"
                    : "Une seule réponse est attendue"}
            </p>
            <ul className="flex flex-col items-center gap-4 w-full max-w-[400px]">
                {answers.map((answer, index) => showResult ? (
                    <li
                        key={index}
                        className={`w-full py-4 border rounded-md text-black 
                            ${answer.isCorrect ? 'border-[#5acc38] bg-[#ebffe5]' : selectedAnswers.includes(index) ? 'border-[#ff4d4f] bg-[#fff0f0]' : 'border-[#e4e4e7] bg-white'}`}
                    >
                        <p>{answer.title}</p>
                    </li>
                ) : (
                    <li
                        key={index}
                        onClick={() => handleAnswerChange(index)}
                        className={`w-full py-4 border rounded-md cursor-pointer hover:border-[#635BFF] 
                            ${selectedAnswers.includes(index) ? 'border-[#635BFF] bg-[#F8F8FF] text-black' : ''}`}
                    >
                        <p className="cursor-pointer">{answer.title}</p>
                    </li>
                ))}
            </ul>
            {showResult ? (
                <p className='text-left w-full max-w-[500px]'>
                    {isAllCorrect() ? resultMessage.success : resultMessage.failure}
                </p>
            ) : (
                <div>
                    <button
                        type="submit"
                        className="bg-[#635BFF] hover:bg-[#4c45d3] text-white font-bold py-2 px-4 rounded-full mt-4"
                    >
                        Valider
                    </button>
                </div>
            )}
        </form>
    );
}