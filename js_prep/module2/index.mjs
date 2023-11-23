/* module2 */
// in index.js
console.log("index.js");
import "./log.js";
import { sum } from "./helper.mjs";

console.log(sum(1,2));


/* modules are hoisted, so they are loaded first, and content executeed first as well.
 * then indexjs is actually executed from top to bottom.
 */



