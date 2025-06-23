"use strict";
const greetBtn = document.getElementById("greet-btn");
const welcomeMessage = document.getElementById("welcome-message");

const greetFunction = (name, message) => { //<- Outer Function
  
  return () => { //<- Inner Function that creates the closure
    welcomeMessage.textContent = `Welcome: ${name} ${message}`;
  };
};
const greet = greetFunction("Allen", "glad to see you back!");
greetBtn.addEventListener("click", greet);
