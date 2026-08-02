// Global Variable
let users = require("./users");

// CRUD = Create, Read, Update, Delete
// CRUD adalah operasi dasar yang digunakan dalam pengelolaan data pada database atau sistem informasi. CRUD terdiri dari empat operasi utama.
function showUsers() {
  console.log("User list:");
  for (let i = 0; i < users.length; i++) {
    if (users[i].status) {
      console.log(`${i + 1}. [V] ${users[i].name} - "${users[i].email}"`);
    } else {
      console.log(`${i + 1}. [ ] ${users[i].name} - "${users[i].email}"`);
    }
  }
  // Result
  /**
   * User list:
   * 1. [V] John Doe - "john@mail.com"
   * 2. [V] Jane Doe - "jane@mail.com"
   * 3. [ ] Jim Doe - "jim@mail.com"
   */
}

function createUser(name, email, password) {
  let lastIndex = users.length - 1; // n-1
  let id = users[lastIndex].id + 1;
  let status = true;

  let userExist = checkExistingEmail(email); // hasilnya hanya true atau false
  if (userExist) {
    console.log(`User dengan email ${email} sudah ada`);
  } else {
    let emailLowerCase = email.toLowerCase();
    // Buat object baru
    let tempObj = { id, name, email: emailLowerCase, password, status };
    // Masukkan data ke dalam array of objects
    users.push(tempObj);
    console.log(`User ${name} berhasil ditambahkan`);
  }
}

function checkExistingEmail(email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function removeUser(id) {
  let tempArray = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].id !== id) {
      tempArray.push(users[i]);
    }
  }
  users = tempArray;

  console.log(`User dengan id ${id} berhasil dihapus`);
}

function editUser(id, name, email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].name = name;
      users[i].email = email;
      users[i].password = password;
    }
  }
  console.log(`User dengan id ${id} berhasil diubah`);
}

function changeStatus(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].status = !users[i].status;
    }
  }
  console.log(`User dengan id ${id} berhasil diubah statusnya`);
}

module.exports = {
  showUsers,
  createUser,
  removeUser,
  editUser,
  changeStatus,
};
