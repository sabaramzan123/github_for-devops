// creating an object
// const student = {
//     fullName : "Saba",
//     cgpa: 3.89,
//     printCgpa: function(){
//         console.log("CGPA : ", this.cgpa);
//     }
// };

// const employee = {
//     calcTax(){
//          console.log("Tax is 10%");
//     }
// };

// const Saba = {
//     salary : 5000,
//     calcTax(){
//         console.log("Tax is 20%");  //when same function in both objects, then function inside an object will execute
//     }
// }

// // used to set a prototype of object
// Saba.__proto__ = employee;  //we can functions of employee object in Saba object

// Classes
// class ToyotaCar{
//     constructor(brand, milage){
//         console.log("Creting new object");
//         this.brand = brand;
//         this.milage = milage;
//     }
//     start(){
//         console.log("Start");
//     }

//     stop(){
//         console.log("Stop");
//     }

//     // setBrand(brand){
//     //     this.brand = brand;
//     // }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 12);
// console.log(lexus);

// inheritance
// class Person{
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     run(){
//         console.log("person is running");
//     }
// }

// class Engineer extends Person{
//     constructor(name){
//         super(name);
//         // this.branch = branch;

//     }
//     work(){
//         super.eat();
//         console.log("solve problems");
//     }
    
//     run(){
//         console.log("engineer is running");
//     }
// }

// let saba = new Engineer();
// saba.eat();
// saba.sleep();
// saba.work();
// saba.run();

// let p1 = new Person();
// let e1 = new Engineer();
// let engObj = new Engineer("saba");

// class User{
//     constructor(fullName, email){
//         this.fullName = fullName
//         this.email = email;
//     }

//     viewData(){
//         console.log(`User name is ${this.fullName} and email is ${this.email} `);
//     }
// }

// class Admin extends User{
//     constructor(fullName, email){
//         super(fullName, email);
//     }

//     edit(){
//         console.log(`User name is Sana and email is sana@gmail.com`);
//     }
// }

// let userInfo = new User("Saba", "sabaramzan@gmail.com");
// userInfo.viewData();

// let admin = new Admin("Sana", "sana@gmail.com");
// admin.edit();


// error handling
// let a = 6;
// let b = 0;
// let c = a + b;

// try{
//     console.log(d);
// }catch(err){
//     console.log(err);
// }

// console.log(c);
