// let me demonstrate immutability in javascript.

var arr1 = [0,1,2,3,4,5]
var arr2 = arr1


arr2[0] = 999
console.log(arr1)// note that changing arr2, also changes arr1.
// arr2 and arr1 are being assigned the same reference block of memory
// let's try to deep copy 

var arr3 = [0,1,2,3,4,5]
var arr4 = [...arr3] // this spread operator is a shortcut for deep copy
// arr4 is being assigned a new block of memory containing the same values as arr3
arr4[0] = 1000
console.log("arr3", arr3)
console.log(arr4)
