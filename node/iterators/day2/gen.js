/* iterators from scratch */


function* gen() { // symbol iterator is a function
        let iterations = 0;
        while(iterations<=5){
                yield iterations;
                iterations++;
        }
        return ;
}

/*
for ( let a of iter){
    console.log(a);
}
*/

const iter1 = gen();
console.log(iter1.next())
console.log(iter1.next())
