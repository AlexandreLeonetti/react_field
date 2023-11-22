/* some variable scope test */

//console.log(x);//undefined
//console.log(y);//referenceError cannot access y before initialization
//console.log(z);//referenceError cannot access z before initialization
"use strict";
//let bar;
let w = 11;
let z;
const x = 12;

console.log(foo()); // undefined if foo does not return anything.
// let bar should be above. cannot access before initialization.
// and especially before declaration.

 let bar = "bar";

var v = 10;

function foo(){
    return bar; // throw error : cannot access bar before initialization.
    //return v;// return undefined 
}


bar = "baz";


/* commentary :
 * the place before the let/const variable definition is called the dead zone.
 * if we try to access them defore their definition, it will throw an error.
 * This behavior was chosen because of the const variables.
 * when accessing var before its declaration, it would return undefined.
 * this would be unnacceptable for const as it would no longer be considered constant.
 *
 * because the function call to foo is happening before declaration of bar,
 * the variable is being called in the dead zone. which is why it throws an error.
 * */
