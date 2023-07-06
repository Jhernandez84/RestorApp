// // import { auth, db, provider } from './firebase.js'
// import { signInWithPopup } from 'firebase/auth'
// import { useState } from 'react'

// const [user, setUser] = useState(null)

// export const login = ()=> {    
//     signInWithPopup(auth,provider).then(({user})=>{
//         console.log(user)
//         setUser({id:user.id,
//         name:user.displayName,
//         foto:user.photoURL
//         }) 
//     })
//     }