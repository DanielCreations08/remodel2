document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const modal = document.getElementById("modal");
    const modalImage = modal.querySelector("img");
    const modalClose = modal.querySelector(".modal-close");

    // Filter Logic
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");
            portfolioItems.forEach(item => {
                item.style.display = (filter === "all" || item.classList.contains(filter)) ? "block" : "none";
            });
        });
    });

    // Modal Logic
    portfolioItems.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.querySelector("img").src;
            modalImage.src = imgSrc;
            modal.classList.add("active");
        });
    });

    modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    // Like Button Logic
    const likeButtons = document.querySelectorAll(".like-button");
    likeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent opening modal
            const likeCount = button.querySelector("span");
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });
});