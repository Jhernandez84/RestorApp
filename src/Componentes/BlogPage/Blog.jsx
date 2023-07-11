import "./styles.css"



export const Blog = () =>{

    return(
        <>
            <section className="Blog">
            <h1>Bienvenido a nuestro Blog</h1>
            <article className="chef-article article">
                <article className="article-vertical">
                    <h1>Descubre los sabores del mundo en un solo lugar.</h1>
                    <div className="chef-text text">
                    En nuestro blog, te llevaremos a un viaje culinario por diferentes culturas y te presentaremos recetas auténticas y deliciosas de todo el mundo.
                    </div>
                </article>
                    <img className="chef-photo" src="https://i.blogs.es/30cbec/fotojet-3/840_560.jpg" alt="" />
            </article>
            
            <h1>Un equipo de trabajo de primer nivel</h1>
            <article className="chef-article article">
                <img className="chef-photo" src="https://foodandtravel.mx/wp-content/uploads/2017/04/chefsenelmundo.jpg" alt="" />
                <div className="chef-text text">
                Nuestro equipo de chefs y expertos en gastronomía está apasionado por explorar la diversidad culinaria global y compartir sus descubrimientos contigo. Encontrarás recetas tradicionales de países como Italia, México, India, Tailandia, Francia y muchos más. Desde platos principales exquisitos hasta postres tentadores, tenemos algo para todos los paladares.
                </div>
            </article>
            <h1>Aprendemos de la práctica, no de la teoría</h1>
            <article className="chef-recipes-article article">
            <div className="chef-text text">
            Además de las recetas, también te ofrecemos consejos útiles sobre ingredientes, técnicas de cocina y presentación de platos. Te ayudaremos a comprender los secretos de cada cocina y a crear platos auténticos en tu propio hogar.
            </div>
            <img className="chef-photo" src="https://www.eldiario24.com/d24ar/fotos/notas/2020/10/20/461204_20201020061304.jpg" alt="" />
            </article>

            <h1>No hay comida sin historia</h1>
            <article className="chef-final-article">
            <div className="chef-text text">
            Nuestro blog no se trata solo de recetas, también exploramos la historia y la cultura detrás de cada plato. Te contaremos las historias fascinantes de los ingredientes, las tradiciones culinarias y los festivales de comida en diferentes partes del mundo.
            </div>
            <div className="article-two-columns">
            <img className="chef-photo" src="https://media.istockphoto.com/id/163807674/es/foto/cocina-internacional.jpg?s=612x612&w=0&k=20&c=vzVod_CFpXt5-67UqY4cvxsletYkPkwUIN8fHA5M5Jo=" alt="" />
            <div className="chef-text text">
            ¿Quieres aprender a hacer auténticos tacos mexicanos? ¿O tal vez estás interesado en descubrir los secretos de la pasta fresca italiana? No importa cuál sea tu interés culinario, estamos aquí para guiarte y ayudarte a expandir tus horizontes gastronómicos.
            </div>
            </div>
            <div className="chef-text text">
            Prepárate para explorar nuevos sabores, experimentar en la cocina y disfrutar de la comida internacional en todo su esplendor. Suscríbete a nuestra lista de correo para recibir actualizaciones regulares y no te pierdas ninguna de nuestras deliciosas recetas y artículos.
            </div>
            </article>
            <h1>No dudes más, visitanos, ven a disfrutar!</h1>
            </section>
        </>
    )
}