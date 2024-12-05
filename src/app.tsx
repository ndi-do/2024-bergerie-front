import PageHome from '@/pages/home'
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Accueil from './pages/accueil';
// import CarteInteractive from "@/pages/carte.tsx";

export default function App() {

    return (
        <>
            <div>
            <Navbar />

                <Accueil/>

                <Routes>
                    <Route path="/" element={<PageHome />} />
                </Routes>
            </div>
        </>
    )
}
