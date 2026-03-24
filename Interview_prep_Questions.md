*JavaScript Interview Preparation Questions/Question Bank:*

Q1. What is the difference between var, let, and const?

Q2. Explain the different types of operators in JavaScript.
Examples:
* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Bitwise Operators
* Ternary Operator
* Type Operators

Q3. What is the difference between == and ===?

Q4. What is Hoisting and TDZ (Temporal Dead Zone)?

Q5. Explain different Array methods in JavaScript.
Important comparisons:
* map() vs filter() vs reduce()
* map() vs forEach()
* find() vs filter()
* some() vs every()

Q6. Explain String methods and Object methods in JavaScript.

Q7. Types of Functions in JavaScript
* Regular Function
* Arrow Function
* First-Class Function
* Higher-Order Function
* Callback Function
* Self-Invoking Function (IIFE – Immediately Invoked Function Expression)
* Anonymous Function

2nd Sem Onwards:

Q8. What is the difference between setTimeout() and setInterval()?

Q9. What is the difference between DOM and HTML?What are the uses of the DOM?

Q10. What is the difference between:
* textContent
* innerHTML
* innerText


Q11. What is the difference between:
* getElementById()
* getElementsByClassName()
* query selector and queryselectorall

Q12. Create element, append element, remove element using DOM.

Q13. Explain Event Handling in JavaScript
* addEventListener() with implementation    
Q14. ClassList and its methods- add, remove, toggle.
      
Q15. Form Validation using Dom:
    * onclick
    * onchange
    * onmouseover
    * onsubmit
Q16. Analyse concepts of event bubbling and event capturing. Explain role of preventDefault(). 

Q17. Explain Execution Context and Call Stack.what is TDZ. How does JavaScript code execute?

Q18. What is Callback Hell? Explain its disadvantages.

Q19. Explain the Lifecycle of a Promise.
Answer flow:
1. Start with Callback Hell problem
2. Define Promise
3. Explain Promise states
    * Pending
    * Fulfilled
    * Rejected
4. Promise consumers:
    * .then()
    * .catch()
    * .finally()
5. Implementation example

Q20. Explain the Event Loop and how asynchronous code executes in the execution context.

Q21. What is Promise Chaining and its disadvantages?

Q22. Explain Async and Await.Why is it more efficient and readable than Promise chaining?

Q23. How fetch api works? Describe how json data is handled. 

Guess the Output and Explain the Reason in Details (Concepts to cover:callstack, event loop, micro task and macro task queue)

Q23. 
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

Q24.
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve()
.then(() => {
  console.log("C");
})
.then(() => {
  console.log("D");
});

console.log("E");

Q25. 

console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");

Q26.
setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});

Q27.
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
  console.log("3");
  Promise.resolve().then(() => {
    console.log("4");
  });
});

console.log("5");

Q28.
console.log("A");

new Promise((resolve) => {
  console.log("B");
  resolve();
  console.log("C");
}).then(() => {
  console.log("D");
});

console.log("E");