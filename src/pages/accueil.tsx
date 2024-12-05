import 'leaflet/dist/leaflet.css'
import './CarteInteractive.css'

function Accueil() {

    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('src/assets/homepage.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-6 rounded-lg">
                    <h1 className="text-4xl font-bold mb-4">Bienvenue sur Race for Water!</h1>
                    <p className="text-xl italic mb-8">Explorez les mers du monde et découvrez le parcours du Vendée Globe tout en apprenant.</p>
                </div>
            </div>
        </div>
    );
}

export default Accueil;
