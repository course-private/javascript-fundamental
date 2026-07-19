// Assignment 1

/**
 * Buatlah sebuah pseudocode dan coding untuk menentukan apakah seorang siswa dinyatakan **Lulus** atau  **Tidak Lulus** berdasarkan nilai yang diperoleh.
   Gunakan ketentuan berikut:

- Jika nilai **lebih dari atau sama dengan 75**, maka hasilnya **Lulus**.
- Jika nilai **kurang dari 75**, maka hasilnya **Tidak Lulus**.

   // PSEUDOCODE

   BEGIN
      STORE score WITH ANY NUMBER

      IF score GREATER THAN OR EQUAL TO 75 THEN
         PRINT "Lulus"
      ELSE
         PRINT "Tidak Lulus"
      END IF
   END

 */

// let score = 90;

// if (score >= 75) {
//   console.log("Lulus");
// } else {
//   console.log("Tidak Lulus");
// }

// Assignment 2

/**
 * Buatlah pseudocode dan coding untuk menentukan apakah sebuah bilangan merupakan **ganjil** atau **genap**.

   Contoh:
   angka => 5 maka hasil nya Ganjil
   angka => 4 maka hasil nya Genap

   // PSEUDOCODE

   BEGIN
      STORE number WITH ANY NUMBER

      IF number MOD 2 EQUALS 0 THEN
         PRINT "Genap"
      ELSE
         PRINT "Ganjil"
      END IF
   END
 */

// let number = 5;

// if (number % 2 === 0) {
//   console.log("Genap");
// } else {
//   console.log("Ganjil");
// }

// Assignment 3

/**
 * Buatlah pseudocode dan coding untuk menentukan apakah sebuah bilangan merupakan **kelipatan 3   sekaligus kelipatan 5**.

   Program hanya akan menghasilkan **true** jika bilangan habis dibagi 3 dan 5 sekaligus.

   Contoh:
   angka => 15 maka hasil nya true
   angka => 10 maka hasil nya false
 */

// Assignment 4

/**
 * Buatlah pseudocode dan coding untuk menentukan status keasaman suatu larutan berdasarkan nilai **pH**.

   Gunakan ketentuan berikut:

   - pH 0 – 6 → Asam
   - pH 7 → Netral
   - pH 8 –14 → Basa  

   Jika nilai pH yang dimasukkan berada di luar rentang 0 – 14, maka program akan menampilkan pesan **"Nilai pH tidak valid"**.
 */

// Assigment 5

/**
 * Sebuah toko material bernama **Maju Makmur** menyediakan dua jenis kode promo, yaitu **Discount10%**   dan **DiscountHarbolnas**.

   Buatlah **pseudocode** dan **program** untuk menghitung total pembayaran berdasarkan **kode promo** dan **total pembelian**.

   ### Ketentuan Promo

   #### Promo `Discount10%`

   - Total ≥ Rp500.000 → Diskon 10%
   - Total Rp300.000 – Rp499.999 → Diskon 5%
   - Total < Rp300.000 → Diskon 2,5%

   #### Promo `DiscountHarbolnas`

   - Total ≥ Rp250.000 → Diskon 15%
   - Total < Rp250.000 → Tidak mendapat diskon


   BEGIN
   STORE kodePromo
   STORE totalBelanja
   STORE diskon
   STORE totalBayar

      SET diskon = 0

      IF kodePromo EQUAL "Discount10%" THEN

         IF totalBelanja >= 500000 THEN
            SET diskon = totalBelanja * 10 / 100

         ELSE IF totalBelanja >= 300000 THEN
            SET diskon = totalBelanja * 5 / 100

         ELSE
            SET diskon = totalBelanja * 2.5 / 100
         ENDIF

      ELSE IF kodePromo EQUAL "DiscountHarbolnas" THEN

         IF totalBelanja >= 250000 THEN
            SET diskon = totalBelanja * 15 / 100
         ELSE
            SET diskon = 0
         ENDIF

      ELSE
         DISPLAY "Kode promo tidak valid"
      ENDIF

      SET totalBayar = totalBelanja - diskon

      DISPLAY "Total Belanja : ", totalBelanja
      DISPLAY "Diskon : ", diskon
      DISPLAY "Total Bayar : ", totalBayar
   END
 */

let kodePromo = "Discount10%";
let totalBelanja = 600000;

let diskon = 0;
let totalBayar = 0;

if (kodePromo === "Discount10%") {
  if (totalBelanja >= 500000) {
    diskon = totalBelanja * 0.1;
  } else if (totalBelanja >= 300000) {
    diskon = totalBelanja * 0.05;
  } else {
    diskon = totalBelanja * 0.025;
  }
} else if (kodePromo === "DiscountHarbolnas") {
  if (totalBelanja >= 250000) {
    diskon = totalBelanja * 0.15;
  } else {
    diskon = 0;
  }
} else {
  console.log("Kode promo tidak valid");
}

totalBayar = totalBelanja - diskon;

console.log("Total Belanja :", totalBelanja);
console.log("Diskon :", diskon);
console.log("Total Bayar :", totalBayar);
