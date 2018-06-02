/* CHALLENGE 17 - IIFE (Immediately Invoked Function Expression)

Complete IIFE that will expose following methods:
  greet() - It will take one argument and return greeting string
  changeGreeting() - It will change greeting string

Initial greeting string "Hey, that's" must be defined inside IIFE.
*/

"use strict";

// var greeting = (Write IIFE here);
var str2 = ""
var greeting =  {
  greet : function(str){
    if(str2 === null)
      str2 = "Hey, that's "
    return str2 + str
  },
  changeGreeting : function(str){
    str2 = str + " "
  }
}
  

console.log(greeting.greet("Bob"));
// Hey, that's Bob

console.log(
  greeting.changeGreeting("Good Morning from")
);
// undefined

console.log(greeting.greet("Emily"));
// Good Morning from Emily
