import {
  app,
  db,
  analytics,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  password,
  deleteUser,
  signOut,
  onAuthStateChanged,
} from "./firebase.js";

const signupForm = document.querySelector(".signup-card");
const signout = document.querySelector("#sign-out");
const user = auth.currentUser;

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get user info
  var email = document.querySelector("#signup-email").value;
  var password = document.querySelector("#signup-password").value;

  // signup

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    window.location.pathname = "/welcome.html";
});



onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

console.log(user);
