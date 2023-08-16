"use strict";
const inputDisplayEl = document.getElementById("input-display");

let displayValue = "";

document.addEventListener("click", (e) => {
  const data = e.target.dataset;
  const { operator, number } = data;

  // render the divide and multiply symbols
  const symbol = {
    "&divide;": " \u00f7",
    "&times;": " \u00d7",
  };

  if (operator === "C") displayValue = "";
  if (operator === "%") displayValue += " %";
  if (operator === "/") displayValue += symbol["&divide;"];
  if (operator === "+") displayValue += " +";
  if (operator === "-") displayValue += " -";
  if (operator === "x") displayValue += symbol["&times;"];
  if (number === "7") displayValue += " 7";
  if (number === "8") displayValue += " 8";
  if (number === "9") displayValue += " 9";
  if (number === "6") displayValue += " 6";
  if (number === "5") displayValue += " 5";
  if (number === "4") displayValue += " 4";
  if (number === "3") displayValue += " 3";
  if (number === "2") displayValue += " 2";
  if (number === "1") displayValue += " 1";
  if (operator === "=") operate;

  if (e.target.dataset) {
    inputDisplayEl.innerHTML = displayValue;
  }

  console.log(displayValue);
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
