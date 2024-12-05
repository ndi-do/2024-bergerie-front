import { Element } from 'react-scroll';
import Section from "@/components/section.tsx";

export default function PageHome () {
    const sections = [
        { id: 'accueil', title: 'Accueil', content: 'Bienvenue au Vendée Globe!' },
        { id: 'etape1', title: 'Étape 1', content: 'L’Atlantique Nord est la première étape.' },
        { id: 'etape2', title: 'Étape 2', content: 'Traversez l’Atlantique Sud.' },
        { id: 'etape3', title: 'Étape 3', content: 'Cap de Bonne-Espérance.' },
        { id: 'etape4', title: 'Étape 4', content: 'Océan Indien.' },
        { id: 'etape5', title: 'Étape 5', content: 'Cap Leeuwin.' },
        { id: 'etape6', title: 'Étape 6', content: 'Pacifique Sud.' },
        { id: 'finale', title: 'Finale', content: 'Retour triomphal aux Sables-d’Olonne!' },
    ];

    return (
    <div>
        {sections.map((section) => (
            <Element key={section.id} name={section.id}>
                <Section title={section.title} content={section.content} />
            </Element>
        ))}
    </div>
  )
}