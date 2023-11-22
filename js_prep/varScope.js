/* some variable scope test */

//console.log(x);//undefined
//console.log(y);//referenceError cannot access y before initialization
//console.log(z);//referenceError cannot access z before initialization
"use strict";

let w = 11;
const x = 12;

console.log(foo()); // undefined if foo does not return anything.

let bar = "bar";

var v = 10;

function foo(){
    //return bar; // throw error : cannot access bar before initialization.
    return v;// return undefined 
}


bar = "baz";
