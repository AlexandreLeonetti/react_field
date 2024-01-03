'use strict';
var x = 8;


function foo(){
    console.log(this);
}

function callFoo(fn){
    fn();
}

const obj = {foo};

callFoo(obj.foo);

