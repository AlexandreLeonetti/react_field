// index

import myCounter from "./counter.mjs";

myCounter += 1; // TypeError assignment to constant variable !!
// when imported, variables acts as constants.

console.log(myCounter);

