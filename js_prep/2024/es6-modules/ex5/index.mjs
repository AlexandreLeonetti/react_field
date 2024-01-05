import myCounter  from './counter.mjs';
//myCounter turns to a constant as it is imported.


var count = myCounter;

count += 1;

console.log(count);
