import PageHome from '@/pages/home'
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import CreditPage from './components/credits/credit-page';
// import CarteInteractive from "@/pages/carte.tsx";

export default function App() {



    return (
        <>
            <div>
            <Navbar />


                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/credits" element={<CreditPage />} />
                    
                </Routes>
            </div>
        </>
    )
}
