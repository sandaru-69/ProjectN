const messages = 
[
    "You're weird, but I like it.",
    "I know we have been firends for the logest time ever...",
    "I catch myself smiling whenever I see my phone to see a notification from you.",
    "Your laugh(the silent wiper laugh and even the Achchi laugh) is literally the best thing ever",
    "I know we have been firends for the logest time ever...",
    "But I am sorry I dont want to be just friends anymore...",
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
