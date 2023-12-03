/* similar to calling map, followed by flat, but more efficient */

const a1 = [1,2,3,4,2,2,5]

const test = a1.flatMap((x) => x === 2? ['yes','yes','yes']:"no");

console.log(test);
