console.log("a");
setTimeout(()=>{
    console.log("b");
}, 5000)
setTimeout(()=>{
    console.log("c");
}, 3000)
setTimeout(()=>{
    console.log("d");
}, 2000)
console.log("e");


// Output
// a 
// e 
// d 
// c 
// b 
// EXplanation: The synchronous code runs forst then asynchronous code runs