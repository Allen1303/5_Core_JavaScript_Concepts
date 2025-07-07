"use strict";
/**
 *@param Practice Checklist
 @param Build task-adding functionality with push()
 @param Render tasks dynamically to the DOM using .map() or a for loop
 @param Toggle “completed” state with a click + .classList.toggle()
 @param Use .filter() to show only uncompleted tasks
 @param Handle Enter key with keydown event on input
 */
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const filterBtn = document.getElementById("filterBtn");
const ulElement = document.getElementById("taskList");

const tasks = [];
//Function to add task from the input filed to the array
const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;
  tasks.push({ text: taskText, completed: false });
  taskInput.value = "";
  renderTask(tasks);
};
addBtn.addEventListener("click", addTask);
const renderTask = (taskArray) => {
  ulElement.innerHTML = "";
  taskArray.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add("completed");
    }
    li.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      renderTask(tasks);
    });
    ulElement.appendChild(li);
  });
};
filterBtn.addEventListener("click", () => {
  const uncompletedTask = tasks.filter((task) => !task.completed);
  renderTask(uncompletedTask);
});
