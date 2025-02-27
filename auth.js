

// Toggle password visibility
function togglePasswordVisibility(id) {
    let input = document.getElementById(id);
    if (!input) {
        console.error(`Element with id ${id} not found`);
        return;
    }
    input.type = input.type === "password" ? "text" : "password";
}



// Password strength checker
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput) {
        passwordInput.addEventListener("input", function() {
            let password = this.value;
            let strengthMeter = document.getElementById("strength-meter");
            let length = document.getElementById("length");
            let number = document.getElementById("number");
            let lowercase = document.getElementById("lowercase");
            let uppercase = document.getElementById("uppercase");
            let special = document.getElementById("special");

            let score = 0;
            if (password.length >= 12) { score += 20; length.style.color = "green"; }
            else { length.style.color = "red"; }

            if (/\d/.test(password)) { score += 20; number.style.color = "green"; }
            else { number.style.color = "red"; }

            if (/[a-z]/.test(password)) { score += 20; lowercase.style.color = "green"; }
            else { lowercase.style.color = "red"; }

            if (/[A-Z]/.test(password)) { score += 20; uppercase.style.color = "green"; }
            else { uppercase.style.color = "red"; }

            if (/[!@#$%^&*]/.test(password)) { score += 20; special.style.color = "green"; }
            else { special.style.color = "red"; }

            strengthMeter.value = score;
        });
    }
    
});

    
// Initialize Supabase
const SUPABASE_URL = "https://your-supabase-project.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function validatePasswords(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

document.getElementById('password').addEventListener('input', updateStrengthMeter);

// function updateStrengthMeter() {
//     var password = document.getElementById('password').value;
//     var strengthMeter = document.getElementById('strength-meter');
//     var strength = 0;

//     if (password.length >= 12) strength += 20;
//     if (/[0-9]/.test(password)) strength += 20;
//     if (/[a-z]/.test(password)) strength += 20;
//     if (/[A-Z]/.test(password)) strength += 20;
//     if (/[^a-zA-Z0-9]/.test(password)) strength += 20;

//     strengthMeter.value = strength;
// }

function validatePasswords(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
//registration and log-in capturing function
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    if (registerForm) {
        registerForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const phone = document.getElementById("phone").value;

            if (password !== confirmPassword) {
                console.error("Passwords do not match");
                // display an error message to the user
                return;
            }

            // Send the password to the server for hashing
            const hashedPassword = confirmPassword; // Placeholder, server will hash

            // Save the input values to Supabase
            const { data, error } = await supabase
                .from("users")
                .insert([{ username, first_name: firstName, last_name: lastName, email, phone, hashed_password: hashedPassword }]);

            // Handle the server response
            if (error) {
                console.error("Error inserting data:", error.message);
                // display an error message to the user
            } else {
                console.log("Data inserted successfully:", data);
                window.location.href = "login.html";
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
    
            try {
                const response = await fetch("/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });
    
                const data = await response.json();
                const messageElement = document.getElementById("login-message");
                if (messageElement) {
                    messageElement.textContent = data.message;
                    messageElement.style.display = "block";
                }
                if (!response.ok) {
                    throw new Error(`Server error: ${response.statusText}`);
                }
                localStorage.setItem("token", data.token);
                window.location.href = "index.html";
            } catch (error) {
                console.error("Network or server error:", error);
                alert("An error occurred. Please try again later.");
            }
        });
    }

    
               
});
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = "./login.html";
            //redirect to login page after 300ms
            // setTimeout(() => {
               
            // }, 300);
        });
    }
});