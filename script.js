// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scroll Animation
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Reveal Sections on Scroll
    const sections = document.querySelectorAll(".fade-in");
    const revealOnScroll = () => {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);

    // Click Animation on Button
    document.getElementById("cta-button").addEventListener("click", function() {
        alert("You clicked the button!");
    });

    // Contact Form Submission (Basic Validation)
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Form submitted successfully!");
    });
});
