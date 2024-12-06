import { Element } from 'react-scroll';
import Section from '@/components/section.tsx';
import {useState} from "react";
import Popup from "@/components/popup";
import DefenseDesRecifs from "@/games/defense-des-recifs.tsx";
import RelaisDesCourants from '@/games/relais-des-courants';
import Plancton from '@/games/collecte-plancton';
import CoralBuilder from '@/games/coral-builder';
import TemperatureGame from '@/games/temperature';
import ReefRepair from '@/games/reef-repair';

export default function PageHome() {

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isModalOpenCourants, setIsModalOpenCourants] = useState(false);
   const [isModalOpenPlancton, setIsModalOpenPlancton] = useState(false);
   const [isModalOpenCoral, setIsModalOpenCoral] = useState(false);
   const [isModalOpenTemp, setIsModalOpenTemp] = useState(false);
   const [isModalOpenReef, setIsModalOpenReef] = useState(false);

   function handleClick(type: string) {
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
        case 'finale':
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
                  question: "Pourquoi est-il essentiel de maintenir un équilibre chimique dans les liquides corporels ?",
                  answers: [
                      { title: "Parce que cela influence la couleur de la peau", isCorrect: false },
                      { title: "Parce que cela affecte la digestion des aliments", isCorrect: false },
                      { title: "Parce que des déséquilibres peuvent perturber les fonctions vitales du corps humain", isCorrect: true },
                      { title: "Parce que cela améliore la production d'énergie", isCorrect: false }
                  ],
                  resultMessage: {
                      success: "Bonne réponse ! L'équilibre chimique des liquides corporels est crucial pour les fonctions vitales du corps humain.",
                      failure: "Dommage, l'équilibre chimique est essentiel pour maintenir les fonctions vitales du corps humain. Un déséquilibre perturbe ces fonctions."
                  }
              },
              {
                  question: "De quelle manière un déséquilibre dans la composition chimique des liquides corporels peut-il affecter le corps humain ?",
                  answers: [
                      { title: "Il peut rendre les liquides corporels plus acides, ce qui améliore la digestion", isCorrect: false },
                      { title: "Il peut perturber l'écosystème corporel, tout comme un déséquilibre chimique affecte l'océan", isCorrect: true },
                      { title: "Il peut rendre les liquides corporels plus salés, ce qui augmente l'énergie", isCorrect: false },
                      { title: "Il peut diminuer la production d'hormones", isCorrect: false }
                  ],
                  resultMessage: {
                      success: "Bonne réponse ! Un déséquilibre chimique peut perturber l'écosystème corporel, de manière similaire à l'impact sur l'océan.",
                      failure: "Dommage, un déséquilibre chimique dans le corps perturbe son écosystème interne, tout comme dans l'océan."
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
                  question: "Comment le corps humain régule-t-il sa température interne ?",
                  answers: [
                      { title: "En produisant de la chaleur uniquement pendant l'été", isCorrect: false },
                      { title: "En ajustant uniquement la température des extrémités comme les mains et les pieds", isCorrect: false },
                      { title: "Grâce à des systèmes complexes qui ajustent la température en fonction des besoins", isCorrect: true },
                      { title: "En envoyant de l'eau froide dans les artères principales", isCorrect: false }
                  ],
                  resultMessage: {
                      success: "Bonne réponse ! Le corps humain régule sa température à l'aide de systèmes complexes qui ajustent la production et la dissipation de chaleur.",
                      failure: "Dommage, la régulation de la température interne du corps humain se fait par des mécanismes complexes, non seulement par la production de chaleur, mais aussi par sa dissipation selon les besoins."
                  }
              },
              {
                  question: "Comment les océans contribuent-ils à la régulation du climat mondial ?",
                  answers: [
                     { title: "Les océans transportent des courants chauds et froids qui aident à maintenir un équilibre thermique", isCorrect: true },
                     { title: "Les océans refroidissent l'atmosphère en générant des vents forts", isCorrect: false },
                     { title: "Les océans se réchauffent uniquement pendant la nuit pour stabiliser les températures", isCorrect: false },
                     { title: "Les océans libèrent de la chaleur dans l'atmosphère pour stabiliser les températures", isCorrect: true }
                  ],
                  resultMessage: {
                     success: "Bonne réponse ! Les courants marins transportent de l'eau chaude et froide, et les océans libèrent également de la chaleur dans l'atmosphère pour maintenir l'équilibre thermique.",
                     failure: "Dommage, les océans régulent le climat en transportant de l'eau chaude et froide grâce aux courants marins et en libérant de la chaleur dans l'atmosphère pour stabiliser les températures."
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
                  question: "Quel est le rôle principal du système digestif dans le corps humain ?",
                  answers: [
                      { title: "Produire des hormones pour la croissance", isCorrect: false },
                      { title: "Transformer la nourriture en énergie pour le corps", isCorrect: true },
                      { title: "Stocker de la nourriture pour une utilisation future", isCorrect: false },
                      { title: "Filtrer les déchets toxiques du sang", isCorrect: false }
                  ],
                  resultMessage: {
                      success: "Bonne réponse ! Le système digestif transforme la nourriture en énergie pour alimenter les fonctions du corps.",
                      failure: "Dommage, le système digestif a pour rôle principal de transformer la nourriture en énergie, ce qui permet au corps de fonctionner correctement."
                  }
              },
              {
                  question: "Comment les profondeurs de l'océan contribuent-elles à la régénération de l'écosystème marin ?",
                  answers: [
                      { title: "En générant des vagues pour produire de l'énergie", isCorrect: false },
                      { title: "En émettant des gaz qui purifient l'atmosphère", isCorrect: false },
                      { title: "En filtrant les polluants de l'eau pour améliorer sa clarté", isCorrect: false },
                      { title: "En recyclant des matières organiques pour nourrir l'écosystème marin", isCorrect: true }
                  ],
                  resultMessage: {
                      success: "Bonne réponse ! Les profondeurs marines jouent un rôle clé dans le recyclage des matières organiques, maintenant l'équilibre écologique de l'océan.",
                      failure: "Dommage, les profondeurs de l'océan recyclent les matières organiques, ce qui est essentiel pour nourrir et régénérer l'écosystème marin."
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
