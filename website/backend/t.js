const jsonData = [
    { symbol: 'BTCUSDT', price: '51214.99000000' },
    { symbol: 'ETHUSDT', price: '2963.15000000' },
    { symbol: 'SEIUSDT', price: '0.86270000' }
];

// Add timestamp property to each object using map
const jsonDataWithTimestamp = jsonData.map(obj => {
    obj.timestamp = new Date();
    return obj;
});

console.log(jsonDataWithTimestamp);

