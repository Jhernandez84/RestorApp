import { MenuCardGenerator } from "../Menu/MenuCardGenerator"
import { Menu } from "../Menu/MenuDB"

<link rel="stylesheet" href="style.css" />

export const MenuPage = (Menu) =>{
    const menu = [{
        id: "1",
        imagen: "https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage108081050-50-pennericotta4-min.JPG",
        nombre:"Salsa Marinara",
        chef:"Gordon Ramsay",
        estrellas:"⭐️⭐️⭐️⭐️",
        descripcion:"Plato 1",
    },{
        id: "2",
        imagen: "https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage108081050-50-pennericotta4-min.JPG",
        nombre:"Gazpacho de espárragos verdes",
        chef:"Jean-François Rouquette",
        estrellas:"⭐️⭐️⭐️⭐️⭐️",
        descripcion:"Plato 2",
    },{
        id: "3",
        imagen: "https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage108081050-50-pennericotta4-min.JPG",
        nombre:"Espaguetti con guisantes verdes y jamón ibérico",
        chef:"Stéphanie Le Quellec",
        estrellas:"⭐️⭐️⭐️⭐️⭐️",
        descripcion:"Plato 3",
    },{
        id: "4",
        imagen: "https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage108081050-50-pennericotta4-min.JPG",
        nombre:"Sopa de Guisantes",
        chef:"Emma Bengtsson",
        estrellas:"⭐️⭐️⭐️",
        descripcion:"Plato 4",
    },{
        id: "5",
        imagen: "https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage108081050-50-pennericotta4-min.JPG",
        nombre:"Gambas al ajillo",
        chef:"Rubén Mosquero",
        estrellas:"⭐️⭐️⭐️⭐️⭐️",
        descripcion:"Plato 4",
    },{
        id: "6",
        imagen: "https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage108081050-50-pennericotta4-min.JPG",
        nombre:"Panacotta con café",
        chef:"Guy Lassausaie",
        estrellas:"⭐️⭐️⭐️⭐️",
        descripcion:"Plato 4",
    }]
    
    return (
        <>
        <h2>Te invitamos a conocer nuestro Menú</h2>
        <div className="container">
            <div className="row row-cols-2">
            {menu.map((menu)=>( <MenuCardGenerator menu={menu} key={menu.id}/>))}
            </div>
        </div>
        </>
    )
}