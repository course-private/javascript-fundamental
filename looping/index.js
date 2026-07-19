// LOOPING

/**
 * Looping dari angka 1 sampai 10
 *
 * PSEUDOCODE
 *
 * STORE num WITH ANY NUMBER
 *
 * FOR i FROM 1 TO num
 *    PRINT i
 * ENDFOR
 */

// let num = 10;

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// NESTED LOOPING

/**
 * Kotak X
 *
 * PSEUDOCODE
 *
 * BEGIN
 * STORE num1 WITH ANY NUMBER
 * STORE num2 WITH ANY NUMBER
 * STORE temp WITH EMPTY STRING
 *
 * FOR i FROM 1 TO num1
 *    FOR j FROM 1 TO num2
 *       temp ADD "x"
 *    ENDFOR
 *
 *    PRINT temp
 *    SET temp WITH EMPTY STRING
 * ENDFOR
 * END
 */

// let num1 = 3;
// let num2 = 3;
// let temp = "";

// for (let i = 0; i < num1; i++) {
//   for (let j = 0; j < num2; j++) {
//     temp += "x";
//   }

//   console.log(temp);
//   temp = "";
// }

/**
 * Buat segitiga siku2
 *
 * 1
 * 12
 * 123
 * 1234
 * 12345
 *
 * PSEUDOCODE
 *
 * STORE num WITH ANY NUMBER
 * STORE temp = ""

   SET num = 3
   SET temp = ""

   FOR i FROM 0 TO num - 1

      FOR j FROM 1 TO i
         SET temp = ADD(temp, j)
      ENDFOR

      DISPLAY temp

      SET temp = ""

   ENDFOR
 */

let num = 5;
let temp = "";

for (let i = 0; i < num; i++) {
  for (let j = 1; j <= i + 1; j++) {
    temp += j;
  }

  console.log(temp);
  temp = "";
}
