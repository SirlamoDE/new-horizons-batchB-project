
## ResycLink: Sustainable Recycling Platform

### Project Overview
ResycLink is a web application designed to promote sustainable recycling practices by connecting users with local recycling points and providing incentives for eco-conscious actions.
The platform aims to educate users about the importance of recycling, facilitate the recycling process, and reward users for their contributions to a greener future.

This is a group project of batch-B Web Development students at New-Horizons Computer Education, which I was actively a part of.

### Key Features
1. **User Authentication**: Secure user authentication using Firebase Authentication, allowing users to sign in, create accounts, and reset passwords.
2. **Responsive Design**: A user-friendly interface that adapts to various screen sizes, ensuring a seamless experience across devices.
3. **Educational Content**: Informative sections that highlight the importance of recycling and provide tips on how to recycle effectively.
4. **Incentive Program**: A rewards system that encourages users to participate in recycling activities and earn points for their eco-friendly actions.
5. **Local Recycling Points**: A search feature that helps users find nearby recycling points, making it easier to dispose of recyclable materials responsibly.

### Technical Details
- **Frontend**: The frontend was built using HTML, CSS, and JavaScript, providing a clean and intuitive user interface.
- **Backend**: Firebase Authentication is used for secure user authentication, ensuring that user data is protected.
- **Environment Variables**: Sensitive information such as Firebase configuration is managed using environment variables, enhancing security and maintainability.
- **Local Storage**: User information is stored in the browser's local storage to maintain session state and provide a personalized experience.

### Code Highlights
- **User Authentication**: The log-in.js file handles user authentication, including sign-in, password reset, and user redirection.
- **Form Handling**: The sign-in form captures user input and authenticates the user using Firebase Authentication.
- **Redirection**: Authenticated users are redirected to the main application page, ensuring a smooth transition after login.

### Example Code Snippet
```javascript
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
  if (user) {
    setTimeout(() => {
      window.location.href = 'https://new-horizons-4ad99.web.app/';
    }, 3000);
  }
});
```

### Getting Started
To get started with ResycLink, clone the repository and follow the setup instructions in the README file. Ensure that you have the necessary environment variables configured for Firebase Authentication.

### Contributing
We welcome contributions from the community! If you would like to contribute to ResycLink, please fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

---
