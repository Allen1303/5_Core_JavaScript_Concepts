# JavaScript Closures & Scope — Journal Notes

## Date: 23 June 2025

---

### makeCounter() with Closures

Today I practiced building a counter using closures. I learned that a closure lets a function "remember" variables from its outer scope, even after the outer function has finished running. This is super useful for creating private state. For example, my `makeCounter` function returns another function that increments a hidden `count` variable. Each call to the returned function increases the count, but nothing outside can directly change it. This pattern is great for things like counters, where you want to keep the state private.

```js
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2
```

---

### Greeting Factory with Closures

I also built a `makeGreeter(name)` function. This was a fun way to see closures in action for function factories. The outer function takes a name and returns a new function that "remembers" that name. When I call the returned function with a message, it combines the name and message into a greeting. This is a powerful pattern for creating customized functions on the fly.

```js
function makeGreeter(name) {
  return function (message) {
    return `Welcome: ${name} ${message}`;
  };
}
const greetAllen = makeGreeter("Allen");
greetAllen("glad to see you back!"); // Welcome: Allen glad to see you back!
```

---

### setTimeout Loop & Preserving Index with Closures

One classic closure use case is in asynchronous code, like loops with `setTimeout`. If you use `var` in a loop, all the timeouts end up using the final value of the variable. I learned that wrapping the `setTimeout` in an IIFE (immediately invoked function expression) or using `let` (block scope) solves this. Each timeout then "remembers" the value at the time it was created.

```js
// Using IIFE
for (var i = 1; i <= 5; i++) {
  (function (index) {
    setTimeout(function () {
      console.log("Index:", index);
    }, index * 500);
  })(i);
}

// Using let
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Index:", i);
  }, i * 500);
}
```

---

### Lexical Scope — My Understanding

Lexical scope means that a function's scope is determined by where it is written in the code. Inner functions can always access variables from their outer (enclosing) functions. This is the foundation for how closures work in JavaScript.

```js
function outer() {
  let outerVar = "I am outside!";
  function inner() {
    console.log(outerVar); // Has access to outerVar due to lexical scope
  }
  inner();
}
outer();
```

---

### 💡 Pro Tip: When and Why I Use Closures & Scope

Closures are my go-to tool for:

- Keeping data private (like counters or caches)
- Creating function factories (like greeters)
- Handling async code (timers, event handlers) where I need to "remember" a value
- Building modules or components that hide their internal details

Whenever I want to keep state safe from the outside world, or need a function to "remember" something from when it was created, I reach for closures. They make my code more robust, modular, and secure—especially in modern web apps.

---
### Week of June 30

This week involved hands-on practice with core JavaScript patterns, including:

*   **Asynchronous Loops & Scope:** Explored how `setTimeout` interacts with loop variables and the importance of using `let` for correct block scoping to preserve values across asynchronous calls.
    *   *Key Takeaway 1:* Async calls (like `setTimeout`) inside loops require careful scope management.
    *   *Key Takeaway 2:* Using `let` correctly captures the loop variable's value per iteration, preventing unexpected behavior seen with `var`.
    ```javascript
    // Using 'let' to correctly capture index in async loop
    for (let i = 0; i < 5; i++) {
      setTimeout(() => console.log(`Index: ${i + 1}`), i * 1500);
    }
    ```

*   **Basic Task Management:** Built a simple task list application to practice fundamental DOM manipulation and array methods. This covered adding items (`push`), rendering lists (`forEach`), toggling state (`addEventListener`, object property updates), and filtering data (`filter`).
    *   *Key Takeaway 1:* Essential array methods (`push`, `filter`, `forEach`) are powerful for managing list data.
    *   *Key Takeaway 2:* Combining DOM manipulation and event listeners is key to building interactive UI components.
    ```javascript
    // Core data manipulation examples: add, filter, render loop
    tasks.push({ text: taskText, completed: false }); // Add
    const uncompleted = tasks.filter(task => !task.completed); // Filter
    taskArray.forEach(...) // Render (loop)
    ```
Absolutely! Here's the journal entry **with a short code snippet** from your Step Viewer mini-project to highlight your use of recursion, closure, and DOM interaction:

---

### 🗓️ **Journal Entry – Week of July 7**

**🧩 Project:** Step Viewer Challenge (Closures + Recursion + DOM)

**Summary:**
Completed a timed step viewer that revealed each instruction with a delay. This helped reinforce:

* ✅ **Closures** — Using `setTimeout` retained access to variables like `index`.
* ✅ **Recursion** — Repeatedly called `showSteps()` inside itself with an updated index.
* ✅ **Base Case Priority** — Learned that placing the **base case first** is essential to prevent extra rendering or infinite recursion.
* ✅ **DOM Updates** — Dynamically appended list items for each step to the UI.

**🧠 Reflection:**
This challenge deepened my understanding of how recursion can be used in UI interactions—not just data structures. It also clarified how and when closures preserve state between delayed executions.

---

**🔍 Snippet:**

```js
function showSteps(index = 0) {
  if (index >= steps.length) return; // ✅ Base case first

  setTimeout(() => {
    const liEl = document.createElement('li');
    liEl.textContent = steps[index];
    stepBox.appendChild(liEl);
    showSteps(index + 1); // 🔁 Recursive call
  }, 2000);
}
```


