import "./styles.css"
import swal from "sweetalert"
import { db } from "../Firebase/firebase"
import { useState } from "react"

export const FormContacto = () =>{

    const camposContacto = {name:'',phone:'',email:'',request:'Reservas'}
    const [contacto,setContacto] = useState(camposContacto)

// Acá estoy enviando la información de reserva a la base de datos firestore.
    const EnviarCorreo = async (e) =>{
        e.preventDefault()

        try{
            await db.collection('contacto').add(contacto)
            swal("Solicitud recibida exitosamente", `Muchas gracias ${contacto.name}, tu solicitud para ${contacto.request} pronto será respondida al correo ${contacto.email} y al número ${contacto.phone}`, "success");
            setContacto(camposContacto)
        }catch (err){
            swal("Upsss", "¿Algo falló, podrías intentar nuevamente?", "error");
        }
    }
    const getFormValues = ({target}) =>{
        setContacto({
          ...contacto,[target.name]: target.value
        })
      }

    return (
        <>
        <section className="container-fluid d-flex flex-row justify-content-between">
            <div className="container order-0">
                <img src="https://img.freepik.com/fotos-premium/foto-vertical-copa-vid-vino-seco-oscuro-sobre-fondo-borroso-luz-restaurante-cafe-interior-plato-acompanamiento-pasta-fusilli-salchicha-plato-blanco-mesa-reservas-restaurante-cerrar_349071-2775.jpg" alt="Imagen-Contacto"/>
            </div>

        <div className="container">
        <form>
        <div className="mb-4">
        
        <h4>¿Quieres hablar con nosotros o necesitas más información?</h4>
        <p>Por favor completa los datos y te contactaremos a la brevedad</p>
        <div className="form-input">
        <label htmlFor="exampleInputEmail1" className="form-label">Nombre Completo</label>
        <input name="name" onChange={getFormValues} value={contacto.name} type="text" className="form-control" id="inputName" aria-describedby="emailHelp" required></input>
        </div>
        <div className="form-input">
        <label htmlFor="exampleInputEmail1" className="form-label">Teléfono de contacto</label>
        <input name="phone" onChange={getFormValues} value={contacto.phone} type="phone" className="form-control" id="inputPhone" aria-describedby="emailHelp"></input>
        </div>
        <div className="form-input">
        <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
        <input name="email" onChange={getFormValues} value={contacto.email} type="email" className="form-control" id="inputMail" aria-describedby="emailHelp"></input>
        </div>
        <div className="form-input">
        <label htmlFor="inputState">¿En que podemos ayudarte?</label>
            <select name="request" onChange={getFormValues} value={contacto.request} id="inputState" className="form-control">
            <option selected default>Reservas</option>
            <option>Eventos Coporativos</option>
            <option>Clases de Cocina</option>
            <option>Otros</option>
        </select>
        </div>
        </div>
        {contacto.email && contacto.name && contacto.phone && contacto.request ? (
            <button type="submit" onClick={EnviarCorreo} className="btn btn-primary">Enviar</button>
        ):([])}        
        </form>
        </div>
        </section>
       </> 
    )
}