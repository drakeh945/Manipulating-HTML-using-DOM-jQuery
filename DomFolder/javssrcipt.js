addEventListener("DOMContentLoaded", button);
function button() {
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Click Me!");
  button.appendChild(buttonText);
  document.body.appendChild(button);
  addEventListener("click", click);
  function click() {
    alert("This is a very swell message.");
  }
}

let button = document.getElementById("button");
button.addEventListener("click", click);
function click() {
  let message = document.getElementById("text-box").value;
  alert(message);
}

let div = document.getElementById("div");
div.addEventListener("mouseenter", function () {
  div.style.backgroundColor = "red";
});
div.addEventListener("mouseleave", function () {
  div.style.backgroundColor = "black";
});

let p = document.getElementById("p");
p.addEventListener("click", function () {
  let allchar = "0123456789ABCDEF";
  let randcol = "";
  for (let i = 0; i < 6; i++) {
    randcol += allchar[Math.floor(Math.random() * 16)];
  }
  p.style.color = "#" + randcol;
});

let button = document.getElementById("button");
let div = document.getElementById("div");
button.addEventListener("click", function () {
  let span = document.createElement("span");
  div.appendChild(span);
  let text = document.createTextNode("Evan");
  span.appendChild(text);
});

let friends = [
  "Tyrell",
  "Theadore",
  "Rudy",
  "Rolo",
  "Cerian",
  "Jenny",
  "Derek",
  "Andrew",
  "PopPop",
  "Rusty",
];
let button = document.getElementById("button");
let ul = document.getElementById("ul");
button.addEventListener("click", function () {
  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement("li");
    let name = document.createTextNode(friends[i]);
    li.appendChild(name);
    ul.appendChild(li);
  }
});
