let number1;
let number2;
let operator;

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
