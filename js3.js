document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const loginTrigger = document.getElementById('login-trigger');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.getElementById('close-modal');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active'); // For the X animation
        // Optional: Disable scrolling when menu is open
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when a navigation link is clicked
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // Login modal open
    loginTrigger.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        loginModal.classList.add('active');
        document.body.classList.add('no-scroll'); // Disable scrolling when modal is open
    });

    // Login modal close via close button
    closeModal.addEventListener('click', () => {
        loginModal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });

    // Login modal close when clicking outside of the modal content
    loginModal.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


