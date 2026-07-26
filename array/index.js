// ARRAY

// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] ** 2);
// }

// Built In Function

// let items = ["laptop", "hp"];
// console.log(items);

// menambahkan dari belakang
// items.push("mouse");

// menghapus dari belakang
// items.pop();

// menambahkan dari depan
// items.unshift("keyboard");

// menghapus dari depan
// items.shift();

// console.log(items);

/**
 * Study Case
 *
 * Buatlah sebuah function untuk membuat array baru dari array sebelum nya.
 *
 * Contoh:
 * let numbers = [1,2,3,4,5]
 *
 * Result:
 * [1,4,9,16,25]
 */

function quadraticNumbers(arrNumbers) {
  let result = [];
  for (let i = 0; i < arrNumbers.length; i++) {
    result.push(arrNumbers[i] ** 2);
  }

  return result;
}

// console.log(quadraticNumbers([1, 2, 3, 4, 5]));
// console.log(quadraticNumbers([3, 6, 9]));
// console.log(quadraticNumbers([10, 5, 3, 4, 2, 12, 15]));

let coffees = ["Arabica", "Robusta", "Mix Blend"];

function showCoffees(coffees) {
  console.log("=========================");
  console.log("Coffee List:");
  for (let i = 0; i < coffees.length; i++) {
    console.log(`${i + 1}. ${coffees[i]}`);
  }
  console.log("=========================");
}

// showCoffees(coffees);

let students = [
  [1, "Vincent", 3.5],
  [2, "Udin", 3.0],
  [3, "Mamang", 2.1],
];

function checkStudents(students) {
  for (let i = 0; i < students.length; i++) {
    let id = students[i][0];
    let nama = students[i][1];
    let ipk = students[i][2];
    let status = "";

    if (ipk >= 3.0) {
      status = "Lulus";
    } else {
      status = "Gagal";
    }

    //  console.log(id + ". " + nama + ", IPK = " + ipk + ", " + status);
    console.log(`${id}. ${nama}, IPK = ${ipk}, ${status}`);
  }
}

// checkStudents(students);
