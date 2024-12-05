import {AnimatePresence, motion} from "framer-motion";
import {PropsWithChildren, useEffect, useState} from "react";
import './popup.css'
import {XMarkIcon} from "@heroicons/react/24/outline";

export interface PopupProps {
    isOpen: boolean
    onClose: () => void
}

export default function Popup ({ children, isOpen, onClose }: PropsWithChildren<PopupProps>) {
    const [visible, setVisible] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Bloque le scroll sur la page principale
        } else {
            document.body.style.overflow = ''; // Réactive le scroll
        }
        return () => {
            document.body.style.overflow = ''; // Nettoie l'effet si le composant est démonté
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const timeout = setTimeout(() => setVisible(false), 300); // Attendre la fin de l'animation
            return () => clearTimeout(timeout); // Nettoyer le timeout si le composant est démonté
        }
    }, [isOpen]);

    if (!visible) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="popup-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose} // Ferme la popup en cliquant sur le fond
                >
                    <motion.div
                        className="popup-container"
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        exit={{ y: '100%', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()} // Empêche la fermeture en cliquant à l'intérieur
                    >
                        <button className="close-button rounded-full p-1 bg-gray-200" onClick={onClose}>
                            <XMarkIcon className="w-6 font-semibold" />
                        </button>
                        <div className="popup-content">{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}