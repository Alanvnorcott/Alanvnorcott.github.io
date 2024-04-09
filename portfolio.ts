//portfolio.ts
document.addEventListener('DOMContentLoaded', () => {
    // Function to hide all sections except the target section
    function hideSections(targetSection: HTMLElement) {
        const sections: NodeListOf<HTMLElement> = document.querySelectorAll('main section:not(#home)');
        sections.forEach((section: HTMLElement) => {
            if (section !== targetSection) {
                section.style.display = 'none';
            }
        });
    }

    // Get the buttons for navigation
    const aboutButton: HTMLElement | null = document.getElementById('about-button');
    const projectsButton: HTMLElement | null = document.getElementById('projects-button');
    const contactButton: HTMLElement | null = document.getElementById('contact-button');

    // Add click event listeners to the buttons
    if (aboutButton) {
        aboutButton.addEventListener('click', () => {
            window.location.href = 'about.html'; // Navigate to the about page
        });
    }

    if (projectsButton) {
        projectsButton.addEventListener('click', () => {
            window.location.href = 'projects.html'; // Navigate to the projects page
        });
    }

    if (contactButton) {
        contactButton.addEventListener('click', () => {
            window.location.href = 'contact.html'; // Navigate to the contact page
        });
    }
});




