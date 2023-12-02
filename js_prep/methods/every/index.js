function isBigEnough(element, index, array) {
      return element >= 10;
}
let xx = [12, 5, 8, 130, 44].every(isBigEnough);
let yy = [12, 54, 18, 130, 44].every(isBigEnough);
console.log(xx);
console.log(yy);

/* check if arr2 is subset f arr1 */
const isSubset = (array1, array2) => 
      array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]));
