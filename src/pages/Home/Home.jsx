import { Link } from "react-router-dom";
import React from "react";
import './Home.css'
import logo from '../../assets/logo.png'

export default function Home() {
    return (
        <div className="content">
            <h3 className="logo">
                <img className="imagem" alt="Logo do app" src={logo} />
            </h3>
            <ul className="lista-home">
                <Link to="/votar" className="votar"> Vote agora! </Link>
                <Link to="/votacao" className="votacao"> Acompanhe os resultados de hoje </Link>
                <Link to="/restaurantes-cadastrados" className="restaurante-cadastrado"> Restaurantes cadastrados </Link>
                <Link to="/cadastro-restaurante" className="cadastro-restaurante"> Cadastrar um restaurante </Link>
                <Link to="/ultimos-restaurantes" className="ultimos-restaurantes"> Últimos restaurantes escolhidos </Link>
                <Link to="/perfil" className="perfil"> Meus dados </Link>
                <Link to="/" className="logout"> Sair </Link>
            </ul>
        </div>
    )
}