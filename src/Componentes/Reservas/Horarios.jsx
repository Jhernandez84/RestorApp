import { useState, useEffect } from "react"
import { db } from "../Firebase/firebase"

import "./styles.css"
import swal from "sweetalert"
import { Navbar } from "../Navbar/Navbar"

export const Horarios = ({horarios, user}) =>{
// Tiene que leer todo esto
    const ReservarSlot = async (time)  => {
        swal("Reserva exitosa", `Su reserva fue ingresada con éxito para las ${time}`, "success");
        const info = {disponible:false}
        await db.collection('horarios').doc(time).update(info)
    }

    return (
        <>
        <div className="lista-horarios">
                <div className="div-almuerzos">
                {/* <p className="hora-desc">{horarios.id}</p> */}
                {/* <p className="hora-est">{horarios.disponible}</p> */}
                {horarios.disponible? (
                <p className="hora" onClick={()=> ReservarSlot(horarios.id)}>{horarios.hora} Disponible</p>
                ):(
                <p className="hora">{horarios.hora} No Disponible</p>
                )}
                </div>
            </div>
        </>
    )
}