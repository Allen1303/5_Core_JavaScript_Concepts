"use strict";

// --- setTimeout Closure Loop Concept ---
//
// When using setTimeout inside a loop, the loop variable (e.g., 'i')
// can be captured incorrectly if 'var' is used, because all timeouts
// share the same variable reference. This often results in all timeouts
// using the final value of 'i'.
//
// To preserve the correct value for each timeout, you can use a closure:
// - Wrap the setTimeout call in an IIFE (Immediately Invoked Function Expression)
//   or use 'let' for block scoping (ES6+).
//
// Example with closure (IIFE):
//   for (var i = 1; i <= 5; i++) {
//     (function(i) {
//       setTimeout(function() {
//         // 'i' is preserved for each timeout
//       }, i * 500);
//     })(i);
//   }
//
// Example with 'let' (block scope):
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function() {
//       // 'i' is preserved for each timeout
//     }, i * 500);
//   }
//
// Try implementing both approaches to see how closures help preserve the correct value!
const startLoopBtn = document.getElementById("start-loop");
const loopOutput = document.getElementById("output");

startLoopBtn.addEventListener("click", () => {
  loopOutput.innerHTML = ""; // Clear previous output from the list
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      // Schedule each list item to appear after a delay
      const listEl = document.createElement("li"); // Create a new <li> element for this iteration
      listEl.textContent = `Index: ${i}`; // Set the text to show the current value of i
      loopOutput.appendChild(listEl); // Append the <li> to the <ul> in the HTML
    }, i * 1000); // Each item appears after i seconds (1s, 2s, ...)
  }
  console.log(loopOutput); // Log the <ul> element to the console (for debugging)
});
