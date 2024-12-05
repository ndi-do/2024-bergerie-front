import PageHome from '@/pages/home'
import {  Routes, Route } from 'react-router-dom';
import Navbar from "@/components/navbar.tsx";

export default function App() {

    return (
        <>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<PageHome />} />
                </Routes>
            </div>
        </>
    )
}
