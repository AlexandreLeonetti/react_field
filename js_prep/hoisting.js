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
