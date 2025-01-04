// calculation variables

let num1 = 0;
let operator = "+";
let num2 = 0;

function operate(num1, operator, num2) {
    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {
        if (num2 != 0) {
            return num1 / num2;
        } else {
            return "Math Error"
        }
    } else {
        return "Something Wrong"
    }
}

const displayText = document.getElementById("display-text");
let currentDisplayValue = "0";

function updateDisplay(value) {
    if (currentDisplayValue === "0" && value !== ".") {
        currentDisplayValue = value;
    } else if (value === "." && currentDisplayValue.includes(".")) {
        return;
    } else {
        currentDisplayValue += value;
    }
    displayText.textContent = currentDisplayValue;
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        
        // Handle digit button clicks
        if (!isNaN(buttonText) || buttonText === ".") {
            updateDisplay(buttonText);
        }
        
        // Handle special buttons (to be implemented later)
    });
});
