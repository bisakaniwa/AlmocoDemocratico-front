import { Link } from "react-router-dom";
import React from "react";
import './Home.css'

export default function Home() {
    return (
        <div>
            <Link to="/cadastro-restaurante" className="cadastro-restaurante"> Cadastrar um restaurante </Link>
            <p>Home works! Let's vote</p>
        </div>
    )
}