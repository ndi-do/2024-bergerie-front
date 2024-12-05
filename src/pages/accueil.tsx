import 'leaflet/dist/leaflet.css'
import './CarteInteractive.css'
import Navbar from '@/components/navbar';
import Section from '@/components/section';

function Accueil() {
    const sections = [

    { id: 'accueil', title: 'Accueil', content: 'Bienvenue au Vendée Globe!' },
    ];

    return (
        <div>
            <Navbar />
            {sections.map((section) => (
                    <Section title={section.title} content={section.content} />
            ))}
        </div>
    );
}

export default Accueil;