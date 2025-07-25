const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
// let promise = fetch(URL);
// console.log(promise);

let cat = document.querySelector("#cat-img");
let btn = document.querySelector("#btn");


// const getData = async ()=>{
//     console.log("fetching data");
//     let response = await fetch(URL);
//     console.log(response); //JSON format => javascript object notation

//     // json method => returns second promise (input is JSON, output is JS object)
//     let data = await response.json();
//     // console.log(data[0].height);
//     cat.innerText = data[2].height;
// }

// promise chaining
function getImage(){
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        cat.innerText = data[2].height;
    })
}

btn.addEventListener("click", getImage);


