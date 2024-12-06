import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import './funfact.css';

export interface FunfactPopupProps {
   isOpen: boolean;
   onClose: () => void;
   funfact: {
      title: string;
      content: string;
      image: string;
   };
}

export default function FunfactPopup({ isOpen, onClose, funfact }: FunfactPopupProps) {
   const [visible, setVisible] = useState(isOpen);

   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = '';
      }
      return () => {
         document.body.style.overflow = '';
      };
   }, [isOpen]);

   useEffect(() => {
      if (isOpen) {
         setVisible(true);
      } else {
         const timeout = setTimeout(() => setVisible(false), 300);
         return () => clearTimeout(timeout);
      }
   }, [isOpen]);

   if (!visible) return null;

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div className="funfact-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={onClose}>
               <motion.div
                  className="funfact-container"
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '100%', opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={(e) => e.stopPropagation()}
               >
                  <div className="funfact-content">
                     <h2>{funfact.title}</h2>
                     <img src={funfact.image} alt={funfact.title} />
                     <p>{funfact.content}</p>
                  </div>
                  <button className="close-button-facts" onClick={onClose}>
                  <XMarkIcon className="icon-fact" />
               </button>
               </motion.div>
               {/* Button outside the animated div */}
               
            </motion.div>
         )}
      </AnimatePresence>
   );
}
