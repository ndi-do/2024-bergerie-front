import PageHome from '@/pages/home'
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Accueil from './pages/accueil';
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import Popup from "@/components/popup";
import DefenseDesRecifs from "@/games/defense-des-recifs.tsx";
// import CarteInteractive from "@/pages/carte.tsx";

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <>
            <div>
            <Navbar />

                <Accueil/>

                <Button onClick={() => setIsModalOpen(true)}>
                    Click
                </Button>

                <Popup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <DefenseDesRecifs />
                </Popup>

                <Routes>
                    <Route path="/" element={<PageHome />} />
                    
                </Routes>
            </div>
        </>
    )
}
