import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import PrimeiraPagina from './pages/PrimeiraPagina/PrimeiraPagina';
import Cadastro from './pages/Cadastro/Cadastro'
import NotFound from './pages/NotFound/NotFound'

export default function AppRouter() {
    return (
        <Router>
            <Routes>

                <Route path='/' element={<PrimeiraPagina />} />

                <Route path='/cadastro' element={<Cadastro />} />

                {/* <Route element={<NotFound />} /> */}

            </Routes>
        </Router>
    )
}