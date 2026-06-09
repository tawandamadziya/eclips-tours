// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Form Submission Handler =====
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!name || !email || !phone || service === 'Select Service' || !date || !passengers) {
        alert('Please fill in all required fields');
        return;
    }

    // Create booking details
    const bookingDetails = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Date: ${date}
        Passengers: ${passengers}
        Message: ${message}
    `;

    // Log the booking (in production, this would send to a backend)
    console.log('Booking Request:', bookingDetails);

    // Show success message
    showSuccessMessage();

    // Reset form
    this.reset();
});

// ===== Success Message Function =====
function showSuccessMessage() {
    const form = document.getElementById('bookingForm');
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
    successDiv.innerHTML = `
        <strong>Success!</strong> Your booking request has been received. We'll contact you shortly to confirm your reservation.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    form.insertAdjacentElement('beforebegin', successDiv);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ===== Navbar Background on Scroll =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(6, 13, 24, 0.96)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '';
    }
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Observe scenic cards
document.querySelectorAll('.scenic-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Observe fleet cards
document.querySelectorAll('.fleet-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Observe coverage cards and map
document.querySelectorAll('.route-stop-card, .route-map-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(el);
});

// ===== Counter Animation =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ===== Mobile Menu Close on Link Click =====
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// ===== Passenger Validation =====
document.getElementById('passengers').addEventListener('change', function() {
    const value = parseInt(this.value);
    if (value < 1) this.value = 1;
    if (value > 11) this.value = 11;
});

// ===== Date Validation (Prevent Past Dates) =====
document.getElementById('date').addEventListener('change', function() {
    const selectedDate = new Date(this.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        alert('Please select a future date');
        this.value = '';
    }
});

// ===== Set Minimum Date to Today =====
window.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
});

// ===== Scroll to Top Button (Optional Enhancement) =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-to-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #ffb347, #ff8a3d);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
        scrollTopBtn.style.alignItems = 'center';
        scrollTopBtn.style.justifyContent = 'center';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// ===== Whatsapp Integration (Optional) =====
function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const phone = '27614801614'; // Business WhatsApp number

    if (name && message) {
        const text = `Hi, I'm ${name}. ${message}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }
}

// ===== Page Load Animation =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ===== Prevent Form Submission without Data (Double Check) =====
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('invalid', function(e) {
        e.preventDefault();
        alert('Please fill in all required fields correctly');
    }, true);
}

console.log('Eclips Travels - Website loaded successfully!');
