import { TextField, Typography, Button, Box, FormControl } from '@mui/material'
import React, { useState } from 'react'
import './FormularioCadastro.css'
import logo from '../../assets/logo.png'

export default function FormularioCadastro() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

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
                }}
                className="content"
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
                    value={senha}
                    onChange={(event) => {
                        setSenha(event.target.value);
                    }}
                    required
                    id="senha"
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
        </div>
    )
}