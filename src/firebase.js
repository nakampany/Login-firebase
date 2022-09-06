
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3NNsv2dnq7yGkuwUULUy5431s9-fZghM",
  authDomain: "fir-login-c6eb4.firebaseapp.com",
  projectId: "fir-login-c6eb4",
  storageBucket: "fir-login-c6eb4.appspot.com",
  messagingSenderId: "736975280788",
  appId: "1:736975280788:web:aaef2faf5470dba3f57281"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};