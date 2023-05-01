import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBP0WkRcbm2wIlKvtpcPlvhi3B2qZb4wxY",
    authDomain: "react-notes-8d573.firebaseapp.com",
    projectId: "react-notes-8d573",
    storageBucket: "react-notes-8d573.appspot.com",
    messagingSenderId: "636730991137",
    appId: "1:636730991137:web:84443d221effd41a5fb960"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {
    auth
}

