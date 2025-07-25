// let marks = [30, 45, 78, 34, 98];
// let sum = 0;
// let avg;
// console.log(marks);
// console.log(marks.length);

// // for(let i=0; i<marks.length; i++){
// //     console.log(marks[i]);
// // }

// // for of loop
// for(let mark of marks){
//     sum = sum + mark;
// }

// console.log(`Average of marks is ${sum/marks.length}`);

// push methods adds to end 
// let foodItems = ["potato", "tomato", "chips"];
// console.log(foodItems);
// foodItems.push("Juice");
// console.log(foodItems);

// pop method delete from end and return
// let deletedValue = foodItems.pop();
// console.log(deletedValue);
// console.log(foodItems);

// toString method convert array to string
// console.log(foodItems.toString());

// concat method joins array and return new array
// let array1 = ["Saba", "Sana"];
// let array2 = ["Safa", "Sadia"];

// let newArr = array1.concat(array2);
// console.log(newArr);

// unshift add to start => similar to push
// array1.unshift("Sara");
// console.log(array1);

// shift method delete from start and return => similar to pop
// array1.shift();
// console.log(array1);

// slice method returns the piece of array
let arr = [23, 65, 87, 99, 34];
console.log(arr.slice(1,4));

// splice method change original array(add, remove replace)
console.log(arr.splice(1, 2, 101, 102));
console.log(arr);
