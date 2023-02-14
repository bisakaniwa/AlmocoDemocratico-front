import { Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RestaurantesCadastrados() {

    const navigate = useNavigate();

    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/restaurants/all")
            .then((response) => {
                setRestaurantes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="content">
            <Typography
                sx={{
                    fontSize: 'xx-large',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mt: 3
                }}
            >
                Restaurantes cadastrados
            </Typography>

            <div>
                {restaurantes.map(restaurante => (
                    <ul>
                        <li key={restaurante.name} value={restaurante.name}>
                            {restaurante.name}
                        </li>
                    </ul>
                ))}
            </div>

            <Button
                variant='contained'
                onClick={() => navigate('/home')}
            >
                Voltar
            </Button>
        </div>
    )
}