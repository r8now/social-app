// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR92Lk413l-eYQXyt7QsXBiHdpj8E_wCw",
  authDomain: "react-course-b35df.firebaseapp.com",
  projectId: "react-course-b35df",
  storageBucket: "react-course-b35df.appspot.com",
  messagingSenderId: "861179191517",
  appId: "1:861179191517:web:a0723535133e95298d7b34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
