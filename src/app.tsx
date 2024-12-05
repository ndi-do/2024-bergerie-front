import PageHome from '@/pages/home'
import {  Routes, Route } from 'react-router-dom';
import CarteInteractive from "@/pages/carte.tsx";
import Navbar from "@/components/navbar.tsx";

export default function App() {

    return (
        <>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/carte" element={<CarteInteractive />} />
                    {/* Ajoutez d'autres routes ici */}
                </Routes>
            </div>
        </>
    )
}
