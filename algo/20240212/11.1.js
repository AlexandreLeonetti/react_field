/* write a program that returns the first
 * occurrence of a value in a sorted array */


/* this is a binary search but we keep going until 
 * there is no other elements */



const sortedArray = [1, 2, 2, 3,  5, 5, 5, 6, 7, 8, 9];


const target = 5;


function first(a,t){
    let index = -1;
    let left  = 0;
    let right = a.length-1;
    let mid   = Math.floor((right)/2)

    while (left !== right){
        
        console.log(left,right);
       if(a[mid]< t){
           left = mid+1;
       }else if(a[mid]===t){
           index = mid;
           right = mid;
       }else{
           right = mid;
       }
        mid = Math.floor((left+right)/2);


    }

    return index;

}


console.log(first(sortedArray, target));
