import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box'

export default function FormularioLogin() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("")

    return (
        <FormControl
            component="form"
            onSubmit={(event) => {
                event.preventDefault();

            }}>

            <TextField
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                required
                id="email"
                type="text"
                label="E-mail"
                variant="outlined"
                color="primary"
                margin="normal"
            />

            <TextField
                value={senha}
                onChange={(event) => { setSenha(event.target.value) }}
                required
                id="senha"
                type="text"
                label="Senha"
                variant="outlined"
                color="primary"
                margin="normal"
            />

            <Button
                type="submit"
                variant="contained"
                // sx={{fontWeight: bold}}
                color="primary">
                Entrar
            </Button>

            <Box sx={{ mt: 2, mb: 2 }}>
                <Divider variant="middle"
                    sx={{ background: 'black' }} />
            </Box>

            <Button
                variant="contained"
                sx={{ backgroundColor: 'green' }}>
                Cadastre-se
            </Button>

        </FormControl >
    )
}