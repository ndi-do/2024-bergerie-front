import 'leaflet/dist/leaflet.css'
import './CarteInteractive.css'

function Accueil() {
    const sections = [

    { id: 'accueil', title: 'Accueil', content: 'Bienvenue au Vendée Globe!' },
    ];

    return (
        <div>
            <p>
                Le Vendée Globe est une course de voile autour du monde, en solitaire, sans escale et sans assistance. 
                Elle a lieu tous les quatre ans, et est considérée comme l’une des courses les plus difficiles et les plus prestigieuses de la voile. 
                Les skippers partent des Sables-d’Olonne, en France, et doivent naviguer autour du globe en passant par les trois caps mythiques: 
                le cap de Bonne-Espérance, le cap Leeuwin et le cap Horn. 
                La course dure environ trois mois, et les marins doivent affronter des conditions météorologiques extrêmes, des tempêtes, des vagues géantes et des icebergs. 
                Seuls les marins les plus expérimentés et les plus courageux peuvent espérer terminer la course. 
                Le Vendée Globe est une aventure humaine extraordinaire, qui met à l’épreuve les compétences, la résilience et le courage des marins.
            </p>
        </div>
    );
}

export default Accueil;