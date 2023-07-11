import { VideoIntro } from "../VideoIncrustado/VideoIntro"
import { FormContacto } from "../FormularioContacto/FormularioContacto"
import { Header } from "../Header-Footer/Header"
import { Footer } from "../Header-Footer/Footer"
import "./styles.css"

export const HomePage = () =>{
    return (
        <>
        <Header/>
        <h1>Sabores del Mundo</h1>
        <div className="contenedorVideoInicio">
        <VideoIntro/>
        </div>
            <div className="container container-historia">
            <h1>Más que un Restaurant - Un lugar de encuentro</h1>

            <p>"¡Sumérgete en un viaje culinario sin fronteras! En nuestro restaurante, te invitamos a disfrutar de una experiencia gastronómica única, donde los sabores del mundo se encuentran en un solo lugar. </p>

            <div className="two-col-container">

                <div className="two-rows-container">

                <p>Desde los deliciosos sushi y ramen de Japón, hasta las auténticas pastas y pizzas de Italia, pasando por los exóticos sabores de la comida tailandesa y los sabrosos tacos mexicanos, nuestro menú ofrece un amplio abanico de opciones para deleitar a tu paladar.</p>
            
                <p>Nuestra misión es llevarte en un viaje a través de los aromas, los colores y los sabores únicos de cada cultura representada en nuestro menú. Ya sea que desees probar algo nuevo y aventurarte en lo desconocido, o si prefieres disfrutar de tus platos favoritos de todo el mundo, nuestro restaurante de comida internacional es el lugar ideal para satisfacer tus deseos culinarios.</p>

                </div>

            <img className="chef-photo" src="https://media.istockphoto.com/id/163807674/es/foto/cocina-internacional.jpg?s=612x612&w=0&k=20&c=vzVod_CFpXt5-67UqY4cvxsletYkPkwUIN8fHA5M5Jo=" alt="" />

            </div>
            <p>¡Bienvenido a nuestro rincón gastronómico global! Descubre la diversidad culinaria y déjate llevar por la magia de los sabores internacionales. Estamos ansiosos por brindarte una experiencia culinaria inolvidable que te transportará a través de los continentes. </p>
                
            <h2>¡Ven y disfruta de una explosión de sabores en nuestro restaurante de comida internacional!"</h2>
            
            </div>
            {/* <h1>AGREGAR SECCIÓN CON OPINIONES U OTRO</h1> */}
        <FormContacto/>
        <Footer/>
        </>
    )
}