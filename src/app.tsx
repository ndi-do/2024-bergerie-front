import PageHome from '@/pages/home'
import {  Routes, Route } from 'react-router-dom';
import CarteInteractive from "@/pages/carte.tsx";

export default function App() {

    return (
        <>
            <div>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<PageHome />} />
                            <Route path="/carte" element={<CarteInteractive />} />
                            {/* Ajoutez d'autres routes ici */}
                        </Routes>
                    </div>
            </div>
        </>
    )
}
