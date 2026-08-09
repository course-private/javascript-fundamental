// ECMASCRIPT 6

/*
Apa itu ES6?

ES6 (ECMAScript 2015) adalah versi besar JavaScript yang memperkenalkan banyak fitur untuk membuat kode lebih modern, readable, dan maintainable.
 */

// 1. Perbedaan var, let, dan const.

// ES5 (sebelum ES6)
// console.log(number); // Result: 10
// var number = 10;

// ES6
// let number = 10; // Declaration
// number = 5; // Reassign
// console.log(number);

// const pi = 3.14;
// pi = 5;
// console.log(pi);

// 2. Function: Declaration, Expression, Arrow

// ES5
// Function Declaration

// function getData() {
//   console.log("Get Data");
// }

// function printData(string) {
//   return string;
// }

// getData();
// console.log(printData("Laptop"));

// Function Expression

// const getData = function () {
//   console.log("Get Data");
// };

// const printData = function (string) {
//   return string;
// };

// console.log(getData);
// getData();
// console.log(printData("Laptop"));

// ES6
// Arrow Function

// const getData = () => console.log("Get Data");
// const printData = (string) => string;

// getData();
// console.log(printData("Laptop"));

/**
    # 🧮 Exercise — Calculator Function

    ## Tujuan

    Buat sebuah program Calculator sederhana menggunakan JavaScript.

    Program harus memiliki 5 function operasi:

    1. add()
    2. sub()
    3. mul()
    4. div()
    5. mod()

    Kemudian buat satu main function:

    calculator(x, opr, y)

    Operator yang digunakan:

    +  → add()
    -  → sub()
    *  → mul()
    /  → div()
    %  → mod()

 */

// PART 1 — FUNCTION DECLARATION

// function add(x, y) {
//   return x + y;
// }

// function sub(x, y) {
//   return x - y;
// }

// function mul(x, y) {
//   return x * y;
// }

// function div(x, y) {
//   if (y === 0) {
//     return "Cannot divide by zero";
//   }

//   return x / y;
// }

// function mod(x, y) {
//   return x % y;
// }

// function calculator(x, opr, y) {
//   switch (opr) {
//     case "+":
//       return add(x, y);

//     case "-":
//       return sub(x, y);

//     case "*":
//       return mul(x, y);

//     case "/":
//       return div(x, y);

//     case "%":
//       return mod(x, y);

//     default:
//       return "Invalid operator";
//   }
// }

// console.log("PART 1 — FUNCTION DECLARATION");

// console.log(calculator(20, "+", 10)); // 30
// console.log(calculator(20, "-", 10)); // 10
// console.log(calculator(20, "*", 10)); // 200
// console.log(calculator(20, "/", 10)); // 2
// console.log(calculator(20, "%", 3)); // 2
// console.log(calculator(20, "^", 3)); // Invalid operator
// console.log(calculator(20, "/", 0)); // Cannot divide by zero

// // PART 2 — ARROW FUNCTION

// const addArrow = (x, y) => {
//   return x + y;
// };

// const subArrow = (x, y) => {
//   return x - y;
// };

// const mulArrow = (x, y) => {
//   return x * y;
// };

// const divArrow = (x, y) => {
//   if (y === 0) {
//     return "Cannot divide by zero";
//   }

//   return x / y;
// };

// const modArrow = (x, y) => {
//   return x % y;
// };

// const calculatorArrow = (x, opr, y) => {
//   switch (opr) {
//     case "+":
//       return addArrow(x, y);

//     case "-":
//       return subArrow(x, y);

//     case "*":
//       return mulArrow(x, y);

//     case "/":
//       return divArrow(x, y);

//     case "%":
//       return modArrow(x, y);

//     default:
//       return "Invalid operator";
//   }
// };

// console.log("\nPART 2 — ARROW FUNCTION");

// console.log(calculatorArrow(20, "+", 10)); // 30
// console.log(calculatorArrow(20, "-", 10)); // 10
// console.log(calculatorArrow(20, "*", 10)); // 200
// console.log(calculatorArrow(20, "/", 10)); // 2
// console.log(calculatorArrow(20, "%", 3)); // 2
// console.log(calculatorArrow(20, "^", 3)); // Invalid operator
// console.log(calculatorArrow(20, "/", 0)); // Cannot divide by zero

// // PART 3 — ARROW FUNCTION + IMPLICIT RETURN

// const addShort = (x, y) => x + y;

// const subShort = (x, y) => x - y;

// const mulShort = (x, y) => x * y;

// const divShort = (x, y) => (y === 0 ? "Cannot divide by zero" : x / y); // Ternary Conditional

// const modShort = (x, y) => x % y;

// const calculatorShort = (x, opr, y) => {
//   switch (opr) {
//     case "+":
//       return addShort(x, y);

//     case "-":
//       return subShort(x, y);

//     case "*":
//       return mulShort(x, y);

//     case "/":
//       return divShort(x, y);

//     case "%":
//       return modShort(x, y);

//     default:
//       return "Invalid operator";
//   }
// };

// console.log("\nPART 3 — ARROW FUNCTION + IMPLICIT RETURN");

// console.log(calculatorShort(20, "+", 10)); // 30
// console.log(calculatorShort(20, "-", 10)); // 10
// console.log(calculatorShort(20, "*", 10)); // 200
// console.log(calculatorShort(20, "/", 10)); // 2
// console.log(calculatorShort(20, "%", 3)); // 2
// console.log(calculatorShort(20, "^", 3)); // Invalid operator
// console.log(calculatorShort(20, "/", 0)); // Cannot divide by zero

// 3. Template Literal

// const name = "Vincent";
// const score = 100;
// const hobby = "Coding";

// Result: My name is Vincent, score = 100, hobby = 'Coding'.

// ES5
// console.log(
//   "My name is " + name + ", score = " + score + ", hobby = '" + hobby + "'.",
// );

// ES6
// console.log(`My name is ${name}, score = ${score}, hobby = '${hobby}'.`);

// 4. Destructuring (Array dan Object)

// ARRAY
// const profiles = ["Vincent", 100, true, "Coding", 3.21];

// ES5
// let name = profiles[0];
// let score = profiles[1];
// let isGraduated = profiles[2];
// let hobby = profiles[3];
// let GPA = profiles[4];

// ES6
// let [name, score, isGraduated, hobby, GPA] = profiles;

// console.log(name);
// console.log(score);
// console.log(isGraduated);
// console.log(hobby);
// console.log(GPA);

// OBJECT

let student = {
  id: "ST-01",
  email: "Vincent@mail.com",
  password: "123",
};

let { id, email, password } = student;

// console.log(id);
// console.log(email);
// console.log(password);

// 5. Rest dan Spread Operator

// Spread

// ARRAY
// let array1 = [1, 2];
// let array2 = array1; XXX

// ES5
// let array2 = array1.slice();

// ES6 (Spread Operator)
// let array2 = [...array1];

// array2.push(3);
// console.log(array1);
// console.log(array2);

// let a = [10, 20, 30];
// let b = [40, 50];
// let c; // menggabungkan semua isi array dari a dan b

// ES6
// c = [...a, ...b];
// console.log(c);

// OBJECT
// const credential = {
//   name: "Admin",
//   role: "admin",
// };

// const profile = {
//   city: "jakarta",
//   province: "DKI Jakarta",
//   country: "Indonesia",
// };

// const detail = {
//   ...credential,
//   ...profile,
// };

// console.log(detail);

// Rest

// const createUser = (...params) => {
//   // code here
//   const [fullname, email, password, role, country] = params;
//   const objectResult = {
//     fullname,
//     email,
//     password,
//     role,
//     country,
//   };
//   console.log(objectResult);
// };

// createUser("Admin 123", "admin@mail.com", "123", "admin", "indonesia");

// 6. Default Parameter

// ES5
// const greet = (name) => {
//   name = name || "Guest"; // By default "Guest"
//   return `Hello, my name is ${name}.`;
// };

// ES6
const greet = (name = "Guest") => `Hello, my name is ${name}.`;

console.log(greet("Vincent"));
console.log(greet());
