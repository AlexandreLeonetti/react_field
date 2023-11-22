/* some other arrow function setup */

function Operations(coef){
    return {
        sum : (...args) => arguments[0] + coef // args refer to "coef" in the Operations
        // function scope, because arrow func dont have their own arguments object.
    }
}

const ops = Operations(0.1);

console.log(ops.sum(1,2,3));


function Ope2(coef){
    return {
        sum : function(...args){ return (arguments[0] + coef)}
        // args here refers to the sum function args. it works.
        // arrow functions are definitely not a replacement for functions.
    }
}

const ops2 = Ope2(0.1);
console.log(ops2.sum(1,2,3));
