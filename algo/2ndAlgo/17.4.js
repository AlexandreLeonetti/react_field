// 3-sum problem
function has3Sum(A, t) {
    A.sort((a, b) => a - b); // Sort the array

    // Helper function to check if there are two numbers in the array whose sum equals to targetSum
    function hasTwoSum(arr, targetSum) {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[left] + arr[right];
            if (sum === targetSum) {
                return true;
            } else if (sum < targetSum) {
                left++;
            } else {
                right--;
            }
        }
        return false;
    }

    // Finds if the sum of two numbers in A equals to t - a
    return A.some(a => hasTwoSum(A, t - a));
}

