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
                    multiline
                    rows={3}
                    color="primary"
                    margin="normal"
                    sx={{
                        width: 450
                    }}
                />

                <TextField
                    value={website}
                    onChange={(event) => {
                        setWebsite(event.target.value);
                    }}
                    id="website"
                    type="text"
                    label="Site ou endereço para cardápio"
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    helperText="Esse restaurante possui uma página na internet?"
                    sx={{
                        width: 450
                    }}
                />

                <Typography
                    sx={{
                        fontSize: 'x-large',
                        mt: 2
                    }}>
                    Endereço:
                </Typography>

                <Box>
                    <TextField
                        value={district}
                        onChange={(event) => {
                            setDistrict(event.target.value);
                        }}
                        required
                        id="district"
                        select
                        label="Estado"
                        variant="outlined"
                        color="primary"
                        margin="normal"
                        autoComplete="on"
                        sx={{
                            mr: 2,
                            width: 150
                        }}
                    />

                    <TextField
                        value={city}
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                        required
                        id="city"
                        type="text"
                        autoComplete="on"
                        label="Cidade"
                        variant="outlined"
                        color="primary"
                        margin="normal"
                        sx={{
                            width: 380
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
                            mr: 2,
                            width: 450
                        }}
                        helperText="Rua, avenida, etc."
                    >
                    </TextField>

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

                <Box>
                    <TextField
                        value={addressComplement}
                        onChange={(event) => {
                            setAddressComplement(event.target.value);
                        }}
                        id="addressComplement"
                        type="text"
                        label="Complemento"
                        variant="outlined"
                        color="primary"
                        margin="normal"
                        sx={{
                            mr: 2,
                            width: 450
                        }}
                        helperText="Opcional"
                    />

                    <TextField
                        value={cep}
                        onChange={(event) => {
                            setCep(event.target.value);
                        }}
                        required
                        id="cep"
                        type="text"
                        label="CEP"
                        variant="outlined"
                        color="primary"
                        margin="normal"
                        sx={{
                            width: 200
                        }}
                    />
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    onClick={() => newRestaurant()}
                >
                    Cadastrar
                </Button>

            </FormControl>
        </div >
    )
}