const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();


//console.log(iterator1.next().value);
//console.log(iterator1.next().value);
 
for (const [index, element] of array1.entries()){
    console.log(index, element);
}


