import { CantidadOrden } from "./CantidadPedir"
import "./styles.css"
// Este componente renderiza una tarjeta por cada producto disponible en el menú
export const MenuCardGenerator = ({menu}) =>{

    const {Pedido,aumentar,reducir,eliminar} = CantidadOrden(0)

    return (
        <>
        <div className="card">
        <div className="card-body">
        <img className="carg-image" width="150px" src={menu.imagen} alt={menu.nombre}/>
        <h3 className="card-title">{menu.nombre}</h3>
        <h2 className="card-text">{menu.estrellas}</h2>
        <h5 className="card-title">{menu.chef}</h5>
        <p className="card-text">{menu.des}</p>
        <div className="card-pedido">
            <div className="container-pedido">
            <button className="btn2 btn" onClick={()=>reducir(0)}>-{1}</button>
            <h1>{Pedido}</h1>
            <button className="btn1 btn" onClick={()=>aumentar(0)}>+{1}</button>            </div> 
        </div>        
        </div>
        </div>
        </>
    )
}