// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});


// Animate skill progress bars on scroll
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            bar.style.width = bar.dataset.width;
        });
    }
});


// Hero Slider
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 9000);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.classList.remove('prev');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('prev');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

next.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prev.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

function resetInterval() {
    clearInterval(slideInterval);
    setInterval(nextSlide, 9000);
}

// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! I will get back to you soon.');
    document.getElementById('contact-form').reset();
});

// JavaScript to add 'in-view' class when CTA section is in the viewport
document.addEventListener('scroll', function () {
    const ctaSection = document.querySelector('.cta-section');
    const ctaContent = document.querySelector('.cta-content');
    const ctaSectionPosition = ctaSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (ctaSectionPosition < screenPosition) {
        ctaSection.classList.add('in-view');
    }
});


