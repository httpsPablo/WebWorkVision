// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.style.display === 'flex';
    
    if (isOpen) {
        mobileMenu.style.display = 'none';
        menuIcon.className = 'fas fa-bars';
    } else {
        mobileMenu.style.display = 'flex';
        menuIcon.className = 'fas fa-times';
    }
});

// Close mobile menu when clicking on links
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        menuIcon.className = 'fas fa-bars';
    });
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .about-card, .contact-form-container, .contact-info, .faq-item');
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Form validation
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all required fields.');
        return;
    }
    
    if (!isValidEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return;
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Service buttons functionality
const serviceButtons = document.querySelectorAll('.service-btn');

serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const serviceName = button.textContent.trim();
        
        // You can add specific functionality for each service here
        console.log(`${serviceName} button clicked`);
        
        // For now, scroll to contact section
        const contactSection = document.querySelector('#contact');
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = contactSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Add loading animation for form submission
contactForm.addEventListener('submit', (e) => {
    const submitButton = contactForm.querySelector('.form-submit');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Re-enable button after 3 seconds (in case of error)
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 3000);
});