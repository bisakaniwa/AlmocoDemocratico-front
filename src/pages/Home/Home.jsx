import { Link } from "react-router-dom";
import React from "react";
import './Home.css'

export default function Home() {
    return (
        <div>

            <ul className="lista-home">
                <Link to="/cadastro-restaurante" className="cadastro-restaurante"> Cadastrar um restaurante </Link>
                <Link to="/restaurantes-cadastrados" className="restaurante-cadastrado"> Restaurantes cadastrados </Link>
                <Link to="/ultimos-restaurantes" className="ultimos-restaurantes"> Últimos restaurantes escolhidos </Link>
                <Link to="/votar" className="votar"> Vote agora! </Link>
                <Link to="/perfil" className="perfil"> Meus dados </Link>
            </ul>

        </div>
    )
}