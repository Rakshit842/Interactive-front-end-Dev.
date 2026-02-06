function handleClick(){
    document.querySelector("#Head").style.color="red";

    document.getElementById("btn").textContent = "color changed"

}
const handleclick=()=>{
const image = document.createElement("img");
image.setAttribute("src","https://universitykart.com/Content/upload/admin/rlvhqha3.jo0.jpg");

image.setAttribute("alt","KR Mangalam");
document.getElementById("content").append(image);
}

document.getElementById("btn").addEventListener("click",()=>{
    const image = document.createElement("img");
    image.setAttribute("src", "https://krmangalam.edu.in/_next/image?url=%2Flife-at-krmu%2Finfra.webp&w=3840&q=75")

    image.setAttribute("alt", "kr mangalam");

    document.getElementById("content").append(image);
})