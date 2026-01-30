// INTRODUCTION TO DOM
const heading = document.getElementById("myHeading");
console.log(heading)

heading.style.color = "tomato";
heading.style.backgroundColor = "blue";
// .textContent
console.log(heading.textContent);
heading.textContent = "Hello india"


const subHeading = document.getElementsByClassName("sub-heading");
console.log(subHeading);
for(let i=0;i<subHeading.length;i++){
    subHeading[0].style.color="blue";
    subHeading[1].style.color="red";
    subHeading[2].style.color="green";
}


