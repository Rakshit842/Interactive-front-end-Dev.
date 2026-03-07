// const pro = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("promise resolved")
//     }, 3000)
// })

// function getData(){
//     pro.then((res) => console.log(res));
//     console.log("After promise");
// }

// getData();

// output will be
// After promise
// promise resolved



// const pro = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("payment done")
//     }, 3000)
// })

// async function getData(){
//     const value = await pro;
//     console.log(value);
//     console.log("Dashboard access given")
// }

// getData();

// output will be
// promise resolved

const pro = new Promise((res,rej) => {
    setTimeout(()=>{
        let payment = true;
        if(payment){
            res("Payment Done");
        }
        else{
            rej("Payment failed");
        }
    }, 3000)
})

async function getData() {
    try{
        const value = await pro;
        console.log(value);
        console.log("Access provided");
    }
    catch(error){
        console.error(error);
        console.log("Access Denied");
    }
}
getData();