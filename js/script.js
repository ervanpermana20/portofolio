document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");

    if (toggleBtn && navMenu) {
        // Toggle menu navigasi seluler
        toggleBtn.addEventListener("click", function() {
            const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
            toggleBtn.setAttribute("aria-expanded", !isExpanded);
            navMenu.classList.toggle("active");
        });

        // Tutup menu secara otomatis saat salah satu link diklik
        const navLinks = navMenu.querySelectorAll("a");
        navLinks.forEach(function(link) {
            link.addEventListener("click", function() {
                if (navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                    toggleBtn.setAttribute("aria-expanded", "false");
                }
            });
        });
    }
});
