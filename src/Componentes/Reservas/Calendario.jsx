import { useEffect, useState } from "react"
import { format, getDay } from 'date-fns'; // Importar la biblioteca date-fns
import {doc, setDoc} from "firebase/firestore"
import { db } from "../Firebase/firebase"
import { Horarios } from "./Horarios"
import swal from "sweetalert"

import "./styles.css"

// import Calendar from "react-calendar"
// Necesito que los días y meses sean guardados en el servidor local
// Necesito que la validación de las fechas utilizadas sea realizada en firebase
// Necesito que indique disponibilidad dependiendo de los espacios ocupados en firebase

const obtenerDiasDelMes = (mes, año) => {
    const fechaInicio = new Date(año, mes-1, 1);
    const fechaFin = new Date(año, mes, 0);
    const diasDelMes = [];
  
    for (let fecha = fechaInicio; fecha <= fechaFin; fecha.setDate(fecha.getDate() + 1)) {
      const diaDelMes = fecha.getDate();
      const nombreDia = format(fecha, 'EEEE');
  
      diasDelMes.push({
        dia: diaDelMes,
        nombreDia: nombreDia
      });
    }
      return diasDelMes;
  };

 var mesSeleccionado = 7;
 var añoSeleccionado = 2023;

 const CargaFechasMes = ()=> {
    const diasDelMes = obtenerDiasDelMes(mesSeleccionado, añoSeleccionado);
    for (let i = 0; i < diasDelMes.length; i++) {
      const fecha = diasDelMes[i];
      const dia = fecha.getDate();
      const diaFormateado = dia.toString().padStart(2, '0');
      const mesFormateado = mesSeleccionado.toString().padStart(2, '0');
      const fechaHora = `${diaFormateado}${mesFormateado}${añoSeleccionado}`;
  
      }
    }
//CargaFechasMes()
  
export const Calendario = ({mes, infoSocio}) => {
    //necesito crear una función que obtenga el mes del año y las fechas disponibles.
    const diasDelMes = obtenerDiasDelMes(mesSeleccionado, añoSeleccionado);
    const [hora, setHora] = useState([])
    const GetHora = async () =>{
            // CargaFechasMes()
            const tramosHorarios = [{hora:"12:00"},
            {hora:"13:00"}, {hora:"14:00"}, {hora:"15:00"}, {hora:"19:00"}, {hora:"20:00"}, {hora:"21:00"}, {hora:"22:00"}];

        //     db.collection('horarios').onSnapshot((querySnapshot)=>{
            // const horas = []
        //     querySnapshot.forEach((hora)=> {
        //     horas.push({...hora.data(), id:hora.id})
        // })
        setHora(tramosHorarios)
        // // console.log(hora)
        // })
        return hora
    }

    return (
        <>
            <div className="cont-cal-filas">
                <div className="row-title">Lunes</div>
                <div className="row-title">Martes</div>
                <div className="row-title">Miercoles</div>
                <div className="row-title">Jueves</div>
                <div className="row-title">Viernes</div>
                <div className="row-title">Sábado</div>
                <div className="row-title">Domingo</div>
                {/* De aquí en adelante debe renderizar las fechas */}
                {/* Esta parte está en proceso de mejora */}
                <div className="col-cal-dia" onClick={()=> GetHora()}>26</div>
                <div className="col-cal-dia">27</div>
                <div className="col-cal-dia">28</div>
                <div className="col-cal-dia">29</div>
                <div className="col-cal-dia">30</div>
                {diasDelMes.map((dia)=>{
                    if (dia.nombreDia ==="Saturday"|| dia.nombreDia ==="Sunday"){
                        return (
                        <div className="col-cal-dia fds" onClick={()=> GetHora()}>{dia.dia}</div>)
                    }else{
                        return(
                        <div className="col-cal-dia"onClick={()=> GetHora()}>{dia.dia}</div>
                        )
                    }
                })}
        </div>
        <div>
            <p className="row-title d-flex justify-content-center">Horarios</p>
            {hora.map((horarios)=>( <Horarios infoSocio={infoSocio} horarios={horarios} key={horarios.id}/>))}   
        </div>
        </>
)}