import { useState, useEffect } from "react"

import "./styles.css"

import { Calendario } from "./Calendario"
export const VistaReservas = () => {

    const datosSocio= {userName:'',phoneNumber:'',email:''}
    const [infoSocio, setInfoSocio] = useState(datosSocio)
    
    const getValue = ({target}) =>{
        setInfoSocio({
            ...infoSocio,[target.name]: target.value
        })
    }

    return(

    <> 

        <img className="img-reservas" src="https://www.lavanguardia.com/files/image_449_220/files/fp/uploads/2023/05/05/6454b91fe40cf.r_d.3297-2647.jpeg" alt="" />
        <h2>Seleccione la fecha y el horario que desea reservar</h2>
        <p className="text">Gracias por ser parte de nuestra selecta gama de clientes, por ser un cliente black label puedes reservar tu almuerzo o cena directamente a través de esta página</p>
        <section className="container text-center">
        <form>
        <div className="row align-items-start">
        <div className="col">
        <label for="exampleInputEmail1" className="form-label">Nombre Completo</label>
        <input name="userName" onChange={getValue} type="text" className="form-control" id="inputName" aria-describedby="naneHelp" required></input>
        </div>
        <div className="col">
        <label for="exampleInputEmail1" className="form-label">Teléfono de contacto</label>
        <input name="phoneNumber" onChange={getValue} type="phone" className="form-control" id="inputPhone" aria-describedby="phoneHelp"></input>
        </div>
        <div className="col">
        <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
        <input name="email" onChange={getValue} type="email" className="form-control" id="inputMail" aria-describedby="emailHelp"></input>
        </div>
        </div>
        </form>
        <h2>Agenda de Julio</h2>
    </section>
        <div className="container-vista-calendario-horarios">
        {/* <div> */}
        {infoSocio.userName && infoSocio.email && infoSocio.phoneNumber ?(
            <>
            <Calendario infoSocio={infoSocio}/>
            </>
        ):(
            <h1>La agenda se desplegará pronto...</h1>
        )}
        </div>
    </>      
    )
}