import { useState, useEffect } from "react"
import { db } from "../Firebase/firebase"
import "./styles.css"
import swal from "sweetalert"

export const Horarios = ({horarios, infoSocio}) =>{

    const ReservarSlot = async (time)  => {
        try{
        swal("Reserva exitosa", `${infoSocio.userName}, su reserva fue ingresada con éxito para las ${time} y hemos enviado un correo a su dirección ${infoSocio.email}`, "success");
        const info = {usuario:infoSocio.userName, usuarioMail:infoSocio.email, hora:horarios.hora}
        // await db.collection('horarios').doc(time).update(info)
        await db.collection('reservas').add(info)

        // setInfoSocio(datosSocio)
        } catch(error){
            swal("Lo sentimos", `${infoSocio.userName}, su reserva no pudo ser ingresada, intente nuevamente"`,"error")
        }
    }
    return (
        <>
        <div className="lista-horarios">
                <div className="div-almuerzos">
                {/* {/* {horarios.disponible? ( */}

                <p className="hora" onClick={()=> ReservarSlot(horarios.hora)}>{horarios.hora} Disponible</p>
                {/* ):( */}
                {/* <p className="hora">{horarios.hora} No Disponible</p> */}
                
                </div>
            </div>
        </>
    )
}