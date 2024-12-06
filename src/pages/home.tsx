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
import FunfactPopup from '@/components/funfact';
import Accueil from './accueil';
import ClosingScreen from '@/games/closing-screen';
import { scroller } from 'react-scroll';

export default function PageHome() {
   const sections = [
      {
         id: 'etape1',
         title: 'Étape 1: Golfe de Gascogne',
         content: 'Les skippers affrontent des vagues et des vents violents dans cette première étape.',
         image: 'assets/golfe_de_gascone.webp',
         trait: 'assets/trait/1.webp',
         globe: 'assets/globe/Golfe_de_gascogne.webp',
         funfact: {
            title: 'Saviez-vous ?',
            content:
               "Le système immunitaire du corps humain agit comme une barrière contre les agents pathogènes, tout comme un récif corallien protège l'écosystème marin des menaces externes. Le système immunitaire détecte et combat les virus et bactéries, tandis que les récifs coralliens filtrent et détoxifient l'eau, maintenant ainsi un environnement sain pour la vie marine.",
            image: 'assets/funfact/1.webp',
         },
      },
      {
         id: 'etape2',
         title: 'Étape 2: Anticyclone des Açores',
         content: 'Les marins traversent une zone de calme, où il n’y a pas de vent.',
         image: 'assets/anticyclone_des_acores.webp',
         trait: 'assets/trait/2.webp',
         globe: 'assets/globe/anticyclone_des_acores.webp',
         funfact: {
            title: 'Saviez-vous ?',
            content:
               "Les nerfs du corps humain transmettent des signaux rapides pour assurer une communication fluide, tout comme les courants marins transportent des nutriments et des informations essentielles dans l'océan. Ces courants marins permettent de maintenir la vie marine en assurant la circulation d'éléments vitaux à travers différents écosystèmes.",
            image: 'assets/funfact/2.webp',
         },
      },
      {
         id: 'etape3',
         title: 'Étape 3: Pot au Noir',
         content: 'Un phénomène météorologique chaud et humide qui affecte la visibilité et la navigation.',
         image: 'assets/pot_au_noir.webp',
         trait: 'assets/trait/3.webp',
         globe: 'assets/globe/pot_au_noir.webp',
         funfact: {
            title: 'Saviez-vous ?',
            content:
               "Le microbiote humain, composé de millions de micro-organismes, aide à maintenir l'équilibre biologique dans notre corps, tout comme le plancton est essentiel pour l'équilibre de l'océan. Ces micro-organismes, tant dans notre corps que dans l'eau, jouent un rôle crucial dans le cycle de la vie et la santé de leur environnement.",
            image: 'assets/funfact/3.webp',
         },
      },
      {
         id: 'etape4',
         title: 'Étape 4: Anticyclone de Saint-Hélène',
         content: 'Zone de haute pression avec de beaux temps, mais difficile à contourner.',
         image: 'assets/anticyclone_de_sainte-helene.webp',
         trait: 'assets/trait/4.webp',
         globe: 'assets/globe/anticyclone_de_sainte_helene.webp',
         funfact: {
            title: 'Saviez-vous ?',
            content:
               "Les os du corps humain soutiennent notre structure, tout comme les récifs coralliens servent de fondation pour une multitude d'espèces marines. Ces structures portantes sont essentielles pour maintenir l'intégrité et la stabilité des écosystèmes, qu’ils soient corporels ou marins.",
            image: 'assets/funfact/4.webp',
         },
      },
      {
         id: 'etape5',
         title: 'Étape 5: Cap de Bonne-Espérance',
         content: 'Les marins traversent l’Atlantique Sud et se dirigent vers les mers australes.',
         image: 'assets/cap_de_bonne-esperance.webp',
         trait: 'assets/trait/5.webp',
         globe: 'assets/globe/cap_de_bonne_esperance.webp',
         funfact: {
            title: 'Saviez-vous ?',
            content:
               "Tout comme l'océan a un équilibre chimique complexe, avec des niveaux de salinité et de pH, le corps humain doit maintenir une composition chimique précise pour fonctionner correctement. Des déséquilibres dans l'un ou l'autre peuvent perturber l'écosystème, qu’il soit humain ou marin.",
            image: 'assets/funfact/5.webp',
         },
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
         image: 'assets/cap_leeuwin.webp',
         trait: 'assets/trait/6.webp',
         globe: 'assets/globe/cap_leeuwin.webp',
      },
      {
         id: 'etape7',
         title: 'Étape 7: Point Nemo',
         content: 'Le point le plus éloigné de toute terre émergée, au cœur du Pacifique Sud.',
         image: 'assets/point_nemo.webp',
         trait: 'assets/trait/7.webp',
         globe: 'assets/globe/point_nemo.webp',
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
         image: 'assets/cap_horn.webp',
         trait: 'assets/trait/8.webp',
         globe: 'assets/globe/cap_horn.webp',
         funfact: {
            title: 'Saviez-vous ?',
            content:
               "La reproduction dans le corps humain est régulée par des cycles naturels, tout comme les marées sont influencées par les cycles lunaires. Ces rythmes naturels assurent le bon déroulement de la vie, qu'il s'agisse de la naissance d'un enfant ou de la régénération des écosystèmes marins au rythme des marées.",
            image: 'assets/funfact/8.webp',
         },
      },
      {
         id: 'finale',
         title: 'Finale: Retour aux Sables-d’Olonne',
         content: 'Le retour triomphal après avoir traversé l’océan Atlantique et le Vendée Globe.',
         image: 'assets/sable_olonne.webp',
         trait: 'assets/trait/9.webp',
         globe: 'assets/globe/sable_olonne.webp',
         funfact: {
            title: 'Saviez-vous ?',
            content:
               "Le corps humain possède une incroyable capacité à se réparer et à se régénérer après une blessure, tout comme les écosystèmes marins, tels que les récifs coralliens, ont la capacité de se régénérer après une perturbation. Ces processus de réparation sont essentiels pour maintenir l'intégrité et la résilience de l'ensemble du système.",
            image: 'assets/funfact/9.webp',
         },
      },
   ];

   return (
      <div>
                         <Accueil/>

        {sections.map((section) => (
          <Element key={section.id} name={section.id}>
            <Section
              id={section.id}
              title={section.title}
              content={section.content}
              image={section.image}
              trait={section.trait}
              globe={section.globe}
              quizzes={section.quizzes}
              clickAction={handleClick}
              funfact={section.funfact}
            />
          </Element>
        ))}
  
        <Popup isOpen={isModalOpen} onClose={() => {setIsModalOpen(false);handlePopupClose('etape1')}}>
          <DefenseDesRecifs />
        </Popup>
  
        <Popup isOpen={isModalOpenCourants} onClose={() => {setIsModalOpenCourants(false);handlePopupClose('etape2')}}>
          <RelaisDesCourants />
        </Popup>
  
        <Popup isOpen={isModalOpenPlancton} onClose={() => {setIsModalOpenPlancton(false);handlePopupClose('etape3')}}>
          <Plancton />
        </Popup>
  
        <Popup isOpen={isModalOpenCoral} onClose={() =>  {setIsModalOpenCoral(false);handlePopupClose('etape4')}}>
          <CoralBuilder />
        </Popup>
  
        <Popup isOpen={isModalOpenTemp} onClose={() => {setIsModalOpenTemp(false);handlePopupClose('etape5')}}>
          <TemperatureGame />
        </Popup>
  
        <Popup isOpen={isModalOpenReef} onClose={() => {setIsModalOpenReef(false)}}>
          <ReefRepair />
        </Popup>
  
        <FunfactPopup isOpen={isFunfactPopupOpen} onClose={() => setFunfactPopupOpen(false)} funfact={currentFunfact!} />

        <Popup isOpen={isModalOpenReef} onClose={() => {
            setIsModalOpenReef(false); 
            setIsModalOpenClosing(true);
            }}>
            <ReefRepair />
         </Popup>

         <Popup isOpen={isModalOpenClosing} onClose={() => {
            setIsModalOpenClosing(false);
            scroller.scrollTo('homepage', {
               duration: 800,
               smooth: 'easeInOutQuart',
           });
         }}>
            <ClosingScreen />
         </Popup>
      </div>
   );
}
