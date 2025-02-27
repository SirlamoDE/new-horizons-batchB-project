import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js';
import { firebaseConfig } from './config.js';
import dotenv from 'dotenv';
import CryptoJS from 'crypto-js';

dotenv.config();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const regButton = document.getElementById('create-account-btn');

if (regButton) {
  regButton.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = JSON.stringify({ uid: user.uid, email: user.email });
        const encryptedUserData = CryptoJS.AES.encrypt(userData, process.env.SECRET_KEY).toString();

        localStorage.setItem('user', encryptedUserData);

        setTimeout(() => {
          alert(`Welcome, ${user.email} was successfully registered. Click "OK" to Continue...`);
          window.location.href = './log-in.html';
        }, 3000);

      })
      .catch((error) => {
        console.error('Error creating user:', error);
        alert(`Registration Failed: ${error.message}`);
      });

    // Reset form fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  });
}