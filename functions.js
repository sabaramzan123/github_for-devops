// function sum(a, b){
//     let sum = a+b;
//     console.log(sum);
// }

// sum(4,5);

// arrow function
// const arrowSum = (a,b)=>{
//     console.log(a+b);
// }

// arrowSum(4,6);

// const arrowMult = (x,y)=>{
//     console.log(x * y);
// }

// arrowMult(5,8);

// return no of vowels in a string

// function noOfVowels(str){

//      let count = 0;
//      for(const char of str){
//         if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
//             count++;
//         }
        
//      }
//      console.log(`Number of vowels: ${count}`);
// }

// noOfVowels("Programming");

// arrow funtion
// const noOfVowels = (str)=>{
//     let count = 0;
//      for(const char of str){
//         if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
//             count++;
//         }
        
//      }
//      console.log(`Number of vowels: ${count}`);
// }

// noOfVowels("Programming");

// for each loop  higher order functions which take other function as parameter

// let arr = [4,7,8,2,9];
// arr.forEach(function printValue(val){
//     console.log(val);
// })

// arr.forEach((val, index, arr)=>{
//     console.log(val, index, arr);
// })

// print square of each element of array
// arr.forEach((val)=>{
//     console.log(val * val);
// })

// map function => to create a new array with some operations
// let newArray = arr.map((val) =>{
//     return val;
// })

// console.log(newArray);

// filter method
// let arr = [3,6,8,,5,9];
// let newArr = arr.filter((val)=>{
//     return val % 2 == 0;
// })
// console.log(newArr);

// reduce method => reduces array to single value -> return single value
// let arr = [4,6,7,2,3];
// let sum = arr.reduce((prev, curr)=>{
//     return prev + curr;
// })
// console.log(sum);

// filter marks of students greater than 90
// let arr = [45, 99, 98, 34, 67, 89];
// let newArr = arr.filter((val)=>{
//     return val > 90
// })
// console.log(newArr);

// ask user to enter a number and create array from 1 to n
let n = prompt("Enter a number?");

let arr = [];
for(let i=1; i<=n ; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((prev, curr)=>{
    return prev + curr;
})
console.log(sum);

let product = arr.reduce((prev, curr)=>{
    return prev * curr;
})
console.log(product);

