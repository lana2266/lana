document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("form-message");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || password === "" || message === "") {
        formMessage.textContent = "All fields must be filled!";
        formMessage.style.color = "red";
        return;
    }

    if (!email.match(emailPattern)) {
        formMessage.textContent = "Enter a valid email!";
        formMessage.style.color = "red";
        return;
    }

    let passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

    if (!password.match(passwordPattern)) {
        formMessage.textContent = "Password must be at least 8 characters long, start with a capital letter, and contain at least one number!";
        formMessage.style.color = "red";
        return;
    }


    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
    this.reset();  
});


function togglePassword() {
    let passwordInput = document.getElementById("password");
    let eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text"; 
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password"; 
        eyeIcon.classList.remove("fa-eye-slash"); 
        eyeIcon.classList.add("fa-eye");
    }
}
