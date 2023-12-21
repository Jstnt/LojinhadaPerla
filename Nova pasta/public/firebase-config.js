// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6SWwBW3CW5syPbrgZN7Yd5-AsmgrR3DQ",
  authDomain: "lojinha-da-perla-812d0.firebaseapp.com",
  projectId: "lojinha-da-perla-812d0",
  storageBucket: "lojinha-da-perla-812d0.appspot.com",
  messagingSenderId: "621404860009",
  appId: "1:621404860009:web:3709cf0b20bd10bf473cf8",
  measurementId: "G-PPLN72HLB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);