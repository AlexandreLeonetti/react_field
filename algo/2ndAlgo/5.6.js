function buyAndSellStockOnce(prices) {
    let minPriceSoFar = Infinity;
    let maxProfit = 0.0;

    for (const price of prices) {
        const maxProfitSellToday = price - minPriceSoFar;
        maxProfit = Math.max(maxProfit, maxProfitSellToday);
        minPriceSoFar = Math.min(minPriceSoFar, price);
        console.log(maxProfitSellToday, maxProfit, minPriceSoFar);
    }

    return maxProfit;
}

// Example usage:
const stockPrices = [17, 15, 18, 17, 16, 15, 10, 7, 15, 3, 6, 4, 10];
const result = buyAndSellStockOnce(stockPrices);
console.log("Maximum Profit:", result);

