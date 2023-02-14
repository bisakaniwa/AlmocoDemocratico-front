import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import './FormularioVotacao.css'

export default function FormularioVotacao() {

    const navigate = useNavigate();
    const [restaurantes, getRestaurantes] = useState([]);
    const [nomeRestaurante, setRestauranteEscolhido] = useState();

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/restaurants/all")
            .then((response) => {
                getRestaurantes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    function restauranteEscolhido(nomeRestaurante) {
        axios
            .post("http://localhost:8080/api/v1/votes/register", nomeRestaurante)
            .then((response) => {
                const restauranteEnviado = response.data;
                console.log(restauranteEnviado)
            })
            .catch((error) => {
                console.log(error)
            })
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
                Onde devemos almoçar hoje?
            </Typography>

            <FormControl
                component="form"
                sx={{
                    ml: 10,
                    mt: 5
                }}
                onSubmit={(event) => {
                    event.preventDefault();
                    restauranteEscolhido(nomeRestaurante.nome);
                }}
            >
                <Typography
                    sx={{
                        fontSize: 'x-large',
                        mb: 3
                    }}
                >
                    Restaurantes disponíveis:
                </Typography>

                <RadioGroup name="restaurantes"
                    onChange={(event) => {
                        setRestauranteEscolhido(event.target.value)
                        console.log(nomeRestaurante)
                    }}
                    value={nomeRestaurante}
                >
                    {restaurantes.map(restaurante => (
                        <FormControlLabel
                            checked={nomeRestaurante === restaurante.name}
                            key={restaurante.id}
                            value={restaurante.name}
                            sx={{
                                fontSize: 'xx-large',
                                mb: 4
                            }}
                            control={<Radio />}
                            label={restaurante.name}
                        />
                    ))}
                </RadioGroup>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{
                            mr: 10,
                            backgroundColor: 'green',
                        }}
                        onClick={() => {
                            console.log(nomeRestaurante);
                            restauranteEscolhido(nomeRestaurante);
                            navigate('/home')
                        }}
                    > Votar! </Button>

                    <Button
                        variant='contained'
                        onClick={() => navigate("/home")}
                    >
                        Retornar
                    </Button>
                </Box>
            </FormControl>
        </div>
    )
}