import { Typography, Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RestaurantesCadastrados.css"

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

            <Box>
                {restaurantes.map(restaurante => (
                    <ul>
                        <Link
                            key={restaurante.name}
                            value={restaurante.name}
                            className="linkRestaurante"
                        >
                            {restaurante.name}
                        </Link>
                    </ul>
                ))}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    mr: 25
                }}
            >
                <Button
                    variant='contained'
                    onClick={() => navigate('/home')}
                >
                    Voltar
                </Button>
            </Box>
        </div>
    )
}