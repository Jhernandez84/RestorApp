import { VideoIntro } from "../VideoIncrustado/VideoIntro"
import { FormContacto } from "../FormularioContacto/FormularioContacto"
import { Header } from "../Header-Footer/Header"
import { Footer } from "../Header-Footer/Footer"
import { NavLink } from "react-router-dom"

export const HomePage = () =>{
    return (
        <>
        <Header/>
        <h2>Sabores del Mundo</h2>
        <div className="contenedorVideoInicio">
        <VideoIntro/>
        </div>
            <div className="container container-historia">
                <h1>Más que un Restaurant - Un lugar de encuentro</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, officiis et libero error voluptatem necessitatibus deleniti. Eum et ipsa laboriosam nemo, iusto iure natus excepturi laudantium recusandae! Ea dicta adipisci nihil. Cumque blanditiis illum impedit assumenda sequi quia perspiciatis ab possimus rerum ullam, reiciendis eveniet, deleniti saepe veniam atque nemo aliquid quod sit ipsum dolorum veritatis non. Accusantium aspernatur odio possimus, modi numquam dicta repellat recusandae sapiente alias omnis, aut voluptates corrupti tempore deserunt saepe dignissimos mollitia veritatis rerum harum reprehenderit a. Ut, optio corporis molestias itaque facilis voluptas, porro quod ad est provident ipsum obcaecati laborum repellendus a aspernatur.</p>
            </div>
            

            <p>En nuestro restaurant nos preocupamos por los detalles, es por esto que... te invitamos a conocer nuestro <NavLink className="nav-link" aria-current="page" to="/NuestroBlog">Blog</NavLink> en dónde podrás encontrar bla bla bla</p>
        
            <h1>Explicar modelo de suscripción</h1>

            <h1>AGREGAR MENU ALEATORIO</h1>

            <h1>AGREGAR SECCIÓN CON OPINIONES U OTRO</h1>

        <FormContacto/>
        <Footer/>
        </>
    )
}