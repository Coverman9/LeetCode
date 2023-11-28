/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let res = []

    for (let i = 0; i < accounts.length; i++) {
        res.push(accounts[i].reduce((acc, el) => acc + el, 0))
    }

    return Math.max(...res)
};