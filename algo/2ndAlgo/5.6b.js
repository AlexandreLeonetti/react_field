const prices = [310, 315, 275, 295, 260, 270, 290, 230, 255, 250];

// Function to calculate profit
function profit(A) {
    const mi = [];
    const localMax = [];
    const profit = [];
    mi[0] = A[0];
    localMax[0] = A[0];
    profit[0] = 0;

    for (let i = 1; i < A.length; i++) {
        mi[i] = Math.min(mi[i - 1], A[i]);
        if (A[i] < mi[i - 1]) {
            localMax[i] = A[i];
        } else {
            localMax[i] = Math.max(localMax[i - 1], A[i]);
        }
        profit[i] = localMax[i] - mi[i];
    }
    return [mi, localMax, profit];
}

// Calculate profit using the 'correction' method
function correction(A) {
    let mis = Infinity;
    let max_profit = 0.0;

    for (const price of A) {
        const profitToday = price - mis;
        max_profit = Math.max(max_profit, profitToday);
        mis = Math.min(mis, price);
    }
    return max_profit;
}

console.log(correction(prices));

