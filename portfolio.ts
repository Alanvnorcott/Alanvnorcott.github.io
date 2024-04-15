//portfolio.ts
// Define the toggleProject function globally
function toggleProject(projectId: string): void {
    const projectInfo: HTMLElement | null = document.getElementById(projectId);
    if (projectInfo) {
        if (projectInfo.classList.contains('hidden')) {
            projectInfo.style.display = 'block'; // Show the project info
            setTimeout(() => {
                projectInfo.classList.remove('hidden');
            }, 10); // Delay to ensure the display property is updated before removing 'hidden'
        } else {
            projectInfo.classList.add('hidden');
            setTimeout(() => {
                projectInfo.style.display = 'none'; // Hide the project info after animation
            }, 100); // Adjust based on your animation duration
        }
    }
}




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

document.addEventListener('DOMContentLoaded', () => {
    // Get the project elements
    const projects: NodeListOf<HTMLElement> = document.querySelectorAll('.project');

    // Add click event listeners to toggle project information
    projects.forEach((project: HTMLElement) => {
        project.addEventListener('click', () => {
            const projectId: string | undefined = project.dataset.projectId;
            if (projectId) {
                toggleProject(projectId); // Call the globally defined toggleProject function
            }
        });
    });

    // Function to hide all project information initially
    function hideProjectInfo() {
        const projectInfo: NodeListOf<HTMLElement> = document.querySelectorAll('.project-info');
        projectInfo.forEach((info: HTMLElement) => {
            info.style.display = 'none';
        });
    }

    // Hide project information initially
    hideProjectInfo();
});
