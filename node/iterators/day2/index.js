const iter = {
    [Symbol.iterator] : () => {
    let iterations = 0;
    return {
        next : () => {
            if( iterations < 5){
                let obj = {
                    value : iterations,
                    done  : false
                }
                iterations++;
                return obj 
            }
                
            return { value : undefined, done : true }
            
        }
    }
}
}


//let iter1 = iter(0,2,1);
/*
let one = iter1.next();
let two = iter1.next();
let three = iter1.next();
let four = iter1.next();

console.log(one,two,three,four);
*/
for ( let i of iter ){
    console.log(i);
}
