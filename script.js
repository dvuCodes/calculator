"use strict";
const inputDisplayEl = document.getElementById("input-display");

document.addEventListener("click", (e) => {
  const data = e.target.dataset;
  const inputDisplayEl = document.getElementById("input-display");

  console.log(data);

  if (data.operator === "C") inputDisplayEl.textContent = "";
  if (data.operator === "%") inputDisplayEl.textContent += " %";
  if (data.operator === "&divide") inputDisplayEl.textContent += "&divide";
  if (data.operator === "+") inputDisplayEl.textContent += " +";
  if (data.operator === "-") inputDisplayEl.textContent += " -";
  if (data.operator === "x") inputDisplayEl.textContent += " x";
  if (data.number === "7") inputDisplayEl.textContent += " 7";
  if (data.number === "8") inputDisplayEl.textContent += " 8";
  if (data.number === "9") inputDisplayEl.textContent += " 9";
  if (data.number === "6") inputDisplayEl.textContent += " 6";
  if (data.number === "5") inputDisplayEl.textContent += " 5";
  if (data.number === "4") inputDisplayEl.textContent += " 4";
  if (data.number === "3") inputDisplayEl.textContent += " 3";
  if (data.number === "2") inputDisplayEl.textContent += " 2";
  if (data.number === "1") inputDisplayEl.textContent += " 1";
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
