import { MenuCardGenerator } from "../Menu/MenuCardGenerator"
import { Footer } from "../Header-Footer/Footer"
import { db } from "../Firebase/firebase"
import {useState, useEffect } from "react"
import "./styles.css"

<link rel="stylesheet" href="style.css" />

export const MenuPage = () =>{
    const [menu, setMenu] = useState([])
    
    useEffect(()=>{
        const menu = GetMenu()
        // console.log(menu)
    },[])

    const GetMenu = async () =>{
            db.collection('menu').onSnapshot((querySnapshot)=>{
            const menus = []
            querySnapshot.forEach((menu)=> {
            menus.push({...menu.data(), id:menu.id})
          })
          setMenu(menus)
        })
        return menu
      }

    return (
        <>
        <h1>Te invitamos a conocer nuestro Menú</h1>
        <div className="card-container">
            {menu.map((menu)=>( <MenuCardGenerator menu={menu} key={menu.id}/>))}
        </div>
        <Footer/>
        </>
    )
}