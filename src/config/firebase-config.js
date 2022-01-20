// import firebase from "firebase"; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getDatabase } from "firebase/database";

import * as firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBW25WEA5V38hENOWASvpaceQY5A1M5diU",
    authDomain: "hotelmanagementhackathon.firebaseapp.com",
    projectId: "hotelmanagementhackathon",
    storageBucket: "hotelmanagementhackathon.appspot.com",
    messagingSenderId: "79931828304",
    appId: "1:79931828304:web:b553052a00965f9c420955",
    measurementId: "G-LBW2THGEZB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const fire = firebase.initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getDatabase(app);

  export {db,auth,app,fire}

  // export default fire;
