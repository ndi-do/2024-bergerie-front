import { motion } from 'framer-motion';
import './Section.css';
import { useState } from 'react';
import Popup from './popup';
import QuizzesForm from './quiz/quizzes-form';
import FunfactPopup from './funfact';

export interface SectionProps {
   id: string;
   title: string;
   content: string;
   image: string;
   trait: string;
   globe: string;
   quizzes?: {
      data: {
         question: string;
         answers: { title: string; isCorrect: boolean }[];
         resultMessage: { success: string; failure: string };
      }[];
      allowShuffleQuiz: boolean;
      allowShuffleQuizAnswers: boolean;
   };
   funfact: {
      title: string;
      content: string;
      image: string;
   };
   clickAction?: (type: string) => void;
}

export default function Section({ id, title, content, image, trait, globe, quizzes, funfact, clickAction }: SectionProps) {
   const [showQuestions, setShowQuestions] = useState(false);
   const [isFunfactPopupOpen, setFunfactPopupOpen] = useState(false);

   if (!clickAction) {
      clickAction = () => {};
   }


   return (
      <motion.div
         className="relative h-screen flex items-center justify-center text-white"
         style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
         }}
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
      >
         <img src={globe} alt="Globe" className="absolute top-0 right-0 h-auto w-[20%] object-contain z-10" />
         <img src={trait} alt="Trait décoratif" className="absolute top-0 left-0 h-full w-auto object-cover z-10" />
         <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center max-w-2xl z-20 hover-pointer" onClick={() => clickAction(id)}>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg">{content}</p>
            <FunfactPopup isOpen={isFunfactPopupOpen} onClose={() => setFunfactPopupOpen(false)} funfact={funfact} />

            {quizzes && (
               <>
                  <button onClick={() => setShowQuestions(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                     Question
                  </button>

                  <Popup
                     isOpen={showQuestions}
                     onClose={() => {
                        setShowQuestions(false);
                        setFunfactPopupOpen(true);
                     }}
                  >
                     <QuizzesForm quizzes={quizzes.data} allowShuffleQuiz={quizzes.allowShuffleQuiz} allowShuffleAnswers={quizzes.allowShuffleQuizAnswers} />
                  </Popup> 

               </>
            )}
         </div>
      </motion.div>
   );
}
