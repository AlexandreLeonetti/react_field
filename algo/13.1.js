function inter(A, B) {
    function isInB(x) {
        let i = B.findIndex((element) => element === x);
        return i !== -1;
    }

    return A.filter((a, i) => (i === 0 || a !== A[i - 1]) && isInB(a));
}

const A = [1, 2, 2, 3, 4, 5, 6, 7, 13];
const B = [2, 3, 5, 6, 8];

console.log(inter(A, B));
