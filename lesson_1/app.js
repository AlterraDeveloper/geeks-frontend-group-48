// DOM - Document Object Model
// DOM Manipulations - Манипуляции (работа) с DOM

// let car = {
//     title: "Toyota Camry",
//     millage: 350_000,
//     engine: 3.5,
//     hasFines: false
// }

// Search

const counterText = document.getElementById("counter");
const counter2 = document.getElementById("counter2");
// counterText.textContent = 777;
// counterText.style.letterSpacing = "200px";
// counterText.style.color = "purple";

const plusButton = document.getElementById("increase");
const resetButton = document.querySelector("#reset");
const minusButton = document.querySelector("#decrease");

// Events - события

function getColorByValue(value) {
  //   if (value > 0) {
  //     return "greenyellow";
  //   } else if (value < 0) {
  //     return "red";
  //   } else {
  //     return "cyan";
  //   }

  if (value > 0) return "greenyellow";

  if (value < 0) return "red";

  if (value === 0) return "cyan";
}

function plusCounter() {
  let counterValue = Number(counterText.textContent);
  let counterValue2 = Number(counter2.textContent);
  counterValue += 5;
  counterValue2 -= 5;
  counterText.textContent = counterValue;
  counter2.textContent = counterValue2;

  counterText.style.color = getColorByValue(counterValue);
}

plusButton.addEventListener("click", plusCounter);

function resetCounter() {
  counterText.textContent = 0;
  counterText.style.color = "cyan";
}

resetButton.addEventListener("click", resetCounter);

function minusCounter() {
  let counterValue = counterText.textContent;
  counterValue--;
  counterText.textContent = counterValue;

  counterText.style.color = getColorByValue(counterValue);
}

minusButton.onclick = minusCounter;
