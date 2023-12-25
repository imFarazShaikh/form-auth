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

const loginForm = document.querySelector(".login-card");

if (loginForm) {
    loginForm.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("ok");
      window.location.pathname = "/welcome.html";
      
      signOut(user)
        .then(() => {
          // User deleted.
        })
        .catch((error) => {
          // An error ocurred
          // ...
        });
        
  
      
    });
  } else {
    console.error("Element not found");
  }
  