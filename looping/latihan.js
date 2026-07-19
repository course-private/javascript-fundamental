// LATIHAN

/**
 * Study Case 1
 * 
 * Buatlah sebuah program untuk menampilkan seluruh bilangan genap dari 1 hingga 20. 
 * Gunakan salah satu struktur perulangan (for atau while) untuk menampilkan hanya bilangan genap. 
 * Catatan: Gunakan operator modulus (%) untuk menentukan apakah suatu bilangan termasuk bilangan genap. 
 * 
 * Result / Test Case **Output**
   2
   4
   6
   8
   10
   12
   14
   16
   18
   20

 * Buatlah pseudocode dan codingan nya. 

   PSEUDOCODE

   BEGIN
      STORE num WITH ANY NUMBER

      FOR i FROM 1 TO num
         IF i MOD 2 EQUAL 0 THEN
            PRINT i
         ENDIF
      ENDFOR

   END
 */

// let num = 20;

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/**
 * Study Case 2
 
   Buatlah sebuah program untuk menampilkan angka dari **1 hingga 15** menggunakan perulangan. 
   Gunakan ketentuan berikut: 
   - Jika angka merupakan **kelipatan 3**, tampilkan:
   x adalah kelipatan 3
   - Jika angka merupakan **kelipatan 5**, tampilkan:
   x adalah kelipatan 5
   - Jika angka merupakan **kelipatan 3 dan 5**, tampilkan:
   x adalah kelipatan 3 dan 5
   - Selain itu, tampilkan angka tersebut seperti biasa. 
   Catatan: Gunakan operator modulus (%) untuk menentukan kelipatan suatu bilangan. 
   
   Result / Test Case **Output**
   1
   2
   3 adalah kelipatan 3
   4
   5 adalah kelipatan 5
   6 adalah kelipatan 3
   7
   8
   9 adalah kelipatan 3
   10 adalah kelipatan 5
   11
   12 adalah kelipatan 3
   13
   14
   15 adalah kelipatan 3 dan 5

   PSEUDOCODE 

   BEGIN

      STORE num WITH ANY NUMBER

      FOR i FROM 1 TO num
         IF i MOD 3 EQUAL 0 AND i MOD 5 EQUAL 0 THEN
            PRINT i + " adalah kelipatan 3 dan 5"
         ELSE IF i MOD 3 EQUAL 0 THEN
            PRINT i + " adalah kelipatan 3"
         ELSE IF i MOD 5 EQUAL 0 THEN
            PRINT i + " adalah kelipatan 5"
         ELSE 
            PRINT i
         ENDIF
      ENDFOR

   END
 */

// let num = 15;
// for (let i = 1; i <= num; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} adalah Kelipatan 3 dan 5`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} adalah Kelipatan 3`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} adalah Kelipatan 5`);
//   } else {
//     console.log(i);
//   }
// }

/**
 * Study Case 3

   Buatlah sebuah Pseudocode dan Coding untuk menghitung total penjumlahan angka dari **1 hingga N**, di mana **N** adalah let num. 
   Program harus menggunakan **struktur perulangan** untuk menjumlahkan setiap angka mulai dari **1** hingga **N**, kemudian menampilkan hasil akhirnya. 

   Catatan: Fokus utama assignment ini adalah memahami cara kerja perulangan dan proses akumulasi nilai. 
   Hindari menggunakan rumus matematika secara langsung, dan selesaikan permasalahan menggunakan proses iterasi. 

   Result / Test Case 
   **Input**
   5
   
   **Output**
   15
   
   **Penjelasan**
   1 + 2 + 3 + 4 + 5 = 15

   PSEUDOCODE

   BEGIN
      STORE num WITH ANY NUMBER
      STORE total WITH 0

      FOR i FROM 1 to num
         SET total EQUAL total ADD i
      ENDFOR
   END
*/

let num = 5;
let total = 0;

for (let i = 1; i <= 5; i++) {
  // total = total + i
  // cara cepat (shorthand)
  total += i;
}
console.log(total);
