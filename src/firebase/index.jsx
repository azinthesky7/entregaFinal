// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "@firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyC43th4m01C92HJgnrJudfRwlS8gL-BAfw",
  authDomain: "proyectofinal-c0976.firebaseapp.com",
  projectId: "proyectofinal-c0976",
  storageBucket: "proyectofinal-c0976.appspot.com",
  messagingSenderId: "504038627925",
  appId: "1:504038627925:web:10e255ce6ee5c5ce8892dc",
  measurementId: "G-5SFGRYLWBY"
});


export const getfirestore = () =>{
return firebase.firestore(app);
}
// Initialize Firebase

const analytics = getAnalytics(app);