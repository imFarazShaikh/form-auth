// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc1UNXcsg6pn6k2UE-omUmkni9S4gCygA",
  authDomain: "learning-firbase-b03a5.firebaseapp.com",
  projectId: "learning-firbase-b03a5",
  storageBucket: "learning-firbase-b03a5.appspot.com",
  messagingSenderId: "1033411319641",
  appId: "1:1033411319641:web:44b3d9941d7c8998b29e48",
  measurementId: "G-FRPXDSKV1F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
var email = document.querySelector("#signup-email");
var password = document.querySelector("#signup-password");



// Signed in

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export {
  app,
  db,
  analytics,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  email,
  password,
  deleteUser,
  signOut,
  onAuthStateChanged
  
};
