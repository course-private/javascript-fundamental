// OBJECT

// let student = {
//   name: "Vincent",
//   gpa: 3.21,
//   isGraduated: true,
//   "able to code": "yes",
//   1: 100,
// };

// console.table(student);
// console.log(student.name);
// console.log(student.gpa);
// console.log(student["isGraduated"]);
// console.log(student["able to code"]);
// console.log(student["1"]);

// OBJECT VS ARRAY

// let items = ["handphone", `laptop`, "mouse", "keyboard"];
// items.push("monitor");
// console.log(items);

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// let item = {
//   name: "Samsung S25",
//   type: "handphone",
//   price: 100000,
//   brand: "Samsung",
//   isAvailable: true,
// };

// console.log(item);
// for (let key in item) {
//   //   console.log(key);
//   console.log(item[key]);
// }
// Simulasi
// console.log(item["name"]);
// console.log(item["type"]);
// console.log(item["price"]);
// console.log(item["brand"]);
// console.log(item["isAvailable"]);

// let cars = ["Honda Civic", 500000, true];

// Result
/*
   {
      name: "Honda Civic",
      price: 500000,
      isAvailable: true 
   }
*/

// function createCarObject(cars) {
//   let result = {};

//   result.name = cars[0];
//   result.price = cars[1];
//   result.isAvailable = cars[2];

//   return result;
// }

// console.log(createCarObject(["Honda Civic", 500000, true]));
// console.log(createCarObject(["Toyota Agya", 150000, false]));
// console.log(createCarObject(["Mitsubishi Xpander", 300000, true]));

// METHOD

// let vehicle = {
//   name: "Honda CR-V",
//   price: 1500000,
//   engine: false,
//   tags: ["SUV", "MPV", "Crossover"],

//   startEngine: function () {
//     console.log("Engine started");
//     this.engine = true;
//   },
//   stopEngine: function () {
//     console.log("Engine stopped");
//     this.engine = false;
//   },
//   showDetailVehicle: function () {
//     // Menampilkan: Nama mobil Honda Civic, Harganya Rp. 500000
//     console.log(`Nama mobil ${this.name}, Harganya Rp. ${this.price}`);
//   },
//   showTags: function () {
//     /**
//      * Vehicle Tags:
//      * 1. SUV
//      * 2. MPV
//      * 3. Crossover
//      */
//     console.log("Vehicle Tags:");
//     for (let i = 0; i < this.tags.length; i++) {
//       console.log(`${i + 1}. ${this.tags[i]}`);
//     }
//   },
//   createTag: function (tag) {
//     this.tags.push(tag);
//     console.log(`Tag ${tag} berhasil ditambahkan`);
//   },
// };

// vehicle.showTags();
// vehicle.createTag("Hatchback");
// vehicle.showTags();
// console.log(vehicle);
// console.log(vehicle.engine);
// vehicle.startEngine();
// console.log(vehicle.engine);
// vehicle.stopEngine();
// console.log(vehicle.engine);
// vehicle.showDetailVehicle();
