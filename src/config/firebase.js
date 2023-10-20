// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRtgF6Rsm-2AEu9L_p-z0f_na587vPILg",
  authDomain: "how-good-is-your-memory.firebaseapp.com",
  projectId: "how-good-is-your-memory",
  storageBucket: "how-good-is-your-memory.appspot.com",
  messagingSenderId: "540569210588",
  appId: "1:540569210588:web:1de355098854ac77a8ee19",
  measurementId: "G-74ZNL8HBF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);