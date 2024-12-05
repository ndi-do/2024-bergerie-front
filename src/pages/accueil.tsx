import ModalStart from '@/components/modal-start';
import { useState } from 'react';
import { scroller } from 'react-scroll';

export default function Accueil() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToFirstSection = () => {
        scroller.scrollTo('etape1', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
        setIsModalOpen(false); // Ferme la modale après le scroll
    };

    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('src/assets/homepage.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-6 rounded-lg">
                    <h1 className="text-4xl font-bold mb-4">Bienvenue sur Race for Water!</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                    >
                        Commencer l'aventure
                    </button>
                </div>
            </div>

            {/* Modale */}
            <ModalStart
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={scrollToFirstSection}
            />
        </div>
    );
}

