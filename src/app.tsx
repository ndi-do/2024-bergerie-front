import PageHome from '@/pages/home'
import {  Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import CreditPage from './components/credits/credit-page';
import PagePodcast from './pages/podcast';
// import CarteInteractive from "@/pages/carte.tsx";

export default function App() {



    return (
        <>
            <div>
            <Navbar />


                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/credits" element={<CreditPage />} />
                    <Route path="/podcast" element={<PagePodcast />} />
                    <Route path="*" element={<Navigate to="/" />} /> {/* Redirection par défaut */}
                    
                </Routes>
            </div>
        </>
    )
}
