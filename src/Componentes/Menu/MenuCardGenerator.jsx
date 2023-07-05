import { CantidadOrden } from "./CantidadPedir"
import "./styles.css"
// Este componente renderiza una tarjeta por cada producto disponible en el menú
export const MenuCardGenerator = ({menu}) =>{

    const {Pedido,aumentar,reducir,eliminar} = CantidadOrden(0)

    return (
        <>
        <div className="card-container">
            <div className="card-menu">
                <div className="card-menu-image">
                    <img className="card-image" src={menu.imagen} alt={menu.nombre}/>
                </div>
                <div className="card-menu-details">                
                    <p className="menu-title">{menu.nombre} de {menu.chef} ({menu.estrellas}) - Valor $ {menu.valor}</p>
                    <p className="menu-desc">{menu.descripcion}</p>
                {/* </div> */}
                <div className="menu-pedido-container">
                    <p>Agregar a mi pedido</p>
                    <button className="btn2 btnCart" onClick={()=>reducir(0)}>-{1}</button>
                    <p>{Pedido}</p>
                    <button className="btn1 btnCart" onClick={()=>aumentar(0)}>+{1}</button>
                </div> 
                </div>
            </div>
        </div>
        </>
    )
}