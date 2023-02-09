import { TextField, Typography, Button, Box, FormControl } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'

export default function FormularioCadastro(hungryUser) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    hungryUser({ name, email, password })
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
                    type="text"
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
                    type="text"
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
                >
                    Cadastrar-se
                </Button>

            </FormControl>
        </div >
    )
}