var maxProfit = function(prices) {
    if(!prices || prices.lenght === 0) return 0;
    let maxProfit = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            maxProfit =  Math.max(maxProfit, prices[i] - min)
        }
    }
    return maxProfit;
};