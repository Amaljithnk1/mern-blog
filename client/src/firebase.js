// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f74e2.firebaseapp.com",
  projectId: "mern-blog-f74e2",
  storageBucket: "mern-blog-f74e2.appspot.com",
  messagingSenderId: "107200805147",
  appId: "1:107200805147:web:0022cfa9f1183062d2bbbe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);