import firebase from 'firebase/app'
import 'firebase/storage'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBbSiSVUty7nqh1nKL_eT_liUCpY0jDkxs",
    authDomain: "hospitalwebsite-a9267.firebaseapp.com",
    projectId: "hospitalwebsite-a9267",
    storageBucket: "hospitalwebsite-a9267.appspot.com",
    messagingSenderId: "336534135265",
    appId: "1:336534135265:web:d3fb62e81b5ecd98c872a0",
    measurementId: "G-JS08S45CT2"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export  {
    storage, app as default
}