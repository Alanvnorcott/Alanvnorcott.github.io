"use strict";
//portfolio.ts
document.addEventListener('DOMContentLoaded', function () {
    // Function to hide all sections except the target section
    function hideSections(targetSection) {
        var sections = document.querySelectorAll('main section:not(#home)');
        sections.forEach(function (section) {
            if (section !== targetSection) {
                section.style.display = 'none';
            }
        });
    }
    // Get the buttons for navigation
    var aboutButton = document.getElementById('about-button');
    var projectsButton = document.getElementById('projects-button');
    var contactButton = document.getElementById('contact-button');
    // Add click event listeners to the buttons
    if (aboutButton) {
        aboutButton.addEventListener('click', function () {
            window.location.href = 'about.html'; // Navigate to the about page
        });
    }
    if (projectsButton) {
        projectsButton.addEventListener('click', function () {
            window.location.href = 'projects.html'; // Navigate to the projects page
        });
    }
    if (contactButton) {
        contactButton.addEventListener('click', function () {
            window.location.href = 'contact.html'; // Navigate to the contact page
        });
    }
});
//# sourceMappingURL=portfolio.js.map