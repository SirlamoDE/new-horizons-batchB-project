import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js';
import { firebaseConfig } from './config.js';
import dotenv from 'dotenv';

dotenv.config();


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const resetPasswordForm = document.getElementById('forgot-password-form');

resetPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('reset-email').value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('Password reset email sent! Check your inbox.');
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });

  // Reset form field
  document.getElementById('reset-email').value = '';
});