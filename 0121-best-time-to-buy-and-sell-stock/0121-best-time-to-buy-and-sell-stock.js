/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let min = Math.min(...prices)
    // let max = Math.max(...prices)
    
    // let bought = 0;
    // let maxBought = 0
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         bought = prices[j] - prices[i]
    //         if (bought > maxBought) {
    //             maxBought = bought
    //         }
    //     }
    // }

    // for (let i = 0; i < prices.length; i++) {
    //     let max = Math.max(...prices.slice(i))
    //     bought = max - prices[i]
    //     if (bought > maxBought) {
    //         maxBought = bought
    //     }
        
    // }
    // return maxBought
    
    let profit = 0
    let buy = prices[0] //7 1 
    for (let i = 0; i < prices.length; i++) {
        let sell = prices[i]
        if (sell > buy) {
            profit = Math.max(profit, sell - buy)
        } else {
            buy = sell
        }
    }
    return profit
    


};