/* write a program that takes an array and a number and determines
 * if it can be the sum of three other elements inside this array 
 * */

function has2sum(arr,t){
    let left = 0;
    let right= arr.length -1;

    while(left<right){
        const sum = arr[left] + arr[right];
        if (sum ===t){
            return true;
        }else if(sum<t){
            left++;
        }else{
            right--;
        }
    }
    return false;
}
function has3sum(A, t){
    A.sort((a,b) => a-b );


    const res = A.some(a=> has2sum(A, t-a));
    return res;

}
const testA = [1,3,5,7,12,14,78];
const target = 15;

const re = has3sum(testA,target);
console.log(re);


