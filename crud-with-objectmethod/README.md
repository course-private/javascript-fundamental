# 🎬 Movie Collection

## 📌 Deskripsi

Buat sebuah program JavaScript sederhana untuk mengelola koleksi film menggunakan **Object Method**.

Program memiliki sebuah object bernama `MovieCollection` yang menyimpan daftar film dalam sebuah Array.

Fokus utama tugas ini adalah memahami:

- Object
- Object Method
- Array
- Array Method
- Function
- Conditional

> **Catatan:** Tidak perlu menggunakan JSON, File System (`fs`), `process.argv`, database, atau `async/await`.

---

# 🗃️ Data Awal

Gunakan data film berikut:

```javascript
const MovieCollection = {
  movies: [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      year: 2010,
      rating: 8.8,
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      rating: 8.7,
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      rating: 9.0,
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      genre: "Action",
      year: 2019,
      rating: 8.4,
    },
    {
      id: 5,
      title: "Parasite",
      genre: "Drama",
      year: 2019,
      rating: 8.5,
    },
  ],
};
```

---

# 🎯 8 Method

Object `MovieCollection` harus memiliki **8 method** berikut.

---

## 1. `showMovies()`

Menampilkan seluruh film yang terdapat di dalam collection.

### Contoh

```text
========== MOVIE COLLECTION ==========

1. Inception
   Genre  : Sci-Fi
   Year   : 2010
   Rating : 8.8

2. Interstellar
   Genre  : Sci-Fi
   Year   : 2014
   Rating : 8.7

3. The Dark Knight
   Genre  : Action
   Year   : 2008
   Rating : 9.0
```

Gunakan Array Method yang sesuai untuk menampilkan data.

---

## 2. `addMovie()`

Menambahkan film baru ke dalam collection.

Contoh:

```javascript
MovieCollection.addMovie("The Matrix", "Sci-Fi", 1999, 8.7);
```

Film baru harus memiliki `id` yang unik.

Contoh hasil:

```text
Movie "The Matrix" successfully added.
```

---

## 3. `removeMovie()`

Menghapus film berdasarkan ID.

Contoh:

```javascript
MovieCollection.removeMovie(3);
```

Film dengan ID `3` harus dihapus.

Output:

```text
Movie "The Dark Knight" successfully removed.
```

Jika ID tidak ditemukan:

```text
Movie not found.
```

---

## 4. `searchMovie()`

Mencari film berdasarkan judul.

Contoh:

```javascript
MovieCollection.searchMovie("dark");
```

Output:

```text
========== SEARCH RESULT ==========

The Dark Knight
```

Pencarian harus:

- Tidak membedakan huruf besar dan kecil
- Mencari berdasarkan sebagian judul

Contoh:

```javascript
MovieCollection.searchMovie("dark");
```

dapat menemukan:

```text
The Dark Knight
```

---

## 5. `filterByGenre()`

Menampilkan film berdasarkan genre.

Contoh:

```javascript
MovieCollection.filterByGenre("Sci-Fi");
```

Output:

```text
========== SCI-FI MOVIES ==========

Inception
Interstellar
```

Jika genre tidak ditemukan:

```text
No movies found.
```

---

## 6. `getMovieById()`

Menampilkan detail film berdasarkan ID.

Contoh:

```javascript
MovieCollection.getMovieById(1);
```

Output:

```text
========== MOVIE DETAIL ==========

ID     : 1
Title  : Inception
Genre  : Sci-Fi
Year   : 2010
Rating : 8.8
```

Jika ID tidak ditemukan:

```text
Movie not found.
```

---

## 7. `getTopRated()`

Menampilkan film dengan rating tertinggi.

Contoh:

```javascript
MovieCollection.getTopRated();
```

Output:

```text
========== TOP RATED MOVIE ==========

Title  : The Dark Knight
Genre  : Action
Year   : 2008
Rating : 9.0
```

Gunakan Array Method yang sesuai untuk mencari film dengan rating tertinggi.

---

## 8. `getAverageRating()`

Menghitung rata-rata rating seluruh film.

Contoh:

```javascript
MovieCollection.getAverageRating();
```

Output:

```text
========== AVERAGE RATING ==========

Average Rating : 8.68
```

Gunakan Array Method yang sesuai untuk melakukan perhitungan.

---

# 📋 Daftar Method

|  No | Method               | Fungsi                               |
| --: | -------------------- | ------------------------------------ |
|   1 | `showMovies()`       | Menampilkan semua film               |
|   2 | `addMovie()`         | Menambahkan film                     |
|   3 | `removeMovie()`      | Menghapus film                       |
|   4 | `searchMovie()`      | Mencari film berdasarkan judul       |
|   5 | `filterByGenre()`    | Filter film berdasarkan genre        |
|   6 | `getMovieById()`     | Mencari film berdasarkan ID          |
|   7 | `getTopRated()`      | Mencari film dengan rating tertinggi |
|   8 | `getAverageRating()` | Menghitung rata-rata rating          |

---

# 🧪 Contoh Pemanggilan

Setelah semua method selesai dibuat, lakukan testing:

```javascript
MovieCollection.showMovies();

MovieCollection.addMovie("The Matrix", "Sci-Fi", 1999, 8.7);

MovieCollection.searchMovie("dark");

MovieCollection.filterByGenre("Action");

MovieCollection.getMovieById(2);

MovieCollection.getTopRated();

MovieCollection.getAverageRating();

MovieCollection.removeMovie(5);
```

---

# 🧠 Array Method yang Disarankan

Gunakan Array Method sesuai kebutuhan.

Beberapa method yang dapat digunakan:

- `forEach()`
- `push()`
- `filter()`
- `find()`
- `reduce()`

Contoh penggunaan konsep:

| Method               | Array Method yang Bisa Digunakan |
| -------------------- | -------------------------------- |
| `showMovies()`       | `forEach()`                      |
| `addMovie()`         | `push()`                         |
| `removeMovie()`      | `filter()`                       |
| `searchMovie()`      | `filter()`                       |
| `filterByGenre()`    | `filter()`                       |
| `getMovieById()`     | `find()`                         |
| `getTopRated()`      | `reduce()`                       |
| `getAverageRating()` | `reduce()`                       |

> Tidak harus menggunakan persis method di atas. Gunakan Array Method yang menurut kamu paling tepat.

---

# ⚠️ Ketentuan

1. Gunakan JavaScript.
2. Buat object bernama `MovieCollection`.
3. Data film disimpan dalam property `movies`.
4. Buat **8 Object Method**.
5. Setiap method harus memiliki fungsi yang berbeda.
6. Gunakan Array Method.
7. Gunakan function dan conditional sesuai kebutuhan.
8. ID film harus unik.
9. Tidak menggunakan JSON.
10. Tidak menggunakan `fs`.
11. Tidak menggunakan `process.argv`.
12. Tidak menggunakan database.
13. Tidak menggunakan `async/await`.

---

# 🏁 Target Akhir

Pada akhir tugas, kamu harus memiliki satu object:

```javascript
MovieCollection;
```

dengan **8 method**:

```text
showMovies()
addMovie()
removeMovie()
searchMovie()
filterByGenre()
getMovieById()
getTopRated()
getAverageRating()
```

Semua method harus dapat dijalankan dan menghasilkan output sesuai kebutuhan.

# 🚀 Selamat Mengerjakan!
