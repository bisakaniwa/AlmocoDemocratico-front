import React from 'react'
import FormularioCadastro from '../../components/FormularioCadastro/FormularioCadastro'

export default function Cadastro() {
    return (

        <FormularioCadastro hungryUser={newUser} />
        
    )
}

function newUser(data) {
    //conexão com a api
    console.log(data)
}