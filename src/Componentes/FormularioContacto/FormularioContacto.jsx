import "./styles.css"
export const FormContacto = () =>{
    return (
        <>
        <section className="container-contacto">
            <div className="container-imagen">
                <img src="./src/Componentes/FormularioContacto/ImagenContacto.jpeg" alt="Imagen-Contacto"/>
            </div>

        <div className="container-formulario">
        <form>
        <div className="mb-2">
            <h1>¿Quieres hablar con nosotros, trabajar o saber más?</h1>
        
        <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        <div id="emailHelp" className="form-text">En este correo recibirás la confirmación</div>
        
        <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        <div id="emailHelp" className="form-text">En este correo recibirás la confirmación</div>

        <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        <div id="emailHelp" className="form-text">En este correo recibirás la confirmación</div>
        

        </div>

        <div className="mb-2 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
        </section>
       </> 
    )
}