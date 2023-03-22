// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIkt3YIelrICdaGwPJVLCXCmRTSdGJ0pI",
  authDomain: "gettingstartedwithfireba-3815b.firebaseapp.com",
  databaseURL: "https://gettingstartedwithfireba-3815b-default-rtdb.firebaseio.com",
  projectId: "gettingstartedwithfireba-3815b",
  storageBucket: "gettingstartedwithfireba-3815b.appspot.com",
  messagingSenderId: "23812251569",
  appId: "1:23812251569:web:20cdac7d0ec133eb952790",
  measurementId: "G-GX3TVTQJ0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)