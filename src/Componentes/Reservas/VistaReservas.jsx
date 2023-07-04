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
        <h2>Seleccione la fecha de su preferencia</h2>
        <div className="container-vista-calendario-horarios">
            <Calendario/>
            <Horarios/>    
        </div>
    </>      
    )
}