const messages = [
    "You're the kindest person I know. 😊",
    "You make even the dullest days feel special. ✨",
    "Your smile is literally the best thing ever! 😍",
    "I love spending time with you. ❤️",
    "Okay, now the real question..."
];

let index = 0;
const textElement = document.getElementById("text");
const nextButton = document.getElementById("next");
const finalMessage = document.getElementById("finalMessage");
const buttons = document.querySelector(".buttons");

nextButton.addEventListener("click", function() {
    if (index < messages.length) {
        textElement.textContent = messages[index];
        index++;
    } else {
        textElement.classList.add("hidden");
        nextButton.classList.add("hidden");
        finalMessage.classList.remove("hidden");
        buttons.classList.remove("hidden");
    }
});

document.getElementById("yes").addEventListener("click", function() {
    finalMessage.textContent = "Yay! Can't wait! ❤️";
});

document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
