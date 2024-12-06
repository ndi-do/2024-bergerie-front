interface ModalStartProps {
   isOpen: boolean;
   onClose: () => void;
   onConfirm: () => void;
}

export default function ModalStart({ isOpen, onConfirm }: ModalStartProps) {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
         <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Bienvenue dans l'aventure !</h2>
            <p className="mb-6">
               Embarquez à bord du MODX 70, un catamaran révolutionnaire, zéro émission, pour une aventure unique en suivant le parcours du Vendée Globe, une course en bateau mythique autour du monde.
               À chaque point de passage, découvrez des mini-jeux et des faits surprenants qui révèlent les ressemblances entre les océans et le corps humain.
            </p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2" onClick={onConfirm}>
               C'est parti !
            </button>
         </div>
      </div>
   );
}
