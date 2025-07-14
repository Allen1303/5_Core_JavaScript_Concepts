"use strict";
const nameInput = document.getElementById("nameInput");
const createBtn = document.getElementById("createBtn");

const makeGreeter = (name) => {
  return (message) => {
    return `Welcome: ${name} ${message}`
  };
};
createBtn.addEventListener('click', ()=>{
const greetingOutput = document.getElementById('greeterList')
const input = nameInput.value
makeGreeter(input)
const greeting = makeGreeter("Nice to have you!")
greetingOutput.textContent 
})