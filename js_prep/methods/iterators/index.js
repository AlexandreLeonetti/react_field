const arr1 = ['a', 'b', 'c'];
const iter1= arr1[Symbol.iterator]();

for (const val of iter1){
    console.log(val);
}

function logIterable(it) {
      if (typeof it[Symbol.iterator] !== "function") {
              console.log(it, "is not iterable.");
              return;
            }
      for (const letter of it) {
              console.log(letter);
            }
}


logIterable(arr1);
logIterable("hello");


