// Menu icon functionality
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close menu when clicking a nav link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageStatus = document.getElementById('messageStatus');
    
    // Here you would typically send this data to your backend server
    // For now, we'll just show a success message
    messageStatus.textContent = 'Message sent successfully!';
    messageStatus.className = 'message-status success';
    
    // Clear the form
    this.reset();
    
    // Hide the success message after 5 seconds
    setTimeout(() => {
        messageStatus.className = 'message-status';
    }, 5000);
});
