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
} from "./firebase.js";

const signout = document.querySelector("#sign-out");
const user = auth.currentUser;
// sigout

if (signout) {
  signout.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("ok");

    signOut(user)
      .then(() => {
        // User deleted.
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
    window.location.pathname = "/index.html";
  });
} else {
  console.error("Element not found");
}
