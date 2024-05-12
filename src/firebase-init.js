// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1lavtOhid6AWd7aBmoDUlQVa_7u3vbWE",
  authDomain: "blogging-cf136.firebaseapp.com",
  projectId: "blogging-cf136",
  storageBucket: "blogging-cf136.appspot.com",
  messagingSenderId: "711102192254",
  appId: "1:711102192254:web:561198b361f99fec47162f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

