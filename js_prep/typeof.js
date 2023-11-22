let func = function foo(){
    return "hello";
}

console.log(typeof foo);
console.log(typeof xxxx); //typeof returns undefined if variable does not exist. 

/*
 * in named function expressions, the name is local only to the function body, 
 * and is not available outside, so foo doesnt exist in the global scope.
 */



