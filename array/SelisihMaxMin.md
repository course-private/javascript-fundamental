# 🔍 Mencari Nilai Terbesar, Nilai Terkecil, dan Selisih

## 📖 Deskripsi

Diberikan sebuah array yang berisi beberapa angka.

Buatlah program untuk mencari **nilai terbesar** dan **nilai terkecil** menggunakan **perulangan (`for`)**, kemudian hitung **selisih** antara kedua nilai tersebut.

---

## 🎯 Tugas

Buatlah **3 function** berikut.

### 1. `findMax(numbers)`

**Tugas:**

- Menerima sebuah parameter berupa array angka.
- Mencari nilai terbesar menggunakan perulangan.
- Mengembalikan nilai terbesar.

---

### 2. `findMin(numbers)`

**Tugas:**

- Menerima sebuah parameter berupa array angka.
- Mencari nilai terkecil menggunakan perulangan.
- Mengembalikan nilai terkecil.

---

### 3. `displayResult(numbers)`

**Tugas:**

- Menerima sebuah parameter berupa array angka.
- Memanggil function:
  - `findMax()`
  - `findMin()`
- Menghitung selisih dengan rumus:

```text
Selisih = Nilai Terbesar - Nilai Terkecil
```

- Menampilkan:
  - Nilai Terbesar
  - Nilai Terkecil
  - Selisih

---

## 📌 Ketentuan

- Wajib menggunakan **perulangan (`for`)**.
- **Tidak diperbolehkan** menggunakan `Math.max()`.
- **Tidak diperbolehkan** menggunakan `Math.min()`.
- Jangan mengubah isi array.

---

# 🧪 Test Case

## Test Case 1

### Input

```javascript
const numbers = [12, 45, 3, 67, 25, 18];

displayResult(numbers);
```

### Output

```text
Nilai Terbesar : 67
Nilai Terkecil : 3
Selisih        : 64
```

---

## Test Case 2

### Input

```javascript
const numbers = [5, 10, 15, 20, 25];

displayResult(numbers);
```

### Output

```text
Nilai Terbesar : 25
Nilai Terkecil : 5
Selisih        : 20
```

---

## Test Case 3

### Input

```javascript
const numbers = [100, 50, 75, 125, 25];

displayResult(numbers);
```

### Output

```text
Nilai Terbesar : 125
Nilai Terkecil : 25
Selisih        : 100
```

---

## Test Case 4

### Input

```javascript
const numbers = [9, 9, 9, 9];

displayResult(numbers);
```

### Output

```text
Nilai Terbesar : 9
Nilai Terkecil : 9
Selisih        : 0
```

---

## Test Case 5

### Input

```javascript
const numbers = [50, 12, 89, 3, 45, 99, 21];

displayResult(numbers);
```

### Output

```text
Nilai Terbesar : 99
Nilai Terkecil : 3
Selisih        : 96
```
