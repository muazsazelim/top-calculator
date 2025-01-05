// calculation variables

let num1 = 0;
let operator = "+";
let num2 = 0;
let isOperatorPressed = false;

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
    if (currentDisplayValue.length >= 11) {
        return;
    }
    if (currentDisplayValue === "0" && value !== ".") {
        currentDisplayValue = value;
    } else if (value === "." && currentDisplayValue.includes(".")) {
        return;
    } else {
        currentDisplayValue += value;
    }
    displayText.textContent = currentDisplayValue;
    num2 = parseFloat(currentDisplayValue);
}

function resetDisplay(value) {
    displayText.textContent = value;
    currentDisplayValue = "0";
    num2 = 0;
}


const buttons = document.querySelectorAll(".btn");
let answer = "0";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        
        if (!isNaN(buttonText) || buttonText === ".") {
            updateDisplay(buttonText);
        }

        if (button.classList.contains("op")) {
            if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
                if (isOperatorPressed) {
                    operator = buttonText;
                } else {
                    answer = operate(num1, operator, num2);
                    num1 = answer;
                    num2 = 0;
                    operator = buttonText;
                    resetDisplay(answer);
                }
            } else if (buttonText == "AC") {
                num1 = 0;
                num2 = 0;
                operator = "+";
                resetDisplay(0);
            } else if (buttonText == "C") {
                resetDisplay(0);
            } else if (buttonText == "BACK") {
                currentDisplayValue = currentDisplayValue.slice(0, -1) || "0";
                displayText.textContent = currentDisplayValue;
                num2 = parseFloat(currentDisplayValue);
            } else if (buttonText == "=") {
                answer = operate(num1, operator, num2);
                resetDisplay(answer);
                num1 = 0;
                operator = "+";
                num2 = answer;
            }




        }
        

    });
});
