// import firebase from "firebase"; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getDatabase } from "firebase/database";

import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDexbqmHK7b1hoP9N-Tsal65I1U7VFjnqI",
  authDomain: "hotel-management-system-14e06.firebaseapp.com",
  projectId: "hotel-management-system-14e06",
  storageBucket: "hotel-management-system-14e06.appspot.com",
  messagingSenderId: "379350889090",
  appId: "1:379350889090:web:eb0726c8425fa115547a9b",
  measurementId: "G-WTY728EGSE"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const fire = firebase.initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getDatabase(app);

  export {db,auth,app,fire}

  // export default fire;


























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDexbqmHK7b1hoP9N-Tsal65I1U7VFjnqI",
//   authDomain: "hotel-management-system-14e06.firebaseapp.com",
//   projectId: "hotel-management-system-14e06",
//   storageBucket: "hotel-management-system-14e06.appspot.com",
//   messagingSenderId: "379350889090",
//   appId: "1:379350889090:web:eb0726c8425fa115547a9b",
//   measurementId: "G-WTY728EGSE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);