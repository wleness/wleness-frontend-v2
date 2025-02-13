import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpopiKa0iEIdwhWLKl8MSr2R9oPyPidq8",
  authDomain: "wleness-d8700.firebaseapp.com",
  projectId: "wleness-d8700",
  storageBucket: "wleness-d8700.appspot.com",
  messagingSenderId: "8952035558",
  appId: "1:8952035558:web:9f51250b90375cd5a66327",
  measurementId: "G-3C2DC95QVZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
