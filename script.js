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
    } else {
      displayValue = "";
      displayValue = number;
      firstNumber = displayValue;
      calculatedResult = secondNumber = selectedOperator = null;
    }
  }

  if (operator && operator !== "=") {
    if (operator === "C") {
      displayValue = "";
      calculationsDisplayEl.textContent = displayValue;
      firstNumber = secondNumber = selectedOperator = null;
      calculatedResult = null;
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
    calculatedResult = operate(firstNumber, selectedOperator, secondNumber);
    calculationsDisplayEl.textContent = calculatedResult;
    displayValue = calculatedResult;
    console.log(calculatedResult);
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
