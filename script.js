// Function of Hide and Show Password
document.getElementById("toggle").addEventListener("click", function () {
    var passwordInput = document.getElementById("password");
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
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