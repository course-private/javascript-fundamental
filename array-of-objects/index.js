// ARRAY OF OBJECTS

let {
  showUsers,
  createUser,
  removeUser,
  editUser,
  changeStatus,
} = require("./methods");

createUser("Joko", "joko@mail.com", "123");
createUser("Joni", "joni@mail.com", "123");
createUser("Joko", "Joko@mail.com", "123");
createUser("James", "JaMeS@MaIl.com", "123");

// removeUser(3);
// removeUser(4);
// editUser(5, "Joni Doe", "joni@example.com", "abc");
// changeStatus(5);
// console.log(users);
showUsers();
