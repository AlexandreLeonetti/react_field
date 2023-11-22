/* context and this keyword */

"use strict";
console.log("global", this);

function foo(){

    console.log("foo",this);
}

function callFoo(fn){
    console.log("callFoo", this);
    fn();
}

let obj = {foo};
console.log("global2", this);
console.log("obj", obj.this);

callFoo(obj.foo);
/*
 * commentary 
 *
 * the value of this is set at the time at thwe time the function is called at.
 *
 * callFoo is called without context, 
 * in normal mode the this, would refer to the browser window,
 * or in node, to the v8 engine.
 *
 * but in strict mode it is undefined, so the correct answer here is undefined.
 */

