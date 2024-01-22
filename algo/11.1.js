
function searchFirstOfTarget(arr,target){
    let left = 0;
    let right = arr.length -1;
    let res = -1;
    let mid = Math.floor((arr.length)/2);

    /* while left > right keep searching for first occurrence in the sorted arr */
    /* if arrmid > target then mid becomes right
        if arr mid < target then left becomes mid 
        if arr mid == target becomes right */
       //mid = (right+left)/2 
    while( left <= right ){
            console.log(left,right);
           if(arr[mid]>target) {
                right = mid-1;
           }else if(arr[mid]===target){
            res = mid;
            right = mid-1;
           }else{
            left = mid+1;
           }


           mid = Math.floor((right+left)/2);
    }
    return res;


}



// Test case
const sortedArray = [1, 2, 2, 3,  5, 5, 5, 6, 7, 8, 9];
const target = 5;
const resultIndex = searchFirstOfTarget(sortedArray, target);
console.log("Sorted array:", sortedArray);
console.log(`The first occurrence of ${target} is at index:`, resultIndex);