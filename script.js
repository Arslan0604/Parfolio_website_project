// Add event listener to navigation links
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to contact form submit
document.querySelector('.contact form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add code here to send form data via email or API
});