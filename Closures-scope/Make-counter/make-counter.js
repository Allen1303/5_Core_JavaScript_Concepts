"use strict";
// counter.js
// (Intentionally left blank for your makeCounter closure demo)
const counterBtn = document.getElementById("counter-btn");
const counterOutput = document.getElementById("counter-output");

function outerFunction() {
  let counter = 0;

  counterBtn.addEventListener("click", function () {
  counter++;
  console.log(counter);
    counterOutput.textContent = `Current count ${counter}`;
  });
}
outerFunction();
