// Task1
const numbers = [12, 3, 5, 8, 10, 1, 4, 7];
const evens = [];
const odds = [];

for (let num of numbers) {
    if (num % 2 === 0) {
        evens.push(num);
    } else {
        odds.push(num);
    }
}

console.log("Evens:", evens);
console.log("Odds:", odds);

// Task2
function moveZeroes(arr) {
    let writeIndex = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[writeIndex];
            arr[writeIndex] = arr[i];
            arr[i] = temp;
            
            writeIndex++;
        }
    }
    return arr;
}

const numbers1 = [0, 1, 0, 3, 12];
moveZeroes(numbers1);
console.log(numbers1); 