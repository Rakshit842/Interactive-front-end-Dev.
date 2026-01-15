// console.log("Hello world!");
// let is used before declaring vaiables
// let fullName = "Rakshit";
// let age = 25
// let price = 99.99
// let x = null
// let isFollow = false
// console.log(fullName);
// console.log(age);
// console.log(price);
// console.log(x);
// console.log(isFollow);

// var was used before 2015 beacuse of following reason
// var height = 45;
// var height = 43;
// var height = 42;
// console.log(height);

// const is used for constant variables
// const pi = 3.14;

// Block is defined using {}, is variable in its block not universal
// {
//     let a = 5;
//     console.log(a);
// }
// {
//     let a = 10;
//     console.log(a);
// }
// DataTypes in JS
// let number = 10
// console.log(typeof number)

// let string = "lion"
// console.log(typeof string)

// let boolean = true
// console.log(typeof boolean)  

//object
// const student = {
//     fullName : "Rahul",
//     age : 20,
//     cgpa : 8.2,
//     isPass : true
// };
// student["age"] = student["age"] + 1
// console.log(student)

/* commets are that part of code which never executes, 
comments are maily used to give explanation of the code*/

// OPERATORS
// Arithematic operator
// let a = 5
// let b = 4
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)
//Unary operator(a++,a--,--a,++a)

// Assignment operator
// let c = 5;
// let d = 4;
// c -= 4;
// console.log(c); 

// Comparison operator
// let e = 3;
// let f = 4;
// console.log(e == f);
// console.log(e !== f);
// console.log(e >= f);
// console.log(e <= f);
// console.log(e < f);
// console.log(e > f);

// logical operators(and &&, or ||, not !)
// let g = 6;
// let h = 5;
// let cond1 = g>h;
// let cond2 = g===4;
// console.log(cond1 && cond2);

//Conditional statement
// let age = 17;
// if (age>=18){
//     console.log("you can vote");
// }
// else{
//     console.log("you can't vote")
// }

// loops 
// for (let A = 1; A <=5; A++){
//     console.log("Hello");
// }
// console.log("loop has ended")

let sum = 0;
for(let i = 1; i<=5; i++){
    sum = sum + i;
}
console.log("sum=", sum);
console.log("loop has ended");

let dayOfWeek = 'Monday';
switch (dayOfWeek) {
    case 'Monday':
        console.log("It's the start of the week.");
        break;
    case 'Friday':
        console.log("Weekend is almost here!");
        break;
    default:
        console.log("It's a weekday.");
}