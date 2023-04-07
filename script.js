let number1;
let number2;
let operator;
const container = document.querySelector(".container");
const display   = document.querySelector(".display");

/* Function to create all buttons of the calculator */
function createCalculatorButtons() {
  // Create buttons 0-9
  
  // Create operator buttons
  createButton("clear");
  createButton(7);
  createButton(8);
  createButton(9);
  createButton("÷");
  createButton(4);
  createButton(5);
  createButton(6);
  createButton("x");
  createButton(1);
  createButton(2);
  createButton(3);
  createButton("-");
  createButton(0);
  createButton("=");
  createButton("+");
}

/* Add button to the DOM */
function createButton(text) {
  let btn = document.createElement("button");
  btn.textContent = text;
  btn.classList = "_" + text;
  container.appendChild(btn);
}

/* Basic math operator functions */
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

/* Operate */
function operate(number1, number2, operator) {
  switch (operator) {
    case "add":
      return add(number1, number2);
      break;
    case "subtract":
      return subtract(number1, number2);
      break;
    case "multiply":
      return multiply(number1, number2);
      break;
    case "divide":
      return divide(number1, number2);
      break;
  }
}

/* Create html buttons for each digit and the operations */
createCalculatorButtons();