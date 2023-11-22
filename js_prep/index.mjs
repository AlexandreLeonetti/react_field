/* module 1 */

console.log("index.js");
import {sum} from "./helper.mjs";

console.log(sum(1,2));

/*imports are hoisted
 * which means, that variable and functions declarations 
 * are moved to the top of their scope before the code is executed.
 */



