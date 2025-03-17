
// NAV BAR FUNCTION START (...)

function toggleMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var mobileMenuContainer = document.querySelector('.mobile-menu-container');
    mobileMenu.classList.toggle('show');
    mobileMenuContainer.style.display = mobileMenu.classList.contains('show') ? 'block' : 'none';
}

function closeMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var mobileMenuContainer = document.querySelector('.mobile-menu-container');
    mobileMenu.classList.remove('show');
    mobileMenuContainer.style.display = 'none';
}

// NAV BAR FUNCTION START (...)


// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper sliders with responsive settings
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow', // Coverflow effect for a 3D look
        loop: true, // Infinite loop
        autoplay: {
            delay: 5000, // Change slides every 5 seconds
            disableOnInteraction: false, // Continue autoplay after interaction
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        coverflowEffect: {
            rotate: 50, // Rotate angle for 3D effect
            stretch: 0, // No spacing between slides
            depth: 100, // Perspective depth
            modifier: 1, // Effect multiplier
            slideShadows: true, // Enable shadows for slides
        },
        breakpoints: {
            480: {
                slidesPerView: 1, // Single slide on small screens
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2, // Two slides on medium screens
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3, // Three slides on large screens
                spaceBetween: 30,
            },
        },
    });

    // Smooth scrolling for header buttons
    const buttons = document.querySelectorAll("header button");
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            const targetId = this.getAttribute("onclick").match(/#\w+/);
            if (targetId) {
                e.preventDefault();
                document.querySelector(targetId[0]).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Image hover effect in gallery (if applicable)
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(image => {
        image.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        image.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Dynamic Blog Content Loader (Optional Feature)
    const blogSection = document.getElementById("blog-section");
    if (blogSection) {
        const loadMoreBtn = document.createElement("button");
        loadMoreBtn.textContent = "Load More Blog Posts";
        loadMoreBtn.style.marginTop = "1rem";
        loadMoreBtn.style.padding = "0.8rem 1.5rem";
        loadMoreBtn.style.border = "none";
        loadMoreBtn.style.background = "#014aab";
        loadMoreBtn.style.color = "#fff";
        loadMoreBtn.style.cursor = "pointer";
        loadMoreBtn.style.borderRadius = "5px";
        loadMoreBtn.addEventListener("click", function () {
            alert("Additional blog posts will be loaded dynamically here.");
        });
        blogSection.appendChild(loadMoreBtn);
    }

});
