document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Redirect to shop
            window.location.href = '/shop';
        } else {
            showError(data.error);
        }
    } catch (err) {
        showError('Something went wrong, please try again later.');
    }
});


function showError(message) {
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = message;
    errorMessage.style.display = "block";

    // Hide the error after 3 seconds
    setTimeout(function() {
        errorMessage.style.display = "none";
    }, 3000);
}