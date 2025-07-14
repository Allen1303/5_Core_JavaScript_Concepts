"use strict";
const nameInput = document.getElementById("nameInput");
const createBtn = document.getElementById("createBtn");

const makeGreeter = (name) => {
  return (message) => {
    return ` ${name} ${message}`;
  };
};
createBtn.addEventListener("click", () => {
  const greetingOutput = document.getElementById("greeterList");
  const input = nameInput.value;
  nameInput.focus();
  const greetUser = makeGreeter(input);
  const greeting = greetUser("Nice to have you!");
  greetingOutput.textContent += `Welcome: ${greeting}`;
  console.log(greetUser);
});
