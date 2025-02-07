
window.addEventListener('load', function() {
    alert('Welcome to Foodtuck! We are happy to serve you!');
});

const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('click', function() {
        alert(`This is ${member.querySelector('h4').textContent}`);
    });
});
