/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b) => a - b)
    let start = money
    let bought = 0
    for (let m of prices) {
        if (money <= 0 || bought == 2) {
            break
        } else {
            money -= m
            bought++
        }
    }
    if (money < 0 || bought < 2) {
        return start
    }  
    return money
};