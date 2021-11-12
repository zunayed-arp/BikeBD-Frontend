import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebae = () =>{
initializeApp(firebaseConfig)
}

export default initializeFirebae;