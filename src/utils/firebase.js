// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV_8aPA0TL2BCkVMU4aD5B4KJwdReGr1w",
  authDomain: "netflix-gpt-7f038.firebaseapp.com",
  projectId: "netflix-gpt-7f038",
  storageBucket: "netflix-gpt-7f038.appspot.com",
  messagingSenderId: "1034231378472",
  appId: "1:1034231378472:web:16553818bcb70431d17b1d",
  measurementId: "G-QB31D7EBBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// as it needed again-2 in every api we keep it in centeral place to access any where rather then writing again and again
export const auth = getAuth();