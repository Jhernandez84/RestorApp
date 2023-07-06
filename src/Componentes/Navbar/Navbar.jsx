import { NavLink } from "react-router-dom"
// import { login } from "../Firebase/Sesion"

export const Navbar = () =>{

    const IniciarSesion = (e) =>{
        e.preventDefault()
        
    }


    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">RestorApp</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/NuestroMenu">Nuestro Menú</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Reservas">Reservas</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/NuestroBlog">Nuestro Blog</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Contacto">Contacto</NavLink>
                </li>
            </ul>
            
            <form className="d-flex" role="search">
                {/* <button className="btn" onClick={login} type="">Iniciar Sesión</button> */}
            </form>
            </div>
        </div>
        </nav>
    </>
    )
}