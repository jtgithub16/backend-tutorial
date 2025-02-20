import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp, getApps, getApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCXo97oEQYXrccSm221eomk0IUP_l-MGqg",
    authDomain: "internal-project-22ae3.firebaseapp.com",
    projectId: "internal-project-22ae3",
    storageBucket: "internal-project-22ae3.appspot.com",
    messagingSenderId: "290677434670",
    appId: "1:290677434670:web:58733c8d29c3c6ab9d32bf"
  };
  
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default firebase;