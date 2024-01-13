/* iterators from scratch */


const iter = { // object literal
    [Symbol.iterator] : () => { // symbol iterator is a function
        let iterations = 0;
        return { // return a literal , with a next method.
            next : ()=>{
            if(iterations<=5){
                let obj = {
                    value : iterations,
                    done : false
                }
                iterations++;
                return obj;
            }
            return { value : undefined, done : true }
        }
        }
    }
}


for ( let a of iter){
    console.log(a);
}

