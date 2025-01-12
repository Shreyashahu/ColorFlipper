let body = document.querySelector("body");
let btn1 = document.getElementById("clr1");
let btn2 = document.getElementById("clr2");
let btn3 = document.getElementById("clr3");
let btn4 = document.getElementById("clr4");
let btn5 = document.getElementById("clr5");
let ranBtn = document.getElementById("clr6");

btn1.addEventListener("click", () => {
    body.style.backgroundColor = "blue";  
});

btn2.addEventListener("click", () => {
    body.style.backgroundColor = "yellow"; 
});

btn3.addEventListener("click", () => {
    body.style.backgroundColor = "green";  
});

btn4.addEventListener("click", () => {
    body.style.backgroundColor = "black";   
});

btn5.addEventListener("click", () => {
    body.style.backgroundColor = "red";   
});

ranBtn.addEventListener("click", () => {
    let redV = Math.floor(Math.random() * 255);
    let greenV = Math.floor(Math.random() * 255);
    let blueV = Math.floor(Math.random() * 255); 
    body.style.backgroundColor = `rgb(${redV}, ${greenV}, ${blueV})`;
});