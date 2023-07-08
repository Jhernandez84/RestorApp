import { useState } from "react"
import { db } from "../Firebase/firebase"

    // id: "1",
    //     imagen: "https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage108081050-50-pennericotta4-min.JPG",
    //     nombre:"Salsa Marinara",
    //     chef:"Gordon Ramsay",
    //     estrellas:"⭐️⭐️⭐️⭐️",
    //     descripcion:"El plato del buen comer facilita la identificación de los tres grupos de alimentos (verduras y frutas, cereales y tubérculos, leguminosas y proteínas de origen animal).",
    //     valor: "15.390",
    
    export const GetMenu = async () =>{
        const [menu, setMenu] = useState([])
            
        db.collection('menu').onSnapshot((querySnapshot)=>{
          const menus = []
          querySnapshot.forEach((menu)=> {
            menus.push({...menu.data(), id:menu.id})
          })
          setMenu(menus)
        })
        return menu
      }