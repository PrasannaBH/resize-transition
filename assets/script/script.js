let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
btn1.onclick = function() {
    one.classList.toggle("active");
}

btn2.onclick = function() {
    two.classList.toggle("active");
}