const head = document.getElementById("heading");

console.log(head.innerText) //it will only show all the visible text

console.log(head.textContent) //it will show all the text including hidden text

console.log(head.innerHTML) //it will show all the text with its tag/elemnet


// DOM Modification
// Create a new element and set its content 
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph,";
console.log(newParagraph.textContent);

// Apppend the element to the conatainer
const container = document.getElementById("container");
container.appendChild(newParagraph);

//Removing item
const para = document.querySelector("#container p");
para.remove(); //or
document.querySelector("#conatiner p").remove();
