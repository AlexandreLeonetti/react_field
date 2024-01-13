/* iterators from scratch */


const iter = { // object literal
    [Symbol.iterator] : function*() { // symbol iterator is a function
        let iterations = 0;
        while(iterations<=5){
                console.log("yield");
                yield iterations;
                console.log("iter");
                iterations++;
        }
        return ;
    }
}

/*
for ( let a of iter){
    console.log(a);
}
*/
const iter1 = iter[Symbol.iterator]();
console.log(iter1.next())
console.log(iter1.next())
