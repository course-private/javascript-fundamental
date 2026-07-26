// LATIHAN

/**

MENGHITUNG VALUE DALAM SEBUAH ARRAY
Diberikan sebuah array sebagai berikut.

```javascript
let numbers = [4, 7, 2, 9, 1];
```

Buatlah sebuah function untuk menghitung **jumlah seluruh elemen** pada array tersebut.

> **Catatan:** Fokus utama assignment ini adalah memahami cara mengakses setiap elemen array menggunakan perulangan untuk melakukan proses akumulasi nilai.

## Result / Test Case

**Input**

```javascript
let numbers = [4, 7, 2, 9, 1];
```

**Output**

```text
23
```
 */

function calculateTotal(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}

// Test Case
let numbers = [4, 7, 2, 9, 1];

// console.log(calculateTotal(numbers)); // 23

// Buatkan function yang sama tetapi jumlah dari array 2D

let scores = [
  [3, 2, 1, 5, 7],
  [1, 2, 3],
  [1, 2, 3, 4, 5],
];

function calculateTotalArray2D(scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i].length; j++) {
      total += scores[i][j];
    }
  }

  return total;
}

// Test Case
// console.log(calculateTotalArray2D(scores)); // 39

/**

ARRAY BILANGAN GENAP
Buatlah sebuah program untuk menampilkan **seluruh bilangan genap** yang terdapat di dalam array.

> **Catatan:** Gunakan operator modulus (`%`) untuk menentukan apakah suatu elemen merupakan bilangan genap.

## Result / Test Case

**Input**

```javascript
const data = [10, 13, 8, 7, 6, 20];
```

**Output**

```text
[10, 8, 6, 20]
```
 */

const data = [10, 13, 8, 7, 6, 20];

function getEvenNumbers(data) {
  let result = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      result.push(data[i]);
    }
  }

  return result;
}

// Test Case
console.log(getEvenNumbers(data)); // [10, 8, 6, 20]
