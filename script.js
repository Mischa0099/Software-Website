window.addEventListener('scroll', function() {
    const overlay = document.querySelector('.overlay');
    const image = document.querySelector('.image-container img');

    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        overlay.style.transform = 'translateY(100%)';
        image.classList.add('fade-out'); // Apply fade-out animation
    } else {
        overlay.style.transform = 'translateY(0)';
        image.classList.remove('fade-out'); // Remove fade-out animation
    }
});

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('http://localhost:5000/api/customers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (response.ok) {
        document.getElementById('response-message').innerText = 'Thank you for your message!';
    } else {
        document.getElementById('response-message').innerText = `Error: ${result.error}`;
    }
});
