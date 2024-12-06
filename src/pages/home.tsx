import { Element } from 'react-scroll';
import Section from '@/components/section.tsx';
import {useState} from "react";
import Popup from "@/components/popup";
import DefenseDesRecifs from "@/games/defense-des-recifs.tsx";
import RelaisDesCourants from '@/games/relais-des-courants';
import Plancton from '@/games/collecte-plancton';

export default function PageHome() {

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModalOpenCourants, setIsModalOpenCourants] = useState(false);
   const [isModalOpenPlancton, setIsModalOpenPlancton] = useState(false);

   function handleClick(type: string) {
      console.log(type);
      switch (type) {
         case 'etape1':
            setIsModalOpen(true);
            break;
         case 'etape2':
            setIsModalOpenCourants(true);
            break;
         case 'etape3':
            setIsModalOpenPlancton(true);
            break;
         default:
            break;
      }
   }

   const sections = [
      {
         id: 'etape1',
         title: 'Étape 1: Golfe de Gascogne',
         content: 'Les skippers affrontent des vagues et des vents violents dans cette première étape.',
         image: 'assets/golfe_de_gascone.png',
         trait: 'assets/trait/1.png',
         globe: 'assets/globe/Golfe_de_gascogne.png',
      },
      {
         id: 'etape2',
         title: 'Étape 2: Anticyclone des Açores',
         content: 'Les marins traversent une zone de calme, où il n’y a pas de vent.',
         image: 'assets/anticyclone_des_acores.png',
         trait: 'assets/trait/2.png',
         globe: 'assets/globe/anticyclone_des_acores.png',
      },
      {
         id: 'etape3',
         title: 'Étape 3: Pot au Noir',
         content: 'Un phénomène météorologique chaud et humide qui affecte la visibilité et la navigation.',
         image: 'assets/pot_au_noir.png',
         trait: 'assets/trait/3.png',
         globe: 'assets/globe/pot_au_noir.png',
      },
      {
         id: 'etape4',
         title: 'Étape 4: Anticyclone de Saint-Hélène',
         content: 'Zone de haute pression avec de beaux temps, mais difficile à contourner.',
         image: 'assets/anticyclone_de_sainte-helene.png',
         trait: 'assets/trait/4.png',
         globe: 'assets/globe/anticyclone_de_sainte_helene.png',
      },
      {
         id: 'etape5',
         title: 'Étape 5: Cap de Bonne-Espérance',
         content: 'Les marins traversent l’Atlantique Sud et se dirigent vers les mers australes.',
         image: 'assets/cap_de_bonne-esperance.png',
         trait: 'assets/trait/5.png',
         globe: 'assets/globe/cap_de_bonne_esperance.png',
      },
      {
         id: 'etape6',
         title: 'Étape 6: Cap Leeuwin',
         content: 'Les skippers passent près de l’Australie, entrée dans l’océan Pacifique.',
         image: 'assets/cap_leeuwin.png',
         trait: 'assets/trait/6.png',
         globe: 'assets/globe/cap_leeuwin.png',
      },
      {
         id: 'etape7',
         title: 'Étape 7: Point Nemo',
         content: 'Le point le plus éloigné de toute terre émergée, au cœur du Pacifique Sud.',
         image: 'assets/point_nemo.png',
         trait: 'assets/trait/7.png',
         globe: 'assets/globe/point_nemo.png',
         quiz: {
            question: "Quel est l'un des défis majeurs pour les skippers lors du passage près du point Nemo pendant le Vendée Globe ?",
            answers: [
               { title: "La gestion de l'approvisionnement en nourriture", isCorrect: false },
               { title: "La gestion de la solitude et de l'isolement", isCorrect: true },
               { title: 'La navigation à travers des eaux peu profondes', isCorrect: false },
               { title: 'La prise de décisions rapides pour éviter des obstacles', isCorrect: false },
            ],
            resultMessage: {
               success: "Bonne réponse ! Le passage près du point Nemo représente un défi psychologique majeur en raison de l'isolement total des marins.",
               failure: "Dommage, ce n'est pas la bonne réponse. La gestion de la solitude et de l'isolement est un véritable défi pour les skippers près du point Nemo.",
            },
         },
      },
      {
         id: 'etape8',
         title: 'Étape 8: Cap Horn',
         content: 'Un passage difficile où les conditions climatiques peuvent être extrêmes.',
         image: 'assets/cap_horn.png',
         trait: 'assets/trait/8.png',
         globe: 'assets/globe/cap_horn.png',
      },
      {
         id: 'finale',
         title: 'Finale: Retour aux Sables-d’Olonne',
         content: 'Le retour triomphal après avoir traversé l’océan Atlantique et le Vendée Globe.',
         image: 'assets/sable_olonne.png',
         trait: 'assets/trait/9.png',
         globe: 'assets/globe/sable_olonne.png'
      },
   ];

   return (
      <div>
         {sections.map((section) => (
            <Element key={section.id} name={section.id}>
               <Section id={section.id} title={section.title} content={section.content} image={section.image} trait={section.trait} globe={section.globe} quiz={section.quiz} clickAction={handleClick}/>
            </Element>
         ))}

         <Popup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <DefenseDesRecifs />
         </Popup>

         <Popup isOpen={isModalOpenCourants} onClose={() => setIsModalOpenCourants(false)}>
            <RelaisDesCourants />
         </Popup>

         <Popup isOpen={isModalOpenPlancton} onClose={() => setIsModalOpenPlancton(false)}>
            <Plancton />
         </Popup>


      </div>
   );
}
