import "./styles.css"

import { Calendario } from "./Calendario"
import { Horarios } from "./Horarios"
export const VistaReservas = () => {
    
    return(
    <> 
        {/* <div className="container container-mes">
        <button type="button" className="btn btn-secondary">Anterior</button>
        <select className="form-select" aria-label="Default select example">
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
        </select>
        <button type="button" className="btn btn-secondary">Siguiente</button> */}
        {/* </div> */}
        <img className="img-reservas" src="https://www.lavanguardia.com/files/image_449_220/files/fp/uploads/2023/05/05/6454b91fe40cf.r_d.3297-2647.jpeg" alt="" />
        <h2>Seleccione la fecha y el horario que desea reservar</h2>
        <p className="text">Gracias por ser parte de nuestra selecta gama de clientes, por ser un cliente black label puedes reservar tu almuerzo o cena directamente a través de esta página</p>
        <h2>Agenda de Julio</h2>
        <div className="container-vista-calendario-horarios">
        {/* <div> */}
            <Calendario/>
            <Horarios/>
        </div>
    </>      
    )
}