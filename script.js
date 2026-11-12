const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

themeToggle.addEventListener("click", () => {

    const isDark = body.getAttribute("data-theme") === "dark";

    if (isDark) {
        body.setAttribute("data-theme", "light");
        themeIcon.className = "bi bi-moon-stars-fill";
    } else {
        body.setAttribute("data-theme", "dark");
        themeIcon.className = "bi bi-sun-fill";
    }

});


// Dynamic Navbar Height
const responsiveNavbar = document.querySelector(".navbar");
const mobileMenu = document.querySelector("#navbarSupportedContent");

function updateNavbarHeight() {
    const height = responsiveNavbar.offsetHeight;

    document.body.style.paddingTop = `${height}px`;
}

// Initial height
updateNavbarHeight();

// Observe navbar height changes
const navbarResizeObserver = new ResizeObserver(() => {
    updateNavbarHeight();
});

navbarResizeObserver.observe(responsiveNavbar);

// Bootstrap mobile menu events
mobileMenu.addEventListener("shown.bs.collapse", () => {
    requestAnimationFrame(updateNavbarHeight);
});

mobileMenu.addEventListener("hidden.bs.collapse", () => {
    requestAnimationFrame(updateNavbarHeight);
});

// Window resize
window.addEventListener("resize", updateNavbarHeight);
