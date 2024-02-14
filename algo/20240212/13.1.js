/* write a program that returns the intersection of 
 * two ordered arrays */


const A = [1, 2, 2, 3, 4, 5, 6, 7, 13];
const B = [2, 3, 5, 6, 8];


function isInB(a,x){ // check if x beongs to array a;
    let i = a.findIndex((e)=>e===x);
    return i !== -1;
}


function inter(A, B){

    A.forEach((e)=>isInB(B, e));
        // Filter the elements of array A based on certain conditions
    const filteredArray = A.filter((a, i) => {
        // Include the first element of array A in the filtered array
        if (i === 0 && isInB(B,a)) {
            return true;
        }
        // Include the element if it is different from the previous element 
        // and present in array B
        if (a !== A[i - 1] && isInB(B,a)) {
            return true;
        }
        // Exclude the element otherwise
        return false;
    });

    // Return the filtered array
    return filteredArray;
}

console.log(inter(A, B));
