// operations on STRINGS
// slicing
let str = "JavaScript is fun!";
let sliced = str.slice(0,10);
console.log(sliced)

// substring
// substring support -ve indices
let str1 = "Javascript is amazing!";
let sub = str1.substring(11, 21);
console.log(sub)

// indexOf()
const paragraph = "the quick brown fox jumps ovr the lazy dog. if the dog barked, was it really lazy?";
const indexOfFirst = paragraph.indexOf("dog");
console.log(indexOfFirst); 

// toUppercase & toLowercase
const goodname = "john marston";
const upperCaseName = goodname.toUpperCase();
const lowerCaseName = goodname.toLowerCase();
console.log(upperCaseName);
console.log(lowerCaseName);

// concat
let firstname = "John "
let lastname = "Marston"
let fullname = `${firstname}${lastname}`//string literals
let concatinated = firstname.concat(lastname);
console.log(fullname);
console.log(concatinated);

let Town = "Blackwater";
let program = "BCA";
console.log("My name is john marston"+ " " + program + " " + "from" + " " + Town)
console.log(`my name is John Marston ${program} from ${Town}`)


let arr = [1,2,3];
let arr1 = [4,5,6];
let newArray = [...arr,...arr1]
console.log(newArray)

// trim
let sentence = "   This is a sentence with spaces.    ";
let trimmed = sentence.trim();
console.log(trimmed)

// Split
let sentence2 = "I,am,a,comma,separeted,sentence";
let words = sentence2.split(",");
console.log(words) 