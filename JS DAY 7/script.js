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

// object methods
// Object.keys(variable name)
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const car = {
    make: "Mahindra", 
    model: "Thar",
};
Object.seal(car) //we cant add a new key and value pair butwe can change or update the existing value
// Object.freeze(car) //adding and updating cannot be done in key value pairs 
car.model="XUV700"
car.color = "zBlack";
console.log(car);



// Sem 2
var a = 10;
console.log(a);
function demo(){
    let b = 20;
    console.log(b);
}
demo();