"use strict";
//portfolio.ts
// Define the toggleProject function globally
function toggleProject(projectId) {
    var projectInfo = document.getElementById(projectId);
    if (projectInfo) {
        projectInfo.style.display = (projectInfo.style.display === 'none') ? 'block' : 'none';
    }
}
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
document.addEventListener('DOMContentLoaded', function () {
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
    // Function to hide all project information initially
    function hideProjectInfo() {
        var projectInfo = document.querySelectorAll('.project-info');
        projectInfo.forEach(function (info) {
            info.style.display = 'none';
        });
    }
    // Hide project information initially
    hideProjectInfo();
});
//# sourceMappingURL=portfolio.js.map