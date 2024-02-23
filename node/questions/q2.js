'use strict';

function foo(){
    console.log(this);
}

function call(fn){
    fn();
}


let obj = {foo}; //this object contains the foo method.

call(obj.foo); //return undefined
obj.foo();// return context
/*
 * passing obj.foo to the call function
 * obj.foo is bein passed as a value. 
 * so foo is executed indeed, without context.
 * this shows undefined
 */


