// Slicing
let numbers = [1,2,3,4,5];
let sliced = numbers.slice(1,4);
console.log(sliced);

// some(callback)
let numbers1 = [1,2,3,4,5];
let hasEven = numbers.some(x => x % 2 === 0);
console.log(hasEven)

// every(callback)
let numbers2 =[2,4,6,8,10];
let allEven = numbers.every(x => x % 2 === 0);
console.log(allEven)

// Concat(array)
let fruits1 = ["apple","orange"];
let fruits2 = ["cherry","banana"];
let concatinate = fruits1.concat(fruits2)
console.log(concatinate)

// splice
let fruits3 = ["apple", "banana", "cherry", "mango"];
let spliced = fruits3.splice(1,1, "orange", "grape");
console.log(fruits3)

// reverse
let numbers3 = [1,2,3,4,5];
let reversed = numbers3.reverse(0,4);
console.log(reversed)

// include
let fruits4 = ["apple", "banana", "cherry"];
let included = fruits4.includes("mango");
console.log(included)
