"use strict";
// counter.js
// (Intentionally left blank for your makeCounter closure demo)
const counterBtn = document.getElementById("counter-btn");
const counterOutput = document.getElementById("counter-output");

function makeCounter() {
  let counter = 0;
  // Inner function that creates the Closure
  return function () {
    counter++;
    counterOutput.textContent = `Current count: ${counter}`;
    if (counter === 5 || counter === 10) {
      counterOutput.style.color = "red";
    } else {
      counterOutput.style.color = "";
    }
  };
}
const countResult = makeCounter();
counterBtn.addEventListener("click", countResult);
