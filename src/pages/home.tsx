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
   const [isModalOpenCoral, setIsModalOpenCoral] = useState(false);
   const [isModalOpenTemp, setIsModalOpenTemp] = useState(false);
   const [isModalOpenReef, setIsModalOpenReef] = useState(false);

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
         case 'etape4':
            setIsModalOpenCoral(true);
            break;
        case 'etape8':
            setIsModalOpenTemp(true);
            break;
        case 'etape9':
            setIsModalOpenReef(true);
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
         quizzes: {
            data: [
               {
                  question: "Quel est l'un des plus grands défis que les marins rencontrent lors de l'étape 5, Cap de Bonne-Espérance ?",
                  answers: [
                      { title: "La traversée de l'Atlantique Sud avec ses tempêtes et courants puissants", isCorrect: true },
                      { title: "L'entrée dans l'océan Pacifique, un passage difficile", isCorrect: false },
                      { title: "La navigation autour des îles de l'océan Indien", isCorrect: false },
                      { title: "La gestion des températures élevées à proximité de l'Équateur", isCorrect: false }
                  ],
                  resultMessage: {
                      success: "Bonne réponse ! L'Atlantique Sud présente de nombreux défis, notamment des tempêtes et des courants puissants.",
                      failure: "Dommage, le plus grand défi de l'étape 5 est la traversée de l'Atlantique Sud, réputée pour ses conditions difficiles."
                  }
              },
              {
                  question: "Pourquoi les skippers doivent-ils être particulièrement vigilants lors de leur passage près du Cap de Bonne-Espérance pendant le Vendée Globe ?",
                  answers: [
                      { title: "En raison de la proximité des bancs de sable et des rochers", isCorrect: true },
                      { title: "À cause des températures extrêmes qui affectent la performance des bateaux", isCorrect: false },
                      { title: "À cause des courants marins qui ralentissent leur vitesse", isCorrect: false },
                      { title: "En raison de la présence de nombreux icebergs dans la région", isCorrect: false }
                  ],
                  resultMessage: {
                      success: "Bonne réponse ! La zone près du Cap de Bonne-Espérance est dangereuse en raison des bancs de sable et des rochers.",
                      failure: "Dommage, les marins doivent être vigilants à la présence de bancs de sable et de rochers dans cette région."
                  }
              }
            ],
            allowShuffleQuiz: false,
            allowShuffleQuizAnswers: false
         }
      },
      {
         id: 'etape6',
         title: 'Étape 6: Cap Leeuwin',
         content: 'Les skippers passent près de l’Australie, entrée dans l’océan Pacifique.',
         image: 'assets/cap_leeuwin.png',
         trait: 'assets/trait/6.png',
         globe: 'assets/globe/cap_leeuwin.png',
         quizzes: {
            data: [
               {
                  question: "Quel est le rôle stratégique du Cap Leeuwin (étape 6) dans le parcours du Vendée Globe ?",
                  answers: [
                      { title: "Il marque l'entrée dans l'océan Pacifique, un passage clé pour les skippers", isCorrect: true },
                      { title: "Il est un point d'approvisionnement pour les marins", isCorrect: false },
                      { title: "Il marque la fin du passage dans l'hémisphère sud", isCorrect: false },
                      { title: "Il représente le début de la dernière étape de la course", isCorrect: false }
                  ],
                  resultMessage: {
                      success: "Bonne réponse ! Le Cap Leeuwin est essentiel pour marquer l'entrée dans l'océan Pacifique.",
                      failure: "Dommage, le Cap Leeuwin est crucial pour l'entrée dans l'océan Pacifique."
                  }
              },
              {
                  question: "Quel est l'impact du passage du Cap Leeuwin (étape 6) sur les marins pendant le Vendée Globe ?",
                  answers: [
                      { title: "Les marins doivent affronter des vagues énormes et des conditions de mer imprévisibles", isCorrect: true },
                      { title: "Les marins sont confrontés à des températures glaciales, proches du zéro absolu", isCorrect: false },
                      { title: "Les marins passent par des eaux très calmes, ce qui ralentit leur progression", isCorrect: false },
                      { title: "Les marins doivent éviter des bancs de glace qui flottent dans la région", isCorrect: false }
                  ],
                  resultMessage: {
                      success: "Bonne réponse ! Le passage près du Cap Leeuwin est marqué par des vagues énormes et des conditions maritimes très changeantes.",
                      failure: "Dommage, les conditions de mer près du Cap Leeuwin sont connues pour être imprévisibles et difficiles."
                  }
              }
            ],
            allowShuffleQuiz: false,
            allowShuffleQuizAnswers: false
         }
      },
      {
         id: 'etape7',
         title: 'Étape 7: Point Nemo',
         content: 'Le point le plus éloigné de toute terre émergée, au cœur du Pacifique Sud.',
         image: 'assets/point_nemo.png',
         trait: 'assets/trait/7.png',
         globe: 'assets/globe/point_nemo.png',
         quizzes: {
            data: [
               {
                  question: "Quel est le point Nemo, et pourquoi est-il important lors de la course du Vendée Globe ?",
                  answers: [
                     { title: "Le point Nemo est un endroit sur Terre où il n'y a aucune terre à proximité", isCorrect: true },
                     { title: "Le point Nemo est le nom d'un bateau de course du Vendée Globe", isCorrect: false },
                     { title: "Le point Nemo est une île où les marins font une escale pendant la course", isCorrect: false },
                     { title: "Le point Nemo est le lieu le plus proche de l'Antarctique", isCorrect: false }
                  ],
                  resultMessage: {
                     success: "Bonne réponse ! Le point Nemo est en effet un endroit situé dans l'océan Pacifique, où il n'y a aucune terre à des milliers de kilomètres autour.",
                     failure: "Dommage, ce n'est pas la bonne réponse. Le point Nemo est un lieu situé dans l'océan Pacifique, éloigné de toute terre."
                  }
               },
               {
                  question: "Quel est l'un des défis majeurs pour les skippers lors du passage près du point Nemo pendant le Vendée Globe ?",
                  answers: [
                     { title: "La gestion de l'approvisionnement en nourriture", isCorrect: false },
                     { title: "La gestion de la solitude et de l'isolement", isCorrect: true },
                     { title: "La navigation à travers des eaux peu profondes", isCorrect: false },
                     { title: "La prise de décisions rapides pour éviter des obstacles", isCorrect: false }
                  ],
                  resultMessage: {
                     success: "Bonne réponse ! Le passage près du point Nemo représente un défi psychologique majeur en raison de l'isolement total des marins.",
                     failure: "Dommage, ce n'est pas la bonne réponse. La gestion de la solitude et de l'isolement est un véritable défi pour les skippers près du point Nemo."
                  }
               }   
            ],
            allowShuffleQuiz: false,
            allowShuffleQuizAnswers: false
         }
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
               <Section id={section.id} title={section.title} content={section.content} image={section.image} trait={section.trait} globe={section.globe} quizzes={section.quizzes} clickAction={handleClick}/>
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
       
         <Popup isOpen={isModalOpenCoral} onClose={() => setIsModalOpenCoral(false)}>
             <CoralBuilder />    
         </Popup>

         <Popup isOpen={isModalOpenTemp} onClose={() => setIsModalOpenTemp(false)}>
              <TemperatureGame />
         </Popup>
       
       <Popup isOpen={isModalOpenReef} onClose={() => setIsModalOpenReef(false)}>
           <ReefRepair />
       </Popup>


      </div>
   );
}
