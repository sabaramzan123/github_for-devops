// for(let i=0; i<5; i++){
//     console.log("saba")
// }

// let i=1;
// while(i<=5){
//     console.log("i = "+ i);
//     i++;
// }

// let i=20;
// do{
//     console.log("Saba");
// }while(i<=10);

// for-of loop
// let str = "SabaRamzan";
// let length = 0;
// for(i of str){
//     console.log("i = "+i);
//     length++;

// }

// console.log("Length: "+length);

// let Student={
//     name: "Saba",
//     age: 22,
//     cgpa: 3.89

// };

// // for in loop
// for(key in Student){
//     console.log("Key: "+key+ " Value: "+Student[key]);
// }

// number guessing game
let gameNo = 25;
let userNo = prompt("Guess the correct number: ");

while(userNo != gameNo){
    userNo = prompt("You guessed wrong, try again");
    
}

console.log("Congratulations, you guessed the right number");