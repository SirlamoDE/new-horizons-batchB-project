import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js';
import { firebaseConfig } from './config.js';
import dotenv from 'dotenv';

dotenv.config();


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// LOGIN Authentication
const signInButton = document.getElementById('sign-in-btn');
signInButton.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify({
        uid: user.uid, email: user.email
      }));

      alert(`Welcome, ${user.email} was successfully logged in.`);
      window.location.href = 'https://new-horizons-4ad99.web.app/';
    })
    .catch((error) => {
      alert(`Login Failed: ${error.message}`);
    });
});




// Redirect user if already authenticated
onAuthStateChanged(auth, (user) => {
  // const isNewUser = localStorage.getItem('isNewUser') === 'true';
 if (user) {
    setTimeout(() => {
      window.location.href = 'https://new-horizons-4ad99.web.app/';
    }, 300000);
  }
});