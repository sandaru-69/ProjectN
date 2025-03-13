// Step 1: Find hidden letters and type the missing word
function checkStep1() {
    const input = document.getElementById("input-box").value.toLowerCase();
    if (input === "like") {
        document.getElementById("step1").classList.add("hidden");
        document.getElementById("step2").classList.remove("hidden");
    }
}

// Step 2: Drag and drop to arrange words
const draggables = document.querySelectorAll(".draggable");
const dropZone = document.getElementById("drop-zone");
let draggedItems = [];

draggables.forEach(item => {
    item.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text", event.target.id);
    });
});

dropZone.addEventListener("dragover", function(event) {
    event.preventDefault();
});

dropZone.addEventListener("drop", function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    
    if (!draggedItems.includes(draggedElement)) {
        draggedItems.push(draggedElement);
        dropZone.appendChild(draggedElement);
    }

    if (draggedItems.length === 3) {
        const correctOrder = ["frag2", "frag3", "frag1"];
        if (draggedItems.map(el => el.id).join() === correctOrder.join()) {
            document.getElementById("step2").classList.add("hidden");
            document.getElementById("step3").classList.remove("hidden");
        }
    }
});

// Step 3: Click correct sequence
let clickOrder = [];
const correctSequence = ["1", "2", "3"];

document.querySelectorAll(".seq-btn").forEach(button => {
    button.addEventListener("click", function() {
        clickOrder.push(this.dataset.step);
        if (clickOrder.length === correctSequence.length) {
            if (clickOrder.join() === correctSequence.join()) {
                document.getElementById("step3").classList.add("hidden");
                document.getElementById("confession").classList.remove("hidden");
            } else {
                clickOrder = [];
            }
        }
    });
});
