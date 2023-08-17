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

  // checks if decimal key has been selected
  if (action === "decimal") {
    displayValue += ".";
  }

  // clears variable states
  if (action === "C") {
    initialState();
  }

  // updates displayValue with the selected number value
  if (number) {
    11;
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

document.addEventListener("keydown", (e) => {
  const key = e.code;
  console.log(key);

  if (key === "Numpad0" || key === "Digit0") displayValue += 0;
  if (key === "Numpad1" || key === "Digit1") displayValue += 1;
  if (key === "Numpad2" || key === "Digit2") displayValue += 2;
  if (key === "Numpad3" || key === "Digit3") displayValue += 3;
  if (key === "Numpad4" || key === "Digit4") displayValue += 4;
  if (key === "Numpad5" || key === "Digit5") displayValue += 5;
  if (key === "Numpad6" || key === "Digit6") displayValue += 6;
  if (key === "Numpad7" || key === "Digit7") displayValue += 7;
  if (key === "Numpad8" || key === "Digit8") displayValue += 8;
  if (key === "Numpad9" || key === "Digit9") displayValue += 9;

  if (key === "NumpadAdd" || key === "DigitAdd") {
    selectedOperator = "add";
    storeFirstNumberResetValues();
  }

  if (key === "NumpadSubtract" || key === "DigitSubtract") {
    selectedOperator = "subtract";

    storeFirstNumberResetValues();
  }
  if (key === "NumpadMultiply" || key === "DigitMultiply") {
    selectedOperator = "multiply";

    storeFirstNumberResetValues();
  }
  if (key === "NumpadDivide" || key === "DigitDivide") {
    selectedOperator = "divide";

    storeFirstNumberResetValues();
  }
  if (key === "Escape") {
    displayValue = "";
    calculationsDisplayEl.textContent = "";
  }

  if (key === "Enter" || key === "NumpadEnter") {
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
  if (operator === "divide") return (num1 / num2).toFixed(10);
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

function storeFirstNumberResetValues() {
  firstNumber = displayValue;
  calculationsDisplayEl.textContent = displayValue;
  displayValue = "";
}
