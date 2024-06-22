let memory = 0;
let currentInput = "";
let display = document.getElementById("display");

document.querySelectorAll(".number, .operator").forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput === "Error") {
            currentInput = "";
        }
        currentInput += button.innerText;
        display.innerText = currentInput;
    });
});

document.getElementById("ac").addEventListener("click", () => {
    currentInput = "";
    display.innerText = "0";
});

document.getElementById("del").addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || "0";
});

document.getElementById("equals").addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = "Error";
    }
    display.innerText = currentInput;
});

document.getElementById("sqrt").addEventListener("click", () => {
    try {
        currentInput = Math.sqrt(eval(currentInput)).toString();
    } catch {
        currentInput = "Error";
    }
    display.innerText = currentInput;
});

document.getElementById("mplus").addEventListener("click", () => {
    memory += parseFloat(currentInput) || 0;
});

document.getElementById("mminus").addEventListener("click", () => {
    memory -= parseFloat(currentInput) || 0;
});

document.getElementById("mr").addEventListener("click", () => {
    currentInput = memory.toString();
    display.innerText = currentInput;
});

document.getElementById("mc").addEventListener("click", () => {
    memory = 0;
});
