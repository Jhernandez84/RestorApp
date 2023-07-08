import { async } from "@firebase/util"
import { fetchSignInMethodsForEmail } from "firebase/auth"
import { useEffect, useState } from "react"
import { db } from "../Firebase/firebase"
import swal from "sweetalert"
import "./styles.css"
// import Calendar from "react-calendar"

export const Calendario = () => {
    //necesito crear una función que obtenga el mes del año y las fechas disponibles.
            const [reserva, setReserva] = useState([])
            const [hora, setHora] = useState([])

            useEffect(()=>{
                const reserva = GetAvailableDates()
                // console.log(reserva)
            },[])
        
            const GetAvailableDates = async () =>{
                    db.collection('reservas').onSnapshot((querySnapshot)=>{
                    const fechas = []
                    querySnapshot.forEach((fecha)=> {
                    fechas.push({...fecha.data(), id:fecha.id})
                    console.log(fechas)
                  })
                  setReserva(fechas)
                })
                return reserva
              }

            const GetAvailableTime = async (day) =>{
                // var date= "2023-07-09"
                const dates = await db.collection('reservas').doc(day).get() 
                setHora({...dates})
                console.log(hora)
              } 

            const reservaFecha  = async ()=>{

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
                <div className="col-cal-dia" onClick={()=> GetAvailableTime("2023-07-09")}>26</div>
                <div className="col-cal-dia" onClick={()=> console.log('sobre el 2')}>27</div>
                <div className="col-cal-dia">28</div>
                <div className="col-cal-dia">29</div>
                <div className="col-cal-dia">30</div>
                <div className="col-cal-dia fds">1</div>
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
        {/* </section>         */}
        </>
)}