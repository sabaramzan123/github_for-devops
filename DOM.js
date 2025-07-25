// console.dir(document.body);
// let heading = document.getElementById("heading")
// console.log(heading);
// let red = document.getElementsByClassName("red");
// console.log(red);
// let tag = document.getElementsByTagName("p");
// console.log(tag);

// let firstElements = document.querySelector("p");
// console.dir(firstElements);
// console.log(firstElements);
// let allElements = document.querySelectorAll("p");
// console.dir(allElements);
// console.log(allElements);
// let idElements = document.querySelectorAll(".red");
// console.log(idElements);
// let classElements = document.querySelector("#heading");
// console.log(classElements);

// console.log(classElements.tagName);

// let div = document.querySelector("div");
// console.log(div.innerText);
// console.log(div.innerHTML);

// let val = div.getAttribute("id")
// console.log(val);
// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "box"));

// let div = document.querySelector("div");
// console.log(div.style);

// create new element
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi I am new heading</i>"

// document.querySelector("body").prepend(newHeading);

// newBtn.remove();


let newButton = document.createElement("button");
newButton.innerText = "Click me";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";

document.querySelector("body").prepend(newButton);

let para = document.querySelector("p");
para.classList.add("newclass");
