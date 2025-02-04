document.getElementById('burger-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

function togglePassword() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!name || !email || !password) {
        alert('All fields are required!');
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
});

async function fetchTestimonial() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    document.getElementById('testimonial').innerHTML = `${user.name.first} says: "This product is amazing!"`;
}

fetchTestimonial();
