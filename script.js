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

  if (
    action === "divide" ||
    action === "add" ||
    action === "subtract" ||
    action === "multiply"
  ) {
    selectedOperator = action;
    previousKeyType = action;
    displayValue += action;
    console.log(`operator selected`);
  }

  if (action === "decimal") {
    previousKeyType = action;
    console.log(`decimal selected`);
  }

  if (action === "C") {
    initialState();
    console.log(`clear selected`);
  }

  if (number) {
    if (
      previousKeyType === "divide" ||
      previousKeyType === "add" ||
      previousKeyType === "subtract" ||
      previousKeyType === "multiply"
    ) {
      secondNumber += number;
      previousKeyType = number;
      displayValue += number;
      console.log(`second number selected`);
    } else {
      firstNumber += number;
      previousKeyType = number;
      displayValue += number;
      console.log(`first number selected`);
    }
  }

  if (action === "=") {
    calculatedResult = operate(firstNumber, selectedOperator, secondNumber);
    calculationsDisplayEl.textContent = calculatedResult;
  }

  console.log({ firstNumber, selectedOperator, secondNumber, previousKeyType });
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
}
