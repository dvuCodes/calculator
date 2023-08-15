"use strict";

function operate(x, operator, y) {
  // using the Number constructor to convert the xy arguement from strings to numbers
  const num1 = Number(x);
  const num2 = Number(y);

  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "x") return num1 * num2;
  if (operator === "/") return num1 / num2;
}

console.log(operate(5, "x", 2));
