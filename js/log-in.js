import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js';
import { firebaseConfig } from './config.js';
import dotenv from 'dotenv';
import CryptoJS from 'crypto-js';

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
      const userData = JSON.stringify({ uid: user.uid, email: user.email });
      const encryptedUserData = CryptoJS.AES.encrypt(userData, process.env.SECRET_KEY).toString();

      localStorage.setItem('user', encryptedUserData);

      alert(`Welcome, ${user.email} was successfully logged in.`);
      window.location.href = 'https://new-horizons-4ad99.web.app/';
    })
    .catch((error) => {
      alert(`Login Failed: ${error.message}`);
    });
});

// Redirect user if already authenticated
onAuthStateChanged(auth, (user) => {
  if (user) {
    const encryptedUserData = localStorage.getItem('user');
    if (encryptedUserData) {
      const bytes = CryptoJS.AES.decrypt(encryptedUserData, process.env.SECRET_KEY);
      const decryptedUserData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      console.log(decryptedUserData); // { uid: user.uid, email: user.email }
    }

    setTimeout(() => {
      window.location.href = 'https://new-horizons-4ad99.web.app/';
    }, 300000);
  }
});