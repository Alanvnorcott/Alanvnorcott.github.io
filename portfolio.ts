//portfolio.ts

document.addEventListener('DOMContentLoaded', () => {
    // Hide all sections except the home section initially
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('main section:not(#home)');
    sections.forEach((section: HTMLElement) => {
        section.style.display = 'none';
    });

    // Handle navigation clicks
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('nav ul li a');
    navLinks.forEach((link: HTMLAnchorElement) => {
        link.addEventListener('click', (event: Event) => {
            event.preventDefault();
            const targetId: string | null = link.getAttribute('href') ?? null; // Use nullish coalescing operator (??)
            const targetSection: HTMLElement | null = document.getElementById(targetId as string); // Assert type

            // Safely handle the possibility of targetId and targetSection being null
            if (targetId && targetSection) { // Check both targetId and targetSection before proceeding
                // Hide all sections except the target section
                sections.forEach((section: HTMLElement) => {
                    if (section !== targetSection) {
                        section.style.display = 'none';
                    }
                });

                // Show the target section
                targetSection.style.display = 'block';
            } else {
                console.error(`Element with ID ${targetId} not found at all.`);
            }
        });
    });
});



