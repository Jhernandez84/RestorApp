import { useEffect, useState } from "react"
import {doc, setDoc} from "firebase/firestore"
import { db } from "../Firebase/firebase"
import { Horarios } from "./Horarios"
import swal from "sweetalert"
import "./styles.css"
// import Calendar from "react-calendar"

function obtenerDiasDelMes(mes, año) {
    var fechaInicial = new Date(año, mes - 1, 1); // Restamos 1 al mes para que sea compatible con el objeto Date
    var fechaFinal = new Date(año, mes, 0);
    var cantidadDias = fechaFinal.getDate();
    
    var diasDelMes = [];
    
    for (var i = 1; i <= cantidadDias; i++) {
      var fecha = new Date(año, mes - 1, i); // Restamos 1 al mes nuevamente para que sea compatible con el objeto Date
      diasDelMes.push(fecha);
    }
    
    return diasDelMes;
  }

  var mesSeleccionado = 7; // Febrero
  var añoSeleccionado = 2023;

//  const CargaFechasMes = async ()=> {
//     var diasDelMes = obtenerDiasDelMes(mesSeleccionado, añoSeleccionado);
    
//     for (var i = 0; i < diasDelMes.length; i++) {
//     var fecha = diasDelMes[i];
//     var dia = fecha.getDate();}
  
//     const tramosHorarios = ["12:00", "13:00", "14:00", "15:00", "19:00", "20:00", "21:00", "22:00"];

//     for (let i = 0; i < diasDelMes.length; i++) {
//       const fecha = diasDelMes[i];
//       const dia = fecha.getDate();
//       const diaFormateado = dia.toString().padStart(2, '0');
//       const mesFormateado = mesSeleccionado.toString().padStart(2, '0');
//       const fechaHora = `${diaFormateado}${mesFormateado}${añoSeleccionado}`;
    
//       for (let j = 0; j < tramosHorarios.length; j++) {
//         const tramoHorario = tramosHorarios[j];
//         const fechaHoraTramo = `${fechaHora}`;
    
//         await setDoc(doc(db, "fechas", fechaHora, "tramosHorarios", tramoHorario), {
//           disponible: true,
//           ReservaUsuario: "",
//           ReservaMail: "",
//           ReservaPhone: "",
//         });
//       }
//     }
        // await db.collection('fechas').doc("fechaHora").set({hora:dia})
   
//   }
  
export const Calendario = ({infoSocio}) => {
    //necesito crear una función que obtenga el mes del año y las fechas disponibles.
    const [hora, setHora] = useState([])
    const GetHora = async () =>{
            // CargaFechasMes()
            db.collection('horarios').onSnapshot((querySnapshot)=>{
            const horas = []
            querySnapshot.forEach((hora)=> {
            horas.push({...hora.data(), id:hora.id})
        })
        setHora(horas)
        // console.log(hora)
        })
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
                <div className="col-cal-dia" onClick={()=> GetHora()}>26</div>
                <div className="col-cal-dia" onClick={()=> GetHora()}>27</div>
                <div className="col-cal-dia" onClick={()=> GetHora()}>28</div>
                <div className="col-cal-dia" onClick={()=> GetHora()}>29</div>
                <div className="col-cal-dia" onClick={()=> GetHora()}>30</div>
                <div className="col-cal-dia fds"onClick={()=> GetHora()}>1</div>
                <div className="col-cal-dia fds">2</div>
                <div className="col-cal-dia">3</div>
                <div className="col-cal-dia">4</div>
                <div className="col-cal-dia">5</div>
                <div className="col-cal-dia">6</div>
                <div className="col-cal-dia">7</div>
                <div className="col-cal-dia fds">8</div>
                <div className="col-cal-dia fds">9</div>
                <div className="col-cal-dia">10</div>
                <div className="col-cal-dia">11</div>
                <div className="col-cal-dia">12</div>
                <div className="col-cal-dia">13</div>
                <div className="col-cal-dia">14</div>
                <div className="col-cal-dia fds">15</div>
                <div className="col-cal-dia fds">16</div>
                <div className="col-cal-dia">17</div>
                <div className="col-cal-dia">18</div>
                <div className="col-cal-dia">19</div>
                <div className="col-cal-dia">20</div>
                <div className="col-cal-dia">21</div>
                <div className="col-cal-dia fds">22</div>
                <div className="col-cal-dia fds">23</div>
                <div className="col-cal-dia">24</div>
                <div className="col-cal-dia">25</div>
                <div className="col-cal-dia">26</div>
                <div className="col-cal-dia">27</div>
                <div className="col-cal-dia">28</div>
                <div className="col-cal-dia fds">29</div>
                <div className="col-cal-dia fds">30</div>
                <div className="col-cal-dia">31</div>
                <div className="col-cal-dia">2</div>
                <div className="col-cal-dia">3</div>
                <div className="col-cal-dia">4</div>
                <div className="col-cal-dia">5</div>
                <div className="col-cal-dia fds">6</div>
                <div className="col-cal-dia fds">7</div>
        </div>
        <div>
            <p className="row-title">Horarios</p>
            {hora.map((horarios)=>( <Horarios infoSocio={infoSocio} horarios={horarios} key={horarios.id}/>))}   
        </div>
        </>
)}