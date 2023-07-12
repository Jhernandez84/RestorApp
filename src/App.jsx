import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Componentes/Navbar/Navbar'
import { HomePage } from './Componentes/Pages/HomePage'
import { MainRoutes } from './Routes/MainRoutes'
import { FormContacto } from './Componentes/FormularioContacto/FormularioContacto'
import {logIn} from './Componentes/LogIn/Login'

function App() {

  return (
    <>
    <Navbar/>
    <MainRoutes/>
    </>
  )
}

export default App


// https://www.directoalpaladar.com/recetario/13-recetas-estrella-michelin-que-puedes-cocinar-casa-mucho-faciles-que-parece