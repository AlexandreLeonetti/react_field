/*
 * let's write a few high order functions 
 * from memory
 *
 * a higher order function is a function that returns an other function
 * depending on arguments
 */

function add (x,y){
    return x+y
}


function addx (x){
    const inner =(y)=>{
        return add(x,y)
    }
    return inner 
}


const add2 = addx(2);
console.log(add2(5));
// now hoc functions without closure


function createAdder(x){
    function addX(y){
        return add(x,y)
    }
    return addX;
}

const add3 = createAdder(3)
console.log(add3(5))


