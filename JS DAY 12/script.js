// const nameInput = document.getElementById("myInput");
// console.log(nameInput)

// nameInput.addEventListener("change",()=>{
//     document.getElementById("output").textContent = "Change Detected!";
//     console.log(nameInput.value)
// })

const form = document.getElementById("myForm");
const nameInput = document.getElementById("myinput");
const courseInput = document.getElementById("course");
const output = document.getElementById("output");

courseInput.addEventListener("change", ()=>{
    console.log(courseInput.value);
    // output.textContent=nameInput.value
    output.textContent = courseInput.value;
})

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const name = nameInput.value;
    const course = courseInput.value;
    console.log(name,course);

    output.textContent = name+" "+course;
})



