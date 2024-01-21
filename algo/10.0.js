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

    // Process the min-heap until it's empty
    var result = [];
    while (minHeap.length > 0) {
        console.log("w min_heap ", minHeap);
        var smallestEntry = minHeap.shift();
        var smallestArrayIndex = smallestEntry[1];
        result.push(smallestEntry[0]);

        // Move to the next element in the array corresponding to the popped entry
        var smallestArrayIterator = sortedArraysIterators[smallestArrayIndex];
        var nextElement = smallestArrayIterator.next().value;
        if (nextElement !== undefined) {
            // Push the next element and the array index into the min-heap
            minHeap.push([nextElement, smallestArrayIndex]);
            // Re-sort the min-heap based on the first element of each entry
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