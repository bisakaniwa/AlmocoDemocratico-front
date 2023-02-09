import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import api, { busca } from './api/axiosConfig';
import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

import PrimeiraPagina from './pages/PrimeiraPagina/PrimeiraPagina';
import Cadastro from './pages/Cadastro/Cadastro'
import NotFound from './pages/NotFound/NotFound'

export default function App() {

  //   useEffect(() => {
  //     busca(url, setHungryUser)
  //   }, [])

  // const getHungryUser = async () => {
  //   const response = await api.getHungryUser("/api/v1/user");
  //   console.log(response.data);
  // }

  // useEffect(() => { getHungryUser(); }, [])

  return (
    <Router>
      <Routes>

        <Route path='/' element={<PrimeiraPagina />} />

        <Route path='/cadastro' element={<Cadastro />} />

        {/* <Route element={<NotFound />} /> */}

      </Routes>
    </Router>
  )
  // }
}