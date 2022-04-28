// Import the functions you need from the SDKs you need
import { getFirestore }  from "firebase/firestore";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCJLFVB9UlnObxG7mT3hEF6fjl2X7o_UE",
  authDomain: "venequeen-c51a3.firebaseapp.com",
  projectId: "venequeen-c51a3",
  storageBucket: "venequeen-c51a3.appspot.com",
  messagingSenderId: "1017325877328",
  appId: "1:1017325877328:web:e48144f76b6fe6e7c1b955"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;