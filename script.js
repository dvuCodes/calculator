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
    firstNumber = displayValue;
    calculationsDisplayEl.textContent = displayValue;
    displayValue = "";

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

  // display = ""
  // update display with selected number
  // firstNumber is stored after I select an operator
  // firstNumber = display
  // secondNumber is stored and math is eval after I hit equals
  //

  if (number) {
    displayValue += number;
  }

  if (action === "=") {
    secondNumber = displayValue;
    displayValue = "";
    calculatedResult = operate(firstNumber, selectedOperator, secondNumber);
    calculationsDisplayEl.textContent = calculatedResult;
  }

  console.log({ firstNumber, selectedOperator, secondNumber, previousKeyType });
  console.log(displayValue);
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
