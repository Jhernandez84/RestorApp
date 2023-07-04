import "./styles.css"
import swal from "sweetalert"

export const Horarios = () =>{
// Tiene que leer todo esto 
    const ReservarSlot = (time)  => {
        // swal("Vamos a reservar el horario ", {
        //     buttons: ["Si, reservar", true],
        //   });
        // console.log(rptReserva)
        swal("Reserva exitosa", `Su reserva fue ingresada con éxito para las ${time}`, "success");
    }

    return (
        <>
        <div className="lista-horarios">
            <p>Seleccione Horario</p>
                <div className="div-almuerzos">
                <p>Almuerzos</p>
                <p className="hora" onClick={()=> ReservarSlot("12:00")}>09:00</p>
                <p className="hora">13:00 - No Disponible</p>
                <p className="hora">14:00</p>
                <p className="hora">15:00</p>
                </div>
                <div className="div-cenas">
                <p>Cenas</p>
                <p className="hora">19:00</p>
                <p className="hora">20:00</p>
                <p className="hora">21:00</p>
                <p className="hora">22:00</p>
                </div>
            </div>
        </>
    )
}