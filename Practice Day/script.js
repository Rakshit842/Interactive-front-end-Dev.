// let btn = document.querySelector("button");
// let currMode = "light"
// btn.addEventListener("click", ()=> {
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode)
// });

// class toyotaCar{
//     constructor(){
//         console.log("New")
//     }
//     Start() {
//         console.log("Start");
//     }
//     Stop() {
//         console.log("Stop");
//     }
// }
// let fortuner = new toyotaCar();
// let camry = new toyotaCar();


// class person {
//     sleep(){
//         console.log("Sleep");
//     }
//     eat(){
//         console.log("eat");
//     }
// }
// class engineer extends person{
//     code(){
//         console.log("Engineer do coding");
//     }
//     ProblemSolving(){
//         console.log("Engineer is a problemsolver");
//     }
// }

// let engObj = new engineer();


// Q1
DATA = "User Data";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Data = ", DATA);
    }
}
class admin extends User {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        DATA = "New user data";
    }
}
let admin1 = new admin("Alex", "Alex@email.com")
let student1 = new User("john", "john@gmail.com");
let student2 = new User("katy", "katy@gmail.com");


// try-catch
let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a + b);
try {
    console.log("a-b = ", a - c);
}
catch (err) {
    console.log(err)
}
console.log("a*b = ", a * b);


//Asynchronous programming
function hello() {
    console.log("hello");
}
setTimeout(hello, 10000);

setTimeout(() => {
    console.log("innertimefunction");
}, 5000)

setTimeout(() => {
    alert("This is a harmful website.");
}, 4000)


// promise using function
function pro() {
    return new Promise((resolve, reject) => {
        let payment = "true";
        if (payment === "true") {
            resolve("Dashboard Access")
        }
        else {
            reject()
        }
    })
}
pro()
    .then((res) => console.log(res))
    .catch(() => console.log("Access denied"))

// promise using variable
const pro = new Promise((resolve, reject) => {
    let payment = "true";
    if (payment === "true") {
        resolve("Dashboard Access")
    }
    else {
        reject()
    }
})
pro.then((res) => console.log(res))
    .catch(() => console.log("Access denied"))


