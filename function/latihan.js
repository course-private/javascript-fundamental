// Latihan

/**
 * Study Case 1
 * 
 * Buatlah sebuah function dari coding untuk menentukan status keasaman suatu larutan berdasarkan nilai **pH**.

   Gunakan ketentuan berikut:

   - pH 0 – 6 → Asam
   - pH 7 → Netral
   - pH 8 –14 → Basa  

   Jika nilai pH yang dimasukkan berada di luar rentang 0 – 14, maka program akan menampilkan pesan **"Nilai pH tidak valid"**.
 
 */

function checkPh(ph) {
  // code here
  if (ph >= 0 && ph < 7) {
    console.log("Asam");
  } else if (ph > 7 && ph <= 14) {
    console.log("Basa");
  } else if (ph === 7) {
    console.log("Netral");
  } else {
    console.log("Nilai pH tidak valid");
  }
}

// Test Case
// checkPh(5); // Asam
// checkPh(7); // Netral
// checkPh(10); // Basa
// checkPh(-1); // Nilai pH tidak valid
// checkPh(15); // Nilai pH tidak valid

/**
 * Study Case 2
 *
 * Buatlah sebuah function untuk mereverse sebuah string.
 *
 * Contoh:
 * makan
 *
 * Result:
 * nakam
 *
 * Rules: Tidak boleh menggunakan function bawaan Javascript atau disebut Built In Function
 */

// function reverseString(str) {
//   // code here
//   // clue: menggunakan for dan let temp = ""

//   if (str === undefined) {
//     console.log("Masukkan sebuah string.");
//   } else if (str === "") {
//     console.log("Tidak boleh string kosong");
//   } else {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       //  console.log(str[i]);
//       reversed += str[i];
//     }

//     console.log(reversed);
//   }
// }

// Test Case
// reverseString("makan"); // nakam
// reverseString("baso"); // osab
// reverseString(""); // Tidak boleh string kosong
// reverseString(); // Masukkan sebuah string

/**
 * Study Case 3
 *
 * Buatlah function checkPalindrome dan menggunakan function reverseString(str) yang sudah ada di atas
 *
 * Palindrome adalah sebuah kata yang jika di balik kata tersebut hasilnya sama
 *
 * Contoh:
 * kodok
 * katak
 * ovo
 *
 * Yang bukan palindrome, contoh:
 * makan -> nakam
 * baso -> osab
 */

function reverseString(str) {
  // code here
  // clue: menggunakan for dan let temp = ""

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //  console.log(str[i]);
    reversed += str[i];
  }

  return reversed;
}

function checkPalindrome(str) {
  // code here
  if (str === undefined || str === "") {
    console.log("Masukkan sebuah string.");
  } else {
    let reversed = reverseString(str);
    //  if (str === reversed) {
    //    console.log(true);
    //  } else {
    //    console.log(false);
    //  }

    // Ternary Conditional
    str === reversed ? console.log(true) : console.log(false);
  }
}

// // Test Case
// checkPalindrome("katak"); // true
// checkPalindrome("kodok"); // true
// checkPalindrome("ovo"); // true
// checkPalindrome("minum"); // false
// checkPalindrome(); // Masukkan sebuah string

/**
 * SOAL
 *
 * Buatlah program kalkulator sederhana menggunakan JavaScript.
 *
 * Ketentuan:
 * 1. Buat 5 buah function:
 *    - tambah(a, b)
 *    - kurang(a, b)
 *    - kali(a, b)
 *    - bagi(a, b)
 *    - modulus(a, b)
 *
 * 2. Buat 1 function utama:
 *    - calculator(num1, opr, num2)
 *
 * 3. Function calculator() bertugas menentukan operasi yang dijalankan
 *    berdasarkan nilai parameter `opr`.
 *
 * Operator yang didukung:
 * - "+" : Penjumlahan
 * - "-" : Pengurangan
 * - "*" : Perkalian
 * - "/" : Pembagian
 * - "%" : Modulus (Sisa Bagi)
 *
 * 4. Jika operator tidak dikenali, tampilkan pesan:
 *    "Operator tidak valid."
 *
 * Contoh:
 * calculator(10, "+", 5); // 15
 * calculator(10, "-", 5); // 5
 * calculator(10, "*", 5); // 50
 * calculator(10, "/", 5); // 2
 * calculator(10, "%", 3); // 1
 */

/**
 * KALKULATOR SEDERHANA
 */

// Function Penjumlahan
function tambah(a, b) {
  return a + b;
}

// Function Pengurangan
function kurang(a, b) {
  return a - b;
}

// Function Perkalian
function kali(a, b) {
  return a * b;
}

// Function Pembagian
function bagi(a, b) {
  return a / b;
}

// Function Modulus
function modulus(a, b) {
  return a % b;
}

// Function Utama
function calculator(num1, opr, num2) {
  switch (opr) {
    case "+":
      return tambah(num1, num2);

    case "-":
      return kurang(num1, num2);

    case "*":
      return kali(num1, num2);

    case "/":
      return bagi(num1, num2);

    case "%":
      return modulus(num1, num2);

    default:
      return "Operator tidak valid.";
  }
}

// Contoh Penggunaan
console.log(calculator(10, "+", 5)); // 15
console.log(calculator(10, "-", 5)); // 5
console.log(calculator(10, "*", 5)); // 50
console.log(calculator(10, "/", 5)); // 2
console.log(calculator(10, "%", 3)); // 1
console.log(calculator(10, "^", 2)); // Operator tidak valid.
