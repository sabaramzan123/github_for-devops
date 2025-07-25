let btn1 = document.querySelector("#btn1");
// btn1.onclick = (event)=>{
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log("btn1 was clicked");
//     let a = 78;
//     a++;
//     console.log(a);
// }
// event listener
// btn1.addEventListener("click", ()=>{
//     console.log("btn1 was clicked");
// })
// let doubleClick = ()=>{
//     console.log("Btn1 was double clicked");
// }

// btn1.removeEventListener("dblclick", doubleClick);

// let div = document.querySelector("#box");
// div.onmouseover = ()=>{
//     console.log("You are inside div");
// }

let modebtn = document.querySelector("#mode");
let currmode = "Light";
let body = document.querySelector("body");

modebtn.addEventListener("click", ()=>{
    if(currmode === "Light"){
        currmode = "dark";
        body.classList.add("dark")
        body.classList.remove("light");
    }
    else{
        currmode = "Light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
})

modebtn.addEventListener("mouseover", ()=>{
    modebtn.classList.add("mouseover")
})