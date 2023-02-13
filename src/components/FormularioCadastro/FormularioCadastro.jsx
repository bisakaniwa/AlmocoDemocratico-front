import { TextField, Typography, Button, Box, FormControl } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import logo from '../../assets/logo.png'

export default function FormularioCadastro() {

    function newUser(hungryUser) {
        axios
            .post('http://localhost:8080/api/v1/users/register', hungryUser)
            .then((response) => {
                const hungryUser = response.data;
                console.log(hungryUser);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate;

    return (
        <div>
            <Box
                sx={{
                    textAlign: 'center'
                }}
            >
                <img src={logo} alt="Logo" width={180} height={250} />
                <Typography
                    sx={{
                        fontSize: 'xx-large',
                        fontWeight: 'bold'
                    }}
                >
                    Faça seu cadastro:
                </Typography>
            </Box>

            <FormControl
                component="form"
                onSubmit={(event) => {
                    event.preventDefault();
                    newUser({ name, email, password })
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
                    label="Nome"
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    sx={{
                        width: 450
                    }}
                />

                <TextField
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    required
                    id="email"
                    type="email"
                    label="E-mail"
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    sx={{
                        width: 450
                    }}
                />

                <TextField
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    required
                    id="password"
                    type="password"
                    label="Senha"
                    variant="outlined"
                    color="primary"
                    margin="normal"
                    sx={{
                        width: 450
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    onClick={() => navigate("/")}
                >
                    Cadastrar-se
                </Button>

            </FormControl>
        </div >
    )
}