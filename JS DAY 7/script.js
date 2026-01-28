let user ={ 
    fullname: "Rakshit",
    address: "gurugram",
    mobileno: 12345678,
    favcolor: ["white", "blue", "black"]
}
console.log(user);

console.log("My name is "+user.fullname+". My fav color is "+user.favcolor[0]);

// string literals
console.log(`My name is ${user.fullname}. My fav color is ${user.favcolor[2]}`);

// object methods
// nested object
let user1 ={ 
    fullname: "Rakshit",
    address: {
        city:"gurugram",
        sector: "37D",
        state: "haryana"
    },
    mobileno: 12345678,
    favcolor: ["white", "blue", "black"]
}
console.log(user1.address.state)

let user2 ={ 
    fullname: "Rakshit",
    address: {
        city:"gurugram",
        sector: "37D",
        state: "haryana"
    },
    mobileno: 12345678,
    favcolor: ["white", "blue", "black"],
    demo:function(){
        return "demo function"
    }
}
console.log(user2.demo())