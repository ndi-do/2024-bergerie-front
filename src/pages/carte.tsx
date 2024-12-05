import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { motion } from 'framer-motion'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import './CarteInteractive.css'

// Fix pour les icônes Leaflet dans React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon-2x.png',
    iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png',
    shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
});

// Exemple d'étapes du Vendée Globe
const etapes = [
    {
        name: 'Atlantique Nord',
        position: [48.8566, 2.3522], // Paris (exemple)
        description: 'Départ de Les Sables-d’Olonne',
    },
    {
        name: 'Gibraltar',
        position: [36.1408, -5.3536],
        description: 'Étape à Gibraltar',
    },
    // Ajoutez d'autres étapes ici
];

function CarteInteractive() {
    const positions = etapes.map((etape) => etape.position);

    return (
        <div className="carte-container">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Carte Interactive du Vendée Globe
            </motion.h2>
            <MapContainer
                center={[20, 0]}
                zoom={2}
                scrollWheelZoom={false}
                className="map"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {etapes.map((etape, index) => (
                    <Marker key={index} position={etape.position}>
                        <Popup>
                            <strong>{etape.name}</strong>
                            <br />
                            {etape.description}
                        </Popup>
                    </Marker>
                ))}
                <Polyline positions={positions} color="#007aff" />
            </MapContainer>
        </div>
    );
}

export default CarteInteractive;