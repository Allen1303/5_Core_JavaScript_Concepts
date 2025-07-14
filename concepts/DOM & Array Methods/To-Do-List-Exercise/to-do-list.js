"use strict";
/**
 *@param Practice Checklist
 @param Build task-adding functionality with push()
 @param Render tasks dynamically to the DOM using .map() or a for loop
 @param Toggle “completed” state with a click + .classList.toggle()
 @param Use .filter() to show only uncompleted tasks
 @param Handle Enter key with keydown event on input
 */
//Cache the DOM with relevant node elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const filterBtn = document.getElementById("filterBtn");
const ulElement = document.getElementById("taskList");

//declare an empty array to hold each task
const tasks = [];

//Function to add task from the input filed to the array
const addTask = () => {
  const taskText = taskInput.value.trim();
  //check if our inputfield is empty?
  if (taskText === "") return;
  //Array of object added to the array that describe each task
  tasks.push({ text: taskText, completed: false });
  taskInput.value = "";
  //invoke the render task functionality
  renderTask(tasks);
};
//Event listener to trigger the addTask function
addBtn.addEventListener("click", addTask);
//Function declared  to Render Task
const renderTask = (taskArray) => {
  ulElement.innerHTML = "";
  taskArray.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add("completed");
    }

    //Eventlistener function to mark and un-mark tasked completed from the list (li)
    li.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      renderTask(tasks);
    });
    ulElement.appendChild(li);
  });
};
//Eventlistener to help filter through uncompleted tasks.
filterBtn.addEventListener("click", () => {
  const uncompletedTask = tasks.filter((task) => !task.completed);
  renderTask(uncompletedTask);
});
