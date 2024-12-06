import PageHome from '@/pages/home'
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Accueil from './pages/accueil';
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import Popup from "@/components/popup";
import DefenseDesRecifs from "@/games/defense-des-recifs.tsx";
import RelaisDesCourants from './games/relais-des-courants';
import Plancton from './games/collecte-plancton';
import CoralBuilder from './games/coral-builder';
// import CarteInteractive from "@/pages/carte.tsx";

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenCourants, setIsModalOpenCourants] = useState(false);
    const [isModalOpenPlancton, setIsModalOpenPlancton] = useState(false);
    const [isModalOpenCoral, setIsModalOpenCoral] = useState(false);




    return (
        <>
            <div>
            <Navbar />

                <Accueil/>

                <Button onClick={() => setIsModalOpen(true)}>
                    Defense des recifs
                </Button>

                <Button onClick={() => setIsModalOpenCourants(true)}>
                    Relais des courants
                </Button>

                <Button onClick={() => setIsModalOpenPlancton(true)}>
                    Collecte de planctons
                </Button>

                <Button onClick={() => setIsModalOpenCoral(true)}>
                    Coral Builder
                </Button>

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

                <Routes>
                    <Route path="/" element={<PageHome />} />
                    
                </Routes>
            </div>
        </>
    )
}
