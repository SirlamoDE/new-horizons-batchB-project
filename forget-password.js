import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js';
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkK0eqZtW2FOJuKazfWVTOkfc2Nb4MpAA",
  authDomain: "new-horizons-4ad99.firebaseapp.com",
  projectId: "new-horizons-4ad99",
  storageBucket: "new-horizons-4ad99.firebasestorage.app",
  messagingSenderId: "619399627226",
  appId: "1:619399627226:web:5be54fac4802f4227f80e3"
};

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