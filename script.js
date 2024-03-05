let button = document.getElementById("submit");

button.addEventListener("click", function() {
    alert("sorry, this will be able soon");
});

let navigationElement = document.getElementById('bar-ul');
let burgerElement = document.getElementById('burger');

burgerElement.addEventListener("click", function (){
    navigationElement.classList.toggle("bar-ul-on");
});