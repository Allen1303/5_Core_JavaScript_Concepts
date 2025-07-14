"use strict";

const startBtn = document.getElementById("startBtn");
const stepBox = document.getElementById("stepBox");

const steps = [
  "Step 1: Open your editor.",
  "Step 2: Write your HTML.",
  "Step 3: Style with CSS.",
  "Step 4: Add JavaScript.",
  "Step 5: Debug your code.",
  "Step 6: Celebrate! 🎉",
];
function showSteps(index = 0) {
  if (index >= steps.length) return;
  setTimeout(() => {//-> Settimeout function creates an instance of Closure
    const liEl = document.createElement("li");//-> Local Scope variable created

    stepBox.appendChild(liEl);
    liEl.textContent = steps[index];
    return showSteps(index + 1);//->showStep function call it self to create an instance of Recursion.
  }, 2000);
}
const handleStart = (e) => {
  if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
    showSteps();
  }
};
startBtn.addEventListener("click", handleStart);
document.addEventListener("keydown", handleStart);