// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

// Add the Firebase services that you want to use
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"; 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkK0eqZtW2FOJuKazfWVTOkfc2Nb4MpAA",
  authDomain: "new-horizons-4ad99.firebaseapp.com",
  projectId: "new-horizons-4ad99",
  storageBucket: "new-horizons-4ad99.firebasestorage.app",
  messagingSenderId: "619399627226",
  appId: "1:619399627226:web:5be54fac4802f4227f80e3"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the auth object
const auth = getAuth(firebaseApp);

// Add listener for authentication state changes

onAuthStateChanged(auth, user => {
  if (user !== null) {
    
    console.log("User signed in:", user);
  } else {
    // User is signed out
    console.log("User signed out");
  }
});
