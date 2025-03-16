// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;

    // Function to show slides
    function showSlides() {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hide all slides
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1; // Loop back to the first slide
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block"; // Show the current slide
        dots[slideIndex - 1].className += " active";

        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    // Function to manually change slides
    window.plusSlides = function (n) {
        slideIndex += n - 1; // Adjust slideIndex for manual navigation
        showSlides();
    };

    // Function to go to a specific slide
    window.currentSlide = function (n) {
        slideIndex = n - 1; // Set slideIndex to the specific slide
        showSlides();
    };

    // Start the slideshow
    showSlides();

    // Blog card animations
    const blogCards = document.querySelectorAll('.blog-card');

    const observerOptions = {
        threshold: 0.3 // Trigger animation when 10% of the element is visible
    };

    const blogObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add animation class
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Observe each blog card
    blogCards.forEach(card => {
        blogObserver.observe(card);
    });
    // Add 3D animations for blog cards
    blogCards.forEach(card => {
        card.style.transition = 'transform 1s ease, opacity 1s ease';
        card.style.transformStyle = 'preserve-3d';
    });

    // Define CSS class for 3D animation
    const style = document.createElement('style');
    style.textContent = `
        .blog-card.animate {
            transform: rotateY(360deg);
            opacity: 1;
        }
        .blog-card {
            transform: rotateY(0deg);
            opacity: 0;
        }
    `;
    document.head.appendChild(style);

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Handle Call-to-Action button clicks
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your interest! Our team will contact you shortly.');
        });
    });

    // Link to Sherwin-Williams Color Tool
    const colorToolSection = document.getElementById('color-tool');
    if (colorToolSection) {
        const existingButton = colorToolSection.querySelector('.cta-button');
        if (!existingButton) {
            const colorToolButton = document.createElement('a');
            colorToolButton.href = 'https://www.sherwin-williams.com/visualizer';
            colorToolButton.target = '_blank';
            colorToolButton.textContent = 'Try the Sherwin-Williams Color Tool';
            colorToolButton.classList.add('cta-button');

            colorToolSection.appendChild(colorToolButton);
        }
    }

    // Add Social Media and Contact Links with Icons (using Font Awesome)
    const footer = document.querySelector('footer');
    if (footer && !footer.querySelector('.social-media')) {
        footer.insertAdjacentHTML('beforeend', `
            <div class="social-media">
                <a href="https://www.facebook.com/remodelwithsilva" target="_blank">
                    <i class="fab fa-facebook-square" style="font-size:24px; color:#3b5998;"></i> Facebook
                </a> |
                <a href="https://www.instagram.com/remodelwithsilva/" target="_blank">
                    <i class="fab fa-instagram" style="font-size:24px; color:#C13584;"></i> Instagram
                </a> |
                <a href="https://www.linkedin.com/in/cristobal-silva/" target="_blank">
                    <i class="fab fa-linkedin" style="font-size:24px; color:#0077b5;"></i> LinkedIn
                </a>
            </div>
            <div class="contact-info">
                <p>
                    <i class="fas fa-envelope" style="font-size:24px; color:#dd4b39;"></i>
                    Email: <a href="mailto:remodelwithsilva@gmail.com">remodelwithsilva@gmail.com</a>
                </p>
                <p>
                    <i class="fas fa-phone" style="font-size:24px; color:#34b7f1;"></i>
                    Phone: <a href="tel:+17082707794">708-270-7794</a>
                </p>
            </div>
        `);
    }
});

