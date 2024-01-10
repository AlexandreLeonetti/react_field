


function* makeRangeIterator(start = 0, end = Infinity, step = 1){
    let iterationCount = 0;
    for ( let i = start; i < end; i += step ){
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

const iterator = makeRangeIterator(3,99,9);


let result= iterator.next();
console.log(result);

while(!result.done){
    console.log(`received value : ${result.value}`);
    result = iterator.next();
}


console.log(`received value : ${result.value}`);

