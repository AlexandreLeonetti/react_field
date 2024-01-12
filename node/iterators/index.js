const dragons = [
    "cool dragon",
    "fire dragon",
    "lava dragon"
];

const iterator = dragons[Symbol.iterator]();

let first = iterator.next();
let second = iterator.next();
console.log(first,second);

for ( const d of dragons ){
    console.log(d);
}
