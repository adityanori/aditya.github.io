// Alert function for initial test
function biggerAlert() {
    alert("Hello, world!");
}

// Test alert to ensure JS is linked
// alert("Hello, world!");

// Function to make text bigger
function makeTextBigger() {
    let textArea = document.getElementById("inputText");
    textArea.style.fontSize = "24pt";
}

// Function to toggle styles
function toggleStyle() {
    let textArea = document.getElementById("inputText");
    let fancyRadio = document.getElementById("fancyShmancy");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to apply 'Moo' transformation
function addMoo() {
    let textArea = document.getElementById("inputText");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    sentences = sentences.map(sentence => {
        if (sentence.trim()) {
            return sentence.trim() + "-Moo";
        }
        return "";
    });
    textArea.value = sentences.join(". ");
}

// Add event listeners
document.getElementById("biggerButton").onclick = makeTextBigger;
document.getElementById("fancyShmancy").onchange = toggleStyle;
document.getElementById("boringBetty").onchange = toggleStyle;
document.getElementById("mooButton").onclick = addMoo;
