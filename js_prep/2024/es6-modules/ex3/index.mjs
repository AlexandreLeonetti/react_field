//index.mjs

import "./module.mjs";
import {num} from "./counter.mjs";

console.log("index = ", num);

/*
 * modules are singleton
 * they only get imported once
 */


