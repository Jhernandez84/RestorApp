import { CantidadOrden } from "./CantidadPedir"
import "./styles.css"
// Este componente renderiza una tarjeta por cada producto disponible en el menú
export const MenuCardGenerator = ({menu}) =>{

    const {Pedido,aumentar,reducir,eliminar} = CantidadOrden(0)

    return (
        <>

        <div className="card">
        <div className="card-body">
            <img className="card-image" src={menu.imagen} alt={menu.nombre}/>
            <h5 className="card-title">{menu.nombre} de {menu.chef} ({menu.estrellas}) - Valor $ {menu.valor}</h5>
            <p className="card-text">{menu.descripcion}</p>
            <div className="menu-pedido-container justify-content-center">
                    <p>Agregar a mi pedido</p>
                    <button className="btn2 btnCart" onClick={()=>reducir(0)}>-</button>
                    <p>{Pedido}</p>
                    <button className="btn1 btnCart" onClick={()=>aumentar(0)}>+</button>
                </div> 
        </div>
        </div>
        </>
    )
}