// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnfLk9cD6hn0aLqILnsEdmoJ-A4ejdYTg",
  authDomain: "netflixgpt-c97c4.firebaseapp.com",
  projectId: "netflixgpt-c97c4",
  storageBucket: "netflixgpt-c97c4.appspot.com",
  messagingSenderId: "90020321606",
  appId: "1:90020321606:web:5c634ae1899c437cc5ad47",
  measurementId: "G-2KLRN1Q39Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export  const auth = getAuth();