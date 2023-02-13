import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function FormularioVotacao() {

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
                Onde devemos almoçar hoje?
            </Typography>

            <FormControl
                component="form"
                sx={{
                    ml: 10,
                    mt: 5
                }}
            >
                <FormLabel
                    sx={{
                        fontSize: 'x-large',
                        mb: 3
                    }}
                >
                    Restaurantes disponíveis:
                </FormLabel>

                <RadioGroup name="restaurantes">
                    {restaurantes.map(restaurante => (
                        <FormControlLabel
                            key={restaurante.name} value={restaurante.name}
                            sx={{
                                mb: 4
                            }}
                            control={<Radio />}
                        >
                            {restaurante.name}
                        </FormControlLabel>
                    ))}

                </RadioGroup>

                <Box
                    sx={{
                        justifyContent: 'center'
                    }}>
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{
                            mr: 10,
                            backgroundColor: 'green',
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