// FUNCTION

// let number = 5;
// console.log(number);
// const pi = 3.14;
// pi = 10;
// console.log(pi);

function greet(name) {
  // code here
  console.log("Hello, " + name);
}

// call function / invoke function
// greet("Vincent");
// greet("Matthew");
// greet("Jim");

function profile(email, password, fullname, status, score) {
  console.log("PROFILE:");
  console.log("Email: " + email);
  console.log("Password: " + password);
  console.log("Fullname: " + fullname);
  if (status) {
    console.log("Status: graduated");
  } else {
    console.log("Status: not graduated");
  }
  console.log("Score: " + score);

  console.log("Conclusion:");
  if (status) {
    console.log(`${fullname} is graduated with score ${score}`);
  } else {
    console.log(`${fullname} is not graduated with score ${score}`);
  }
}

// Result
/**
 * PROFILE
 * Email: vincent@mail.com
 * Password: 123
 *
 * Fullname: Vincent
 * Status: graduated
 * Score: 100
 *
 * Conclusion:
 * Vincent is graduated with score 100
 */

// profile("vincent@mail.com", "123", "Vincent", true, 100);
// profile("matthew@mail.com", "123", "Mathew", true, 100);
// profile("admin@mail.com", "123", "Admin", false, 90);

function checkOddEven(number) {
  if (number % 2 === 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil");
  }
}

checkOddEven(5);
checkOddEven(8);
