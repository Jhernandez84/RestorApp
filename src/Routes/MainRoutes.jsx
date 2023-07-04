import { Route,Routes } from "react-router-dom"
import { HomePage } from "../Componentes/Pages/HomePage"
import { ReservationPage } from "../Componentes/Pages/ReservationPage"
import {ContactPage} from "../Componentes/Pages/ContactPage"
import { BlogPage } from "../Componentes/Pages/BlogPage"
import { MenuPage } from "../Componentes/Pages/MenuPage"

export const MainRoutes = () => {
    return(
        <div className="main-container">
            <Routes>
                <Route path="/" element={<HomePage/>}/> 
                <Route path="/NuestroMenu" element={<MenuPage/>}/> 
                <Route path="/Reservas" element={<ReservationPage/>}/> 
                <Route path="/Contacto" element={<ContactPage/>}/> 
                <Route path="/NuestroBlog" element={<BlogPage/>}/> 
            </Routes>
        </div>
    )
}