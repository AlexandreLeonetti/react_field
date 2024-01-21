function mergeSortedArrays(sortedArrays) {
    console.log(sortedArrays);
    var minHeap = [];
    var sortedArraysIterators = sortedArrays.map((x) => x[Symbol.iterator]());
    console.log(sortedArraysIterators);

    sortedArraysIterators.forEach((iterator, i)=>{
        let firstElt= iterator.next().value;
        if(firstElt!==undefined){
            minHeap.push([firstElt, i])
        }
        minHeap.sort((a,b)=> a[0]-b[0]);
        console.log("init minheap", minHeap)
    });


    let result = [];

    while(minHeap.length>0){
            let smallestEntry = minHeap.shift();
            let smallestIdx   = smallestEntry[1];

            result.push(smallestEntry[0]);

            //move to the next element in the array corresponding to the pop entry ( and push it in meanHeap)
            let nxtElt = sortedArraysIterators[smallestIdx].next().value;
            if(nxtElt!==undefined){
                minHeap.push([nxtElt, smallestIdx]);
                minHeap.sort((a,b)=>a[0]-b[0]);
            }
    }
    return result ;

}

// Sample sorted arrays
var array1 = [1, 3, 5, 7];
var array2 = [22, 44, 66, 88];
var array3 = [16, 19, 110, 111];
var array4 = [-2, -1, 0, 3, 15];

// Test the function
var mergedArray = mergeSortedArrays([array1, array2, array3, array4]);

// Print the result
console.log("Merged Sorted Array:", mergedArray);