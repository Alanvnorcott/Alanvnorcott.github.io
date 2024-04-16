// portfolio.ts -- TYPESCRIPT


// Function to toggle project information visibility
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


const body = document.body;
const lastPanel = document.querySelector(".panels .panel:last-child");


// Function to reveal or hide contact information with fade animation
function revealContactInfo(iconElement: HTMLElement): void {
    const textElement = iconElement.nextElementSibling as HTMLElement;

    if (textElement && textElement.classList.contains('contact-info')) {
        if (textElement.classList.contains('hidden')) {
            // Reveal the contact information
            textElement.classList.remove('hidden');
            textElement.style.opacity = '0'; // Set initial opacity to 0 (invisible)
            let opacity = 0;
            const intervalId = setInterval(() => {
                opacity += 0.1; // Increase opacity gradually
                textElement.style.opacity = opacity.toString();
                if (opacity >= 1) {
                    clearInterval(intervalId); // Stop animation when opacity reaches 1
                }
            }, 50);
        } else {
            // Check if the element is visible before hiding it
            if (textElement.style.opacity === '1') {
                // Hide the contact information
                let opacity = 1;
                const intervalId = setInterval(() => {
                    opacity -= 0.1; // Decrease opacity gradually
                    textElement.style.opacity = opacity.toString();
                    if (opacity <= 0) {
                        clearInterval(intervalId); // Stop animation when opacity reaches 0
                        textElement.classList.add('hidden'); // Hide the element after animation
                    }
                }, 50);
            }
        }
    }
}





// Function to hide sections except the target section
function hideSections(targetSection: HTMLElement): void {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('main section:not(#home)');
    sections.forEach((section: HTMLElement) => {
        if (section !== targetSection) {
            section.style.display = 'none';
        }
    });
}

// Function to hide project information initially
function hideProjectInfo(): void {
    const projectInfo: NodeListOf<HTMLElement> = document.querySelectorAll('.project-info');
    projectInfo.forEach((info: HTMLElement) => {
        info.style.display = 'none';
    });
}

// Event listener when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
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
            hideSections(document.querySelector('main section.contact-section') as HTMLElement); // Hide other sections
        });
    }

    // Get the contact icon elements
    const contactIcons: NodeListOf<HTMLElement> = document.querySelectorAll('.contact-icon');

    // Add click event listeners to contact icons
    contactIcons.forEach((icon: HTMLElement) => {
        const textElement = icon.nextElementSibling as HTMLElement;
        if (textElement && textElement.classList.contains('contact-info')) {
            icon.addEventListener('click', () => {
                revealContactInfo(icon); // Call the typing animation function when clicked
            });
        }
    });

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

    // Hide project information initially
    hideProjectInfo();
});
