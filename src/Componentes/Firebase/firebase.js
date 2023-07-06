// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"; //estoy trayendo el módulo por defecto
import 'firebase/compat/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTX7Ngn5n25bfKHpP_eVqpggvAX8LgdwA",
  authDomain: "proyectocrud-763c1.firebaseapp.com",
  projectId: "proyectocrud-763c1",
  storageBucket: "proyectocrud-763c1.appspot.com",
  messagingSenderId: "734978907978",
  appId: "1:734978907978:web:63ec806af477219cdfebb3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();