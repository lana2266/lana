
// ვარსკვალვის მონიშვნა
const stars = document.querySelectorAll('.star');
let selectedRating = 0;


stars.forEach(star => {
    star.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-value');
        updateStarDisplay();
    });
});


function updateStarDisplay() {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= selectedRating) {
            star.innerHTML = '&#9733;'; 
        } else {
            star.innerHTML = '&#9734;'; 
        }
    });
}

document.getElementById('submit-review').addEventListener('click', function() {
    const reviewText = document.getElementById('review-text').value;
    const experience = document.querySelector('input[name="experience"]:checked')?.value;
    const favoriteFood = document.getElementById('favorite-food').value;

    if (selectedRating === 0 || !reviewText || !experience || !favoriteFood) {
        alert('Please fill out all the fields!');
        return;
    }

    const confirmationMessage = `
        Thank you for your feedback!<br>
        Rating: ${selectedRating} Stars<br>
        Experience: ${experience}<br>
        Favorite Dish: ${favoriteFood}<br>
        Your Review: ${reviewText}
    `;

    document.querySelector('.confirmation-message').innerHTML = confirmationMessage;


    resetForm();
})


function resetForm() {
    stars.forEach(star => star.innerHTML = '&#9734;'); 
    selectedRating = 0;
    document.getElementById('review-text').value = '';
    document.querySelector('input[name="experience"]:checked')?.checked = false;
    document.getElementById('favorite-food').selectedIndex = 0;
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
}

