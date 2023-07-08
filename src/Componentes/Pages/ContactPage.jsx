import { FormContacto } from "../FormularioContacto/FormularioContacto"
import {Footer} from "../Header-Footer/Footer"

export const ContactPage = () =>{
    return(
        <>
        <h2>Contacto</h2>
        <section>
        <FormContacto/>
        <h2>Llegar es muy fácil, solo buscanos haciendo click aquí</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.254116118809!2d-70.59637152270825!3d-33.416618673403036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf15b965d86f%3A0x6c5a2a19a4b833b8!2sEnrique%20Foster%20Sur%2020%2C%207550198%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1688787845327!5m2!1ses!2scl" width="90%" height="200px"></iframe>
        <Footer/>
        </section>
        </>
    )
}