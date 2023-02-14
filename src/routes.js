import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import PrimeiraPagina from './pages/PrimeiraPagina/PrimeiraPagina';
import Cadastro from './pages/Cadastro/Cadastro'
import Home from "./pages/Home/Home";
import CadastroRestaurante from "./pages/CadastroRestaurante/CadastroRestaurante";
import Votar from "./pages/Votar/Votar";
import Votacao from "./pages/Votacao/Votacao";
import RestaurantesCadastrados from "./pages/RestaurantesCadastrados/RestaurantesCadastrados";
import NotFound from './pages/NotFound/NotFound'

export default function AppRouter() {
    return (
        <Router>
            <Routes>

                <Route path='/' element={<PrimeiraPagina />} />

                <Route path='/cadastro' element={<Cadastro />} />

                <Route path='/home' element={<Home />} />

                <Route path='/cadastro-restaurante' element={<CadastroRestaurante />} />

                <Route path='/votar' element={<Votar />} />

                <Route path='/votacao' element={<Votacao />} />

                <Route path='/restaurantes-cadastrados' element={<RestaurantesCadastrados />} />

                <Route path='*' element={<NotFound />} />

            </Routes>
        </Router>
    )
}