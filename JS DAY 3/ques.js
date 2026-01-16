// Question 1
let arr = ["apple", "banana", "mango,", "grapes"];
let res = []

while (arr.length > 0) {
    res.push(arr.pop());
}
console.log(res)


// Question 2
let arr2 = [-1, -54, 54, 65, -3, 5];
let posint = []

while (arr2.length > 0) {
    let val = arr2.shift();
    if (val >= 0) {
        posint.push(val);
    }
}
console.log(posint);


// Question 3
function palindrome() {
    let arr3 = [1, 2, 3, 2, 1];
    let temp = []
    let original = []

    for (let i = 0; i < arr.length; i++) {
        original.push(arr[i]);
    }
    console.log(original);
    while (arr3.length > 0) {
        temp.push(arr3.pop());
    }
    for (let i = 0; i < original.length; i++) {
        if (original[i] !== temp[i])
            return "not a palindrome";
    }
    return "palindrome";
}
console.log(palindrome())