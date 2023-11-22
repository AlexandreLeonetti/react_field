/* hoisting basics with functions */

"use strict";

var num = 8;
/* hoisted after any functions
 * var num is avoided because num is already declared.
 * on the other hand, num will be inisitalized last, at a value of 8.
 */

function num(){ // hosited first
    return 111;
}

console.log(num); // ouput : 8;
//
// example 1

function num() {}
var num;
console.log(typeof num); // function


//example 2

var num;
function num(){}
console.log(typeof num);//function


// variables are always transformed at the very end.
/*
 * var num = 8;
 * function num(){};
 *  
 *  will be transformed into
 *
 *  function num(){}
 *  var num; // repeated declaration is ignored.
 *  num = 8;
 *
 *  as a result num = 8;
 */




