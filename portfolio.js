"use strict";
// portfolio.ts -- TYPESCRIPT
// Function to toggle project information visibility
function toggleProject(projectId) {
    var projectInfo = document.getElementById(projectId);
    if (projectInfo) {
        if (projectInfo.classList.contains('hidden')) {
            projectInfo.style.display = 'block'; // Show the project info
            setTimeout(function () {
                projectInfo.classList.remove('hidden');
            }, 10); // Delay to ensure the display property is updated before removing 'hidden'
        }
        else {
            projectInfo.classList.add('hidden');
            setTimeout(function () {
                projectInfo.style.display = 'none'; // Hide the project info after animation
            }, 100); // Adjust based on your animation duration
        }
    }
}
function flyPaperAirplane() {
    var airplane = document.querySelector('.paper-airplane');
    if (airplane) {
        // Adjust the animation duration (e.g., 8 seconds)
        var animationDuration = 8; // in seconds
        // Enable animation with adjusted duration
        airplane.style.animation = "glide ".concat(animationDuration, "s forwards");
        // After animation completes, reset position
        setTimeout(function () {
            if (airplane) {
                airplane.style.animation = 'none'; // Disable animation
                airplane.style.transform = 'translate(0, 0)'; // Reset position
            }
        }, animationDuration * 1000); // Convert animation duration to milliseconds
    }
}
// Generate random particles
var particleContainer = document.querySelector('.particles');
for (var i = 0; i < 50; i++) {
    var particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.setProperty('--x', Math.random().toString()); // Randomize horizontal position
    particle.style.animationDuration = "".concat(Math.random() * 3 + 5, "s"); // Randomize falling speed
    particle.style.width = "".concat(Math.random() * 4 + 1, "px"); // Randomize particle size
    particle.style.height = particle.style.width; // Keep particle proportions
    particle.style.top = "".concat(Math.random() * 100, "vh"); // Randomize vertical position
    particle.style.left = "".concat(Math.random() * 100, "vw"); // Randomize horizontal position
    particleContainer.appendChild(particle);
}
// Function to reveal or hide contact information with fade animation
function revealContactInfo(iconElement) {
    var textElement = iconElement.nextElementSibling;
    if (textElement && textElement.classList.contains('contact-info')) {
        if (textElement.classList.contains('hidden')) {
            // Reveal the contact information
            textElement.classList.remove('hidden');
            textElement.style.opacity = '0'; // Set initial opacity to 0 (invisible)
            var opacity_1 = 0;
            var intervalId_1 = setInterval(function () {
                opacity_1 += 0.1; // Increase opacity gradually
                textElement.style.opacity = opacity_1.toString();
                if (opacity_1 >= 1) {
                    clearInterval(intervalId_1); // Stop animation when opacity reaches 1
                }
            }, 50);
        }
        else {
            // Check if the element is visible before hiding it
            if (textElement.style.opacity === '1') {
                // Hide the contact information
                var opacity_2 = 1;
                var intervalId_2 = setInterval(function () {
                    opacity_2 -= 0.1; // Decrease opacity gradually
                    textElement.style.opacity = opacity_2.toString();
                    if (opacity_2 <= 0) {
                        clearInterval(intervalId_2); // Stop animation when opacity reaches 0
                        textElement.classList.add('hidden'); // Hide the element after animation
                    }
                }, 50);
            }
        }
    }
}
// Function to hide sections except the target section
function hideSections(targetSection) {
    var sections = document.querySelectorAll('main section:not(#home)');
    sections.forEach(function (section) {
        if (section !== targetSection) {
            section.style.display = 'none';
        }
    });
}
// Function to hide project information initially
function hideProjectInfo() {
    var projectInfo = document.querySelectorAll('.project-info');
    projectInfo.forEach(function (info) {
        info.style.display = 'none';
    });
}
// Event listener when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
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
            hideSections(document.querySelector('main section.contact-section')); // Hide other sections
        });
    }
    // Get the contact icon elements
    var contactIcons = document.querySelectorAll('.contact-icon');
    // Add click event listeners to contact icons
    contactIcons.forEach(function (icon) {
        var textElement = icon.nextElementSibling;
        if (textElement && textElement.classList.contains('contact-info')) {
            icon.addEventListener('click', function () {
                revealContactInfo(icon); // Call the typing animation function when clicked
            });
        }
    });
    // Get the project elements
    var projects = document.querySelectorAll('.project');
    // Add click event listeners to toggle project information
    projects.forEach(function (project) {
        project.addEventListener('click', function () {
            var projectId = project.dataset.projectId;
            if (projectId) {
                toggleProject(projectId); // Call the globally defined toggleProject function
            }
        });
    });
    // Hide project information initially
    hideProjectInfo();
});
//# sourceMappingURL=portfolio.js.map