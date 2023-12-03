
const a1 = [0,[1,2],[3,4,5]];
const a2 = [0,[1,2],[3,[4,5]]];

let f1 = a1.flat();
let f2 = a2.flat();
let f2b = a2.flat(2);

console.log(f1);
console.log(f2);
console.log(f2b);

