// 1. Iterate all the element and print the elements
const arr1 = [10, 20, 30, 40, 50];
console.log("Output using forEach:");
arr1.forEach((element) => {
    console.log(element);
});


// 2. Add 5 to each number inside the array, Take array lenth 5 
const arr2 = [1, 2, 3, 4, 5]; 
const addedFive = arr2.map((num) => num + 5);
console.log("Original Array:", arr2);
console.log("New Array (+5):", addedFive); 


// 3. reverse the array. The ekement shoud be numeric.
const arr3 = [100, 200, 300, 400, 500];
arr3.reverse();
console.log("Reversed Array:", arr3);


// 4. Sort the array in desending order.
const arr4 = [5, 12, 8, 130, 44];
arr4.sort((a, b) => b - a);
console.log("Sorted Descending:", arr4);


// 5. find the duplicate element and return the unique array
const arr5 = [1, 2, 2, 3, 4, 4, 5, 1];
const uniqueArray = [...new Set(arr5)];
console.log("Unique Array:", uniqueArray);
const findDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
};
console.log("Duplicate Elements found:", [...new Set(findDuplicates(arr5))]);