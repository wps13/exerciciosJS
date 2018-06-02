/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// Write code here
    for(let i=0; i < str.length ; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) 
        vowelsCount++ 
    }  
 
console.log(vowelsCount);
// 8
