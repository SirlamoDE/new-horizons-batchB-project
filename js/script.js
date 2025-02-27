function toggleMenu() {
    let menu = document.getElementById("mobileMenu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}

// scroll-to-top 
document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollToTop");

    // Show button when user scrolls down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    // Scroll to top when button is clicked
    scrollBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
