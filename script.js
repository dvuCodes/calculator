"use strict";
const inputDisplayEl = document.getElementById("input-display");
const calculationsDisplayEl = document.getElementById("calculations-el");
const inputContainerEl = document.getElementById("calc-input-container");

let displayValue = "";
let firstNumber = "";
let secondNumber = "";
let selectedOperator = "";
let calculatedResult = "";
let previousKeyType = "";

inputContainerEl.addEventListener("click", (e) => {
  const data = e.target.dataset;
  const { action, number } = data;

  // checks for when an operator has been set and stores the first number based off the displayValue
  if (
    action === "divide" ||
    action === "add" ||
    action === "subtract" ||
    action === "multiply"
  ) {
    selectedOperator = action;
    previousKeyType = action;
    firstNumber = displayValue;
    calculationsDisplayEl.textContent = displayValue;
    displayValue = "";
  }

  if (action === "decimal") {
    displayValue += ".";
  }

  // clears variable states
  if (action === "C") {
    initialState();
  }

  // updates displayValue with the selected number value
  if (number) {
    displayValue += number;
  }

  // runs operate function and stores secondNumber after = has been selected
  if (action === "=") {
    secondNumber = displayValue;
    displayValue = "";
    calculatedResult = operate(firstNumber, selectedOperator, secondNumber);
    calculationsDisplayEl.textContent = calculatedResult;
  }

  inputDisplayEl.textContent = displayValue;
});

function operate(x, operator, y) {
  // using the Number constructor to convert the xy arguement from strings to numbers
  const num1 = Number(x);
  const num2 = Number(y);

  if (operator === "add") return num1 + num2;
  if (operator === "subtract") return num1 - num2;
  if (operator === "multiply") return num1 * num2;
  if (operator === "divide") return num1 / num2;
}

// function to reset state
function initialState() {
  displayValue = "";
  firstNumber = "";
  secondNumber = "";
  selectedOperator = "";
  calculatedResult = "";
  previousKeyType = "";
  calculationsDisplayEl.textContent = "";
}
