function mergeSortedArrays(sortedArrays) {
    console.log(sortedArrays);
    var minHeap = [];
    var sortedArraysIterators = sortedArrays.map((x) => x[Symbol.iterator]());//apparently
    //attaches iterators to each arrays
    console.log(sortedArraysIterators);

    // Iterate through each array, extract the first element, and push it into the min-heap

    sortedArraysIterators.forEach((iterator, i) => {
        var firstElement = iterator.next().value;
        if (firstElement !== undefined) {
            minHeap.push([firstElement, i]);
        }
        minHeap.sort((a, b) => a[0] - b[0]);
        console.log("min_heap ", minHeap);
    });

    var result = [];
    while (minHeap.length > 0) {
        console.log("w min_heap ", minHeap);
        var smallestEntry = minHeap.shift();
        var smallestArrayIndex = smallestEntry[1];
        result.push(smallestEntry[0]);
        var smallestArrayIterator = sortedArraysIterators[smallestArrayIndex];
        var nextElement = smallestArrayIterator.next().value;
        if (nextElement !== undefined) {
            minHeap.push([nextElement, smallestArrayIndex]);
            minHeap.sort((a, b) => a[0] - b[0]);
        }
    }

    return result;
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