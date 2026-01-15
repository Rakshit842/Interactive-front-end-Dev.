// map method
let arr = [1,2,3,4,5];
let result = arr.map((x)=>x)
console.log(result);

// filter method
let scores = [85,92,78,90,88];
let highScores = 
scores.filter(score => score >= 90);
console.log(highScores);

let score = [12, 7, 34, 40, 23, 15,18];
let highScore = 
score.filter((score) =>{
    if(score>=15){
        console.log("Pass")
    }
    else{
        console.log("fail")
    }
});

// Reduce method
let number = [1,2,3,4,5];
let sum = number.reduce((acc, current) => console.log(acc));

let number1 = [1,2,3,4,5];
let sum1 = number1.reduce((acc, current) => console.log(current));

let numbers = [1,2,3,4,5];
let sum2=0;
for(let i=0;i<numbers.length;i++){
    sum2 = sum2+numbers[i]
}

