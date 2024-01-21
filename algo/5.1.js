function dutchFlag(A, p) {
    for (let i = 0; i < A.length; i++) {
      for (let j = i + 1; j < A.length; j++) {
        if (A[j] < p) {
          [A[i], A[j]] = [A[j], A[i]];
          break;
        }
      }
    }
    console.log(A)
    for (let i = A.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (A[j] > p) {
          [A[i], A[j]] = [A[j], A[i]];
          break;
        }
      }
    }
  
    return A;
  }
  
  const test = [2, 1, 2, 0, 2, 1, 1, 1, 2, 0, 0, 2, 2, 1, 0];
  console.log(dutchFlag(test, 1));
  