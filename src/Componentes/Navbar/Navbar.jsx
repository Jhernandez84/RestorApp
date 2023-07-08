import { NavLink } from "react-router-dom"
import swal from "sweetalert"   
import { useState } from "react"
import { auth, db, provider } from "../Firebase/firebase"
import { signInWithPopup } from "firebase/auth"
import './styles.css'

export const Navbar = () =>{

    const [user, setUser] = useState(null)
    
    const login = (e)=> {
        e.preventDefault()
        signInWithPopup(auth,provider).then(({user})=>{
            console.log(user)
            setUser({id:user.id,
            name:user.displayName,
            foto:user.photoURL
            }) 
        })

    }
    
    const logOut = ()=> {
        setUser(null)
      }

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
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
                <NavLink className="nav-link active" aria-current="page" to="/Reservas">Reservas Socios</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/NuestroBlog">Nuestro Blog</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Contacto">Contacto</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Admin">Administrador</NavLink>
                </li>
            </ul>

            <form className="d-flex" role="search">
            {user? (<>
        <div className="cont-login">
            <img className="img-user" src={user.foto} alt={user.name} />
            <p>Bienvenid@ {user.name}</p>
            <button className="btn" onClick={logOut}>Cerrar sesión</button>



        </div>
            </>
            ):(
            <button className="btn" onClick={login}>Iniciar sesión</button>
    )
    }

                {/* <button className="btn" onClick={IniciarSesion} type="">Iniciar Sesión</button> */}
            </form>
            </div>
        </div>
        </nav>
    </>
    )
}