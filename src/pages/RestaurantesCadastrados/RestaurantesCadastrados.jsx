import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RestaurantesCadastrados() {

    const navigate = useNavigate();


    function verRestaurantes() {
        axios
            .get("http://localhost:8080/api/v1/restaurants")
            .then((listaRestaurantes) => {

            })
            .catch(function (error) {
                console.log(error);
            });
    }

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

            {/* <div>
                {listaRestaurantes.map(restaurante => (
                    <Link key={restaurante.id}></Link>
                ))}
            </div> */}
        </div>
    )
}