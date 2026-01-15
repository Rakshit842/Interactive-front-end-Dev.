// regular function

function sum() {
    let a = 10;
    let b = 20;
    console.log(a + b)
}


// Arrow function
const sum=(a,b)=>{
    console.log(a+b);
}
sum(5,10)


// CallBack function
function sample(){
    console.log("sampple")
}
function demo(){
    console.log("Demo")
}
sample(demo)


// CallBack function 
function sample(callback){
    console.log("sample");
    callback()
}
sample();
function demo(){
    console.log("demo")
}
sample(demo)

let numbers = [1,2,3];
let doubled = numbers.map((x) => x);
console.log(doubled);