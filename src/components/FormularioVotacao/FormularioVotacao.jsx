import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export default function FormularioVotacao() {

    const navigate = useNavigate();

    return (
        <div className="content">
            <Typography
                sx={{
                    fontSize: 'xx-large',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    mt: 3
                }}
            > Onde devemos almoçar hoje?
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
                > Restaurantes disponíveis: </FormLabel>
                <RadioGroup name="restaurantes">
                    <FormControlLabel
                        sx={{
                            mb: 4
                        }}
                        control={<Radio />}
                    />
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