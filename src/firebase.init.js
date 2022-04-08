// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIfSZ_fPoYtes3M3fRVsvtDpZr2-gl8y8",
    authDomain: "authentication-firebase-router.firebaseapp.com",
    projectId: "authentication-firebase-router",
    storageBucket: "authentication-firebase-router.appspot.com",
    messagingSenderId: "743311543457",
    appId: "1:743311543457:web:f87432f52c99f1ac63b4e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;