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
            }, 100);
        }
    }
}


function flyPaperAirplane(): void {
    const airplane: HTMLElement | null = document.querySelector('.paper-airplane');

    if (airplane) {
        // Adjust the animation duration (e.g., 8 seconds)
        const animationDuration = 8; // in seconds

        // Enable animation with adjusted duration
        airplane.style.animation = `glide ${animationDuration}s forwards`;

        // After animation completes, reset position
        setTimeout(() => {
            if (airplane) {
                airplane.style.animation = 'none'; // Disable animation
                airplane.style.transform = 'translate(0, 0)'; // Reset position
            }
        }, animationDuration * 1000); // Convert animation duration to milliseconds
    }
}


// Generate random particles
const particleContainer = document.querySelector('.particles') as HTMLElement;

for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.setProperty('--x', Math.random().toString()); // Randomize horizontal position
    particle.style.animationDuration = `${Math.random() * 3 + 5}s`; // Randomize falling speed
    particle.style.width = `${Math.random() * 4 + 1}px`; // Randomize particle size
    particle.style.height = particle.style.width; // Keep particle proportions
    particle.style.top = `${Math.random() * 100}vh`; // Randomize vertical position
    particle.style.left = `${Math.random() * 100}vw`; // Randomize horizontal position
    particleContainer.appendChild(particle);
}




// Function to reveal or hide contact information with fade animation
function revealContactInfo(iconElement: HTMLElement): void {
    const textElement = iconElement.nextElementSibling as HTMLElement;

    if (textElement && textElement.classList.contains('contact-info')) {
        if (textElement.classList.contains('hidden')) {
            // Reveal the contact information
            textElement.classList.remove('hidden');
            textElement.style.opacity = '0';
            let opacity = 0;
            const intervalId = setInterval(() => {
                opacity += 0.1;
                textElement.style.opacity = opacity.toString();
                if (opacity >= 1) {
                    clearInterval(intervalId);
                }
            }, 50);
        } else {
            if (textElement.style.opacity === '1') {
                let opacity = 1;
                const intervalId = setInterval(() => {
                    opacity -= 0.1;
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


document.addEventListener('DOMContentLoaded', () => {
    // Get the buttons for navigation
    const aboutButton: HTMLElement | null = document.getElementById('about-button');
    const projectsButton: HTMLElement | null = document.getElementById('projects-button');
    const contactButton: HTMLElement | null = document.getElementById('contact-button');


    if (aboutButton) {
        aboutButton.addEventListener('click', () => {
            window.location.href = 'about.html';
        });
    }

    if (projectsButton) {
        projectsButton.addEventListener('click', () => {
            window.location.href = 'projects.html';
        });
    }

    if (contactButton) {
        contactButton.addEventListener('click', () => {
            window.location.href = 'contact.html';
            hideSections(document.querySelector('main section.contact-section') as HTMLElement); // Hide other sections
        });
    }
    if (projectsButton) {
        projectsButton.addEventListener('click', () => {
            window.location.href = 'game.html';
        });
    }

    // Get the contact icon elements
    const contactIcons: NodeListOf<HTMLElement> = document.querySelectorAll('.contact-icon');

    // Add click event listeners to contact icons
    contactIcons.forEach((icon: HTMLElement) => {
        const textElement = icon.nextElementSibling as HTMLElement;
        if (textElement && textElement.classList.contains('contact-info')) {
            icon.addEventListener('click', () => {
                revealContactInfo(icon);
            });
        }
    });


    const projects: NodeListOf<HTMLElement> = document.querySelectorAll('.project');
    projects.forEach((project: HTMLElement) => {
        project.addEventListener('click', () => {
            const projectId: string | undefined = project.dataset.projectId;
            if (projectId) {
                toggleProject(projectId);
            }
        });
    });
    hideProjectInfo();
});


