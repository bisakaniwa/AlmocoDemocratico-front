import { Typography } from '@mui/material'
import React from 'react'

export default function Votacao() {
    return (
        <div>
            <Typography
            sx={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: 'xx-large',
                fontWeight: 'bold',
                mt: 5
            }}
            > Votação de hoje: </Typography>
        </div>
    )
}