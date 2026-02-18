// console.log("start....");

// function myfunction(){
//     setTimeout(() => {
//         return "myfunction timeout...";
//         258
//     }, 2000);
// }
// console.log(myfunction());

// console.log("end...");

console.log("Starting...");
function myWork(cb) {
    setTimeout(() => {
        cb("Doing work...");
    }, 5000);
}
myWork((data) => {
    console.log(data);
});
console.log("Done.");



console.log("Starting...");
function login(cb) {
    setTimeout(() => {
        cb({ uname: ElementInternals, isLoggedIn: true, message: "Login successful" });
    }, 3000);
}
function getVideoList(user, cb) {
    setTimeout(() => {
        cb(["video1", "video2", "video3"]);
    }, 1000);
}
function getVideoDetails(video, cb){
    setTimeout(() => {
        cb({title: video, duration: "2 mins"});
    }, 1000);
}
login("user@example.com", "password123", (data) => {
    console.log(data);
    getVideoList("exampleUser", (videos) => {
    console.log(videos);
        getVideoDetails(videos[0], (details)=>{
            console.log(details);
        });
    });
});


console.log("Done.");