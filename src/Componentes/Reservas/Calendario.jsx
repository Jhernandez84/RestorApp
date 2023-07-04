import "./styles.css"

export const Calendario = () => {
    //necesito crear una función que obtenga el mes del año y las fechas disponibles.
    //
    // const dia = new Date()
    // console.log(dia)

    const seleccionaFechaReserva = () => {
        


    }

    return (
        <>

        {/* Necesito crear una función que recorra las fechas disponibles y las agregue al calendario */}
            <div className="cont-cal-filas">
                <div className="row-title">Lunes</div>
                <div className="row-title">Martes</div>
                <div className="row-title">Miercoles</div>
                <div className="row-title">Jueves</div>
                <div className="row-title">Viernes</div>
                <div className="row-title">Sábado</div>
                <div className="row-title">Domingo</div>
                {/* De aquí en adelante debe renderizar las fechas */}
                <div className="col-cal-dia" onClick={()=> console.log('sobre el 1')}>1</div>
                <div className="col-cal-dia" onClick={()=> console.log('sobre el 2')}>2</div>
                <div className="col-cal-dia">3</div>
                <div className="col-cal-dia">4</div>
                <div className="col-cal-dia">5</div>
                <div className="col-cal-dia fds">6</div>
                <div className="col-cal-dia fds">7</div>
                <div className="col-cal-dia">1</div>
                <div className="col-cal-dia">2</div>
                <div className="col-cal-dia">3</div>
                <div className="col-cal-dia">4</div>
                <div className="col-cal-dia">5</div>
                <div className="col-cal-dia fds">6</div>
                <div className="col-cal-dia fds">7</div>
                <div className="col-cal-dia">1</div>
                <div className="col-cal-dia">2</div>
                <div className="col-cal-dia">3</div>
                <div className="col-cal-dia">4</div>
                <div className="col-cal-dia">5</div>
                <div className="col-cal-dia fds">6</div>
                <div className="col-cal-dia fds">7</div>
                <div className="col-cal-dia">1</div>
                <div className="col-cal-dia">2</div>
                <div className="col-cal-dia">3</div>
                <div className="col-cal-dia">4</div>
                <div className="col-cal-dia">5</div>
                <div className="col-cal-dia fds">6</div>
                <div className="col-cal-dia fds">7</div>
                <div className="col-cal-dia">1</div>
                <div className="col-cal-dia">2</div>
                <div className="col-cal-dia">3</div>
                <div className="col-cal-dia">4</div>
                <div className="col-cal-dia">5</div>
                <div className="col-cal-dia fds">6</div>
                <div className="col-cal-dia fds">7</div>
                <div className="col-cal-dia">1</div>
                <div className="col-cal-dia">2</div>
                <div className="col-cal-dia">3</div>
                <div className="col-cal-dia">4</div>
                <div className="col-cal-dia">5</div>
                <div className="col-cal-dia fds">6</div>
                <div className="col-cal-dia fds">7</div>
        </div>
        </>
)

}