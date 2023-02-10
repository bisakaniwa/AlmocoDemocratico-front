import React, { useState } from "react";
import { TextField, Typography, Button, Box, FormControl } from '@mui/material'
import axios from "axios";

export default function CadastroRestaurante() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [addressComplement, setAddressComplement] = useState("");
    const [addressNumber, setAddressNumber] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [cep, setCep] = useState("");
    const [website, setWebsite] = useState("")

    function newRestaurant(restaurant) {
        axios
            .post('http://localhost:8080/api/v1/restaurants', restaurant)
            .then((response) => {
                const restaurant = response.data;
                console.log(restaurant);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <Box
                sx={{
                    textAlign: 'center'
                }}
            >
                {/* <img src={logo} alt="Logo" width={180} height={250} /> */}
                <Typography
                    sx={{
                        fontSize: 'xx-large',
                        fontWeight: 'bold'
                    }}
                >
                    Cadastre um restaurante:
                </Typography>
            </Box>

            <FormControl
                component="form"
                onSubmit={(event) => {
                    event.preventDefault();
                    newRestaurant({ name, description, address, addressComplement, addressNumber, district, city, cep })
                }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >

                <TextField
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    required
                    id="name"
                    type="text"
                    label="Nome do restaurante"
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    sx={{
                        width: 450
                    }}
                />

                <TextField
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                    required
                    id="description"
                    type="text"
                    label="Descrição"
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    sx={{
                        width: 450
                    }}
                />

                <Typography> Endereço: </Typography>
                
                <Box className="endereco-select">
                    <TextField
                        value={district}
                        onChange={(event) => {
                            setDistrict(event.target.value);
                        }}
                        required
                        id="address"
                        select
                        label="Estado"
                        variant="outlined"
                        color="primary"
                        margin="normal"
                        autoComplete="on"
                        sx={{
                            width: 150
                        }}
                    />

                    <TextField
                        value={city}
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                        required
                        id="address"
                        type="text"
                        autoComplete="on"
                        label="Cidade"
                        variant="outlined"
                        color="primary"
                        margin="normal"
                        sx={{
                            width: 450
                        }}
                    />
                </Box>

                <Box>
                    <TextField
                        value={address}
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }}
                        required
                        id="address"
                        type="text"
                        label="Endereço"
                        variant="outlined"
                        color="primary"
                        margin="normal"
                        sx={{
                            width: 450
                        }}
                    />

                    <TextField
                        value={addressNumber}
                        onChange={(event) => {
                            setAddressNumber(event.target.value);
                        }}
                        required
                        id="addressNumber"
                        type="text"
                        label="Número"
                        variant="outlined"
                        color="primary"
                        margin="normal"
                        sx={{
                            width: 100
                        }}
                    />
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                >
                    Cadastrar
                </Button>

            </FormControl>
        </div >
    )
}