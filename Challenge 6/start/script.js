/* CHALLENGE 6 - Arrow Functions

Use arrow functions instead of functions
where possible.
*/

"use strict";

const mult = (a,b) => a*b
/* function mult(a, b) {
  return a * b;
} */

setTimeout(function() {
  console.log(mult(5, 10));
}, 1000);
// 50
