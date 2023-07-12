import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../Firebase/firebase"
import { useState } from "react"
    
    export function logIn(e) {
        e.preventDefault()

        signInWithPopup(auth,provider).then(({user})=>{
            console.log(user)
            setUser({id:user.id,
            name:user.displayName,
            foto:user.photoURL
            }) 
        })
        // return user
    }

    export const logOut = (e)=> {
        e.preventDefault()
        setUser(null)
    }