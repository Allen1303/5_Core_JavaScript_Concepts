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
// Try implementing both approaches to see how closures help preserve the correct value
const startBtn = document.getElementById("start-loop");
const output = document.getElementById("output");

startBtn.addEventListener("click", () => {
  output.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const listEl = document.createElement("li");
      listEl.textContent = `Index: ${i + 1}`;
      output.appendChild(listEl);
      console.log(`Created index: ${i + 1}`);
    }, i * 1500);
  }
});
