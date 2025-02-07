document.getElementById("addReviewBtn").addEventListener("click", function() {
    document.getElementById("reviewForm").classList.toggle("hidden");
});

function submitReview() {
    let reviewText = document.getElementById("reviewText").value;
    let reviewerName = document.getElementById("reviewerName").value;

    if (reviewText === "" || reviewerName === "") {
        alert("Please enter both your review and name.");
        return;
    }

    let newReview = document.createElement("div");
    newReview.classList.add("review");
    newReview.innerHTML = `<p>"${reviewText}"</p><h4>⭐⭐⭐⭐⭐ - ${reviewerName}</h4>`;

    document.querySelector(".reviews-container").appendChild(newReview);

    document.getElementById("reviewText").value = "";
    document.getElementById("reviewerName").value = "";
    document.getElementById("reviewForm").classList.add("hidden");
}


