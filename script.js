const messages = 
[
   "You're weird, but I like it.",
    "I know we have been friends for the longest time ever...",
    "I catch myself smiling whenever I see my phone to see a notification from you.",
    "Your laugh (the silent wiper laugh and even the Achchi laugh) is literally the best thing ever",
    "I know we have been friends for the longest time ever...",
    "But I am sorry I don’t want to be just friends anymore...",
    "So what I'm struggling to say is...",
    "I really like you Nelly ",
    "also sorry for being so cringy"

];

let index = 0;
const textElement = document.getElementById("text");
const nextButton = document.getElementById("next");
const finalMessage = document.getElementById("finalMessage");
const buttons = document.querySelector(".buttons");

nextButton.addEventListener("click", function() 
{
    if (index < messages.length) 
        {
        textElement.textContent = messages[index];
        index++;
    } else 
    {
        textElement.classList.add("hidden");
        nextButton.classList.add("hidden");
        finalMessage.classList.remove("hidden");
        buttons.classList.remove("hidden");
    }
});

document.getElementById("yes").addEventListener("click", function() 
{
    finalMessage.textContent = "Yay! Can't wait! ❤️";
});

document.getElementById("no").addEventListener("mouseover", function() 
{
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

//star animation

let starSpeed = 10; // Initial animation duration in seconds
const main = document.querySelector(".main");

// Function to create stars
function createStars() {
    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDuration = `${starSpeed}s`;
        main.appendChild(star);
    }
}

createStars();

nextButton.addEventListener("click", function() {
    if (index < messages.length) {
        textElement.textContent = messages[index];
        index++;
        starSpeed -= 1; // Increase speed (lower duration)
        document.querySelectorAll(".star").forEach(star => {
            star.style.animationDuration = `${Math.max(3, starSpeed)}s`; // Minimum speed limit
        });
    } else {
        textElement.classList.add("hidden");
        nextButton.classList.add("hidden");
        finalMessage.classList.remove("hidden");
        buttons.classList.remove("hidden");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const secretCode = "1234"; // Change this to the actual passcode
    const passcodeInput = document.getElementById("passcodeInput");
    const unlockButton = document.getElementById("unlockButton");
    const lockScreen = document.getElementById("lockScreen");
    const mainContent = document.getElementById("mainContent");
    const errorMessage = document.getElementById("errorMessage");

    unlockButton.addEventListener("click", function () {
        if (passcodeInput.value.trim() == secretCode) {
            lockScreen.style.display = "none"; // Hide lock screen
            mainContent.style.display = "block"; // Show main content
        } else {
            errorMessage.classList.remove("hidden");
            passcodeInput.value = ""; // Clear input field
        }
    });

    // Allow pressing "Enter" to submit
    passcodeInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            unlockButton.click();
        }
    });
});



