
const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

console.log(array1.copyWithin(0,3,4));

//console.log(array2.copyWithin(1,6));
console.log(array2.copyWithin(3)); // same  as copyWithin(3,0);
