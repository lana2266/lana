document.addEventListener("DOMContentLoaded", function() {
    // ქუქის შეტყობინება
    const cookieNotification = document.getElementById("cookie-notification");
    const acceptCookieBtn = document.getElementById("accept-cookie");

  
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieNotification.style.display = "block";
    }


    acceptCookieBtn.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieNotification.style.display = "none";
    });


    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.getElementById("readMoreBtn").addEventListener("click", function() {
    window.location.href = "about.html";
});





    