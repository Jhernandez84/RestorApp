import { useState } from "react"

export const CantidadOrden = (initialValue = 0) => {
    const [Pedido, setCantidadOrden] = useState(initialValue)

    const aumentar= (value) =>{
        setCantidadOrden(Pedido+1)
    }
    const reducir = (value) =>{
        if(Pedido<1) return
        setCantidadOrden(Pedido-1)
    }
    const eliminar = ()=>{
        setCantidadOrden(initialValue)
    }
    return{
        Pedido,
        aumentar,
        reducir,
        eliminar
    }
}