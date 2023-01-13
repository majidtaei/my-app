// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvHoKQh0tjs_u9PYZ9pxI9l-fBngkkUL0",
  authDomain: "my-app-60f65.firebaseapp.com",
  projectId: "my-app-60f65",
  storageBucket: "my-app-60f65.appspot.com",
  messagingSenderId: "402452484093",
  appId: "1:402452484093:web:91a7fb7bc4d248db7f9394"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();