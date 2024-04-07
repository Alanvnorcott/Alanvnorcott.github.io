"use strict";
//portfolio.ts
document.addEventListener('DOMContentLoaded', function () {
    // Hide all sections except the home section initially
    var sections = document.querySelectorAll('main section:not(#home)');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
    // Handle navigation clicks
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var _a;
            event.preventDefault();
            var targetId = (_a = link.getAttribute('href')) !== null && _a !== void 0 ? _a : null; // Use nullish coalescing operator (??)
            var targetSection = document.getElementById(targetId); // Assert type
            // Safely handle the possibility of targetId and targetSection being null
            if (targetId && targetSection) { // Check both targetId and targetSection before proceeding
                // Hide all sections except the target section
                sections.forEach(function (section) {
                    if (section !== targetSection) {
                        section.style.display = 'none';
                    }
                });
                // Show the target section
                targetSection.style.display = 'block';
            }
            else {
                console.error("Element with ID ".concat(targetId, " not found at all."));
            }
        });
    });
});
//# sourceMappingURL=portfolio.js.map