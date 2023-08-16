"use strict";
const inputDisplayEl = document.getElementById("input-display");
const calculationsDisplayEl = document.getElementById("calculations-el");

let displayValue = "";
let firstNumber = null;
let secondNumber = null;
let selectedOperator = null;
let calculatedResult = null;

document.addEventListener("click", (e) => {
  const data = e.target.dataset;
  const { operator, number } = data;

  // render the divide and multiply symbols
  const symbol = {
    "&divide;": " \u00f7",
    "&times;": " \u00d7",
  };

  // we know its the first number if operator is Null
  // else we know any numbers after is secondNumber

  if (number) {
    if (!calculatedResult) {
      displayValue += number;
      if (selectedOperator === null) {
        firstNumber = displayValue;
      } else {
        // second number after the firstNumber and operator hence length + 1
        secondNumber = displayValue.slice(firstNumber.length + 1);
      }
    }
  }

  if (operator && operator !== "=") {
    if (operator === "C") {
      displayValue = "";
      calculationsDisplayEl.textContent = displayValue;
      firstNumber = secondNumber = selectedOperator = null;
    }
    if (
      operator === "+" ||
      operator === "-" ||
      operator === "/" ||
      operator === "x"
    ) {
      displayValue += operator;
      selectedOperator = operator;
    }
  }

  if (operator === "=") {
    const result = operate(firstNumber, selectedOperator, secondNumber);
    calculationsDisplayEl.textContent = result;
    displayValue = result;
    console.log(result);
  }

  if (e.target.dataset) {
    inputDisplayEl.innerHTML = displayValue;
  }

  console.log(typeof firstNumber, {
    firstNumber,
    selectedOperator,
    secondNumber,
  });
});

function operate(x, operator, y) {
  // using the Number constructor to convert the xy arguement from strings to numbers
  const num1 = Number(x);
  const num2 = Number(y);

  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "x") return num1 * num2;
  if (operator === "/") return num1 / num2;
}

console.log(operate("7", "-", "1"));
