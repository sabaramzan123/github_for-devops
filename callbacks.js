// function hello(){
//     console.log("hello");
// }

// console.log("one");
// console.log("two");

// // asynchronous programming
// setTimeout(() => {
//     console.log("hello")

    
// }, 4000);

// console.log("three");
// console.log("four");


// callbacks
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallBack){
//     sumCallBack(a,b);

// }

// // calculator(1,2,sum);
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })

// const hello = ()=>{
//     console.log("hello");
// }

// setTimeout(hello, 3000);


// callbacks hell => nested callbacks
// function getData(dataId, getNextData){

//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
        
//     }, 2000);
// }

// this is callback hell => not a good practice to write code
// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4);
//         });
//     });
// });




// to avoid callback hell => Promise
// const getPromise = ()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//         // reject("error");
    
//     })
// };

// let promise = getPromise();
// promise.then((result)=>{
//     console.log("promise fulfilled", result);
// });
// promise.catch((error)=>{
//     console.log("promise rejected", error);
// })


// function getData(dataId){

//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
            
//         }, 3000);

//     })
// }


// promise chain
// getData(1).then((result)=>{
//     return getData(2);
// }).then((result)=>{
//     return getData(3);
// }).then((result)=>{
//     console.log(result);
// })


// function asyncFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success1");
            
//         }, 4000);

//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success2");
            
//         }, 4000);

//     })
// }
// console.log("fetching data1");
// asyncFunc1().then((result)=>{
//     // console.log(result);
//     console.log("fetching data2");
// asyncFunc2().then((result)=>{
//         // console.log(result);
//     })
// })


// async/await
// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);
            
//         }, 2000);
//     })
// }

// async function getWeatherData(){
//     await api();
// }

function getData(dataId){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            
        }, 2000);

    })
}

// async await
async function getAllData() {
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
    console.log("getting data 4");
    await getData(4);
    
}

getAllData()

// IIFE => Immediately Invoked function expression
// (async function () {
//     console.log("getting data 1");
//     await getData(1);
//     console.log("getting data 2");
//     await getData(2);
//     console.log("getting data 3");
//     await getData(3);
//     console.log("getting data 4");
//     await getData(4);
    
// })();