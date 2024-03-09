// Function of Hide and Show Password
var toggleIcon = document.getElementById("togglePassword");

toggleIcon.addEventListener("click", function () {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-solid", "fa-eye-slash");
        toggleIcon.classList.add("fa-solid", "fa-eye");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-solid", "fa-eye");
        toggleIcon.classList.add("fa-solid", "fa-eye-slash");
    }
});

// Validating submit Button 
document.getElementById("signInButton").addEventListener("click", function (event) {
    event.preventDefault();
    var usernameInput = document.getElementById("user").value;
    var passwordInput = document.getElementById("password").value;

    if (usernameInput.trim() !== "" && passwordInput.trim() !== "") {
                  document.getElementById("user").value = "";
        document.getElementById("password").value = "";
        alert("User login successful!");
    } else {
        alert("Please enter both username and password.");
    }
});