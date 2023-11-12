/* some array methods */
/* using array constructor */
let arr1 = new Array(1,4,68.6, "ok")
/* using array literal notation */
let arr2_lit = [ 4, 5, "yes" ]
console.log(arr1);
console.log(arr2_lit);

/* prototype arrat at */
const array1 = [5, 12, 8, 130, 44];

let index = 2;


console.log(`an index of ${index} returns ${array1.at(index)}`);

let negIndex = -2;

console.log(`an index of ${negIndex} returns ${array1.at(negIndex)}`);


/*concat*/
const array3 = ["a", "b", "c"];
const array4 = ["d","e","f"];

const array5 = array3.concat(array4);
console.log(array5);

/* copyWithin(target, start)
 * copyWithin(target, start, end)
 *
 * */
const a1 = ["a", "b", "c", "d", "e", "f"];


//console.log(a1.copyWithin(1,4));
console.log(a1.copyWithin(1,3));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));

/* Array.prototype.entries() */
const a2 = ["a", "b", "c", "d"];
const iter1 = a2.entries();

console.log(iter1.next());
let i1 = iter1.next();
console.log(iter1.next());

/* Array.prototype.every( callback that return boolean condition) */
const isBelowTreshold = (currentValue) => currentValue < 40;
const a3 = [1, 30, 39, 29, 10, 13];

console.log(a3.every(isBelowTreshold));


/* Array.prototype.fill() */
const b1 = [1,2,3,4,5];

/* let's fill this array from position 2 to position 4 */
console.log(b1.fill(0,2,4));

/* fill with 5 from position 1 */
console.log(b1.fill(5,1));

/* fill array with 6s */
console.log(b1.fill(6));






